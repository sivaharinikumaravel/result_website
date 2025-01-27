const express = require("express");
const multer = require("multer");
const csv = require("csv-parser");
const fs = require("fs");
const Student = require("../models/Student");

const router = express.Router();

// Multer setup for file upload
const upload = multer({ dest: "uploads/" });

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Simple static email/password validation
  if (email === "admin@example.com" && password === "password123") {
    return res.status(200).json({ message: "Login successful" });
  }
  return res.status(401).json({ message: "Invalid credentials" });
});

router.post("/upload", upload.single("file"), (req, res) => {
  const filePath = req.file.path;

  const students = [];
  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (row) => {
      const { name, rollNo, DOB, overallGrade, CGPA, GPA, pass, ...subjects } = row;
      students.push({
        name,
        rollNo,
        DOB,
        subjects: Object.keys(subjects).map((sub) => ({
          subject: sub,
          grade: subjects[sub],
        })),
        overallGrade,
        CGPA: parseFloat(CGPA),
        GPA: parseFloat(GPA),
        pass: pass === "true",
      });
    })
    .on("end", async () => {
      try {
        await Student.insertMany(students);
        res.status(200).json({ message: "Data uploaded successfully" });
        fs.unlinkSync(filePath); // Remove the file after processing
      } catch (err) {
        res.status(500).json({ message: "Error saving data to database", error: err });
      }
    });
});

module.exports = router;

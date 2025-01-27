const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { rollNo, DOB } = req.body;

  try {
    const student = await Student.findOne({ rollNo, DOB });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving student data", error: err });
  }
});

module.exports = router;

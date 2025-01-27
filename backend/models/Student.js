const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  rollNo: String,
  DOB: String,
  subjects: [{ subject: String, grade: String }],
  overallGrade: String,
  CGPA: Number,
  GPA: Number,
  pass: Boolean,
});

module.exports = mongoose.model("Student", studentSchema);

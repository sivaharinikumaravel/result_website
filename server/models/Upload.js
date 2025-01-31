const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  fileName: String,
  filePath: String,
  uploadDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Upload", uploadSchema);

const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  filename: String,
  contentType: String,
  data: Buffer, // Store file content as Buffer
  uploadDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("File", fileSchema);

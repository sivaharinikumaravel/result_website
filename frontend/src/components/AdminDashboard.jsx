import React, { useState } from "react";
import axios from "../api";

const AdminDashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      await axios.post("/admin/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("File uploaded successfully!");
    } catch (error) {
      alert("Failed to upload file.");
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="mt-5">
        <h2 className="text-lg font-medium">Select a Batch:</h2>
        <ul className="list-disc pl-5">
          <li>Batch 25</li>
          <li>Batch 26</li>
          <li>Batch 27</li>
          <li>Batch 28</li>
        </ul>
        <div className="mt-5">
          <h2 className="text-lg font-medium">Upload CSV File:</h2>
          <input type="file" onChange={handleFileChange} />
          <button
            className="ml-2 p-2 bg-blue-500 text-white rounded"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

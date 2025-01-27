// src/components/StudentLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const [rollNo, setRollNo] = useState("");
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate roll number and DOB
    // Navigate to StudentView page
    navigate(`/student/view/${rollNo}`);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Student Login</h1>
      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-medium">Roll Number:</label>
          <input
            type="text"
            className="p-2 border rounded w-full"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium">Date of Birth:</label>
          <input
            type="date"
            className="p-2 border rounded w-full"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default StudentLogin;

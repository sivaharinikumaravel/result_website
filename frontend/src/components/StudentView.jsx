import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api";

const StudentView = () => {
  const { rollNo } = useParams();
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/student/view/${rollNo}`);
        setStudentData(response.data);
      } catch (error) {
        alert("Failed to fetch student data.");
      }
    };

    fetchData();
  }, [rollNo]);

  if (!studentData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Student Details</h1>
      <p><strong>Name:</strong> {studentData.name}</p>
      <p><strong>Roll Number:</strong> {studentData.rollNo}</p>
      <p><strong>Date of Birth:</strong> {studentData.dob}</p>
      <h2 className="mt-5 text-lg font-medium">Grades:</h2>
      <ul>
        {Object.entries(studentData.grades).map(([subject, grade]) => (
          <li key={subject}>{subject}: {grade}</li>
        ))}
      </ul>
      <p><strong>GPA:</strong> {studentData.gpa}</p>
      <p><strong>Status:</strong> {studentData.status}</p>
    </div>
  );
};

export default StudentView;

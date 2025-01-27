// src/components/StudentView.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StudentView = () => {
  const { rollNo } = useParams();
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    // Fetch student data from backend
    const fetchData = async () => {
      // Simulate API call
      const mockData = {
        name: "John Doe",
        rollNo: rollNo,
        dob: "2000-01-01",
        grades: {
          subject1: "A",
          subject2: "B+",
          subject3: "A-",
          subject4: "B",
        },
        gpa: 3.5,
        status: "Pass",
      };
      setStudentData(mockData);
    };

    fetchData();
  }, [rollNo]);

  if (!studentData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Student Details</h1>
      <div className="mt-5">
        <p>
          <strong>Name:</strong> {studentData.name}
        </p>
        <p>
          <strong>Roll Number:</strong> {studentData.rollNo}
        </p>
        <p>
          <strong>Date of Birth:</strong> {studentData.dob}
        </p>
        <h2 className="mt-5 text-lg font-medium">Grades:</h2>
        <ul className="list-disc pl-5">
          {Object.entries(studentData.grades).map(([subject, grade]) => (
            <li key={subject}>
              {subject}: {grade}
            </li>
          ))}
        </ul>
        <p>
          <strong>GPA:</strong> {studentData.gpa}
        </p>
        <p>
          <strong>Status:</strong> {studentData.status}
        </p>
      </div>
    </div>
  );
};

export default StudentView;

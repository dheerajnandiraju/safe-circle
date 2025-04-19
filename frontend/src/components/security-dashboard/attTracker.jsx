import React, { useState } from "react";

const AttTracker = () => {
  const [presentCount, setPresentCount] = useState(10);
  const [totalCount, setTotalCount] = useState(100);
  const [attendanceData, setAttendanceData] = useState(null);

  const calculatePercentage = (presentCount, totalCount) => {
    if (totalCount === 0) return 0;
    return Math.round((presentCount / totalCount) * 100);
  };

  const presentPercentage = calculatePercentage(presentCount, totalCount);
  const absentPercentage = 100 - presentPercentage;

  const presentAngle = (presentPercentage / 100) * 360;
  const absentAngle = (absentPercentage / 100) * 360;

  const handleClick = () => {
    const daysInMonth = 28; // Assuming February has 28 days
    const mockAttendanceData = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = `2024-02-${i < 10 ? "0" + i : i}`; // Format the date string
      const present = Math.random() < 0.8; // Simulate 80% attendance rate
      mockAttendanceData.push({ date, present });
    }

    setAttendanceData(mockAttendanceData);
  };

  const handleClose = () => {
    setAttendanceData(null);
  };

  const box = {
    marginTop: "1rem",
    marginLeft: "1rem",
    width: "15rem",
    padding: "1rem",
    backgroundColor: "#272e42",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column", // Align items vertically
    justifyContent: "space-around", // Add space around items
    alignItems: "center", // Align items in the center horizontally
  };

  return (
    <div>
      <button onClick={handleClick}>
        <div style={box}>
          <div style={{ color: "white", fontSize: "1.5rem" }}>Attendance</div>
          <svg width="200" height="200">
            {/* Present slice */}
            <path
              fill="#a6df24"
              d={`M 100,100 L 100,0 A 100,100 0 ${
                presentAngle > 180 ? 1 : 0
              },1 ${Math.cos((presentAngle * Math.PI) / 180) * 100 + 100},${
                100 - Math.sin((presentAngle * Math.PI) / 180) * 100
              } Z`}
            />
            {/* Absent slice */}
            <path
              fill="#f24040"
              d={`M 100,100 L 100,0 A 100,100 0 ${
                absentAngle > 180 ? 1 : 0
              },0 ${Math.cos((presentAngle * Math.PI) / 180) * 100 + 100},${
                100 - Math.sin((presentAngle * Math.PI) / 180) * 100
              } Z`}
            />
          </svg>
          {/* Label */}
          <text
            style={{ color: "white", fontSize: "1.5rem" }}
            // Define appropriate x and y values for label position
            x="100"
            y="100"
            textAnchor="middle"
            fontSize="16"
            fill="black"
          >
            {presentPercentage}%
          </text>
        </div>
      </button>
      {attendanceData && (
        <div style={modalStyle}>
          <button onClick={handleClose} style={closeButtonStyle}>
            Close
          </button>
          <h2>Attendance for February 2024</h2>
          <ul>
            {attendanceData.map((entry) => (
              <li key={entry.date}>
                {entry.date}: {entry.present ? "Present" : "Absent"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const modalStyle = {
  fontSize: "1rem",
  backgroundColor: "white",
  position: "fixed",
  top: "5rem",
  left: "1rem",
  width: "40rem",
  border: "solid 1px #ccc",
  borderRadius: "8px",
  padding: "1rem",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const closeButtonStyle = {
  position: "absolute",
  top: "1rem",
  right: "1rem",
  padding: "0.5rem 1rem",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "0.25rem",
  cursor: "pointer",
};

export default AttTracker;

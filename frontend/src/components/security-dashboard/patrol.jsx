import React, { useState } from "react";
import { IoTimeSharp } from "react-icons/io5";

const PatrollingSchedule = () => {
  const [showLog, setShowLog] = useState(false);

  const handleToggleLog = () => {
    setShowLog(!showLog);
  };
  const scheduleData = [
    {
      id: 1,
      shift: "Morning Shift",
      startTime: "08:00 AM",
      endTime: "04:00 PM",
      areas: ["Parking Lot", "Main Entrance", "Building A"],
      instructions: "Check for any suspicious activities.",
    },
    {
      id: 2,
      shift: "Evening Shift",
      startTime: "04:00 PM",
      endTime: "12:00 AM",
      areas: ["Building B", "Garden Area", "Back Entrance"],
      instructions: "Ensure all doors are securely locked.",
    },
  ];

  const box = {
    marginTop: "1rem",
    marginLeft: "1rem",
    width: "15rem",
    height: "19rem",
    padding: "1rem",
    backgroundColor: "#272e42",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column", // Align items vertically
    justifyContent: "space-around", // Add space around items
    alignItems: "center", // Align items in the center horizontally
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
  return (
    <div>
      <button onClick={handleToggleLog}>
        <div style={box}>
          <div style={{ color: "white", fontSize: "1.5rem" }}>
            PatrollingSchedule
          </div>
          <IoTimeSharp
            style={{ color: "white", height: "12rem", width: "auto" }}
          />
        </div>
      </button>

      {scheduleData.map((schedule) => (
        <div style={modalStyle}>
          <div key={schedule.id} style={scheduleStyle}>
            <h3>{schedule.shift}</h3>
            <p>
              <strong>Shift Timing:</strong> {schedule.startTime} -{" "}
              {schedule.endTime}
            </p>
            <p>
              <strong>Patrolling Areas:</strong> {schedule.areas.join(", ")}
            </p>
            <p>
              <strong>Instructions:</strong> {schedule.instructions}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const scheduleStyle = {
  backgroundColor: "#f4f4f4",
  padding: "1rem",
  margin: "1rem 0",
  borderRadius: "0.5rem",
};

export default PatrollingSchedule;

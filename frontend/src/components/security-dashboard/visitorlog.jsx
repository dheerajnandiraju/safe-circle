import React, { useState } from "react";
import { GiEntryDoor } from "react-icons/gi";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const VisitorsLog = () => {
  const [showLog, setShowLog] = useState(false);
  const [visitors, setVisitors] = useState([]);
  const [visitorName, setVisitorName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const handleToggleLog = () => {
    setShowLog(!showLog);
  };

  const handleAddVisitor = () => {
    const newVisitor = {
      visitorName,
      purpose,
      contactInfo,
      entryTime: new Date().toLocaleString(),
      exitTime: "", // Initialize exit time as empty string
    };
    setVisitors([...visitors, newVisitor]);
    // Reset input fields after adding visitor
    setVisitorName("");
    setPurpose("");
    setContactInfo("");
  };

  const handleExitVisitor = (index) => {
    const updatedVisitors = visitors.map((visitor, i) => {
      if (i === index) {
        return { ...visitor, exitTime: new Date().toLocaleString() };
      }
      return visitor;
    });
    setVisitors(updatedVisitors);
  };

  const handleCloseLog = () => {
    setShowLog(false);
  };

  return (
    <div>
      <button onClick={handleToggleLog}>
        <div style={box}>
          <div style={{ color: "white", fontSize: "1.5rem" }}>Visitor Log</div>
          <GiEntryDoor
            style={{ color: "white", height: "12rem", width: "auto" }}
          />
        </div>
      </button>

      {showLog && (
        <div style={modalStyle}>
          <button onClick={handleCloseLog} style={closeButtonStyle}>
            Close
          </button>
          <div>
            <h2>Visitors Log</h2>
            <div>
              <label>
                Visitor Name:
                <input
                  style={inputStyle}
                  type="text"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Purpose of Visit:
                <input
                  style={inputStyle}
                  type="text"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Contact Information:
                <input
                  style={inputStyle}
                  type="text"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                />
              </label>
            </div>
            <Button
              style={{ fontWeight: "bold" }}
              variant="outline-primary"
              onClick={handleAddVisitor}
            >
              Add Visitor
            </Button>
            <div style={log}>
              <h3>Visitor Log</h3>
              <ul style={{ display: "flex", flexDirection: "column" }}>
                {visitors.map((visitor, index) => (
                  <li key={index}>
                    <strong>Name:</strong> {visitor.visitorName}, &nbsp;
                    <strong>Purpose:</strong> {visitor.purpose}, &nbsp;
                    <strong>Contact:</strong> {visitor.contactInfo}, &nbsp;
                    <strong>Entry Time:</strong> {visitor.entryTime}
                    {!visitor.exitTime && (
                      <Button
                        style={{ marginLeft: "1rem", fontWeight: "bold" }}
                        variant="outline-danger"
                        onClick={() => handleExitVisitor(index)}
                      >
                        Exit
                      </Button>
                    )}
                    {visitor.exitTime && (
                      <span>
                        , &nbsp;<strong>Exit Time:</strong> {visitor.exitTime}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

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
  backgroundColor: "white",
  fontSize: "1rem",
  position: "fixed",
  top: "5rem",
  left: "1rem",
  width: "40rem",
  border: "solid 1px #ccc",
  borderRadius: "8px",
  padding: "1rem",
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
};
const inputStyle = {
  width: "100%",
  border: "1px solid #232323",
  borderRadius: "0.25rem",
  padding: "0.375rem 0.75rem",
  marginBottom: "1rem",
};
const log = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  fontSize: "1rem",
  marginTop: "1rem",
  left: "1rem",

  border: "solid 1px #ccc",
  borderRadius: "8px",
  padding: "1rem",
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
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

export default VisitorsLog;

import React from "react";
import AttTracker from "@/components/security-dashboard/attTracker";
import VisitorsLog from "@/components/security-dashboard/visitorlog";
import PatrollingSchedule from "@/components/security-dashboard/patrol";

function SecurityDashboard() {
  const left = {
    backgroundColor: "#272e42",
    height: "100vh",
    width: "50rem",
    boxShadow: "0px 10px 20px rgba(10, 10, 10, 10)",
  };
  const dashboardStyle = {
    position: "fixed",
    display: "flex",
    flexDirectiom: "row",

    right: "0",
    padding: "20px",
    zIndex: "9999", // Ensure it appears on top of other content
  };

  return (
    <div>
      <div style={left}>
        <div style={dashboardStyle}>
          <AttTracker />
          <VisitorsLog />
          <PatrollingSchedule/>
        </div>
      </div>
    </div>
  );
}

export default SecurityDashboard;

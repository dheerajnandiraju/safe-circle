import Details from "@/components/admincomponents/details";
import Maincollect from "@/components/admincomponents/maincollect";
import Fundsforevents from "@/components/admincomponents/fundsforevents";
import React from "react";

function Admindashboard() {
  const styles = {
    container: {
      margin: "10px",
      height: "auto",

      width: "500px",

      padding: "20px",
      overflow: "hidden",
      borderRadius: "10px",
      border: "1px solid black",
    },
  };
  return (
    <div style={{ padding: "2rem" }}>
      <Details />
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Maincollect />
        <Fundsforevents />
        <div style={styles.container}>
          <div className="text-gray-700 text-3xl font-semibold">
            Upcomming events
          </div>
          <br />
          <ul>
            <li>Community Picnic in the Park</li>
            <br />
            <li>Neighborhood Cleanup Day</li>
            <br />
            <li>Summer Concert Series</li>
            <br />
            <li>Annual Block Party</li>
            <br />
            <li>Local Farmer's Market</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Admindashboard;

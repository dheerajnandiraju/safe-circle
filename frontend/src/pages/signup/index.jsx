import React, { useState } from "react";
import logo from "./images/logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import employeeImage from "./images/background.jpg";
import adminImage from "./images/background2.jpg";
import residentImage from "./images/background1.jpg";

function Signup() {
  const [activeTab, setActiveTab] = useState("employee");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const brand = {
    fontSize: "2rem",
    color: "#272e42",
    fontWeight: "bold",
  };

  const img = {
    height: "7vw",
    width: "7vw",
  };

  const box = {
    marginTop: "7rem",
    marginLeft: "10rem",
    width: "50rem",
    height: "36rem",
    border: "solid 1px #ccc",
    borderRadius: "8px",
    padding: "2rem",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
  };

  const inputStyle = {
    width: "100%",
    border: "1px solid #232323",
    borderRadius: "0.25rem",
    padding: "0.375rem 0.75rem",
    marginBottom: "1rem",
  };

  let imageSrc;
  if (activeTab === "employee") {
    imageSrc = employeeImage;
  } else if (activeTab === "admin") {
    imageSrc = adminImage;
  } else if (activeTab === "resident") {
    imageSrc = residentImage;
  }

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={box}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <img style={img} src={logo} alt="logo" />
            <div style={brand}>SafeCircle</div>
          </div>
          <div>
            <Nav variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link
                  eventKey="employee"
                  onClick={() => handleTabChange("employee")}
                >
                  Employee
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="admin"
                  onClick={() => handleTabChange("admin")}
                >
                  Admin
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="resident"
                  onClick={() => handleTabChange("resident")}
                >
                  Resident
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                color: "#272e42",
                marginBottom: "1rem",
                fontSize: "1.5rem",
              }}
            >
              Signup
            </div>
            <div style={{ width: "100%", fontSize: "1.rem" }}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    style={inputStyle}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    style={inputStyle}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>
                <Button
                  style={{ fontWeight: "bold" }}
                  variant="outline-primary"
                >
                  Submit
                </Button>{" "}
              </Form>
            </div>
          </div>
        </div>

        <div
          style={{
            marginLeft: "5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <img
            style={{ height: "30rem", width: "auto" }}
            src={imageSrc}
            alt={activeTab}
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;

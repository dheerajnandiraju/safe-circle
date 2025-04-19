// components/ComplaintForm.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ComplaintForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    image: null, // To store the uploaded image
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first file from the selected files array
    setFormData((prevState) => ({
      ...prevState,
      image: file, // Set the image file in the state
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    setSubmittedData(formData); // Store submitted data in state
    // Reset the form data after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      image: null,
    });
  };
  const screen = {
    backgroundColor: "#272e42",
    height: "100vh",
    width: "100vw",
  };
  const box = {
    backgroundColor: "white",
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    width: "25rem",
    height: "35rem",
    border: "solid 1px #ccc",
    borderRadius: "8px",
    padding: "1rem",
    boxShadow: "-10px -10px -200px rgba(0, 0, 0, 10)",
    display: "flex",
    flexDirection: "column", // Align items vertically
    justifyContent: "space-around", // Add space around items
    alignItems: "center", // Align items in the center horizontally
  };
  const reply = {
    color: "white",
    fontSize: "1.4rem",
    backgroundColor: "#df4542",
    position: "fixed",
    top: "5rem",
    left: "1rem",
    width: "50rem",
    border: "solid 1px #ccc",
    borderRadius: "8px",
    padding: "1rem",
    boxShadow: "-10px -10px -20px rgba(0, 0, 0, 10)",
  };
  const inputStyle = {
    width: "100%",
    border: "1px solid #232323",
    borderRadius: "0.25rem",
    padding: "0.375rem 0.75rem",
    // marginBottom: "1rem",
  };

  return (
    <div style={screen}>
      <div className="complaint-form">
        <form style={box} onSubmit={handleSubmit}>
          <h2>Submit a Complaint</h2>
          <input
            style={inputStyle}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            style={inputStyle}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            style={inputStyle}
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            style={{ ...inputStyle, height: "10rem" }}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <input
            style={{ ...inputStyle, marginBottom: "0" }}
            type="file"
            name="image"
            accept="image/*" // Allow only image files
            onChange={handleImageChange}
            required
          />
          <button
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "1px solid #007bff",
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              cursor: "pointer",
              transition: "background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#0056b3";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#007bff";
              e.target.style.color = "#fff";
            }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      {submittedData && (
        <div style={reply}>
          <h3>Submitted</h3>
          <p style={{ fontWeight: "bold" }}>
            Your complaint has been successfully submitted and registered with
            our system. We appreciate your feedback and assure you that it will
            be reviewed promptly by our team. Thank you for bringing this matter
            to our attention.
          </p>
          <p style={{}}>
            Name:<strong> {submittedData.name}</strong>
          </p>
          <p style={{}}>
            Email: <strong>{submittedData.email}</strong>
          </p>
          <p style={{}}>
            Subject: <strong>{submittedData.subject}</strong>
          </p>
          <p style={{}}>
            Message: <strong>{submittedData.message}</strong>
          </p>
          {submittedData.image && (
            <div>
              <h4>Image:</h4>
              <img
                src={URL.createObjectURL(submittedData.image)} // Display the image
                alt="Uploaded"
                style={{ margin: "1rem", maxWidth: "100%", maxHeight: "200px" }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ComplaintForm;

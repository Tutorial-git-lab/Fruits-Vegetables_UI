import React, { useState } from "react";

export default function Feedback() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simple validation
    if (!name || !mobile || !email || !feedbackText) {
      setErrorMessage("All fields are required.");
      return;
    }

    // Create feedback object
    const feedbackData = { name, mobile, email, feedbackText };

    try {
      const response = await fetch(
        "https://localhost:7195/api/Feedback/SubmitFeedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(feedbackData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send feedback.");
      }

      setSuccessMessage("Feedback sent successfully!");
      setErrorMessage(""); // Clear previous errors

      // Clear the form
      setName("");
      setMobile("");
      setEmail("");
      setFeedbackText("");
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage(""); // Clear previous success messages
    }
  };

  return (
    <>
      <h4 className="text-center my-1">FeedBack</h4>
      <div className="d-flex align-items-center justify-content-center w-80 vh-50 bg-white">
        <form
          className="form-group m-2 w-40 vh-50 p-5 border"
          onSubmit={handleSubmit}
        >
          <div className="d-flex mb-2 p-1 row">
            <label htmlFor="name" className="form-label col-4 text-end">
              <strong>Name:</strong>
            </label>
            <input
              type="text"
              className="col-8"
              placeholder="Anil Dhakad"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="d-flex mb-2 p-1 row">
            <label htmlFor="mobile" className="form-label col-4 text-end">
              <strong>Mobile:</strong>
            </label>
            <input
              type="text"
              className="col-8"
              placeholder="8717948805"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <div className="d-flex mb-2 p-1 row">
            <label htmlFor="email" className="form-label col-4 text-end">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              className="col-8"
              placeholder="anildhakad8717@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="d-flex mb-2 p-1 row">
            <label htmlFor="feedback" className="form-label col-4 text-end">
              <strong>Feedback:</strong>
            </label>
            <textarea
              name="text"
              id="textid"
              rows="2"
              className="col-8"
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              required
            ></textarea>
          </div>
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
          {successMessage && (
            <div className="alert alert-success">{successMessage}</div>
          )}
          <div className="text-center p-2">
            <button type="submit" className="btn btn-outline-secondary">
              Send Feedback
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

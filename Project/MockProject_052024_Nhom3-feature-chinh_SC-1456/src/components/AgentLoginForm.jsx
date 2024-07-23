import React, { useState } from "react";
import Select from "react-select";
import PasswordInput from "./PasswordInput";
import { FaArrowRight } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

const options = [
  { value: "option1", label: "Houston Association of Realtors" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
  { value: "option5", label: "Option 5" },
  // Additional options can be added here if needed
];

// AgentLoginForm component for handling agent login
const AgentLoginForm = ({ handleLogin }) => {
  // State to manage selected option in dropdown and modal visibility
  const [selectedOption, setSelectedOption] = useState(null);
  const [show, setShow] = useState(false);

  // Function to close modal
  const handleClose = () => setShow(false);

  // Function to show modal
  const handleShow = (event) => {
    event.preventDefault();
    setShow(true);
  };

  // Function to handle dropdown change
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log("Selected option:", selectedOption);
  };

  return (
    <div className="form-login d-md-flex justify-content-between mx-3">
      {/* Form for agent login */}
      <form
        onSubmit={handleLogin}
        className="col-12 col-md-6 m-md-0 p-md-0 container">
        {/* Dropdown for selecting options */}
        <div className="form-group mb-3">
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            isSearchable={true} // Enable search functionality
            placeholder="Select an option..."
          />
          <br />
          <p>HAR members, MLS subscribers and Agent MAX</p>
        </div>

        {/* Username input field */}
        <div className="form-group mb-3">
          <label htmlFor="agent-username">Username</label>
          <input
            type="text"
            className="form-control"
            id="agent-username"
            name="username"
            required
          />
        </div>

        {/* Password input field */}
        <div className="form-group mb-3">
          <label htmlFor="agent-password">Password</label>
          <PasswordInput id="agent-password" name="password" />
        </div>

        {/* Checkbox to keep user signed in */}
        <div className="form-group form-options mb-3">
          <label className="form-checkbox">
            <input type="checkbox" name="keepLoggedIn" /> Keep me signed in
          </label>
        </div>

        {/* Submit button */}
        <div className="form-group d-flex justify-content-between mb-5">
          <button type="submit" className="btn mt-4 py-2 col-4 col-md-3">
            Sign In
          </button>
          {/* Forgot username/password links */}
          <div className="form-forgot mt-4">
            <p>Forgot something?</p>
            <div>
              <a href="#" className="form-forgot-username me-3">
                Username <FaArrowRight />
              </a>
              <a href="#" className="form-forgot-password">
                Password <FaArrowRight />
              </a>
            </div>
          </div>
        </div>

        {/* Additional links */}
        <div className="d-flex justify-content-between mb-3">
          <p>Having problems signing in?</p>
          <a href="#" onClick={handleShow}>
            More Info <FaArrowRight />
          </a>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <p>Want to impress your Clients?</p>
          <a href="#" onClick={handleShow}>
            Claim Your Profile <FaArrowRight />
          </a>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <p>Want to become a REALTOR?</p>
          <a href="#" onClick={handleShow}>
            Launch modal <FaArrowRight />
          </a>
        </div>

        {/* Modal */}
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Body>
            <div className="text-center">
              <p>Become a member</p>
              <p>of the largest individual</p>
              <p>membership trade association</p>
              <p>in Houston</p>
              <a href="#" className="form-forgot-password text-decoration-none">
                Learn about the benefits <FaArrowRight />
              </a>
            </div>
          </Modal.Body>
          <Modal.Footer
            style={{
              justifyContent: "center",
            }}>
            {/* Button to join HAR */}
            <Button
              onClick={handleClose}
              style={{
                backgroundColor: "#030772",
                border: "none",
              }}>
              Join HAR
            </Button>
          </Modal.Footer>
        </Modal>
      </form>

      {/* Image displayed only on medium and larger screens */}
      <div className="login-img-agent d-none d-md-block">
        <img src="/img_agent.png" alt="Agent" />
      </div>
    </div>
  );
};

export default AgentLoginForm;

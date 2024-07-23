import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

// PasswordInput component for handling password visibility toggle
const PasswordInput = ({ id, name }) => {
  // State to track whether the password is visible or hidden
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility
  const togglePasswordVisibility = () => {
    try {
      // Toggle the showPassword state
      setShowPassword((prevShowPassword) => !prevShowPassword);
    } catch (error) {
      // Log any errors to the console
      console.error("Error toggling password visibility:", error);
    }
  };

  return (
    // Container div with relative positioning for the input and button
    <div className="position-relative mb-3">
      {/* Password input field */}
      <input
        type={showPassword ? "text" : "password"} // Toggle between text and password types
        id={id}
        name={name}
        required
        className="form-control"
      />
      {/* Button to toggle password visibility */}
      <button
        type="button"
        className="btn btn-secondary position-absolute top-50 end-0 translate-middle-y"
        onClick={togglePasswordVisibility}>
        {/* Icon indicating the current state (show/hide) */}
        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
      </button>
    </div>
  );
};

export default PasswordInput;

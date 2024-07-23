import React from "react";
import PasswordInput from "./PasswordInput";
import { ListSocial } from "./ListSocial";
import { NavLink } from "react-router-dom";

// CustomerLoginForm component for handling customer login
const CustomerLoginForm = ({ handleLogin }) => {
  return (
    <div className="form-login d-md-flex justify-content-between mx-3">
      {/* Form for customer login  */}
      <form
        onSubmit={handleLogin}
        className="col-12 col-md-6 m-md-0 p-md-0 container">
        {/* Prompt for social login */}
        <p>Want to Sign in using social login?</p>
        <ListSocial /> {/* Social login options */}
        {/* Prompt for email login */}
        <p>Or sign in with email</p>
        {/* Email input field */}
        <div className="form-group mb-3">
          <label htmlFor="customer-email">Email</label>
          <input
            type="email"
            className="form-control"
            id="customer-email"
            name="email"
            required
          />
        </div>
        {/* Password input field */}
        <div className="form-group mb-3">
          <label htmlFor="customer-password">Password</label>
          <PasswordInput id="customer-password" name="password" />
        </div>
        {/* Options for keeping the user signed in and forgot password link */}
        <div className="form-group form-options d-flex justify-content-between align-items-center mb-3">
          <label className="form-checkbox d-flex align-items-center">
            <input type="checkbox" name="keepLoggedIn" />{" "}
            <p className="ms-1">Keep me signed in</p>
          </label>
          <a href="#" className="form-forgot-password">
            Forgot password?
          </a>
        </div>
        {/* Submit button */}
        <div className="form-group mb-3">
          <button type="submit" className="btn mt-4 py-2 col-4 col-md-3">
            Sign In
          </button>
        </div>
        {/* Link to the registration page */}
        <div className="form-link-signup mt-5">
          <NavLink to="/register">Create a free HAR account?</NavLink>
        </div>
      </form>

      {/* Image displayed only on medium and larger screens */}
      <div className="login-img-customer d-none d-md-block">
        <img src="/img_customer.png" alt="Customer" />
      </div>
    </div>
  );
};

export default CustomerLoginForm;

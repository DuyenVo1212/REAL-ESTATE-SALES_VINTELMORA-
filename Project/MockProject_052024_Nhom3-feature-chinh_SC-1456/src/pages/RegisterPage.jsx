import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ListSocial } from "../components/ListSocial";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/register.scss";

// RegisterPage component for user registration
const RegisterPage = () => {
  const [termChecked, setTermChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChecked = (e) => {
    setTermChecked(e.target.checked);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Password do not mactch");
    } else {
      setErrorMessage("");
    }
  };
  return (
    <>
      <Header />

      <div className="container-xl">
        {/* Title */}
        <h1 className="fw-bold mt-3">Sign up</h1>
        {/* Registration form */}
        <form className="register" onSubmit={handleSubmit}>
          {/* Social account signup */}
          <p>You can sign up using your social account</p>
          <ListSocial /> {/* Rendering ListSocial component */}
          {/* Role selection */}
          <div className="form-group col-12 col-sm-8 my-3">
            <p className="mb-2">You are?</p>
            <div className="d-flex justify-content-around">
              {/* Agent role checkbox */}
              <div className="d-flex">
                <p>Agent</p>
                <input type="radio" name="role" className="checkbox-role" />
              </div>
              {/* Customer role checkbox */}
              <p>OR</p>
              <div className="d-flex">
                <p>Customer</p>
                <input type="radio" name="role" className="checkbox-role" />
              </div>
            </div>
          </div>
          {/* Email input */}
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
            />
          </div>
          {/* Password inputs */}
          <div className="form-group d-md-flex">
            {/* Password */}
            <div className="col-12 col-md-6 me-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={handlePassword}
                required
              />
            </div>
            {/* Confirm Password */}
            <div className="col-12 col-md-4">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPassword}
                required
              />
            </div>
          </div>
          {/* Password requirements */}
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <p className="mb-3">
            <span className="fw-bold">Password requirement:</span> should
            contain at least 1 uppercase letter, lowercase letter, 1 number, 1
            special character, 9-20 characters.
          </p>
          {/* First and Last Name inputs */}
          <div className="form-group d-md-flex mb-3">
            <div className="col-12 col-md-4 me-3">
              <label htmlFor="firstName">First Name</label>
              <input
                className="form-control"
                id="firstName"
                name="firstName"
                required
              />
            </div>
            <div className="col-12 col-md-4">
              <label htmlFor="lastName">Last Name</label>
              <input
                className="form-control"
                id="lastName"
                name="lastName"
                required
              />
            </div>
          </div>
          {/* Zip Code input */}
          <div className="form-group mb-3">
            <label htmlFor="zipCode">Zip Code you're interested in</label>
            <input
              className="form-control"
              pattern="\d*"
              id="zipCode"
              name="zipCode"
              required
            />
            <p>To receive area-specific info.</p>
          </div>
          {/* Phone input */}
          <div className="form-group mb-3">
            <label htmlFor="phone">Send to your phone</label>
            <input
              className="form-control"
              pattern="\d*"
              id="phone"
              name="phone"
              required
            />
          </div>
          {/* Keep signed in checkbox */}
          <div className="form-group form-options d-flex justify-content-between align-items-center mb-3">
            <label className="form-checkbox d-flex align-items-center">
              <input
                type="checkbox"
                name="termCheck"
                onChange={handleChecked}
              />
              <p className="ms-1">
                I accept <a href="#">Term Of Use</a>
              </p>
            </label>
          </div>
          {/* Subscribe to Realinsight checkbox */}
          <div className="form-group form-options d-flex justify-content-between align-items-center mb-3">
            <label className="form-checkbox d-flex align-items-center">
              <input type="checkbox" name="checkSub" />
              <p className="ms-1">
                Subscribe to <a href="#">Realinsight</a>
              </p>
            </label>
          </div>
          {/* Privacy policy */}
          <div className="form-group mb-3">
            <p>
              All of your personal data is subject to our .{" "}
              <a href="#" className="">
                Privacy Policy
              </a>
            </p>
          </div>
          {/* Create Account button */}
          <div className="form-group mb-3">
            <button type="submit" className="btn" disabled={!termChecked}>
              Create Account
            </button>
          </div>
          {/* Already have an account */}
          <div className="border-top my-4">
            <p className="mt-1">
              If you already have an account,{" "}
              <NavLink to="/login">Sign in</NavLink> now!
            </p>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default RegisterPage;

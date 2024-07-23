import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRole } from "../redux/actions/authActions";
import CustomerLoginForm from "../components/CustomerLoginForm";
import AgentLoginForm from "../components/AgentLoginForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/login.scss";

// LoginPage component for handling user login
const LoginPage = () => {
  // State to manage user role (customer or agent)
  const role = useSelector((state) => state.auth.role);
  const dispatch = useDispatch();

  // Function to switch user role
  const handleRoleSwitch = (newRole) => {
    try {
      dispatch(setRole(newRole)); // Update role state
    } catch (error) {
      console.error("Error switching roles:", error);
    }
  };

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <>
      <Header />

      <div className="container-xl">
        {/* Title */}
        <h1 className="fw-bold ms-3 mt-3">Sign in</h1>
        <div className="login mb-4">
          <div className="login-container">
            {/* Role switch buttons */}
            <div className="role-switch m-3 d-flex text-center text-md-start">
              {/* Button for customer login */}
              <button
                onClick={() => handleRoleSwitch("customer")}
                disabled={role === "customer"}
                className="pe-5 ps-0">
                <h2 className="fw-bold">Customer Login</h2>
              </button>
              {/* Button for agent login */}
              <button
                onClick={() => handleRoleSwitch("agent")}
                disabled={role === "agent"}
                className="pe-0 ps-5">
                <h2 className="fw-bold">Agent Login</h2>
              </button>
            </div>
            {/* Render CustomerLoginForm or AgentLoginForm based on selected role */}
            {role === "customer" ? (
              <CustomerLoginForm handleLogin={handleLogin} />
            ) : (
              <AgentLoginForm handleLogin={handleLogin} />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LoginPage;

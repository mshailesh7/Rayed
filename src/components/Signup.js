import React, { useState } from "react";
import "./Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEye,
  faEyeSlash,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import natureLogo from "./naturelogo.png";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  return (
    <div className="container">
      <div className="left-section">
        <img
          src={natureLogo}
          alt="Illustration of a person holding a solar panel and a wind turbine, with a sun and clouds in the background"
        />
      </div>
      <div className="right-section">
        <h2>Welcome, Join us in creating a sustainable future!</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-container">
              <input type="text" id="email" placeholder="Enter Email" />
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone No.</label>
            <div className="input-container">
              <input type="text" id="phone" placeholder="Enter Phone No." />
              <FontAwesomeIcon icon={faPhone} className="icon" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter Password"
              />
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                className="icon"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <div className="input-container">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                id="confirmPassword"
                placeholder="Re-enter Password"
              />
              <FontAwesomeIcon
                icon={confirmPasswordVisible ? faEyeSlash : faEye}
                className="icon"
                onClick={toggleConfirmPasswordVisibility}
              />
            </div>
          </div>
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
        <div className="divider">OR</div>
        <div className="social-login">
          <a href="#">
            <FontAwesomeIcon
              icon={faGoogle}
              style={{ color: "#DB4437" }}
              className="icon"
            />
            Sign Up with Google
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#4267B2" }}
              className="icon"
            />
            Sign Up with Facebook
          </a>
        </div>
        <div className="login-link">
          <p>
            Already have an account? <a href="./login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

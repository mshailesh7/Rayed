import React, { useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import natureLogo from "./naturelogo.png";

const Login = () => {
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
            <label htmlFor="email">Email/Phone No.</label>
            <div className="input-container">
              <input
                type="text"
                id="email"
                placeholder="Enter Email/Phone No."
              />
              <FontAwesomeIcon icon={faUser} className="icon" />
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
          <div className="checkbox-group">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button type="submit" className="login-btn">
            Login
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
            Login with Google
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#4267B2" }}
              className="icon"
            />
            Login with Facebook
          </a>
        </div>
        <div className="signup-link">
          <p>
            Don't have account? <a href="./signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

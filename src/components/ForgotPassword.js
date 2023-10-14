import React, { useState } from "react";
import "./ForgotPassword.css";

const ForgotPassword = (props) => {
  const [inputValue, setInputValue] = useState("");
  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="forgot-password-form-container">
      <form id="forgot-password-form">
        <div className="forgot-password-message-container">
          <p id="forgot-password-message">
            Please enter the email address you gave us when you registered and
            we'll email you a link so you can create a new password.
          </p>
        </div>
        <div className="forgot-password-email-container">
          <input
            type="email"
            id="forgot-password-email"
            name="username"
            required
            value={inputValue}
            onChange={inputChangeHandler}
            placeholder="Email"
          />
        </div>
        <div className="forgot-password-button-container">
          <div className="forgot-password-button-send">
            <button id="forgot-password-button-send" type="button">
              Send
            </button>
          </div>
          <div className="forgot-password-button-cancel">
            <button
              onClick={props.signIn}
              id="forgot-password-button-cancel"
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;

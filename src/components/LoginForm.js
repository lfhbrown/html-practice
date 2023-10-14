import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <form>
      <div className="form-inner">
        <div className="sign-in-up-container">
          <div className="sign-in">
            <button onClick={props.signIn} type="button">
              Sign In
            </button>
          </div>
          <div className="sign-up">
            <button onClick={props.signUp} type="button">
              Sign Up
            </button>
          </div>
        </div>
        <div className="username-password-input-container">
          <input
            type="text"
            id="username"
            name="username"
            required
            value={inputValue}
            onChange={inputChangeHandler}
            placeholder="Email"
          />
          <input
            type="password"
            id="password"
            name="password"
            required
            value={inputValue}
            onChange={inputChangeHandler}
            placeholder="Password"
          />
        </div>
        <div className="enter-forgot-password-container">
          <div className="enter">
            <button id="enter">Login </button>
          </div>
          <div className="forgot-password">
            <button
              onClick={props.forgotPassword}
              id="forgot-password"
              type="button"
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

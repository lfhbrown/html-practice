import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
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
            name="email"
            required
            value={email}
            onChange={inputChangeHandler}
            placeholder="Email"
          />
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
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

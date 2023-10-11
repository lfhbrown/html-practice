import { React, useState } from "react";
import "./Login.css";
import GiantSequoiaImage from "./Giant Sequoias.webp";
import "./LoginForm";

const Login = () => {
  const [login, setLogin] = useState(null);
  const forgotPassword = () => {};

  return (
    <div className="container">
      <div className="sequoia-img">
        <img src={GiantSequoiaImage} alt="Giant Sequoia" />
      </div>
      <div className="form-outer">
        <form>
          <div className="form-inner">
            <h1>The Sequoias</h1>
            <div>
              <div className="sign-in-up-container">
                <div className="sign-in">
                  <button>Sign In</button>
                </div>
                <div className="sign-up">
                  <button>Sign Up</button>
                </div>
              </div>
            </div>
            <div className="username-password-input-container">
              <input
                type="text"
                id="username"
                name="username"
                required
                value={"Username or Email"}
              />
              <input
                type="password"
                id="password"
                name="password"
                required
                value={"Password"}
              />
            </div>
            <div className="enter-forgot-password-container">
              <div className="enter">
                <button id="enter">Enter</button>
              </div>
              <div className="forgot-password">
                <button id="forgot-password">Forgot Password?</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

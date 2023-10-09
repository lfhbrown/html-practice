import { React, useState } from "react";
import "./Login.css";
import GiantSequoiaImage from "./Giant Sequoias.webp";

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
            <div className="sign-in-up">
              <div className="sign-in">
                <p>Sign In</p>
              </div>
              <div className="sign-up">
                <p>Sign Up</p>
              </div>
            </div>
            <input
              type="email"
              id="username"
              name="username"
              required
              value={"Email"}
            />
            <input
              type="text"
              id="password"
              name="password"
              required
              value={"Password"}
            />
            <a href="forgot-password" onClick={forgotPassword}>
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

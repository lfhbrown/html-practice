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
                <button>Sign In</button>
              </div>
              <div className="sign-up">
                <button id="sign-up">Sign Up</button>
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
              type="password"
              id="password"
              name="password"
              required
              value={"Password"}
            />
            <div className="enter">
              <button>Enter</button>

              <a href="forgot-password" onClick={forgotPassword}>
                Forgot Password?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

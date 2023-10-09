import { React, useState } from "react";
import "./Login.css";
import GeneralShermanImage from "./General Sherman.jpg";
import GiantSequoiaImage from "./Giant Sequoias.webp";

const Login = () => {
  const [login, setLogin] = useState(null);
  const forgotPassword = () => {};
  return (
    <div className="container">
      <div className="sequoia">
        {/* <img src={GeneralShermanImage} alt="General Sherman" /> */}
        <img src={GiantSequoiaImage} alt="Giant Sequoia" />
      </div>
      <div className="form-outer">
        <form>
          <div className="form-inner">
            <h1>The Sequoias</h1>
            <div>
              <button>Sign In</button>
              <button>Sign Up</button>
            </div>
            <input
              type="email"
              id="username"
              name="username"
              required
              value={"Email"}
            />
            <input
              type="text "
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

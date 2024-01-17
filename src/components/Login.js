import React, { useState } from "react";
import "./Login.css";
import GiantSequoiaImage from "./Giant Sequoias.webp";
import SignUpForm from "./SignUpForm";
import ForgotPassword from "./ForgotPassword";
import { GiPineTree } from "react-icons/gi";

import LoginForm from "./LoginForm";

const Login = () => {
  const [selectedComponent, setSelectedComponent] = useState(1);

  const signIn = () => {
    setSelectedComponent(1);
  };

  const signUp = () => {
    setSelectedComponent(2);
  };

  const forgotPassword = () => {
    setSelectedComponent(3);
  };

  return (
    <div className="container">
      <div className="sequoia-img">
        <img
          src={GiantSequoiaImage}
          alt="Giant Sequoia"
          style={{ width: "100%" }}
        />
      </div>
      <div className="form-outer">
        <div className="heading-container">
          <GiPineTree className="icon" />
          <h1>
            <span className="webkit-text-stroke">The</span>
            <span className="olivedrab"> Sequoias</span>
          </h1>
        </div>

        {selectedComponent === 1 && (
          <LoginForm
            signIn={signIn}
            signUp={signUp}
            forgotPassword={forgotPassword}
          />
        )}
        {selectedComponent === 2 && (
          <SignUpForm
            signIn={signIn}
            signUp={signUp}
            forgotPassword={forgotPassword}
          />
        )}
        {selectedComponent === 3 && (
          <ForgotPassword
            signIn={signIn}
            signUp={signUp}
            forgotPassword={forgotPassword}
          />
        )}
      </div>
    </div>
  );
};

export default Login;

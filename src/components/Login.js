import React, { useState } from "react";
import "./Login.css";
import SignUpForm from "./SignUpForm";
import ForgotPassword from "./ForgotPassword";
import LoginForm from "./LoginForm";
import Pivot from "./Pivot2.png";
import PivotLogo from "./PivotLogo.png";

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
      <div className="login-background">
        <img src={Pivot} alt="login-background" style={{ width: "100%" }} />
      </div>
      <div className="form-outer">
        <div className="heading-container">
          <h1 className="logo-container">
            <img
              src={PivotLogo}
              alt="PivotLogo"
              style={{ width: "50%", height: "50%" }}
            />
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

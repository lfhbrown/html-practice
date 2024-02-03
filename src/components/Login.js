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
  const fadeIn = () => {
    return "fade-in";
  };

  return (
    <div className="container">
      <div className="login-background">
        <img src={Pivot} alt="login-background" style={{ width: "100%" }} />
      </div>
      <div className="form-outer">
        <div className="pivot-logo-container">
          <img className="pivot-logo" src={PivotLogo} alt="PivotLogo" />
        </div>

        {selectedComponent === 1 && (
          <div className={fadeIn()}>
            <LoginForm
              signIn={signIn}
              signUp={signUp}
              forgotPassword={forgotPassword}
            />
          </div>
        )}
        {selectedComponent === 2 && (
          <div className={fadeIn()}>
            <SignUpForm
              signIn={signIn}
              signUp={signUp}
              forgotPassword={forgotPassword}
            />
          </div>
        )}
        {selectedComponent === 3 && (
          <div className={fadeIn()}>
            <ForgotPassword
              signIn={signIn}
              signUp={signUp}
              forgotPassword={forgotPassword}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

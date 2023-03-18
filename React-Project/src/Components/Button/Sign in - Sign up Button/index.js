import React from "react";
import "./style.css";
import { logout } from "../../../Configs/Authentication-Firebase/authentication";
import { useHistory } from "react-router-dom";
import Logout from "../Logout Button";
const SignInSignUpButton = () => {
  const history = useHistory();
  return (
    <span className="button">
      <button
        className="signup"
        onClick={() => {
          history.push("/signup-listener");
        }}
      >
        Sign up
      </button>
      <button
        className="signup"
        onClick={() => {
          history.push("/signup-artist");
        }}
      >
        Sign up Artist
      </button>
      <button
        className="login"
        onClick={() => {
          history.push("/login");
        }}
      >
        Log in
      </button>
    </span>
  );
};

export default SignInSignUpButton;

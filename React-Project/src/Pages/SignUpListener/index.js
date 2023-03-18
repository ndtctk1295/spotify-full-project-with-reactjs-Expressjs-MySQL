import "./style.css";
import React, { useState } from "react";
import axios from "axios";
import qs from "qs";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { useContext } from "react";

function SignUpListener() {
  const history = useHistory();
  // USESTATE TO HANDLE INPUT CHANGE

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [gender, setGender] = useState("Male");
  const [roleid, setRoleid] = useState(2);
  const [errMessage, setErrMessage] = useState("");

  // USECONTEXT TO USE AND PASS DATA BETWEEN COMPONENT
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { isLoggedIn, setLoggedIn } = useContext(UserContext);
  const { roleUser, setRoleUser } = useContext(UserContext);
  const SignInValidate = async (e) => {
    e.preventDefault();
    const userData = {
      username: username,
      password: password,
      email: email,
      fullname: fullname,
      phonenumber: phonenumber,
      gender: gender,
      roleid: roleid,
    };

    if (password !== passwordConfirm) {
      setErrMessage("Your password confirm does not match!");
    } else {
      await axios({
        method: "post",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: qs.stringify(userData),
        url: "http://localhost:3002/api/v1/create-listener",
      })
        .then((res) => {
          console.log(res);
          if (res.data.username) {
            setUserInfo(res);
            setLoggedIn(true);
            setRoleUser(res.data.roleid);
          } else if (res.data.message) {
            setErrMessage(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleGenderValueChange = (e) => {
    setGender(e.target.value);
  };
  console.log(gender);

  return (
    <form
      className="form"
      style={{ display: "flex" }}
      onSubmit={SignInValidate}
    >
      <h1 className="sign-up-listener-form">Sign up for free</h1>
      <div className="sign-up-listener-form">
        <label>Create your username</label>
        <br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="username"
        />
      </div>
      <div className="sign-up-listener-form">
        <label>Email</label>
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="username"
        />
      </div>
      <div className="sign-up-listener-form">
        <label>What is your Full Name?</label>
        <br />
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="username"
        />
      </div>
      <div className="sign-up-listener-form">
        <label>Phone Number</label>
        <br />
        <input
          type="text"
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
          className="username"
        />
      </div>
      <div className="sign-up-listener-form">
        <label>Gender</label>
        <br />
        {/* <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="username"
        /> */}
        <select onChange={handleGenderValueChange} value={gender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Others</option>
        </select>
      </div>

      <div className="sign-up-listener-form">
        <label>Create your password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password"
        />
      </div>
      <div className="sign-up-listener-form">
        <label>Confirm your password</label>
        <br />
        <input
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className="passwordConfirm"
        />
      </div>
      <div>{!errMessage ? <></> : errMessage}</div>
      <div>
        <button type="submit" className="signup-button" value="Sign Up">
          Sign Up
        </button>
      </div>
      <div>
        Already have an account? <Link to="/login">Login</Link> now.
      </div>
    </form>
  );
}

export default SignUpListener;

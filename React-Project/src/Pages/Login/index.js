import "./style.css";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import React, { useContext, useState } from "react";
import qs from "qs";
import axios from "axios";
import { UserContext } from "../../UserContext";
import { useEffect } from "react";
function Login() {
  // USESTATE TO HANDLE INPUT CHANGE
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errMessage, setErrMessage] = useState("");
  // USECONTEXT TO USE AND PASS DATA BETWEEN COMPONENTS
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { isLoggedIn, setLoggedIn } = useContext(UserContext);
  const { roleUser, setRoleUser } = useContext(UserContext);
  const { userId, setUserId } = useContext(UserContext);
  const LogInValidate = (e) => {
    // const history = useHistory();
    // let location = useLocation();
    // store user data in this variable
    const userData = {
      username: username,
      password: password,
    };
    e.preventDefault();
    // post user data with axios post method
    axios({
      method: "post",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(userData),
      url: "http://localhost:3002/api/v1/login",
    })
      .then((res) => {
        // console.log(res);
        if (res.data.username) {
          // console.log(res.data);
          setUserId(res.data.userid);
          setUserInfo(res);
          setLoggedIn(true);
          setRoleUser(res.data.roleid);
          setErrMessage();
          // console.log(userInfo);
        } else if (res.data.message) {
          setErrMessage(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // useEffect(() => {
    //   ga.send([""])
    // });
    // console.log(location);
    // if (isLoggedIn === true) {
    //   history.replace("/");
    // }
  };
  return (
    <form className="form" onSubmit={LogInValidate}>
      <h1>Login to listen</h1>

      <div>
        <label className="label-login-form">Enter your username</label>
        <br />
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="username"
          placeholder="Username"
        />
      </div>

      <div>
        <label className="label-login-form">Enter your password</label>
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password"
          placeholder="Password"
        />
      </div>
      <div className="label-login-form">{!errMessage ? <></> : errMessage}</div>
      <div>
        <button className="login-button" type="submit">
          Log In
        </button>
      </div>
    </form>
  );
}

export default Login;

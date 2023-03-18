import React from "react";
import "./style.css";
import Avatar from "../../Components/Avatar";

import { useHistory } from "react-router-dom";
import Logout from "../Button/Logout Button";

const MainSidePrivate = () => {
  const history = useHistory();
  return (
    <div>
      <div
        className="button"
        style={{
          display: "flex",
          color: "white",
          marginLeft: "84%",
          marginTop: "2%",
        }}
      >
        <Logout />
      </div>
      <div
        className="avatar"
        onClick={() => {
          history.push(`/privateartist`);
        }}
      >
        <h1 className="avatar-title">Artists</h1>
        <Avatar />
      </div>
    </div>
  );
};
export default MainSidePrivate;

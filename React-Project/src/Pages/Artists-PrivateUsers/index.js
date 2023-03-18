import React from "react";

import MenuSide from "../../Components/MenuSide";
import Info from "../../Components/Info";
import Button from "../../Components/Button/Sign in - Sign up Button";
import MusicPlayer from "../../Components/MusicPlayer";
import "./style.css";
import Logout from "../../Components/Button/Logout Button";

const ArtistPrivateUsers = () => {
  return (
    <div className="home">
      <div className="menu_side">
        <MenuSide />
      </div>
      <div className="main_side">
        <div
          className="button"
          style={{
            display: "flex",
            color: "white",
            marginLeft: "84%",
            marginTop: "2%",
            marginBottom: "1%",
          }}
        >
          <Logout />
        </div>
        <Info />
      </div>
      <MusicPlayer />
    </div>
  );
};
export default ArtistPrivateUsers;

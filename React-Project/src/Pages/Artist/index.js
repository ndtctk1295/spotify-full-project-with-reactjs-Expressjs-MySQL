import React from "react";
import AllFunctionButton from "../../Components/Button/AllFunctionButton";
import MenuSide from "../../Components/MenuSide";
import Info from "../../Components/Info";
import MusicPlayer from "../../Components/MusicPlayer";
import "./style.css";

const Artist = () => {
  return (
    <div className="home">
      <div className="menu_side">
        <MenuSide />
      </div>
      <div className="main_side">
        <AllFunctionButton />
        <Info />
      </div>
      <MusicPlayer />
    </div>
  );
};
export default Artist;

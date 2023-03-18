import React from "react";
import { useContext } from "react";
import "./style.css";
import { FaSpotify } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { RiPlayListFill } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../UserContext";
const MenuSide = () => {
  const history = useHistory();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { roleUser, setRoleUser } = useContext(UserContext);
  const { userInfo, setUserInfo } = useContext(UserContext);
  setRoleUser(roleUser);
  setUserInfo(userInfo);
  return (
    <>
      {roleUser === 2 || roleUser === null ? (
        <div className="menu">
          <h1 className="app-name">
            <FaSpotify className="music-icon" /> Music
          </h1>
          <div className="side_content_1">
            <h4 className="side_content-home" onClick={() => history.push("/")}>
              <AiFillHome className="content-icon" /> Home
            </h4>
            <h4 className="side_content-playlist">
              <RiPlayListFill className="content-icon" /> My Playlist
            </h4>
          </div>
          <div className="side_content_2">
            <h1 className="side-content-title">Following Artists</h1>
            <li>Justin Bieber</li>
            <li>Justin Bieber</li>
            <li>Justin Bieber</li>
          </div>
        </div>
      ) : (
        <div className="menu">
          <h1 className="app-name">
            <FaSpotify className="music-icon" /> Music
          </h1>
          <div className="side_content_1">
            <h4 className="side_content-home" onClick={() => history.push("/")}>
              <AiFillHome className="content-icon" /> Home
            </h4>
            <h4 className="side_content-playlist">
              <RiPlayListFill className="content-icon" /> My Playlist
            </h4>
          </div>
          <div className="side_content_2">
            <h1 className="side-content-title">Following Artists</h1>
            <li>Justin Bieber</li>
            <li>Justin Bieber</li>
            <li>Justin Bieber</li>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuSide;

import React from "react";
import "./style.css";
import MusicList from "../Music";
import Avatar from "../../Components/Avatar";
import SignInSignUpButton from "../Button/Sign in - Sign up Button";
import { Link, useHistory } from "react-router-dom";
import Logout from "../Button/Logout Button";
import AllFunctionButton from "../Button/AllFunctionButton";
import { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";

const MainSide = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { roleUser, setRoleUser } = useContext(UserContext);
  const { userInfo, setUserInfo } = useContext(UserContext);
  setRoleUser(roleUser);
  setUserInfo(userInfo);
  // console.log(userInfo.data.username);
  const history = useHistory();
  return (
    <div>
      {/* RENDER BUTTON */}
      <AllFunctionButton />
      {/* RENDER CONTENT */}
      {roleUser === 2 || roleUser === null ? (
        <>
          {userInfo ? (
            <h2 className="main-side-artist-title">
              Welcome {userInfo.data.username} !
            </h2>
          ) : (
            <></>
          )}

          <div className="artists-div">
            <h2 className="avatar-title">Artists</h2>
            <Avatar />
          </div>
          <div className="music-div">
            <h2>Top Trending!</h2>
            <MusicList />
          </div>
        </>
      ) : (
        <>
          <h2 className="main-side-artist-title">
            Welcome {userInfo.data.username} !
          </h2>
          <div className="upload-music-div">
            <h2 className="main-side-artist-title-upload">
              Feels like coming up with a new music?
            </h2>
            <button
              className="upload-music-btn"
              onClick={() => {
                history.push("/upload-music");
              }}
            >
              Upload Your New Music Here
            </button>
          </div>
          <div className="artists-div">
            <h1 className="avatar-title">Check out other artists </h1>
            <Avatar />
          </div>
          <div className="music-div">
            <h2>Top Trending!</h2>
            <MusicList />
          </div>
        </>
      )}
    </div>
  );
};
export default MainSide;

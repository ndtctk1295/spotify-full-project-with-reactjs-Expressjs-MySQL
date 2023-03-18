import React, {
  useState,
  useMemo,
  Children,
  useEffect,
  useContext,
  createContext,
} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import { UserContext } from "./UserContext";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUpListener from "./Pages/SignUpListener";
import SignUpArtist from "./Pages/SignUpArtist";
import PrivateHome from "./Pages/PrivateHome";
import Artist from "./Pages/Artist";
import PrivateArtist from "./Pages/PrivateArtist";
import Reset from "./Pages/Reset";
import UploadMusic from "./Pages/Upload Page";
import ArtistPrivateUsers from "./Pages/Artists-PrivateUsers";
import NotFound from "./Components/NotFound/NotFound";
import UploadMusicPage from "./Pages/UploadMusic";
function App() {
  const history = useHistory();
  const [userId, setUserId] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [artistDetail, setArtistDetail] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [roleUser, setRoleUser] = useState(null);
  const [audioLists, setAudioLists] = useState([]);
  const [artistData, setArtistData] = useState([]);
  const value = useMemo(
    () => ({
      userInfo,
      setUserInfo,
      isLoggedIn,
      setLoggedIn,
      roleUser,
      setRoleUser,
      userId,
      setUserId,
      audioLists,
      setAudioLists,
      artistData,
      setArtistData,
      artistDetail,
      setArtistDetail,
    }),
    [
      userInfo,
      setUserInfo,
      isLoggedIn,
      setLoggedIn,
      roleUser,
      setRoleUser,
      userId,
      setUserId,
      audioLists,
      setAudioLists,
      artistData,
      setArtistData,
      artistDetail,
      setArtistDetail,
    ]
  );
  // console.log(userInfo);
  // console.log(isLoggedIn);
  // console.log(roleUser);
  // test

  // console.log(isLoggedIn);
  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={() => {
          return isLoggedIn === true ? Children : <Redirect to={"/login"} />;
        }}
      />
    );
  };

  useEffect(() => {
    // if isUserLoggedIn turned to true redirect to /home
    if (isLoggedIn === true) {
      history.push("/");
    } else {
      history.push("/");
    }
  }, [history, isLoggedIn]); // triggers when isUserLoggedIn changes

  return (
    <div className="App">
      <UserContext.Provider value={value}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/signup-listener">
            <SignUpListener />
          </Route>

          <Route path="/signup-artist">
            <SignUpArtist />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/artist">
            <Artist />
          </Route>
          <Route path="/upload-music">
            <UploadMusicPage />
          </Route>
          {/* <Route path="/reset" element={<Reset />} /> */}

          {/* <Route path="/" element={<PrivateRoute />}>
          <Route path="/homepage" element={<PrivateHome />} />
          <Route path="/realartist" element={<PrivateArtist />} />
          <Route path="/privateartist" element={<ArtistPrivateUsers />} />
        </Route> */}
          <PrivateRoute path="/private">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/upload-music">
            <UploadMusicPage />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

// console.log(auth.currentUser);
// const PrivateRoute = () => {
//   return isLoggedIn != null ? <Outlet /> : <Navigate to="/login" />;
// };

export default App;

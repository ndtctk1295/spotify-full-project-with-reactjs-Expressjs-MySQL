import "./style.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import image from "../../images/spotify.png";
import { UserContext } from "../../UserContext";
import { Redirect, useHistory } from "react-router-dom";
const Avatar = () => {
  let history = useHistory();
  // const [AvatarLists, setAvatarLists] = useState([]);
  // const AvatarLists = [
  //   {
  //     id: "1",
  //     name: "Ed Sheeran",
  //     image: "https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6",
  //   },
  //   {
  //     id: "2",
  //     name: "Justin Bieber",
  //     image: "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36",
  //   },
  //   {
  //     id: "3",
  //     name: "Taylor Swift",
  //     image: "https://i.scdn.co/image/ab6761610000e5eb5a00969a4698c3132a15fbb0",
  //   },
  // ];
  // setAvatarLists(AvatarData);
  const { artistData, setArtistData } = useContext(UserContext);
  const { artistDetail, setArtistDetail } = useContext(UserContext);
  const getArtistDetail = async () => {
    await axios.get("http://localhost:3002/api/v1/get-artist").then((res) => {
      // console.log(res.data);
      setArtistData(res.data);
    });
  };

  // console.log(artistData);
  getArtistDetail();
  const AvatarList = [];
  for (let i = 0; i < artistData.length; i++) {
    const avatar = artistData[i];
    AvatarList.push(
      <>
        <div className="avatars">
          <li className="avatar-list" key={i + 1}>
            <img
              src={image}
              alt="artist"
              className="profile-picture"
              onClick={() => {
                setArtistDetail(avatar);
                setTimeout(history.push("/artist"), 1000);
              }}
            />
            <AiFillPlayCircle className="play-icon" />
            <h4>{avatar.fullname}</h4>
          </li>
        </div>
      </>
    );
  }
  return <div className="avatar-div">{AvatarList}</div>;
};

export default Avatar;

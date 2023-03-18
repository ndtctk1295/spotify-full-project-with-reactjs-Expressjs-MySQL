import React, { useContext, useState } from "react";
import "./style.css";
import { AiFillPlayCircle } from "react-icons/ai";
import ArtistList from "../List";
import { UserContext } from "../../UserContext";
import axios from "axios";
import image from "../../images/spotify.png";
const Info = () => {
  // const { artistData, setArtistData } = useContext(UserContext);
  const { artistDetail, setArtistDetail } = useContext(UserContext);
  const { audioLists, setAudioLists } = useContext(UserContext);
  const [dataMusic, setDataMusic] = useState([]);
  const [dataMusicToSend, setDataMusicToSend] = useState(null);
  // console.log(artistDetail);

  const playMusic = async () => {
    if (dataMusicToSend !== null) {
      await axios({
        method: "post",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: dataMusicToSend,
        url: "http://localhost:3002/api/v1/play-music",
        responseType: "blob",
      })
        .then((res) => {
          const audioBlob = new Blob([res.data], { type: "audio/mpeg" });
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudioLists([
            {
              name: dataMusicToSend.music_name,
              singer: "abc",
              musicSrc: audioUrl,
            },
          ]);
          // console.log(`Audio URL: ${audioUrl}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const getMusicArtist = async () => {
    await axios({
      method: "post",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: { userid: artistDetail.userid },
      url: "http://localhost:3002/api/v1/get-artist-music",
    }).then((res) => {
      // console.log(res.data);
      setDataMusic(res.data);
    });
  };
  getMusicArtist();
  // console.log(artistDetail.userid);
  // console.log(artistData);
  const songItems = [];
  for (let i = 0; i < dataMusic.length; i++) {
    const song = dataMusic[i];
    songItems.push(
      <div
        className="song-list"
        key={song.musicid}
        onClick={() => {
          setDataMusicToSend({
            musicid: song.musicid,
            music_name: song.music_name,
            music_api: song.music_api,
            userid: song.userid,
          });
          playMusic();
        }}
      >
        <li className="song">
          <h4 className="song-id">{i + 1}</h4>
          <img className="artist-song-img" alt="" src={image} />
          <h4 className="song-name">{song.music_name}</h4>
        </li>
      </div>
    );
  }
  // console.log(songItems);
  return (
    <div className="info">
      <div>
        {/* {ArtistList.map((artist) => (
          <div className="header">
            <img src={artist.picture} alt={artist.name} />
            <h1 className="artist-info-title">{artist.name}</h1>
          </div>
        ))} */}
        <div className="header">
          <img src={image} alt="" />
          <h1 className="artist-info-title">{artistDetail.fullname}</h1>
        </div>
      </div>

      <div className="taskbar">
        <AiFillPlayCircle className="raise" />
        <button className="follow">Follow</button>
      </div>

      <div>{songItems}</div>
    </div>
  );
};
export default Info;

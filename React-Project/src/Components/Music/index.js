import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import "./style.css";
import image from "../../images/spotify.png";
const MusicList = () => {
  const { audioLists, setAudioLists } = useContext(UserContext);
  const [dataMusic, setDataMusic] = useState([]);
  const [dataMusicToSend, setDataMusicToSend] = useState(null);
  const [audioSrc, setAudioSrc] = useState();
  // Get Music To display
  const getMusic = async () => {
    await axios.get("http://localhost:3002/api/v1/music").then((res) => {
      setDataMusic(res.data);
    });
  };
  // console.log(dataMusicToSend);
  getMusic();
  // console.log(dataMusic);
  // console.log(dataMusicToSend);
  // handle play music after clicked
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
              singer: dataMusicToSend.fullname,
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
  // const DropDown = () => {
  //   return ()
  // }
  // render the songs
  const songItems = [];
  for (let i = 0; i < dataMusic.length; i++) {
    const song = dataMusic[i];
    songItems.push(
      <>
        <div
          className="music-div-content"
          key={song.musicid}
          onClick={() => {
            setDataMusicToSend({
              musicid: song.musicid,
              music_name: song.music_name,
              music_api: song.music_api,
              userid: song.userid,
              fullname: song.fullname,
            });
            playMusic();
          }}
        >
          <h3 className="music-list-number">{i + 1}</h3>
          <img src={image} alt="images" className="img-music-song" />
          <h3 className="music-list-content">{song.music_name}</h3>
          <h3 className="music-list-content">{song.fullname}</h3>
        </div>
      </>
    );
  }
  return <>{songItems}</>;
};

export default MusicList;

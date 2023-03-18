import { useContext, useEffect } from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import { UserContext } from "../../UserContext";

// const audioLists = [
//   {
//     name: "MIA",
//     singer: "Drake",
//     cover:
//       "https://firebasestorage.googleapis.com/v0/b/cijs77---spotify-api.appspot.com/o/Drake%2FDrake.jfif?alt=media&token=67a85e2b-0d4d-4254-88fb-98bd9098ca4e",
//     musicSrc:
//       "https://firebasestorage.googleapis.com/v0/b/cijs77---spotify-api.appspot.com/o/Drake%2FBAD_BUNNY_x_DRAKE_M%C3%8DA_Video_Oficial_.mp3?alt=media&token=76d31761-7d93-4ce2-b2f1-986619f0d0a6",
//   },
//   {
//     name: "Dorost Nemisham",
//     singer: "Sirvan Khosravi",
//     cover:
//       "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
//     musicSrc:
//       "https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3",
//   },
// ];

export default function MusicPlayer() {
  const { audioLists, setAudioLists } = useContext(UserContext);

  return (
    <div className="App">
      <ReactJkMusicPlayer
        audioLists={audioLists}
        showMediaSession
        autoPlay={false}
        showDownload={false}
        showReload={false}
        defaultPosition={{ bottom: "1%", right: "1%" }}
        mode="full"
      />
    </div>
  );
}

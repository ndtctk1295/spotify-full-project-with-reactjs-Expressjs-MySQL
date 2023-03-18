import MenuSide from "../../Components/MenuSide";
import MainSide from "../../Components/MainSide";
import MusicPlayer from "../../Components/MusicPlayer";
import UploadMusicSide from "../../Components/UploadMusicSide";
const UploadMusicPage = () => {
  return (
    <div className="home">
      <div className="menu_side">
        <MenuSide />
      </div>
      <div className="main_side">
        <UploadMusicSide />
      </div>
      <MusicPlayer />
    </div>
  );
};

export default UploadMusicPage;

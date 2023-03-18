import "./style.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../UserContext";
const UploadMusicSide = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState();
  const [musicName, setMusicName] = useState();
  const { userId, setUserId } = useContext(UserContext);
  const { userInfo, setUserInfo } = useContext(UserContext);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleInputChange = (e) => {
    setMusicName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("music_file", selectedFile);
    formData.append("userid", JSON.stringify(userId));
    formData.append("musicName", musicName);
    formData.append("fullname", userInfo.data.fullname);
    axios({
      method: "post",
      headers: { "content-type": "multipart/form-data" },
      data: formData,
      url: "http://localhost:3002/api/v1/upload-music-file",
    })
      .then((res) => {
        // console.log(res);
        console.log(res);
        setMessage(res.data.message);
      })
      .catch((err) => {
        setMessage("Something went wrong, please try again");
      });
  };
  return (
    <div>
      <h1 className="upload-music-form-title">Upload your new music here</h1>
      <form onSubmit={handleSubmit} className="upload-music-form">
        <div>
          <div>
            <label className="song-name-label">
              What is your new song's name?
            </label>
          </div>
          <input
            type="text"
            placeholder="Your Song'Name"
            onChange={handleInputChange}
            value={musicName}
          ></input>
        </div>
        <div className="file-submit">
          <input type="file" className="file" onChange={handleFileChange} />
          <input type="submit" value="Upload File" />
        </div>
        {!message ? <></> : <div className="message-div">{message}</div>}
      </form>
    </div>
  );
};
export default UploadMusicSide;

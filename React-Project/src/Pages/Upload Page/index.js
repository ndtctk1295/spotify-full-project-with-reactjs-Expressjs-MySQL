import { useState } from "react";
import { UploadFile } from "../../Configs/Upload-Firebase/uploadfiles";

function UploadMusic() {
  const [file, setFile] = useState();
  return (
    <div>
      <input
        type="file"
        name="file"
        onChange={(evt) => {
          console.log(evt.target.files[0]);
          setFile(evt.target.files[0]);
        }}
      />
      <button
        onClick={() => {
          UploadFile("test", file, (data) => {
            // test file must change to para respect to user id
            console.log(data);
          });
        }}
      >
        up
      </button>
    </div>
  );
}

export default UploadMusic;

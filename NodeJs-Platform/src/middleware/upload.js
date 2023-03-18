var appRoot = require("app-root-path");
import { log } from "console";
import multer from "multer";
import path from "path";
// import homeController from "../controllers/homeControllers";
// import userid from "../controllers/homeControllers";

// console.log(homeController.handleUploadFileMusicFile);
// console.log(userid);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // const userid = req.body.userid;
    // console.log(req);

    cb(null, appRoot + `/src/public/`);
  },

  // By default, multer removes file extensions so let's add them back
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
  },
});
// path.extname(file.originalname)
// console.log(multer);
const imageFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    console.log(req);
    req.fileValidationError = "Only image files are allowed!";
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

const musicFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(mp3|WMA|WAV|FLAC|AAC|OGG|AIFF|ALAC)$/)) {
    req.fileValidationError = "Only mp3 files are allowed!";
    return cb(new Error("Only mp3 files are allowed!"), false);
  }
  cb(null, true);
};
export let uploadMusic = multer({
  storage: storage,
  fileFilter: musicFilter,
});

// export let uploadMusic = multer({
//   dest: appRoot + `/src/public/`,
//   fileFilter: musicFilter,
// });
export let uploadImage = multer({ storage: storage, fileFilter: imageFilter });

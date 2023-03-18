import express from "express";
import homeController from "../controllers/homeControllers";
import bodyParser from "body-parser";
import { uploadImage } from "../middleware/upload";
import { uploadMusic } from "../middleware/upload";
// import { uploadMusic } from "../controllers/homeControllers";
let router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// console.log(uploadMusic);
const initAPIRoute = (app) => {
  router.get("/users", homeController.getAllUsers);
  router.get("/get-artist", homeController.getAllArtist);
  router.get("/music", homeController.handleGetMusic);
  router.post("/get-artist-music", homeController.getMusicArtist);
  router.post("/play-music", homeController.handlePlayMusic);
  router.post("/create-listener", homeController.createNewListener);
  router.post("/create-artist", homeController.createNewArtist);
  router.post("/login", urlencodedParser, homeController.logInUser);
  // router.post(
  //   "/upload-music-pic",
  //   uploadImage.single("music_pic"),
  //   homeController.handleUploadFileMusicPhoto
  // );
  router.post(
    "/upload-music-file",
    uploadMusic.single("music_file"),
    homeController.handleUploadFileMusicFile
  );
  // router.post(
  //   "/upload-multiple-images",
  //   upload.array("multiple_images", 10),
  //   homeController.handleUploadMultipleFiles
  // );

  return app.use("/api/v1/", router);
};
export default initAPIRoute;

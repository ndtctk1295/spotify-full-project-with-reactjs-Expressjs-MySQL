import adminController from "../controllers/adminController";
import express from "express";

let router = express.Router();
const initAdminPage = (app) => {
  router.get("/", adminController.getHomepage);
  router.get("/details/user/:id", adminController.getDetailPage);
  router.get("/get-user-id", adminController.getArtistID);
  return app.use("/", router);
};
export default initAdminPage;

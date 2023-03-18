import express from "express";
import initAPIRoute from "./route/api";
import configViewEngine from "../src/configs/viewEngine";
import initAdminPage from "../src/route/admin";
// import initCreateStorageDataFile from "../src/middleware/createStorageDataFile";
import bodyParser from "body-parser";
import cors from "cors";
require("dotenv").config();
global.__basedir = __dirname;
const app = express();
const port = process.env.PORT || 3002;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/*+json" }));

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));

// parse an HTML body into a string
app.use(bodyParser.text({ type: "text/html" }));

// init web route
initAPIRoute(app);

// init Admin Page:
initAdminPage(app);

// init CreateStorageFileData:
// initCreateStorageDataFile(app);

// setup view engine
configViewEngine(app);

app.listen(port, () => {
  console.log(`The server is now running on port ${port}`);
});

import pool from "../configs/connectDB";
import mysql from "mysql2/promise";
import bcrypt from "bcrypt";
import upload from "../middleware/upload";
import multer from "multer";
import { log } from "console";
const fs = require("fs");
var appRoot = require("app-root-path");
// Get All Users
let getAllUsers = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM `users`");
  console.log(rows);
  return res.status(200).json({
    message: "ok",
    data: rows,
  });
};

// Create New Listener
let createNewListener = async (req, res) => {
  let { username, password, email, fullname, phonenumber, gender, roleid } =
    req.body;

  const isEmail = await pool.execute("SELECT * FROM users where email = ?", [
    email,
  ]);

  const isUsername = await pool.execute(
    "SELECT * FROM users where username = ?",
    [username]
  );

  if (isUsername[0][0]) {
    console.log(isUsername[0][0]);
    return res.status(200).json({
      message: "username is already exists, please try different one",
    });
  } else if (isEmail[0][0]) {
    console.log(isEmail[0][0]);
    return res.status(200).json({
      message: "email is already exists, please try different one",
    });
  } else if (!username) {
    return res.status(200).json({
      message: "You must type in your username",
    });
  } else if (!email) {
    return res.status(200).json({
      message: "You must type in your email",
    });
  } else if (!password) {
    return res.status(200).json({
      message: "You must type in your password",
    });
  } else {
    console.log(data);
    const encryptedPassword = await bcrypt.hash(password, 10);
    console.log(encryptedPassword);
    const data = await pool.execute(
      "insert into users(username, password, email, fullname, phonenumber, gender ,roleid) values (?, ?, ?, ?, ?, ?, ?)",
      [
        username,
        encryptedPassword,
        email,
        fullname,
        phonenumber,
        gender,
        roleid,
      ]
    );
    return res.send(data[0][0]);
  }
};
//Create New Artist
let createNewArtist = async (req, res) => {
  let { username, password, email, fullname, phonenumber, gender, roleid } =
    req.body;

  const isEmail = await pool.execute("SELECT * FROM users where email = ?", [
    email,
  ]);

  const isUsername = await pool.execute(
    "SELECT * FROM users where username = ?",
    [username]
  );

  if (isUsername[0][0]) {
    console.log(isUsername[0][0]);
    return res.status(200).json({
      message: "username is already exists, please try different one",
    });
  } else if (isEmail[0][0]) {
    console.log(isEmail[0][0]);
    return res.status(200).json({
      message: "email is already exists, please try different one",
    });
  } else if (!username) {
    return res.status(200).json({
      message: "You must type in your username",
    });
  } else if (!email) {
    return res.status(200).json({
      message: "You must type in your email",
    });
  } else if (!password) {
    return res.status(200).json({
      message: "You must type in your password",
    });
  } else {
    console.log(data);
    const encryptedPassword = await bcrypt.hash(password, 10);
    const data = await pool.execute(
      "insert into users(username, password, email, fullname, phonenumber, gender ,roleid) values (?, ?, ?, ?, ?, ?, ?)",
      [
        username,
        encryptedPassword,
        email,
        fullname,
        phonenumber,
        gender,
        roleid,
      ]
    );

    return res.send(data[0][0]);
  }
};
// Login User
let logInUser = async (req, res) => {
  let { username, password } = req.body;
  // code cu

  const data = await pool.execute("SELECT * FROM users where username = ?", [
    username,
  ]);
  const dataUserId = await pool.execute(
    "SELECT userid FROM users where username = ?",
    [username]
  );
  console.log(dataUserId[0][0]);
  // const comparePassword = await bcrypt.compare(password);
  // console.log(data[0][0]);
  if (data[0][0] && (await bcrypt.compare(password, data[0][0].password))) {
    res.send(data[0][0]);
    // console.log("case 2 tat ca da dung");
    // console.log(data[0][0]);
  } else {
    res.status(200).json({ message: "Incorrect username or password" });
    console.log("case 3 sai mk");
  }
};
// handle upload single file music picture
// let handleUploadFileMusicPhoto = async (req, res) => {
//   let { userid, fullname } = req.body;
//   if (req.fileValidationError) {
//     return res.send(req.fileValidationError);
//   } else if (!req.file) {
//     return res.send("Please select an image to upload");
//   }

//   res.send(
//     `You have uploaded this image: <hr/><img src="/image/${req.file.filename}" width="500"><hr /><a href="/upload">Upload another image</a>`
//   );
//   // });
// };
// handle upload single file music file
let handleUploadFileMusicFile = async (req, res) => {
  let { userid, musicName, fullname } = req.body;
  let file = req.file;
  let date = Date.now();
  // insert music data to DB
  const data = await pool.execute(
    "insert into uploaded_music(music_name, userid, fullname ,music_api, date_upload ) values  (?, ?, ?, ?, ?)",
    [musicName, userid, fullname, req.file.filename, date]
  );
  // store music file in server
  // Create a new directory for the user if it doesn't exist
  const userDir = appRoot + `/src/public/${userid}`;
  if (!fs.existsSync(userDir)) {
    fs.mkdirSync(userDir);
  }
  // Move the uploaded file to the user's directory
  fs.renameSync(file.path, `${userDir}/${file.filename}`);
  //handle response
  if (req.fileValidationError) {
    return res.send(req.fileValidationError);
  } else if (!req.file) {
    return res.send("Please select an mp3 file to upload");
  }
  console.log(req.file);
  res.status(200).json({
    message: "You have uploaded successfully",
  });
  // });
};

// handle upload multiple files
// let handleUploadMultipleFiles = async (req, res) => {
//   if (req.fileValidationError) {
//     return res.send(req.fileValidationError);
//   } else if (!req.files) {
//     return res.send("Please select an image to upload");
//   }

//   let result = "You have uploaded these images: <hr />";
//   const files = req.files;

//   let index, len;
//   //files[index].path
//   // Loop through all the uploaded images and display them on frontend
//   for (index = 0, len = files.length; index < len; ++index) {
//     result += `<img src="/image/${files[index].filename}" width="300" style="margin-right: 20px;">`;
//   }
//   result += '<hr/><a href="/upload">Upload more images</a>';
//   res.send(result);
// };
// handle get music
let handleGetMusic = async (req, res) => {
  const [data] = await pool.execute("select * from uploaded_music");
  res.send(data);
};
// handle play music
let handlePlayMusic = async (req, res) => {
  const { musicid, music_name, music_api, userid } = req.body;
  // console.log(req.body);
  // console.log(musicid);
  const file = `${appRoot}/src/public/${userid}/${music_api}`;
  const stat = fs.statSync(file);
  res.writeHead(200, {
    "Content-Type": "audio/mpeg",
    "Content-Length": stat.size,
  });
  // console.log(file);
  const readStream = fs.createReadStream(file);
  // console.log(readStream);
  readStream.pipe(res);
};
let getAllArtist = async (req, res) => {
  const data = await pool.execute(
    "select userid, username, fullname from users where roleid = 1"
  );
  // console.log(data);
  res.send(data[0]);
};
let getMusicArtist = async (req, res) => {
  const { userid } = req.body;
  const data = await pool.execute(
    "select * from uploaded_music where userid = ?",
    [userid]
  );
  // console.log(data);
  res.send(data[0]);
};

let handlePlayMusicArtist = async (req, res) => {
  const { musicid, music_name, music_api, userid } = req.body;
  // console.log(req.body);
  // console.log(musicid);
  const file = `${appRoot}/src/public/${userid}/${music_api}`;
  const stat = fs.statSync(file);
  res.writeHead(200, {
    "Content-Type": "audio/mpeg",
    "Content-Length": stat.size,
  });
  // console.log(file);
  const readStream = fs.createReadStream(file);
  // console.log(readStream);
  readStream.pipe(res);
};
module.exports = {
  createNewListener,
  getAllUsers,
  logInUser,
  createNewArtist,
  // handleUploadMultipleFiles,
  // handleUploadFileMusicPhoto,
  handleUploadFileMusicFile,
  handleGetMusic,
  handlePlayMusic,
  getAllArtist,
  getMusicArtist,
  handlePlayMusicArtist,
};

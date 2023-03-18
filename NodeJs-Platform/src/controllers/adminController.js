import { log } from "console";
import pool from "../configs/connectDB";
const fs = require("fs");
let getHomepage = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM users");
  // console.log(rows);
  return res.render("index.ejs", { dataUser: rows });
};

let getDetailPage = async (req, res) => {
  let userId = req.params.id;
  console.log(req);
  let [user] = await pool.execute(`select * from users where userid = ?`, [
    userId,
  ]);
  return res.send(JSON.stringify(user));
};
let getArtistID = async (req, res) => {
  const [rows, fields] = await pool.execute(
    "SELECT `userid` FROM `users` where roleid = 1"
  );
  // console.log(rows[0].userid);
  for (let i = 0; i < rows.length; i++) {
    const path = `./src/public/${rows[i].userid}`;
    fs.access(path, (error) => {
      // To check if given directory
      // already exists or not
      if (error) {
        // If current directory does not exist then create it
        fs.mkdir(path, { recursive: true }, (error) => {
          if (error) {
            console.log(error);
          } else {
            console.log("New Directory created successfully !!");
          }
        });
      } else {
        console.log("Given Directory already exists !!");
      }
    });
  }

  return res.status(200).json({
    message: "ok",
    data: rows,
  });
};

module.exports = {
  getHomepage,
  getDetailPage,
  getArtistID,
};

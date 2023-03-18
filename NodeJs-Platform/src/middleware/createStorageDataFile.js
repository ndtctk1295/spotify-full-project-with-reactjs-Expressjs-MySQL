// const fs = require("fs");
// import pool from "../configs/connectDB";
// // Multilevel directory
// const path = `../public/`;

// const initCreateStorageDataFile = () => {
//   let getAllUsers = async (req, res) => {
//     const [rows, fields] = await pool.execute("SELECT `userid` FROM `users`");
//     console.log(rows);
//   };
// };

// fs.access(path, (error) => {
//   // To check if given directory
//   // already exists or not
//   if (error) {
//     // If current directory does not exist then create it
//     fs.mkdir(path, { recursive: true }, (error) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("New Directory created successfully !!");
//       }
//     });
//   } else {
//     console.log("Given Directory already exists !!");
//   }
// });

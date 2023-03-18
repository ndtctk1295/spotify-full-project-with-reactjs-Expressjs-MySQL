import pool from "../configs/connectDB";

let handleUserLogin = (email, password) => {
  // return new Promise ( async(resolve, reject) => {
  //     try{
  //         let isExist =
  //     }
  //     catch()
  // })
  let checkUserEmail = async (email) => {
    //   return new Promise(async (resolve, reject) => {
    //     try {
    //         let user = await
    //     } catch (e) {
    //       reject(e);
    //     }
    //   });
    const isEmail = await pool.execute("SELECT * FROM users where email =", [
      email,
    ]);
    console.log(isEmail);
  };
};

module.exports = {
  handleUserLogin,
};

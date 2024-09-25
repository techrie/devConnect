const jwt = require("jsonwebtoken");
const User = require("../models/user");

//logic of checking if a request is authorized

// const adminAuth = (req, res, next) => {
//   const token = "xyz";
//   const isAuthorized = token === "xyz";
//   if (!isAuthorized) {
//     res.status(401).send("Unauthorized!");
//   } else {
//     next();
//   }
// };

const userAuth = async (req, res, next) => {
  //Read the token from request cookies
  //validate the token
  //find the username

  try {
    const { token } = req.cookies;

    if (!token) {
      throw new Error("Invalid token!!!!!");
    }
    const decodedData = await jwt.verify(token, "DEV@Connect!23");

    const { _id } = decodedData;

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not valid!!!!");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("Error : " + err.message);
  }
};

module.exports = { userAuth };

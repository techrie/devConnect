const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://poojitham255:U9wM94SUnnBCUdti@nodecourse.id077.mongodb.net/devConnect"
  );
};
module.exports = connectDB;

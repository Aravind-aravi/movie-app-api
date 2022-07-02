const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    const mongoURI =
      "mongodb+srv://user:user@cluster0.xdi1p.mongodb.net/movieDB?retryWrites=true&w=majority";
    await mongoose.connect(mongoURI);
  } catch (error) {
    console.log(error, "db");
  }
};
module.exports = connectToDB;

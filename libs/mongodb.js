/** @format */

import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://gpsmartcodes:Jabil%401234@myauth.kaymlns.mongodb.net/motorcar"
    );
    console.log("Connected to MongoDB", process.env.MONGODB_URI);
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;

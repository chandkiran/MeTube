import mongoose from "mongoose";
import { DB_name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectioninstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_name}`
    );
    console.log(`Mongodb connected to ${connectioninstance.connection.host}`);
  } catch (error) {
    console.log("Mongodb connection error", error);
    process.exit(1);
  }
};
export default connectDB;

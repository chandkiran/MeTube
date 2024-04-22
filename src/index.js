import express from "express";
const app = express();
import connectDB from "./db/db.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./env"
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    });
  })

  .catch((error) => {
    console.log("MOngodb connection failed", error);
  });

// require("dotenv").config();

/*;(async()=>{
try{
await mongoose.connect(`${process.env.MONGODB_URL}/${DB_name}`);
app.on("error",(error)=>{
    cosole.log("Error is ",error);
    throw error
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
}
catch(error){
    console.log(error)
}
})()/ */

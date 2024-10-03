import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";



dotenv.config();
const app = express()
const port = process.env.PORT || 4000;
const URI=process.env.mongoURI;
app.use(cors());
app.use(express.json());
mongoose.connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error:", error));

  app.use("/book",bookRoute)
  app.use("/user",userRoute)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

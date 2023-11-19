import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";

dotenv.config();

// mongoose
//   .connect(process.env.MONGO)
//   .then(() => {
//     console.log("Server connected to DataBase");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port at http://localhost:3000");
});

app.get("/", (req, res) => {
  res.send({
    message: "Hello Paul",
  });
});

app.use("/api/user", userRouter);

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

// Create a mongo DB connection
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Server connected to DataBase");
  })
  .catch((err) => {
    console.log(err);
  });

// Initialize an express app
const app = express();

// Needed when sending data to the server as JSON
app.use(express.json());

// Add a listener to the server.
app.listen(3000, () => {
  console.log("Server is running on port at http://localhost:3000");
});

app.get("/", (req, res) => {
  res.send({
    message: "Hello Paul",
  });
});

// import the routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

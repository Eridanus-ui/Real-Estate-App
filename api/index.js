import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import cookieParser from "cookie-parser";
import path from "path";

// Initialize dotenv
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

const _dirname = path.resolve();

// Initialize an express app
const app = express();

// Itialize cookier paser
app.use(cookieParser());

// Needed when sending data to the server as JSON
app.use(express.json());

// Add a listener to the server.
app.listen(3000, () => {
  console.log("Server is running on port at http://localhost:3000");
});

// import the routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

app.use(express.static(path.join(_dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(_dirname, "client", "dist", "index.html"));
});

// Create middleware to handle errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

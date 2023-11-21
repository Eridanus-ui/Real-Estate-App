import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // Hash the password for security purposes
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  // Save the user in the DB
  try {
    await newUser.save();
    res.status(201).json("User created successfully!!");
  } catch (error) {
    next(error);
  }
};

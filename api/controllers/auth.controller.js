import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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
    next(errorHandler(409, "User already exists"));
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword)
      return next(errorHandler(405, "Wrong credentials, try again"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {});
    res
      .cookie("acces_token", token, { httpOnly: true })
      .status(200)
      .json(validUser);
  } catch (error) {
    next(error);
  }
};

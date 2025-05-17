import userModel from "../models/userSchema.js";
import bcrypt from "bcrypt";



export const LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        message: "Required fields are missing...",
      });
    }

    const emailExist = await userModel.findOne({ email });

    if (!emailExist) {
      res.status(400).json({
        message: "Invalid email or password",
      });
    }

    console.log(emailExist);

    const comparePassword = await bcrypt.compare(password, emailExist.password);

    if (!comparePassword) {
      res.status(400).json({
        message: "Invalid email & password",
      });
    }

    res.status(200).json({
      message: "login successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
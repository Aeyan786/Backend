import userModel from "../models/userSchema.js";
import bcrypt from "bcrypt";


export const SignupController = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
          return  res.status(400).json({ 
                message: "Required fields are missing...",
            }); 
        }

        const emailExist = await userModel.findOne({ email });

        if (emailExist !== null) {
         return   res.status(404).json({
                message: "email already exist..",
            });
        }

        const encrptPassword = await bcrypt.hash(password, 10);

        console.log(encrptPassword);


        let userObj = {
            fullName,
            email,
            password: encrptPassword,
        };

        const saveData = await userModel.create(userObj);

        res.status(200).json({
            message: "signup successfully..",
            saveData,
        });
    } catch (error) {
        console.log(error);
    }
};
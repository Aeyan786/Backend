import express from "express"
import { SignupController } from "../controller/SignupController.js"
import { LoginController } from "../controller/LoginController.js"

const router = express.Router()

router.route("/api/signup").post(SignupController)
router.route("/api/login").post(LoginController)

export default router
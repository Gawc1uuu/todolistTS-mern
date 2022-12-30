import express from "express";
import {
  signupController,
  loginController,
} from "../controllers/usersControllers";
const router = express.Router();

router.post("/login", loginController);

router.post("/signup", signupController);

export default router;

import express from "express";

// import userController from "../controller/userController.js"
import { signup, login } from "../controller/userController.js";
const userRoute = express.Router();


// user router
userRoute.post("/signup",signup);
userRoute.post("/login",login);

export default userRoute;
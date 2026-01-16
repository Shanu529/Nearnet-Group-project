
import userRoute from "./userRoute.js"
import express from "express";
const mainRoute = express.Router();

mainRoute.use(userRoute)

export default mainRoute
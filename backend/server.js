

import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js"
import mainRoute from "./routes/entryPointRoute.js"
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/v1/user/",mainRoute)
app.listen(PORT, () => {
    console.log(`sever strted at Port ${PORT}`);

})
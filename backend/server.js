

import express from "express";
import dotenv from "dotenv";

// import userRoute from "./routes/userRoute.js"
import mainRoute from "./routes/entryPointRoute.js"
import resourceRoute from "./routes/resourceRoute.js";
import connectDB from "./db/db.js";
const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// User Auth route
app.use("/api/v1/user/",mainRoute);
// resources route
app.use("/api/v1/resources/",resourceRoute);
connectDB()


app.listen(PORT, () => {
    console.log(`sever strted at Port ${PORT}`);

})
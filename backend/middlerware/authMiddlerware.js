

import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";

const authMiddlerware = async (req, res, next) => {

    try {

        // check Authorization header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Authorization token missing"
            });
        }

        //Extract token
        const token = authHeader.split(" ")[1];

        // vaarify token
        const decode = jwt.verify(token, process.env.JWT_KEY);

        // find user in db
        const user = await userModel.findById(decode.userId);

        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }

        req.user = {
            userId: user._id,
            location: user.location,
        }

        next();
    } catch (error) {
        console.error("Auth Middleware Error:", error);
        return res.status(401).json({
            message: "Invalid or expired token",
        });
    }
}

export default authMiddlerware
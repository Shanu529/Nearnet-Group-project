
import userModel from "../model/userModel.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    const { userName, email, password, lat, lng } = req.body;
    try {
        if (!userName || !email || !password || lat == null || lng == null) {
            return res.status(400).json({ message: "All fields including location are required" })
        }

        // check if user already exists
        const userExists = await userModel.findOne({ email });
        if (userExists) {
            return res.status(409).json({ message: "User Already Exists" })
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user
        const user = await userModel.create({
            userName,
            email,
            password: hashedPassword,
            location: {
                type: "Point",
                coordinates: [lng, lat],
            },
            locationUpdatedAt: new Date(),
        })

        // generate token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, { expiresIn: "7d" })

        res.status(200).json({
            message: "User registered successfully",
            user: {
                token,
                id: user._id,
                userName: user.userName,
                email: user.email,
                locationUpdatedAt: user.locationUpdatedAt,
            },
        })
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({
            message: "Internal server error",
        });
    }

}

export const login = async () => {
    try {
        const { email, password, } = req.body;
        // Validation
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required",
            });
        }

        // check user exists or not
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        // compare
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        // generate token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, { expiresIn: "7d" });

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                userName: user.userName,
                email: user.email,
                locationUpdatedAt: user.locationUpdatedAt,
            },
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({
            message: "Internal server error",
        });
    }

}
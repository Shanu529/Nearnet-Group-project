

import express from "express";
import {createResource} from "../controller/resourceController.js";
import authMiddlerware from "../middlerware/authMiddlerware.js"

const resourceRoute = express.Router();


resourceRoute.post("/",authMiddlerware,createResource )

export default resourceRoute;
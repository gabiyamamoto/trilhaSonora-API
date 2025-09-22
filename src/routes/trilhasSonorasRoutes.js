import express from "express";
import { getAllTrilhas } from "../controllers/trilhasSonorasController.js";

const router = express.Router();

router.get("/", getAllTrilhas);

export default router;
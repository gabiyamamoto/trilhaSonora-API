import express from "express";
import { getAllTrilhas, getTrilhaByld } from "../controllers/trilhasSonorasController.js";

const router = express.Router();

router.get("/", getAllTrilhas);
router.get("/:id", getTrilhaByld);

export default router;
import express from "express";
import { getAllTrilhas, getTrilhaByld, createTrilha, deleteTrilha } from "../controllers/trilhasSonorasController.js";

const router = express.Router();

router.get("/", getAllTrilhas);
router.get("/:id", getTrilhaByld);
router.post("/", createTrilha);
router.delete("/:id", deleteTrilha);

export default router;
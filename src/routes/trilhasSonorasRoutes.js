import express from "express";
import { getAllTrilhas, getTrilhaByld, createTrilha, deleteTrilha, updateTrilha } from "../controllers/trilhasSonorasController.js";

const router = express.Router();

router.get("/", getAllTrilhas);
router.get("/:id", getTrilhaByld);
router.post("/", createTrilha);
router.delete("/:id", deleteTrilha);
router.put("/:id", updateTrilha);

export default router;
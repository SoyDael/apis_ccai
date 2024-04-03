import { Router } from "express";
import { PostProyecto, GetProyectos } from "../controllers/proyecto.controller.js";
import { verifyToken } from "../controllers/auth.controller.js";

const router = Router();

router.post("/registroProyecto", verifyToken, PostProyecto);

router.get("/consultaProyectos", verifyToken, GetProyectos);

export default router;
import { Router } from "express";
import { postPrograma, getProgramas } from "../controllers/programa.controller.js";
import { verifyToken } from "../controllers/auth.controller.js";

const router = Router();

router.post("/registroPrograma", verifyToken,postPrograma);

router.get("/consultaProgramas", verifyToken, getProgramas);

export default router;
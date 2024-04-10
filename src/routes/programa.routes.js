import { Router } from "express";
import { postPrograma, getProgramas, getProgramaByCorreo } from "../controllers/programa.controller.js";
import { verifyToken } from "../controllers/auth.controller.js";

const router = Router();

router.post("/registroPrograma", verifyToken,postPrograma);

router.get("/consultaProgramas", verifyToken, getProgramas);

router.get("/consultaPrograma/:estudiante_correo", verifyToken, getProgramaByCorreo);

export default router;
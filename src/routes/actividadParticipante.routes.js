import Router from "express";
import { PostActividad, GetActividad, GetActividadById } from "../controllers/actividadParticipante.js";
import { verifyToken } from "../controllers/auth.controller.js";

const router = Router();

router.post("/registroActividad", verifyToken, PostActividad);
router.get("/consultaActividad", verifyToken ,GetActividad);
router.get("/consultaActividadPorID/:correo", verifyToken, GetActividadById);

export default router;
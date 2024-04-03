import { Router } from "express";
import { PostParticipante, GetParticipante, proyectoPorAlumnoInterno, participantePorProyecto } from "../controllers/participante.controller.js";
import { verifyToken } from "../controllers/auth.controller.js";

const router = Router();

router.post("/registroParticipante", verifyToken ,PostParticipante);
router.get("/consultaParticipante", verifyToken, GetParticipante);
router.get("/consultaParticipantePorID/:correo", verifyToken, proyectoPorAlumnoInterno);
router.get("/consultaParticipantePorProyecto/:correo", verifyToken, participantePorProyecto);

export default router;
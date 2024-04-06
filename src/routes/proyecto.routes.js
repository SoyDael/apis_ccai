import { Router } from "express";
import { PostProyecto, GetProyectos, proyectosInvestigador, proyectoPorId, participantePorProyecto } from "../controllers/proyecto.controller.js";
import { verifyToken } from "../controllers/auth.controller.js";

const router = Router();

router.post("/registroProyecto", verifyToken, PostProyecto);

router.get("/consultaProyectos", verifyToken, GetProyectos);

router.get("/proyectosInvestigador/:correo", verifyToken, proyectosInvestigador)

router.get("/proyectoPorId/:id_proyecto", verifyToken, proyectoPorId)

router.get("/participantePorProyecto/:proyecto_id", verifyToken, participantePorProyecto)

export default router;
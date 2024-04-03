import { Router } from "express";
import { registroEstudiante, consultaEstudiante, perfilEstudiante, actualizarPerfilAlumno, navbarEstudiante} from "../controllers/estudiante.controllers.js";
import { verifyToken } from "../controllers/auth.controller.js";

const router = Router();

router.post('/registroEstudiante', verifyToken, registroEstudiante);
router.get('/consultaEstudiante', verifyToken, consultaEstudiante);
router.get('/perfilEstudiante/:correo', verifyToken, perfilEstudiante);
router.patch('/actualizarPerfilEstudiante/:correo', verifyToken, actualizarPerfilAlumno);
router.get('/navbarEstudiante/:correo', verifyToken, navbarEstudiante);

export default router;

import { Router } from "express";
import { verifyToken } from "../../controllers/auth.controller.js";
import { registroEstanciaResidente, consultaEstanciaResidente, actualizarPerfilEstancia, perfilEstanciaResidente } from "../../controllers/estancias/estanciaResidente.controller.js";

const router = Router();

router.post('/registroEstanciaResidente', verifyToken, registroEstanciaResidente);
router.get('/consultaEstanciaResidente', verifyToken, consultaEstanciaResidente);
router.patch('/actualizarPerfilEstancia/:correo', verifyToken, actualizarPerfilEstancia);
router.get('/perfilEstanciaResidente/:correo', verifyToken, perfilEstanciaResidente);

export default router;
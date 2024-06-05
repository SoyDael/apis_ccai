import { Router } from "express";
import { verifyToken } from "../../controllers/auth.controller.js";
import { registroEstanciaResidente, consultaEstanciaResidente } from "../../controllers/estancias/estanciaResidente.controller.js";

const router = Router();

router.post('/registroEstanciaResidente', verifyToken, registroEstanciaResidente);
router.get('/consultaEstanciaResidente', verifyToken, consultaEstanciaResidente);

export default router;
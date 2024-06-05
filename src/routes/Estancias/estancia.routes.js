import { Router } from "express";
import { verifyToken } from "../../controllers/auth.controller.js";
import { registroEstancias, consultaEstancias, perfilEstancia } from "../../controllers/estancias/estancia.controller.js";

const router = Router();

router.post('/registroEstancias', verifyToken, registroEstancias);
router.get('/consultaEstancias', verifyToken, consultaEstancias);
router.get('/perfilEstancia/:correo', verifyToken, perfilEstancia);

export default router;
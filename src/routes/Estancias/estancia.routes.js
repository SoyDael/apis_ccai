import { Router } from "express";
import { verifyToken } from "../../controllers/auth.controller.js";
import { registroEstancias, consultaEstancias, perfilEstancia, ListadoEstancias, consultaEstanciaPorCorreo } from "../../controllers/estancias/estancia.controller.js";

const router = Router();

router.post('/registroEstancias', verifyToken, registroEstancias);
router.get('/consultaEstancias', verifyToken, consultaEstancias);
router.get('/perfilEstancia/:correo', verifyToken, perfilEstancia);
router.get('/listadoEstancias', verifyToken, ListadoEstancias);
router.get('/consultaEstancia/:residente_correo', verifyToken, consultaEstanciaPorCorreo)

export default router;
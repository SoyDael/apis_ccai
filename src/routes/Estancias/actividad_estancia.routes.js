import { Router } from "express";
import { verifyToken } from "../../controllers/auth.controller.js";
import { registroActividadEstancias, consultarActividadEstancias, consultarActividadEstanciaPorCorreo } from "../../controllers/estancias/actividad_estancia.controller.js";

const router = Router();

router.post('/registroActividadEstancias', verifyToken, registroActividadEstancias);
router.get('/consultarActividadEstancias', verifyToken, consultarActividadEstancias);
router.get('/consultarActividadEstanciaPorCorreo/:correo', verifyToken, consultarActividadEstanciaPorCorreo);

export default router;
import { Router } from "express";
import { verifyToken } from "../../controllers/auth.controller.js";
import { registroEstancias, consultaEstancias, participanteEstanciaPorCorreo, participantePorProyecto
    , participanteEstanciaProyecto
 } from "../../controllers/estancias/participanteEstancia.controller.js";

const router = Router();

router.post('/registroParticipanteEstancias', verifyToken, registroEstancias);
router.get('/consultaParticipantesEstancias', verifyToken, consultaEstancias);
router.get('/participanteEstanciaPorCorreo/:correo_residente_estancia', verifyToken, participanteEstanciaPorCorreo);
router.get('/participanteEstanciaPorProyecto/:correo', verifyToken, participantePorProyecto);
router.get('/participanteEstanciaProyecto/:id_proyecto', verifyToken, participanteEstanciaProyecto);

export default router;
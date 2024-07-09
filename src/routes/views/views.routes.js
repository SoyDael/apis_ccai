import { Router } from "express";
import { estudianteActividad } from '../../controllers/views/actividadesUsuario.js'
import { infoProyectos } from "../../controllers/views/infoProyectos.controller.js";

const router = Router();

router.get('/actividadesUsuario', estudianteActividad);
router.get('/infoProyectos', infoProyectos);

export default router;

import { Router } from "express";
import { estudianteActividad } from '../../controllers/views/actividadesUsuario.js'

const router = Router();

router.get('/actividadesUsuario', estudianteActividad);

export default router;

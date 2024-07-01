import { Router } from "express";
import { verifyToken } from "../controllers/auth.controller.js";
import { altaUsuarios } from '../controllers/pruebaPA.controller.js'

const router = Router();

router.post('/altaUsuarios', verifyToken, altaUsuarios);

export default router;
import { Router } from "express";
import { register, login, consultaUsuario, verifyToken, recuperarContrasena } from "../controllers/auth.controller.js";

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/consultaUsuario', verifyToken, consultaUsuario)
router.patch('/recuperarContrasena/:correo', recuperarContrasena);


export default router;
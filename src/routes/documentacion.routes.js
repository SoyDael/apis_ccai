import { Router } from "express";
import { agregarDocumentacionPrograma, obtenerDocumentacionPrograma, actualizarDocumentacionPrograma, obtenerDocumentacionProgramaPorId, obtenerDocumentacionProgramaPorCorreoEstudiante } from "../controllers/documentacionPrograma.controller.js";
import { verifyToken } from "../controllers/auth.controller.js";
import express from 'express';


const router = Router();

router.post("/registroDocumentacionPrograma", verifyToken, agregarDocumentacionPrograma);
router.get("/obtenerDocumentacionPrograma", verifyToken, obtenerDocumentacionPrograma);
router.patch("/actualizarDocumentacionPrograma/:id_documento", verifyToken, actualizarDocumentacionPrograma);
router.get('/obtenerDocumentacionPorID/:id_proyecto', verifyToken, obtenerDocumentacionProgramaPorId);
router.get('/obtenerDocumentacionPorCorreoEstudiante/:correo_estudiante', verifyToken, obtenerDocumentacionProgramaPorCorreoEstudiante);

export default router;


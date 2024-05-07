import { Router } from "express";
import { agregarDocumentacionPrograma, obtenerDocumentacionPrograma, actualizarDocumentacionPrograma } from "../controllers/documentacionPrograma.controller.js";
import { verifyToken } from "../controllers/auth.controller.js";

const router = Router();

router.post("/agregarDocumentacionPrograma", verifyToken, agregarDocumentacionPrograma);
router.get("/obtenerDocumentacionPrograma", verifyToken, obtenerDocumentacionPrograma);
router.patch("/actualizarDocumentacionPrograma/:id_documento",verifyToken, actualizarDocumentacionPrograma);

export default router;
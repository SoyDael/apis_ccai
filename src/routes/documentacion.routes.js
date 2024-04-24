import { Router } from "express";
import {agregarDocumentacionPrograma} from "../controllers/documentacionPrograma.controller.js";
import { verifyToken } from "../controllers/auth.controller.js";

const router = Router();

router.post("/registroDocumentacionPrograma", verifyToken, agregarDocumentacionPrograma);

export default router;

                                                                                    
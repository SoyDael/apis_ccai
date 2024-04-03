import { Router } from "express";
import { PostInvestigador, GetInvestigador, PerfilInvestigador } from "../controllers/investigador.controller.js";
import { verifyToken } from "../controllers/auth.controller.js";

const router = Router();

router.post("/registroInvestigador", verifyToken, PostInvestigador);
router.get("/consultaInvestigadores", verifyToken, GetInvestigador);
router.get("/perfilInvestigador/:correo", verifyToken, PerfilInvestigador)

export default router;

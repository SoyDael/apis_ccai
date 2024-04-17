import { Router } from "express";
import { PostInvestigador, GetInvestigador, PerfilInvestigador, navbarInvestigador, editarinvestigador } from "../controllers/investigador.controller.js";
import { verifyToken } from "../controllers/auth.controller.js";

const router = Router();

router.post("/registroInvestigador", verifyToken, PostInvestigador);
router.get("/consultaInvestigadores", verifyToken, GetInvestigador);
router.get("/perfilInvestigador/:correo", verifyToken, PerfilInvestigador);
router.get('/navbarInvestigador/:correo', verifyToken, navbarInvestigador)
router.patch('/editarInvestigador/:correo', verifyToken, editarinvestigador)

export default router;

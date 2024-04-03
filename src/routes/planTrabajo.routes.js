import { Router } from "express";
import { PostPlanTrabajo, GetPlanTrabajo } from "../controllers/planTrabajo.controller.js";
import { verifyToken } from "../controllers/auth.controller.js";

const router = Router();

router.post("/registroPlanTrabajo", verifyToken, PostPlanTrabajo);
router.get("/consultaPlanTrabajo", verifyToken, GetPlanTrabajo);

export default router;
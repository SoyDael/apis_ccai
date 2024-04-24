import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import estudianteRoutes from './routes/estudiante.routes.js';
import programaRoutes from './routes/programa.routes.js';
import investigadorRoutes from './routes/investigador.routes.js';
import proyectoRoutes from './routes/proyecto.routes.js';
import participanteRoutes from './routes/participante.routes.js';
import plantTrabajoRoutes from  './routes/planTrabajo.routes.js'
import actividadParticipanteRoutes from './routes/actividadParticipante.routes.js'
import { consultaUsuario } from './controllers/auth.controller.js';
import viewRoutes from './routes/views/views.routes.js';
import Documentacion from './routes/documentacion.routes.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/ccai/v1/auth', authRoutes);
app.use('/api/ccai/v1', estudianteRoutes, programaRoutes, investigadorRoutes, proyectoRoutes,
    participanteRoutes, plantTrabajoRoutes, actividadParticipanteRoutes, consultaUsuario, viewRoutes,  Documentacion);

app.use((req, res, next) => {
    res.status(404).json({
        message: "End Point Not found"
    });
})
export default app;
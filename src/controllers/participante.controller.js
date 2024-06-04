import { pool } from "../db.js";

export const PostParticipante = async (req, res) => {
    const {
        proyecto_id, id_estudiante, correo_estudiante, id_programa } = req.body;

    try {
        const [rows] = await pool.query("INSERT INTO participante (proyecto_id, id_estudiante, correo_estudiante, id_programa) VALUES (?, ?, ?, ?)", [proyecto_id, id_estudiante, correo_estudiante, id_programa]);
        res.send({
            id: rows.insertId,
            proyecto_id,
            id_estudiante,
            correo_estudiante,
            id_programa
        })
    } catch (error) {
        console.log(error);
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: 'El alumno ya está registrado en un proyecto.' });
        } else {
            return res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
        }
    }
}

export const GetParticipante = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM participante");
        res.send(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "algo salio mal UwU"
        })
    }
}

export const proyectoPorAlumnoInterno = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM participante WHERE correo_estudiante =  ? ", [req.params.correo]);
        res.send(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "algo salio mal UwU"
        })
    }
}

export const participantePorProyecto = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM ParticipantePorProyecto WHERE correo_estudiante =  ? ", [req.params.correo]);
        res.send(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "algo salio mal UwU"
        })
    }
}
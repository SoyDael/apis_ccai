import { pool } from "../db.js";

export const PostActividad = async (req, res) => {
    const {
        id_proyecto, id_estudiante, correo_estudiante,
        id_programa, semestre, id_actividad, fecha_inicio,
        fecha_fin, actividad, observaciones
    } = req.body;

    try {
        const [rows] = await pool.query("INSERT INTO actividad_participante (id_proyecto, id_estudiante, correo_estudiante, id_programa, semestre, id_actividad, fecha_inicio, fecha_fin, actividad, observaciones) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [id_proyecto, id_estudiante, correo_estudiante, id_programa, semestre, id_actividad, fecha_inicio, fecha_fin, actividad, observaciones]);
        res.send({
            id: rows.insertId,
            id_proyecto,
            id_estudiante,
            correo_estudiante,
            id_programa,
            semestre,
            id_actividad,
            fecha_inicio,
            fecha_fin,
            actividad,
            observaciones
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "algo salio mal UwU"
        })
    }
}


export const GetActividad = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM actividad_participante");
        res.send(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "algo salio mal UwU"
        })
    }
}

export const GetActividadById = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM actividad_participante WHERE correo_estudiante =  ? ", [req.params.correo]);
        res.send(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "algo salio mal UwU"
        })
    }
}
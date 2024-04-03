import { pool } from "../db.js";

export const postPrograma = async (req, res) => {
    const { id_estudiante, estudiante_correo, tipo, estatus, semestre, fecha_inicio, fecha_fin} = req.body
    try {
        const [rows] = await pool.query("INSERT INTO programa(id_estudiante, estudiante_correo, tipo, estatus, semestre, fecha_inicio, fecha_fin) VALUES (?, ?, ?, ?, ?, ?, ?)", [id_estudiante, estudiante_correo, tipo, estatus, semestre, fecha_inicio, fecha_fin]);
        res.send({
            id: rows.insertId,
            id_estudiante,
            estudiante_correo,
            tipo,
            estatus,
            semestre,
            fecha_inicio,
            fecha_fin
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "algo salio mal UwU"
        })
    }
}

export const getProgramas = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM programa");
        res.json(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "algo salio mal UwU"
        })
    }
}
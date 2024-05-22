import { pool } from "../db.js";

export const registroEstancias = async (req, res) => {
    const {id_estancia, id_estancia_residente, residente_correo, fecha_inicio, fecha_fin, procedencia, patrocinador} = req.body;

    try {
        const [rows] = await pool.query("INSERT INTO estancia(id_estancia, id_estancia_residente, residente_correo, fecha_inicio, fecha_fin, procedencia, patrocinador) VALUES (?, ?, ?, ?, ?, ?, ?)", [id_estancia, id_estancia_residente, residente_correo, fecha_inicio, fecha_fin, procedencia, patrocinador]);
        res.send({
            id: rows.insertId,
            id_estancia,
            id_estancia_residente,
            residente_correo,
            fecha_inicio,
            fecha_fin,
            procedencia,
            patrocinador
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error,
            
        });
    }
}

export const consultaEstancias = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM estancia");
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });
    }
}


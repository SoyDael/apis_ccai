import { pool } from "../../db.js";

export const registroActividadEstancias = async (req, res) => {
    const {id_proyecto, id_estancia, id_estancia_residente, correo_residente_estancia, fecha_inicio, fecha_fin, actividad, observaciones} = req.body;
    try {
        const [rows] = await pool.query("INSERT INTO actividad_estancia(id_proyecto, id_estancia, id_estancia_residente, correo_residente_estancia, fecha_inicio, fecha_fin, actividad, observaciones) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [id_proyecto, id_estancia, id_estancia_residente, correo_residente_estancia, fecha_inicio, fecha_fin, actividad, observaciones])
        res.send({
            id_proyecto: rows.insertId,
            id_estancia,
            id_estancia_residente,
            correo_residente_estancia,
            fecha_inicio,
            fecha_fin,
            actividad,
            observaciones
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });
    }
}


export const consultarActividadEstancias = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM actividad_estancia");
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });
    }
}

export const consultarActividadEstanciaPorCorreo = async (req, res) => {
    const {correo} = req.params;
    try {
        const [result] = await pool.query("SELECT * FROM actividadEstancia WHERE correo = ?", [correo]);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });
    }
}
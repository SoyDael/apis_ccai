import { pool } from "../db.js";

export const PostPlanTrabajo = async (req, res) => {
    const {id_actividad, id_proyecto, semestre, actividad,
    fecha_inicio, fecha_fin, asignado, avance, estatus} = req.body;
    try {
        const [rows] = await pool.query("INSERT INTO plan_trabajo (id_actividad, id_proyecto, semestre, actividad, fecha_inicio, fecha_fin, asignado, avance, estatus) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [id_actividad, id_proyecto, semestre, actividad, fecha_inicio, fecha_fin, asignado, avance, estatus]); 
        res.json({
            id: rows.insertId,
            id_actividad, 
            id_proyecto, 
            semestre, 
            actividad, 
            fecha_inicio, 
            fecha_fin, 
            asignado, 
            avance, 
            estatus
        
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "algo salio mal UwU"
        })
    }
}

export const GetPlanTrabajo = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM plan_trabajo");
        res.send(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "algo salio mal UwU"
        })
    }
}
import { pool } from "../../db.js";

export const estudianteActividad = async (req, res) => {
    try {
        const [rows] = await pool.query("CALL obtener_estudiante_actividad()");
        console.log(rows);
        res.send(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "algo anda mal"
        })
    }
}
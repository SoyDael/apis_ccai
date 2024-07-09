import { pool } from "../../db.js";

export const infoProyectos = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM InfoProyecto");
        console.log(rows);
        res.send(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "algo anda mal"
        })
    }
}
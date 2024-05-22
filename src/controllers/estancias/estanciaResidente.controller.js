import { pool } from "../db.js";

export const registroEstanciaResidente = async (req, res) => {
    const {id_estancia_residente, nombres, apellido_p, apellido_m, correo, correo_adicional, telefono, estatus} = req.body;
    
    try {
        const [rows] = await pool.query("INSERT INTO estancia_residente(id_estancia_residente, nombres, apellido_p, apellido_m, correo, correo_adicional, telefono, estatus) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [id_estancia_residente, nombres, apellido_p, apellido_m, correo, correo_adicional, telefono, estatus]);
        res.send({
            id: rows.insertId,
            id_estancia_residente,
            nombres,
            apellido_p,
            apellido_m,
            correo,
            correo_adicional,
            telefono,
            estatus
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error,
            
        });
    }
}

export const consultaEstanciaResidente = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM estancia_residente");
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });
    }
}


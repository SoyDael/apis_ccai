import { pool } from "../../db.js";

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

export const perfilEstanciaResidente = async (req, res) => {
    const {correo} = req.params;
    try {
        const [rows] = await pool.query("SELECT * FROM estancia_residente WHERE correo = ?", [correo]);
        if (rows.length === 0) {
            res.status(404).json({
                message: "No se encontró el perfil de la estancia"
            });
            return;
        }
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });
    }

}

export const actualizarPerfilEstancia = async (req, res) => {
    const {correo} = req.params;
    const {id_estancia_residente, nombres, apellido_p, apellido_m, correo_adicional, telefono, estatus} = req.body;
    try {
        const [result] = await pool.query("UPDATE estancia_residente SET nombres = IFNULL(?, nombres), apellido_p = IFNULL(?, apellido_p), apellido_m = IFNULL(?, apellido_m), correo_adicional = IFNULL(?, correo_adicional), telefono = IFNULL(?, telefono), estatus = IFNULL(?, estatus) WHERE correo = ?", [nombres, apellido_p, apellido_m, correo_adicional, telefono, estatus, correo]);
    
        if (result.affectedRows === 0) {
            res.status(404).json({
                message: "No se encontró el perfil de la estancia"
            });
            return;
        }

        const [rows] = await pool.query("SELECT * FROM estancia_residente WHERE correo = ?", [correo]);
        res.send(rows);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error,
            
        });
    }
}
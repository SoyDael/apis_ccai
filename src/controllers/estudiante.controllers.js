import { pool } from "../db.js";

export const registroEstudiante = async (req, res) => {
    const { matricula, nombres, apellido_p, apellido_m, correo, correo_adicional, telefono, division, estatus } = req.body;

    try {
        const [rows] = await pool.query("INSERT INTO estudiante(matricula, nombres, apellido_p, apellido_m, correo, correo_adicional, telefono, division, estatus) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [matricula, nombres, apellido_p, apellido_m, correo, correo_adicional, telefono, division, estatus]);
        res.send({
            id: rows.insertId,
            matricula,
            nombres,
            apellido_p,
            apellido_m,
            correo,
            correo_adicional,
            telefono,
            division,
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

export const consultaEstudiante = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM estudiante");
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });
    }
}

export const perfilEstudiante = async (req, res) => {
    const { correo } = req.params;
    try {
        const [rows] = await pool.query("SELECT * FROM estudiante WHERE correo = ?", [req.params.correo]);
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });
    }
}

export const actualizarPerfilAlumno = async (req, resp) => {
    const { correo } = req.params;
    const {matricula, nombres, apellido_p, apellido_m, correo_adicional, telefono, division, estatus} = req.body;
    try {
        const [result] = await pool.query('UPDATE estudiante SET matricula = IFNULL(?, matricula), nombres = IFNULL(?, nombres), apellido_p = IFNULL(?, apellido_p), apellido_m = IFNULL(?, apellido_m), correo_adicional = IFNULL(?, correo_adicional), telefono = IFNULL(?, telefono), division = IFNULL(?, division), estatus = IFNULL(?, estatus) WHERE correo = ?', [matricula, nombres, apellido_p, apellido_m, correo_adicional, telefono, division, estatus, correo]);

        if (result.affectedRows === 0) {
            resp.json({
                message: "¡Estudiante no encontrado!"
            });
        } 
        const [rows] = await pool.query("SELECT * FROM estudiante WHERE correo = ?", [req.params.correo]);

        resp.send(rows[0]);
    }catch (error) {
        console.log(error);
        resp.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });
    }
} 

export const navbarEstudiante = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM navbar WHERE correo_estudiante =  ? ", [req.params.correo]);
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });
    }
}
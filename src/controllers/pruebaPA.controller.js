import { pool } from "../db.js";

export const altaUsuarios = async (req, res) => {
    const { correo, password, tipo, foto, titulo, nombres, apellido_p, apellido_m, matricula, correo_adicional, telefono, division, estatus } = req.body;
    try {
        const [rows] = await pool.query("CALL insertar_usuario_ (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [correo, password, tipo, foto, titulo, nombres, apellido_p, apellido_m, matricula, correo_adicional, telefono, division, estatus]);
        res.send({
            id: rows.insertId,
            correo,
            password,
            tipo,
            foto,
            titulo,
            nombres,
            apellido_p,
            apellido_m,
            matricula,
            correo_adicional,
            telefono,
            division,
            estatus
        })
    } catch (error) {
        console.log(error);
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: 'El usuario ya esta online.' });
        } else {
            return res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
        }
    }
}

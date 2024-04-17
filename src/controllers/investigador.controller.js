import { pool } from "../db.js";

export const PostInvestigador = async (req, res) => {
    const { titulo, nombres, apellido_p, apellido_m, correo, telefono, estatus } = req.body;

    try {
        const [rows] = await pool.query("INSERT INTO investigador(titulo, nombres, apellido_p, apellido_m, correo, telefono, estatus) VALUES (?, ?, ?, ?, ?, ?, ?)", [titulo, nombres, apellido_p, apellido_m, correo, telefono, estatus]);
        res.send({
            id: rows.insertId,
            titulo,
            nombres,
            apellido_p,
            apellido_m,
            correo,
            telefono,
            estatus
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "algo salio mal UwU"
        })
    }
}

export const GetInvestigador = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM investigador");
        res.send(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "algo salio mal UwU"
        })
    }
}

export const PerfilInvestigador = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM investigador WHERE correo = ?", [req.params.correo]);
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });
    }
}

export const navbarInvestigador = async (req, res) => {
    try {
        const [filas] = await pool.query("SELECT * FROM navbarInvestigador WHERE correo = ? ", [req.params.correo])
        res.send(filas);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });
    }
}

export const editarinvestigador = async (req, res) => {
    const { correo } = req.params;
    const { titulo, nombres, apellido_p, apellido_m, telefono, estatus, foto } = req.body;
    try {
        const [dael] = await pool.query("UPDATE investigador SET titulo = IFNULL(?, titulo), nombres = IFNULL(?, nombres), apellido_p = IFNULL(?, apellido_p), apellido_m = IFNULL(?, apellido_m), telefono = IFNULL(?, telefono), estatus = IFNULL(?, estatus), foto = IFNULL(?, foto) WHERE correo = ?", [titulo, nombres, apellido_p, apellido_m, telefono, estatus, foto, correo]);
        if (dael.affectedRows === 0) {
            res.json({
                message: "¡Investigador no encontrado!"
            });
        }
        const [rows] = await pool.query("SELECT * FROM investigador WHERE correo = ? ", [req.params.correo]);
        res.send(rows);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });

    }
}
import { pool } from "../db.js";

export const PostInvestigador = async (req, res) => {
    const {titulo, nombres, apellido_p, apellido_m, correo, telefono, estatus} = req.body;

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
    const [rows] = await pool.query("SELECT * FROM investigador WHERE correo = ?" , [req.params.correo]);
    res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });
    }
}

export const navbarinvestigador = async (req, res) => {
    try {
        const [dael] = await pool.query ("SELECT * FROM navbarinvestigador where correo = ? " , [req.params.correo]);
        res.send(dael);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "esta mal tonto",
            error
        });
    }
}
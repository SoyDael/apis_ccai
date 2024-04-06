import { pool } from "../db.js";

export const PostProyecto = async (req, res) => {
    const {titulo_esp, objetivo, descripcion, coordinador_id_investigador, coordinador_correo, fecha_inicio, estatus, imagen, fecha_registro, fecha_fin} = req.body;
    try {
        const [rows] = await pool.query("INSERT INTO proyecto(titulo_esp, objetivo, descripcion, coordinador_id_investigador, coordinador_correo, fecha_inicio, estatus, imagen, fecha_registro, fecha_fin) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [titulo_esp, objetivo, descripcion, coordinador_id_investigador, coordinador_correo, fecha_inicio, estatus, imagen, fecha_registro, fecha_fin]);
        res.send({
            id: rows.insertId,
            titulo_esp,
            objetivo,
            descripcion,
            coordinador_id_investigador,
            coordinador_correo,
            fecha_inicio,
            estatus,
            imagen,
            fecha_registro,
            fecha_fin
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "algo salio mal UwU"
        })
    }
}

export const GetProyectos = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM proyecto");
        res.json(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "algo salio mal UwU"
        })
    }
}

export const proyectosInvestigador = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM proyectosInvestigador WHERE correo = ? COLLATE utf8mb4_unicode_ci", [req.params.correo])
        res.send(rows)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });
    }
}

export const proyectoPorId = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM proyecto WHERE id_proyecto = ?", [req.params.id_proyecto]);
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });
    }
}

export const participantePorProyecto = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM participanteProyecto WHERE proyecto_id = ?", [req.params.proyecto_id]);
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });
    }
}
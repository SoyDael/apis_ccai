import { pool } from "../../db.js";

export const registroEstancias = async (req, res) => {
    const {id_proyecto, id_estancia, id_estancia_residente, correo_residente_estancia} = req.body;
    try {
        const rows = await pool.query("INSERT INTO participante_estancia (id_proyecto, id_estancia, id_estancia_residente, correo_residente_estancia) VALUES (?, ?, ?, ?)", [id_proyecto, id_estancia, id_estancia_residente, correo_residente_estancia]);
        res.send({
            id: rows.insertId,
            id_proyecto,
            id_estancia,
            id_estancia_residente,
            correo_residente_estancia
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error,
            
        });
    }
}

export const consultaEstancias = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM participante_estancia");
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });
    }
}

export const participanteEstanciaPorCorreo = async (req, res) => {
    const {correo_residente_estancia} = req.params;
    try {
        const [rows] = await pool.query("SELECT * FROM participante_estancia WHERE correo_residente_estancia =  ? ", [correo_residente_estancia]);
        res.send(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "algo salio mal UwU"
        })
    }
}

export const participantePorProyecto = async (req, res) => {
    const {correo} = req.params;
    try {
        const [rows] = await pool.query("SELECT * FROM participantePorEstancia WHERE correo = ?", [correo]);
        res.send(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "algo salio mal UwU"
        })
    }
}

export const participanteEstanciaProyecto = async (req, res) => {
    const {id_proyecto} = req.params;
    try {
        const [rows] = await pool.query("SELECT * FROM particpanteEstanciaProyecto WHERE id_proyecto = ?", [id_proyecto]);
        res.send(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "algo salio mal UwU"
        })
    }
}
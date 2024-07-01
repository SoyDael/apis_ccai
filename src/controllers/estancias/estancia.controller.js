import { pool } from "../../db.js";

export const registroEstancias = async (req, res) => {
    const {id_estancia, id_estancia_residente, residente_correo, estatus, fecha_inicio, fecha_fin, procedencia, patrocinador, tipoEstancia} = req.body;

    try {
        const {rows} = await pool.query("INSERT INTO estancia(id_estancia, id_estancia_residente, residente_correo, estatus, fecha_inicio, fecha_fin, procedencia, patrocinador, tipoEstancia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [id_estancia, id_estancia_residente, residente_correo, estatus, fecha_inicio, fecha_fin, procedencia, patrocinador, tipoEstancia]);
        res.send({
            id_estancia_residente,
            residente_correo,
            estatus,
            fecha_inicio,
            fecha_fin,
            procedencia,
            patrocinador,
            tipoEstancia
        });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: 'El alumno ya está registrado en un programa.' });
        } else {
            console.log(error);
            return res.status(500).json({ error: 'Ocurrió un error en el servidor.', error });
        }
    }
}

export const consultaEstancias = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM estancia");
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });
    }
}


export const consultaEstanciaPorCorreo = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM estancia WHERE residente_correo = ?",  [req.params.residente_correo]);
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });
    }
} 

export const perfilEstancia = async (req, res) => {
    const {correo} = req.params;
    try {
        const [rows] = await pool.query("SELECT * FROM nabvarEstancia WHERE correo = ?", [correo]);
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });
    }
}

export const ListadoEstancias = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM ListadoEstancias");
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
        });
    }
}

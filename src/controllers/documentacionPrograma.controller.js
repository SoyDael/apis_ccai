
import { pool } from "../db.js";
import path from "path";
import fs from "fs";

export const agregarDocumentacionPrograma = async (req, res) => {
    try {
        const { id_estudiante, correo_estudiante, id_programa, id_documento, semestre, fecha, nombre, documento, archivo } = req.body;
        const [rows] = await pool.query("INSERT INTO documentacion_programa(id_estudiante, correo_estudiante, id_programa, id_documento, semestre, fecha, nombre, documento, archivo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [id_estudiante, correo_estudiante, id_programa, id_documento, semestre, fecha, nombre, documento, archivo]);
        res.send({
            id: rows.insertId,
            id_programa,
            fecha,
            descripcion: documento,
            archivo,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error,
        });
    }
}

export const obtenerDocumentacionPrograma = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM documentacion_programa");
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error,
        });
    }

}

export const obtenerDocumentacionProgramaPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("SELECT * FROM documentacion_programa WHERE id = ?", [id]);
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error,
        });
    }
}

export const actualizarDocumentacionPrograma = async (req, res) => {

    const { id_documento } = req.params;
    const { id_estudiante, correo_estudiante, id_programa, semestre, fecha, nombre, documento, archivo } = req.body;
    try {

        const [result] = await pool.query("UPDATE documentacion_programa SET id_estudiante = IFNULL(?, id_estudiante), correo_estudiante = IFNULL(?, correo_estudiante), id_programa = IFNULL(?, id_programa), semestre = IFNULL(?, semestre), fecha = IFNULL(?, fecha), nombre = IFNULL(?, nombre), documento = IFNULL(?, documento), archivo = IFNULL(?, archivo) WHERE id_documento = ?", [id_estudiante, correo_estudiante, id_programa, semestre, fecha, nombre, documento, archivo, id_documento]);
        if (result.affectedRows === 0) {
            res.json({ message: "No se encontró el documento a actualizar" });
        }

        const [rows] = await pool.query("SELECT * FROM documentacion_programa WHERE id_documento = ?", [id_documento]);
        res.json(rows);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error,
        });
    }
}



























































/**
 * import { pool } from "../db.js";
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage }).single('archivo');

export const RegistroDocumentacionPrograma = async (req, res) => {
    try {
        upload(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                console.error("Error de Multer: ", err);
                return res.status(500).json(err);
            } else if (err) {
                return res.status(500).json({
                    message: "Error al subir archivo",
                    error: err
                });
            }

            const { id_estudiante, correo_estudiante, id_programa, id_documento, semestre, fecha, nombre, documento } = req.body;

            const archivoNombre = req.file.filename;
            const archivoRuta = req.file.path;

            const [rows] = await pool.query("INSERT INTO documentacion_programa(id_estudiante, correo_estudiante, id_programa, id_documento, semestre, fecha, nombre, documento, archivo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [id_estudiante, correo_estudiante, id_programa, id_documento, semestre, fecha, nombre, documento, archivoNombre]);

            res.send({
                id: rows.insertId,
                id_programa,
                fecha,
                descripcion: documento,
                archivo: archivoNombre,
            });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error,
        });
    }
};

 * 
 */
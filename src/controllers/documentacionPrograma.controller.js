import { pool } from "../db.js";
import fs from "fs-extra";

export const agregarDocumentacionPrograma = async (req, res) => {
    const { id_estudiante, correo_estudiante, id_programa, id_documento, semestre, fecha, nombre, documento, archivo } = req.body;

    const arvoBuffer = Buffer.from(archivo, 'base64');

    try {
        const [lau] = pool.query("INSERT INTO documentacion_programa(id_estudiante, correo_estudiante, id_programa, id_documento, semestre, fecha, nombre, documento, archivo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [id_estudiante, correo_estudiante, id_programa, id_documento, semestre, fecha, nombre, documento, arvoBuffer],
            (err, result) => {
                if (err) {
                    console.log( "error al agregar el documento",err);
                    res.status(500).send("Error en el servidor");
                    return;
                } 
                    res.status(201).send("Documento agregado correctamente", result.insertId);
            })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Algo salió mal UwU!",
            error
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
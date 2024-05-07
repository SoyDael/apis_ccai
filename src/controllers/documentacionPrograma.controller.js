import { pool } from "../db.js";


export const agregarDocumentacionPrograma = async (req, res) => {
    try {
        const { id_estudiante, correo_estudiante, id_programa, id_documento, semestre, fecha, nombre, documento, archivo } = req.body;
        const [aynanita] = await pool.query("INSERT INTO documentacion_programa(id_estudiante, correo_estudiante, id_programa, id_documento,semestre, fecha, nombre, documento, archivo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [id_estudiante, correo_estudiante, id_programa, id_documento, semestre, fecha, nombre, documento, archivo]);
        res.send({
            id: aynanita.insertId,
            id_programa,
            fecha,
            descripcion: documento,
            archivo,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Tas mal chavo, regresate",
            error,
        });
    }

}

export const obtenerDocumentacionPrograma = async (req, res) => {
  
  
    try {
        const [dios] = await pool.query("SELECT * FROM documentacion_programa");
        res.json(dios);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "no puede seer, esta mal",
            error,
        });
    }
    
}

export const actualizarDocumentacionPrograma = async (req, res) => {

    
   const {id_documento} = req.params;
   const {id_estudiante, correo_estudiante, id_programa,semestre, fecha, nombre, documento, archivo} = req.body;
   try {
       const [result] = await pool.query("UPDATE documentacion_programa SET id_estudiante = IFNULL(?, id_estudiante), correo_estudiante = IFNULL(?, correo_estudiante), id_programa =  IFNULL(?, id_programa), semestre =  IFNULL(?, semestre), fecha =  IFNULL(?, fecha), nombre =  IFNULL(?, nombre), documento =  IFNULL(?, documento), archivo =  IFNULL(?, archivo) WHERE id_documento = ? ", [id_estudiante, correo_estudiante, id_programa,semestre, fecha, nombre, documento, archivo, id_documento]);
   if (result.affectedRows === 0){
       res.json({message: "No existe el documento a actualizar"});
   }
   const [selogro] = await pool.query("SELECT * FROM documentacion_programa WHERE id_documento = ?", [id_documento]);
   res.json(selogro);
   } catch (error) {
       console.log(error);
       res.status(500).json({
           message: "jaja estas mal",
           error,
       });
   } 
}
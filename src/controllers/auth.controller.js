import { pool } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { correo, password, tipo, foto } = req.body
    try {
        const hashPassword = await bcrypt.hash(password, 10);

        const [rows] = await pool.query('INSERT INTO usuario (correo, password, tipo, foto) VALUES (?, ?, ?, ?)', [correo, hashPassword, tipo, foto])
        res.send({
            message: 'Usuario registrado',
            id: rows.insertId,
            correo,
            tipo,
            foto
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'algo salio mal :C'
        })
    }
}

export const login = async (req, res) => {
    const { correo, password, tipo } = req.body;
    try {
        if (!correo || !password) {
            return res.status(400).json({ message: 'Correo y contraseña son requeridos' });
        }

        const [rows] = await pool.query('SELECT * FROM usuario WHERE correo = ? AND tipo = ?', [correo, tipo]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const usuario = rows[0];
        const match = await bcrypt.compare(password, usuario.password);
        if (!match) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        const tokenPayload = {
            id: usuario.id,
            correo: usuario.correo,
            tipo: usuario.tipo,
        };
        const token = jwt.sign(tokenPayload, '586E3272357538782F413F4428472B4B6250655368566B597033733676397924', { expiresIn: '24h' });
        
        return res.json({
            message: 'Bienvenido',
            token,
            userType: usuario.tipo
        });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).send({ message: 'acceso denegado' });
    try {
        const decoded = jwt.verify(token, '586E3272357538782F413F4428472B4B6250655368566B597033733676397924');
        res.usuario = decoded;
        next();
    } catch (error) {
        return res.status(401).send({ message: 'token invalido!' });
    }
}

export const consultaUsuario = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuario');
        res.send(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'algo salio mal :C'
        })
    }
}


export const recuperarContrasena = async (req, res) => {
    try{
        const { correo } = req.params;
        const { password, tipo, foto} = req.body;
      
        const [result] = await pool.query('UPDATE usuario set password = ? where correo = ?', [password, correo])
        if (result.affectedRows === 0) {
            res.json({ message: "No se pudo actualizar la contraseña" });
        }
        
        const [rows] = await pool.query('SELECT * FROM usuario WHERE correo = ?', [correo])
        res.json(rows);

    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: 'algo salio mal :C'
        })
    }
}
import { Request, Response } from 'express';
import Usuario from '../models/usuario';  // Asegúrate de que el modelo Usuario esté bien definido
import jwt from 'jsonwebtoken';
import axios from 'axios';


// Función de login con Facebook adaptada a la base de datos Mr_macondo
export const loginFacebook = async (req: Request, res: Response) => {
    const { accessToken } = req.body;  // Extraer el token de acceso del cuerpo de la solicitud

    // Verificar si el token de acceso está presente
    if (!accessToken) {
        return res.status(400).json({ msg: 'Access token es requerido' });
    }

    try {
        // Verificamos el token de acceso con Facebook y obtenemos datos del usuario
        const response = await axios.get(`https://graph.facebook.com/me?access_token=${accessToken}&fields=id,email`);

        // Verificamos que la respuesta de Facebook sea válida
        if (!response || !response.data) {
            throw new Error('Respuesta inválida de Facebook');
        }

        const { email, id: facebookId } = response.data;  // Desestructuramos el email y el id de Facebook

        // Verificar si el correo electrónico fue obtenido
        if (!email) {
            return res.status(400).json({ msg: 'No se pudo obtener el correo electrónico desde Facebook' });
        }

        // Buscamos al usuario en la base de datos
        let usuario = await Usuario.findOne({ where: { Emp_Email: email }, attributes: ['id', 'IDRol', 'Contrasenia'] });

        // Si el usuario no existe, lo creamos en la tabla Usuarios
        if (!usuario) {
            usuario = await Usuario.create({
                Emp_Email: email,
                Contrasenia: facebookId,  // Usamos el ID de Facebook como contraseña temporal
                IDRol: 1  // Asignamos el rol predeterminado, por ejemplo, 'Empleado' con ID 1
            });
        }

        // Generamos el token JWT para el usuario
        const token = jwt.sign(
            {
                id: usuario.get('id'),
                IDRol: usuario.get('IDRol'),
            },
            process.env.SECRET_KEY || 'reprobadosporbaratos',  // Cambiar clave secreta según tu entorno
            { expiresIn: '1h' }  // Establecemos el tiempo de expiración del token
        );

        // Devolvemos el token, el ID del usuario y su rol
        return res.json({
            id: usuario.get('id'),
            IDRol: usuario.get('IDRol'),
            token,
        });
    } catch (error: any) {
        // Verifica si el error tiene respuesta de Facebook
        if (error.response) {
            console.error('Error en la respuesta de Facebook:', error.response.data);
        } else {
            console.error('Error en la autenticación con Facebook:', error.message);
        }

        // Enviar un mensaje de error al cliente
        return res.status(401).json({
            msg: 'Error al autenticar con Facebook, verifica tu token.',
            error: error.message || 'Error desconocido',
        });
    }
};

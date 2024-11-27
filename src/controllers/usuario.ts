import { Request, Response } from 'express';
import Usuario from '../models/usuario';
import jwt from 'jsonwebtoken'




export const loginUser =     async (req: Request, res: Response) => {
    try {
        const { Emp_Email, Contrasenia } = req.body;

        const usuario = await Usuario.findOne({where: {Emp_Email: Emp_Email}, attributes: ['id', 'IDRol','Contrasenia']});
        //Validamos que el ususuario exista en la bd
        if (!usuario){
            return res.status(400).json ({
                msg: `No existe un usuario con el email ${Emp_Email} en la base de datos`
            })
        }
        //Validamos contrasenia
        const isPasswordValid = Contrasenia === usuario.get('Contrasenia');
        if (!isPasswordValid) {
            return res.status(400).json({
                msg: 'La contraseña es incorrecta'
            });
        }

        //Generamos un token
        const token = jwt.sign({
            username: usuario
        }, process.env.SECRET_KEY || 'reprobadosporbaratos')

        return res.json({
            id: usuario.get('id'),
            IDRol: usuario.get('IDRol'),
            token
        });

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error'
        })
    }
    
}
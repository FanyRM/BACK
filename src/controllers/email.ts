// emailService.ts
import nodemailer from 'nodemailer';
import { Request, Response } from 'express';

// Configura tu transporte de correo
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    secure: false, // true para 465, false para otros puertos
    auth: {
        
        user: 'bhleonel705@gmail.com', // Tu usuario de correo
        pass: 'umzh naxv bjax lsuz' // Tu contraseña de correo
    }
});

// Función para enviar correos
export const sendEmail = (to: string, subject: string, text: string, html: string) => {
    const mailOptions = {
        from: '"Tienda Online" <bhleonel705@gmail.com>',
        to,
        subject,
        text,
        html,
    };

    return transporter.sendMail(mailOptions);
};


export const sendEmailToEmployees = async (req: Request, res: Response) => {
    const { emails, subject, body } = req.body;

    if (!emails || !subject || !body) {
        return res.status(400).json({ msg: 'Todos los campos son obligatorios: emails, subject, body' });
    }

    try {
        const emailPromises = emails.map((email: string) =>
            sendEmail(email, subject, body, '')
        );

        await Promise.all(emailPromises);

        res.status(200).json({ msg: 'Correos enviados con éxito' });
    } catch (error) {
        console.error('Error al enviar correos:', error);
        res.status(500).json({ msg: 'Error al enviar correos', error });
    }
};


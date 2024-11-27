// emailService.ts
import nodemailer from 'nodemailer';

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
        from: '"Tienda Online" <bhleonel705@gmail.com>', // Remitente
        to,
        subject,
        text,
        html,
    };

    return transporter.sendMail(mailOptions);
};

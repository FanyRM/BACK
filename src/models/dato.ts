import { DataTypes } from 'sequelize';
import db from '../db/connection';
 //aas
const Dato = db.define('Dato', {
    Banc_Nom: {
        type: DataTypes.STRING
    },
    Clabe_InterBanc: {
        type: DataTypes.STRING
    },
    Num_Cuenta: {
        type: DataTypes.STRING
    },
    Img_QR: {
        type: DataTypes.STRING
    },
    Info_Empresa: {
        type: DataTypes.TEXT
    },
}, {
    createdAt: false,
    updatedAt: false,
});

export default Dato;
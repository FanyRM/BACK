import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Sucursal = db.define('Sucursal', {
    Nom_Suc: {
        type: DataTypes.STRING
    },
    Loc_Suc: {
        type: DataTypes.STRING
    },
    Des_Suc: {
        type: DataTypes.STRING
    },
    Img_Suc: {
        type: DataTypes.STRING
    },
    Latitud: {
        type: DataTypes.DOUBLE
    },
    Longitud: {
        type: DataTypes.DOUBLE
    }
}, {
    createdAt: false,
    updatedAt: false,
});

export default Sucursal;
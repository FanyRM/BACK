"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Sucursal = connection_1.default.define('Sucursal', {
    Nom_Suc: {
        type: sequelize_1.DataTypes.STRING
    },
    Loc_Suc: {
        type: sequelize_1.DataTypes.STRING
    },
    Des_Suc: {
        type: sequelize_1.DataTypes.STRING
    },
    Img_Suc: {
        type: sequelize_1.DataTypes.STRING
    },
    Latitud: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    Longitud: {
        type: sequelize_1.DataTypes.DOUBLE
    }
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = Sucursal;

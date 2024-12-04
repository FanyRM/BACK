"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
//aas
const Dato = connection_1.default.define('Dato', {
    Banc_Nom: {
        type: sequelize_1.DataTypes.STRING
    },
    Clabe_InterBanc: {
        type: sequelize_1.DataTypes.STRING
    },
    Num_Cuenta: {
        type: sequelize_1.DataTypes.STRING
    },
    Img_QR: {
        type: sequelize_1.DataTypes.STRING
    },
    Info_Empresa: {
        type: sequelize_1.DataTypes.TEXT
    },
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = Dato;

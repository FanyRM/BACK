"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('Mr_macondo', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});
// const sequelize = new Sequelize('Mr_macondo', 'root', '123456', {
//   dialect: 'mysql',
//   logging: false
// });
exports.default = sequelize;

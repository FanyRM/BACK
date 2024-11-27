"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../controllers/usuario");
const facebook_1 = require("../controllers/facebook"); // Ajustamos la ruta del controlador
const routerLogin = (0, express_1.Router)();
const routerFacebook = (0, express_1.Router)();
// Ruta para login con usuario y contraseña
routerLogin.post('/', usuario_1.loginUser);
// Ruta para login con Facebook
routerFacebook.post('/', facebook_1.loginFacebook);
exports.default = routerLogin;

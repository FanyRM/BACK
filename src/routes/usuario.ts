import { Router } from 'express';
import { loginUser } from '../controllers/usuario';
import { loginFacebook } from '../controllers/facebook'; // Ajustamos la ruta del controlador

const routerLogin = Router();
const routerFacebook = Router();

// Ruta para login con usuario y contraseña
routerLogin.post('/', loginUser);

// Ruta para login con Facebook
routerFacebook.post('/', loginFacebook);

export default routerLogin;

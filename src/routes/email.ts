import { Router } from 'express';
import { sendEmailToEmployees } from '../controllers/email';

const routerEmail = Router();

routerEmail.post('/', sendEmailToEmployees);

export default routerEmail;

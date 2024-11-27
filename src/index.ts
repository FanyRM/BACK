import Server from "./models/server";
import dontenv from 'dotenv';

//Configuracion de valores de ambiente (env)

dontenv.config();

const server = new Server();

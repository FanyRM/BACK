"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const sucursal_1 = __importDefault(require("../routes/sucursal"));
const connection_1 = __importDefault(require("../db/connection"));
const producto_1 = __importDefault(require("../routes/producto"));
const venta_1 = __importDefault(require("../routes/venta"));
const juego_1 = __importDefault(require("../routes/juego"));
const empleado_1 = __importDefault(require("../routes/empleado"));
const rol_1 = __importDefault(require("../routes/rol"));
const dato_1 = __importDefault(require("../routes/dato"));
const tip_prods_1 = __importDefault(require("../routes/tip_prods"));
const distribuidors_1 = __importDefault(require("../routes/distribuidors"));
const notas_1 = __importDefault(require("../routes/notas"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const cliente_1 = __importDefault(require("../routes/cliente"));
const facebook_1 = __importDefault(require("../routes/facebook")); // Nueva ruta de Facebook
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API Working'
            });
        });
        // Agregamos todas las rutas de la API
        this.app.use('/api/sucursales', sucursal_1.default);
        this.app.use('/api/productos', producto_1.default);
        this.app.use('/api/ventas', venta_1.default);
        this.app.use('/api/juegos', juego_1.default);
        this.app.use('/api/empleados', empleado_1.default);
        this.app.use('/api/roles', rol_1.default);
        this.app.use('/api/datos', dato_1.default);
        this.app.use('/api/tip_Prod', tip_prods_1.default);
        this.app.use('/api/distribuidors', distribuidors_1.default);
        this.app.use('/api/notas', notas_1.default);
        this.app.use('/api/login', usuario_1.default);
        this.app.use('/api/clientes', cliente_1.default);
        this.app.use('/api/facebook', facebook_1.default); // Nueva ruta de Facebook
    }
    midlewares() {
        // Parseamos el body
        this.app.use(express_1.default.json());
        // Cors
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Base de datos conectada');
            }
            catch (error) {
                console.log(error);
                console.log('Error al conectarse a la base de datos');
            }
        });
    }
}
exports.default = Server;

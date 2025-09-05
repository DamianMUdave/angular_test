"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const morgan_1 = require("morgan");
const cors_1 = require("cors");
const indexRoutes_1 = require("./routes/indexRoutes");
const gamesRoutes_1 = require("./routes/gamesRoutes");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.configure();
        this.routes();
    }
    configure() {
        // Si existe un puerto definido en las variables de entorno lo usa, si no usa el 3000
        this.app.set('port', process.env.PORT || 3000);
        // Muestra las peticiones por consola
        this.app.use((0, morgan_1.default)('dev'));
        // Permite el acceso desde cualquier origen
        this.app.use((0, cors_1.default)());
        // Permite recibir datos en formato json
        this.app.use(express_1.default.json());
        // Permite recibir datos desde formularios
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
//# sourceMappingURL=index.js.map
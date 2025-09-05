import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.configure();
        this.routes();
    }

    configure(): void {
        // Si existe un puerto definido en las variables de entorno lo usa, si no usa el 3000
        this.app.set('port', process.env.PORT || 3000);
        // Muestra las peticiones por consola
        this.app.use(morgan('dev'));
        // Permite el acceso desde cualquier origen
        this.app.use(cors());
        // Permite recibir datos en formato json
        this.app.use(express.json());
        // Permite recibir datos desde formularios
        this.app.use(express.urlencoded({ extended: false }));
    }
    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/api/games', gamesRoutes);
    }
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();
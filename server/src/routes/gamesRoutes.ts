import { Router } from 'express';

class gamesRoutes {

    public router: Router = Router();
    
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => {
            res.send('List of games');
        });
    }
}

const gamesRoutesInstance = new gamesRoutes();
export default gamesRoutesInstance.router;
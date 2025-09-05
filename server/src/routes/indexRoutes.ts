import { Router } from 'express';

import { indexControllers } from '../controllers/indexControllers';

class indexRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', indexControllers.index);
    }
}

const indexRoutesInstance = new indexRoutes();
export default indexRoutesInstance.router;
import { Request, Response } from 'express';

class IndexControllers {

    public index(req: Request, res: Response): void {
        res.send('Hello');
    }

}

export const indexControllers = new IndexControllers();
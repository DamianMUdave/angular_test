import { Request, Response } from "express";

class GamesControllers {
    
    public list(req: Request, res: Response): void {
        res.send('Listando juegos');
    }

}

const gamesControllers = new GamesControllers();
export default gamesControllers;
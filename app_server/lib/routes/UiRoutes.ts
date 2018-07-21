import { Application, Request, Response } from 'express';
import path = require("path");

export class UiRoutes {

    public routes(app: Application): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'angular', 'index.html'));
            });
    }
}

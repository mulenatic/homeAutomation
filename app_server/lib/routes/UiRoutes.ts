import { Application, Request, Response } from 'express';
import path = require("path");

export class UiRoutes {

    public routes(app: Application): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                console.log('Get request for homepage');
                res.sendFile(path.resolve(__dirname, '..', '..', '..', 'app_client', 'index.html'));
            });

        app.route('/ui')
            .get((req: Request, res: Response) => {
                console.log('Get request for other page');
                res.sendFile(path.resolve(__dirname, '..', '..', '..', 'app_client', 'index.html'));
            });


        app.route('/ui/*')
            .get((req: Request, res: Response) => {
                console.log('Get request for other page');
                res.sendFile(path.resolve(__dirname, '..', '..', '..', 'app_client', 'index.html'));
            });
    }
}

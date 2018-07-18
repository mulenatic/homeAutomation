import { Request, Response, Application } from "express";

export class Routes {

    public routes(app: Application): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfull!!!'
                })
            });

        // Contact
        app.route('/contact')
            .get((req: Request, res: Response) => {
                // Get all contacts
                res.status(200).send({
                    message: 'GET request successfull'
                });
            });
	    .post((req: Request, res: Response) => {
            // Create new contact
            res.status(200).send({
                message: 'POST request successfull'
            })
        });

        // Contact detail
        app.route('/contact/:contactId')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfull'
                })
            })
            .put((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'PUT request successfull'
                })
            })
            .delete((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'DELETE request successfull'
                })
            });
    }
}


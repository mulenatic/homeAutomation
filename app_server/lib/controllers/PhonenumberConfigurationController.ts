import * as mongoose from 'mongoose';
import { PhonenumberConfigurationSchema } from '../models/PhonenumberConfigurationModel';
import { Request, Response } from 'express';

const phonenumberConfigurationModel = mongoose.model('PhonenumberConfiguration', PhonenumberConfigurationSchema);

export class PhonenumberConfigurationController {

    public getAllPhonenumberConfigurations(req: Request, res: Response) {

        phonenumberConfigurationModel.find({}, (err, configurations) => {
            if (err) {
                res.send(err);
            }
            res.json(configurations);
        });

    }


    public savePhonenumberConfiguration(req: Request, res: Response) {
        phonenumberConfigurationModel
            .create(req.body, (err, configuration) => {
                if (err) {
                    res.statusCode = 400;
                    console.log(err);
                    res.send(err);
                } else {
                    res.json(configuration);
                }
            });

    }

    public deletePhonenumberConfiguration(req: Request, res: Response) {

        var id = req.params.id;

        phonenumberConfigurationModel
            .deleteOne({ _id: id }, (err) => {
                if (err) {
                    res.statusCode = 400;
                    console.log(err);
                    res.send(err);
                } else {
                    res.sendStatus(204);
                }
            });

    }

}

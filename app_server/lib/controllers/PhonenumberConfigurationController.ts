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

        console.log('savePhonenumberConfiguration');
        console.log(req.body);

        phonenumberConfigurationModel
            .create(req.body.phonenumberConfiguration, (err, configuration) => {
                if (err) {
                    res.send(err);
                }
                res.json(configuration);
            });

    }

}

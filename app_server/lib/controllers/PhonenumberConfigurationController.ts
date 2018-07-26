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
                    res.send(err);
                }
                res.json(configuration);
            });

    }

    public deletePhonenumberConfiguration(req: Request, res: Response) {

        console.log('Try to delete phonenumber');
        var id = req.params.id;
        console.log('id = ' + id);

        phonenumberConfigurationModel
            .deleteOne({ _id: id }, (err) => {
                if (err) {
                    console.log(err);
                }
                res.sendStatus(204);
            });

    }

}

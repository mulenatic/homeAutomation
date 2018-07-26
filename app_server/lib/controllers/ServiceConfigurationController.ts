import * as mongoose from 'mongoose';
import { ServiceConfigurationSchema } from '../models/ServiceConfigurationModel';
import { Request, Response } from 'express';

const serviceConfigurationModel = mongoose.model('ServiceConfiguration', ServiceConfigurationSchema);

export class ServiceConfigurationController {

    public getAllServiceConfigurations(req: Request, res: Response) {

        serviceConfigurationModel.find({}, (err, configuration) => {
            if (err) {
                res.statusCode = 400;
                console.log(err);
                res.send(err);
            } else {
                res.json(configuration);
            }
        });

    }

    public getServiceConfiguration(req: Request, res: Response) {

        serviceConfigurationModel.findOne({ _id: req.params.id }, (err, configuration) => {
            if (err) {
                res.statusCode = 400;
                console.log(err);
                res.send(err);
            } else {
                res.json(configuration);
            }

        });

    }

    public saveServiceConfiguration(req: Request, res: Response) {

        if (!req.body._id) {

            serviceConfigurationModel
                .create(req.body, (err, configuration) => {
                    if (err) {
                        res.statusCode = 400;
                        console.log(err);
                        res.send(err);
                    } else {
                        res.json(configuration);
                    }
                });

        } else {

            serviceConfigurationModel
                .findOneAndUpdate({ _id: req.body._id }, req.body, (err, configuration) => {
                    if (err) {
                        res.statusCode = 400;
                        console.log(err);
                        res.send(err);
                    } else {
                        res.json(configuration);
                    }
                });
        }


    }

    public deleteServiceConfiguration(req: Request, res: Response) {

        var id = req.params.id;

        serviceConfigurationModel
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

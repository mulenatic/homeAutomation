import * as mongoose from 'mongoose';
import { MeasurementSchema } from '../models/MeasurementModel';
import { Request, Response } from 'express';

const measurementModel = mongoose.model('Measurement', MeasurementSchema);

export class MeasurementController {

    public getAllMeasurements(req: Request, res: Response) {

        measurementModel.find({}, (err, measurements) => {
            if (err) {
                res.send(err);
            }
            res.json(measurements);

        });

    }

    public addMeasurement(req: Request, res: Response) {

        let measurement = new measurementModel(req.body);

        console.log(JSON.stringify(req.body));
        console.log(JSON.stringify(measurement));

        measurement.save((err, measurement) => {
            if (err) {
                res.send(err);
            }
            res.json(measurement);
        });

    }

}

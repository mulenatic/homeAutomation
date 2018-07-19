import * as mongoose from 'mongoose';
import { MeasurementSchema } from '../models/MeasurementModel';
import { Request, Response } from 'express';

const measurement = mongoose.model('Measurement', MeasurementSchema);

export class MeasurementController {

    public getAllMeasurements(req: Request, res: Response) {

        measurement.find({}, (err, measurements) => {
            if (err) {
                res.send(err);
            }
            res.json(measurements);

        });

    }

}

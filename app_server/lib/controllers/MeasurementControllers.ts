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

        measurement.save((err, measurement) => {
            if (err) {
                res.send(err);
            }
            res.json(measurement);
        });

    }

    public getDeviceList(req: Request, res: Response) {

        measurementModel.aggregate([{
            $group: {
                _id: '$deviceId',
                numberMeasurement: { $sum: 1 }
            }
        }], (err, result) => {
            if (err) {
                res.send(err);
            }
            res.json(result);
        });

    }

    public getCurrentDayMeasurmentsForDevice(req: Request, res: Response) {

        let deviceId: string = req.params.deviceId;

        measurementModel.find({
            deviceId: deviceId,
            createdOn: { $gt: (new Date).setHours(0, 0, 0, 0) }
        }, (err, measurements) => {
            if (err) {
                res.send(err);
            }
            res.json(measurements);
        });
    }

    public getAllMeasurmentsForDevice(req: Request, res: Response) {

        let deviceId: string = req.params.deviceId;

        measurementModel.find({
            deviceId: deviceId,
        }, (err, measurements) => {
            if (err) {
                res.send(err);
            }
            res.json(measurements);
        });
    }


}

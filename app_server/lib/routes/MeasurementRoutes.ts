import { Application } from 'express';
import { MeasurementController } from '../controllers/MeasurementControllers';

export class MeasurementRoutes {

    public measurementController: MeasurementController = new MeasurementController();

    public routes(app: Application): void {

        app.route('/api/measurement')
            .get(this.measurementController.getAllMeasurements)
            .post(this.measurementController.addMeasurement);

        app.route('/api/measurement/device')
            .get(this.measurementController.getDeviceList);

        app.route('/api/measurement/device/:deviceId')
            .get(this.measurementController.getAllMeasurmentsForDevice);

        app.route('/api/measurement/device/:deviceId/today')
            .get(this.measurementController.getCurrentDayMeasurmentsForDevice);

    }

}

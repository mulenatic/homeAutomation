import { Application } from 'express';
import { MeasurementController } from '../controllers/MeasurementControllers';

export class Routes {

    public measurementController: MeasurementController = new MeasurementController();

    public routes(app: Application): void {

        app.route('/api/measurement')
            .get(this.measurementController.getAllMeasurements);

    }

}

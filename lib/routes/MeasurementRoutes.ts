import { Application } from 'express';
import { MeasurementController } from '../controllers/MeasurementControllers';

export class MeasurementRoutes {

    public measurementController: MeasurementController = new MeasurementController();

    public routes(app: Application): void {

        app.route('/api/measurement')
            .get(this.measurementController.getAllMeasurements);

    }

}

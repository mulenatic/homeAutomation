import { Application } from 'express';
import { ServiceConfigurationController } from '../controllers/ServiceConfigurationController';

export class ServiceConfigurationRoutes {

    private controller: ServiceConfigurationController = new ServiceConfigurationController();

    public routes(app: Application): void {

        app.route('/api/serviceConfiguration')
            .get(this.controller.getAllServiceConfigurations)
            .post(this.controller.saveServiceConfiguration);

        app.route('/api/serviceConfiguration/:id')
            .get(this.controller.getServiceConfiguration)
            .delete(this.controller.deleteServiceConfiguration);

    }


}

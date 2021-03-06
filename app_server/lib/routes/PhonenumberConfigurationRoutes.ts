import { Application } from 'express';
import { PhonenumberConfigurationController } from '../controllers/PhonenumberConfigurationController';

export class PhonenumberConfigurationRoutes {

    private controller: PhonenumberConfigurationController = new PhonenumberConfigurationController();

    public routes(app: Application): void {

        app.route('/api/phonenumberConfiguration')
            .get(this.controller.getAllPhonenumberConfigurations)
            .post(this.controller.savePhonenumberConfiguration);

        app.route('/api/phonenumberConfiguration/:id')
            .get(this.controller.getPhonenumberConfiguration)
            .delete(this.controller.deletePhonenumberConfiguration);

    }


}

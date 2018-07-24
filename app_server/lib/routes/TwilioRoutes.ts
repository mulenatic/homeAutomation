import { Application } from 'express';
import { TwilioController } from '../controllers/TwilioControllers';

export class TwilioRoutes {

    private twilioController: TwilioController = new TwilioController();

    public routes(app: Application): void {

        app.route('/api/twilio/call')
            .get(this.twilioController.call);

    }
}

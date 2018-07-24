import { Request, Response } from 'express';
import * as Twilio from 'twilio';

const twilioNumber = '+4922349319012';
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = Twilio(accountSid, authToken);


export class TwilioController {


    public call(req: Request, res: Response) {

        console.log('Setting up call');

        client
            .calls
            .create({
                url: "http://demo.twilio.com/docs/voice.xml",
                to: "+491705766049",
                from: twilioNumber
            })
            .then(call => console.log("Call sid: " + call.sid))
            .done();

        console.log('Call created');

    }

}

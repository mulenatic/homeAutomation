import * as express from "express";
import * as bodyParser from "body-parser";
import { UiRoutes } from "./routes/UiRoutes";
import * as mongoose from "mongoose";
import path = require("path");
import * as logger from "morgan";

import { MeasurementRoutes } from "./routes/MeasurementRoutes";
import { TwilioRoutes } from "./routes/TwilioRoutes";

class App {

    public app: express.Application;
    public measurementRoutes: MeasurementRoutes = new MeasurementRoutes();
    public twilioRoutes: TwilioRoutes = new TwilioRoutes();
    public uiRoutes: UiRoutes = new UiRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.measurementRoutes.routes(this.app);
        this.twilioRoutes.routes(this.app);
        this.uiRoutes.routes(this.app);
        this.mongoSetup();
    }

    private mongoSetup(): void {

        let dbURI = 'mongodb://' + process.env.MONGO_USER + ':' + process.env.MONGO_PASSWORD + '@ds143070.mlab.com:43070/gettingmean';
        //        mongoose.Promise = global.Promise;
        mongoose.connect(dbURI);
    }

    private config(): void {

        this.app.use(logger('dev'));

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use(express.static('public'));
        this.app.use(express.static('node_modules'));
        this.app.use(express.static(path.resolve(__dirname, '..', '..', 'app_client')));

    }
}

export default new App().app;

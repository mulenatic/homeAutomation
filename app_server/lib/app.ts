import * as express from "express";
import * as bodyParser from "body-parser";
import { MeasurementRoutes } from "./routes/MeasurementRoutes";
import * as mongoose from "mongoose";
import path = require("path");
import * as logger from "morgan";

class App {

    public app: express.Application;
    public measurementRoutes: MeasurementRoutes = new MeasurementRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.measurementRoutes.routes(this.app);
        this.mongoSetup();
    }

    private mongoSetup(): void {

        let dbURI = 'mongodb://' + process.env.MONGO_USER + ':' + process.env.MONGO_PASSWORD + '@ds143070.mlab.com:43070/gettingmean';
        //        mongoose.Promise = global.Promise;
        mongoose.connect(dbURI);
    }

    private config(): void {

        this.app.use(logger('dev'));


        // support application/json type post data
        this.app.use(bodyParser.json());

        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use(express.static('public'));
        this.app.use(function(req, res) { res.sendFile(path.join(__dirname, '../public/angular', 'index.html')) });

    }
}

export default new App().app;

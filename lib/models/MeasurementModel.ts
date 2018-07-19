import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MeasurementSchema = new Schema({

    deviceId: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    measurementType: {
        type: String,
        required: true
    },
    measurementValue: {
        type: String,
        required: true
    }

});


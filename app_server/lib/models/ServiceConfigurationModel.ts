import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ServiceConfigurationSchema = new Schema({

    name: {
        type: String,
        index: { unique: true },
        required: true,
    },
    phonenumber: {
        type: Schema.Types.ObjectId
    }

});

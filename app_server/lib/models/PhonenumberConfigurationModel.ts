import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PhonenumberConfigurationSchema = new Schema({

    name: {
        type: String,
        index: { unique: true },
        required: true,
    },
    number: {
        type: String,
        required: true,
    }

});

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mountainSchema = new Schema({
    Name: {type: String, required: true},
    Description: String,
    Location:{
        Xcoord: String,
        Ycoord: String,
    }
}, { 
    timestamps: {}
});

// Actually create the Mountain schema
export const Mountain = mongoose.model('Mountain', mountainSchema);

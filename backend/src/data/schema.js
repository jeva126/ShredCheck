import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mountainSchema = new Schema({
    Name: {type: String, required: true},
    Description: String,
    Location:{
        Longitude: 	String,
	    Latitude: 	String,
	    Elevation:  String,
    },
    Status:{
        Source: String,
        Elements: [String],
        Conditions:[Number]
      },
    Price:{
        Source: [String],
        Elements: [String],
        Conditions:[Number]
      },

}, { 
    timestamps: {}
});

export const Mountain = mongoose.model('Mountain', mountainSchema);

const reviewSchema = new Schema({
    Name: {type: String, required: true},
    Date: Date,
    Description: String,
    Rating: Number
}, { 
    timestamps: {}
});

export const Review = mongoose.model('Review', reviewSchema);
"use strict"

const { default: mongoose } = require("mongoose")



/* ------------------------------------------------------- *
{
    "flightNumber": "TK 101",
    "airline": "THY",
    "departure": "ISTANBUL",
    "departureDate": "2024-04-02 21:00:00",
    "arrival": "BERLIN",
    "arrivalDate": "2024-04-02 22:00:00",
    "createdId": "65e1936b5a6e353e08758da6"
}
{
    "flightNumber": "LFT 102",
    "airline": "LUFTHANSA",
    "departure": "BERLIN",
    "departureDate": "2024-06-05 11:00:00",
    "arrival": "PARIS",
    "arrivalDate": "2024-06-05 13:00:00",
    "createdId": "65e1936b5a6e353e08758da6"
}
/* ------------------------------------------------------- */
// Fligt Model:

// const passwordEncrypt = require('../helpers/passwordEncrypt')

const FlightSchema = new mongoose.Schema({

    flightNumber: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },

    airline: {
        type: String, 
        trim: true,
        required: true,
    },
    departure: {
        type: String, 
        trim: true,
        required: true,
    },
    departureDate: {
        type: Date, 
        required: true,
    },
    arrival: {
        type: String, 
        trim: true,
        required: true,
    },
    arrivalDate: {
        type: Date, 
        required: true,
    },
    createdId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref : 'User',
        trim: true,
        required: true,
    }

}, { collection: 'flights', timestamps: true })


/* ------------------------------------------------------- */
module.exports = mongoose.model('Flight', FlightSchema)
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const launchSchema = new Schema ({
    flight_number: {
        type: Number
    },
    mission_name: {
        type: String
    },
    launch_year: {
        type: String
    },
    launch_date_local: {
        type: String 
    },
    launch_success: {
        type: Boolean
    },
    rocket : {

    }
});

module.exports = mongoose.model('launches', launchSchema)

const mongoose = require('mongoose')

const SportsSchema = new mongoose.Schema({
    eventname: {
        type: String,
        required: true
    },
    sportsname: {
        type:String,
        requied: true,
    },
    members: {
        type: Number,
        required: true,
    }, 
    description:{
        type: String,
        required: false,
    }
});

const SportsModel = mongoose.model('sports', SportsSchema )

module.exports =  SportsModel;
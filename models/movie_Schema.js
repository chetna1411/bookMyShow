const mongoose = require('mongoose');

const Movie = new mongoose.Schema({
    movieName : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    time : {
        type : String,
        required : true
    },
    language : {
        type : String,
        required : true
    },
    cinemaHoll : {
        type : String,
        required : true
    },
    postedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    }
});

module.exports = mongoose.model('movies',Movie);
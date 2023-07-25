const mongoose = require('mongoose')

const NextSchema = mongoose.Schema({

    _id: {
        type: String, 
        require: true
    },
    name: {
        type: String, 
        require: true
    },

    address: {
        type: String,
        require: true
    },
    Business: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    }

})
module.exports = mongoose.model('Next', NextSchema)
const mongoose = require('mongoose')

const WorkSchema = mongoose.Schema({

    _id: {
        type: String, 
        require: true
    },

    designation: {
        type: String,
        require: true
    },
    companyLocation: {
        type: String,
        require: true
    },
    companyName: {
        type: String,
        require: true
    }

})
module.exports = mongoose.model('Work', WorkSchema)
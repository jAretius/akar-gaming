const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({

    name: {

        type: String,
        required: true
    },

    lastName: String,
    email: {

        type: String,
        required: true

    },
    password: {

        type: String,
        required: true

    },
    type: {

        type: String,
        enum: ['guest', 'editor', 'admin'],
        default: 'guest'

    }

}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)
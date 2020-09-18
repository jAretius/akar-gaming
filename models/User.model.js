const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({

    username: {

        type: String,
        required: true

    },
    email: {

        type: String,
        required: true

    },
    password: {

        type: String,
        required: true

    },
    role: {

        type: String,
        required: true,
        enum: ['guest', 'editor', 'admin'],
        default: 'guest'

    },
    profileImage: {

        type: String,
        required: true,
        default: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.perigny-optique.fr%2Fwp-content%2Fuploads%2F2017%2F02%2Fuser-default.png&imgrefurl=https%3A%2F%2Fwww.perigny-optique.fr%2Fteam-view%2Fanne-alexandra%2Fuser-default%2F&tbnid=sehQp4A9Gp567M&vet=12ahUKEwiC4PDviPPrAhXY44UKHcVLCgUQMygKegUIARCqAQ..i&docid=U0Fkw3hB0JueWM&w=256&h=256&q=user%20default%20image&ved=2ahUKEwiC4PDviPPrAhXY44UKHcVLCgUQMygKegUIARCqAQ'

    }

}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)
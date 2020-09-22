const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({

    username: {

        type: String,
        required: true,
        unique: true

    },
    email: {

        type: String,
        required: true,
        unique: true

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
        default: 'https://t3.ftcdn.net/jpg/00/64/67/80/240_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg'

    },
    colleccion: {

        type: [Schema.Types.ObjectId],
        ref: 'game',
        state: {
            type: [String],
            enum: ['Want to Play', 'Playing', 'Beaten', 'Completed', 'Shelved', 'Abandoned']
        }
    },
    following: {

        type: [Schema.Types.ObjectId],
        ref: 'User'
    },

}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)
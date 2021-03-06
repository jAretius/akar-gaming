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
    wantToPlay: [{
        type: Schema.Types.ObjectId,
        ref: 'Game',
    }],
    playing: [{
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }],
    beaten: [{
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }],
    completed: [{
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }],
    shelved: [{
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }],
    abandoned: [{
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }],
    following: {

        type: [Schema.Types.ObjectId],
        ref: 'User'
    },

}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)
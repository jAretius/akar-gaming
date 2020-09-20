const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    trailer: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    directors: {
        type: [String],
        required: true
    },
    company: {
        type: String
        // type: Schema.Types.ObjectId,
        // ref: "Company"
    },
    release: {
        type: Date,
    },
    platforms: {
        type: [String],
        enum: ["PSX", "PS2", "PS3", "PS4", "PS5", "XBOX", "XBOX 360", "XBOX ONE", "XBOX SERIES", "NINTENDO SWITCH","PC"]
    },
    price: {
        type: Number,
        required: true
    },
    ratings: {
        ratingsAmount: {
            type: Number,
            default: 0
        },
        ratingsSum: {
            type: Number,
            default: 0
        },
        ratingAverage: {
            type: Number,
            default: 0
        },
    },
}, {
    timestamps: true
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
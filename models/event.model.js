const mongoose = require("mongoose")
const Schema = mongoose.Schema

const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    type: {
        type: String,
        enum: ["conference", "convention", "big event", "community event"]
    },
    attendants: {
        type: [Schema.Types.ObjectId],
        ref: "User"
    },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
}, {
    timestamps: true
});

eventSchema.index({
    location: '2dsphere'
})

const Event = mongoose.model("Place", eventSchema);

module.exports = Event;
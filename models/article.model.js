const mongoose = require("mongoose");
const Schema = mongoose.Schema

const articleSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    gameId: {
        type: Schema.Types.ObjectId,
        ref: "Game"
    },
    companyId: {
        type: Schema.Types.ObjectId,
        ref: "Company"
    },
    type: {
        type: String,
        enum: ["REVIEW", "NEWS"],
        default: "REVIEW"
    },
    formatedDate: {
        type: String,
        default: ''
    }
}, { timestamps: true })

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
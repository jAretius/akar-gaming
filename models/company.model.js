const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    logo: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: true
    }
})

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
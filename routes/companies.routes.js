const express = require('express')
const router = express.Router()

const Company = require("../models/company.model")
const Game = require("../models/game.model")

//Companies index
router.get("/", (req, res, next) => {

    Company.find({}, { name: 1 })
        .then(companies => res.render("companies/index", {companies}))
        .catch(err => next(err))
})

//Company details
router.get("/:companyId", (req, res, next) => {
    const id = req.params.companyId

    Company.findById(id)
        .then(companyDetails => res.render("companies/details", companyDetails))
        .catch(err => next(err))
})

module.exports = router
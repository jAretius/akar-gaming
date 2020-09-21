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

//New Company
router.get("/new", (req, res, next) =>  res.render("companies/new"))

router.post("/new", (req, res, next) => {
    const { name, logo, description, website} = req.body

    Company.create({ name, logo, description, website })
        .then(() => res.redirect("/companies/new"))
        .catch(err => next(new Error(err)))
})

//Company Update
router.get("/edit", (req, res, next) => {
    
    Company.findById(req.query.id)
        .then(companyDetails => res.render("companies/update", companyDetails))
        .catch(err => next(new Error(err)))
})

router.post("/edit", (req, res, next) => {
    const { name, logo, description, website } = req.body

    Company.findByIdAndUpdate(req.query.id, { name, logo, description, website })
        .then(() => res.redirect("/companies"))
        .catch(err => next(new Error(err)))
})

//Company Delete
router.get("/delete", (req, res, next) => {

    Company.findByIdAndDelete(req.query.id)
        .then(() => res.redirect("/companies"))
        .catch(err => next(new Error(err)))
})

//Company details
router.get("/:companyId", (req, res, next) => {
    const id = req.params.companyId

    Company.findById(id)
        .then(companyDetails => res.render("companies/details", companyDetails))
        .catch(err => next(err))
})

module.exports = router
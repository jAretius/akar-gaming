const express = require('express')
const router = express.Router()

const Company = require("../models/company.model")
const Game = require("../models/game.model")

// Middlewares

// Log
const isLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')

// Roles management middlewares
const checkPrivilege = (authRoles) => {

    return (req, res, next) => {

        if (authRoles.includes(req.user.role)) {

            next()

        } else {

            req.session.errorMessage = 'Log in with a privilege role please'

            res.redirect('/login')
        }
    }
}

//Companies index
router.get("/", (req, res, next) => {

    Company.find({}, { name: 1 })
        .then(companies => res.render("companies/index", { companies }))
        .catch(err => next(err))
})

//New Company
router.get("/new", isLoggedIn, checkPrivilege(['admin']), (req, res, next) => res.render("companies/new"))

router.post("/new", isLoggedIn, checkPrivilege(['admin']), (req, res, next) => {
    const { name, logo, description, website } = req.body

    Company.create({ name, logo, description, website })
        .then(() => res.redirect("/companies/new"))
        .catch(err => next(new Error(err)))
})

//Company Update
router.get("/edit", isLoggedIn, checkPrivilege(['admin']), (req, res, next) => {

    Company.findById(req.query.id)
        .then(companyDetails => res.render("companies/update", companyDetails))
        .catch(err => next(new Error(err)))
})

router.post("/edit", isLoggedIn, checkPrivilege(['admin']), (req, res, next) => {
    const { name, logo, description, website } = req.body

    Company.findByIdAndUpdate(req.query.id, { name, logo, description, website })
        .then(() => res.redirect("/companies"))
        .catch(err => next(new Error(err)))
})

//Company Delete
router.get("/delete", isLoggedIn, checkPrivilege(['admin']), (req, res, next) => {

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
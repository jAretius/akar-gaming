const express = require('express')
const router = express.Router()

const Company = require("../models/company.model")
const Game = require("../models/game.model")
const Article = require("../models/article.model")

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

//Company related Games
router.get("/related", (req, res, next) => {
    
    Game.find({ company: req.query.id }, { title: 1, image: 1 })
        .then(games => res.render("games/index", { games }))
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


//Company articles Index
router.get("/:companyId/articles", (req, res, next) => {
    const id = req.params.companyId

    Article.find({ companyId: id })
        .populate("creatorId")
        .then((articles) => res.render("companies/articleIndex", {articles}))
        .catch(err => next(new Error(err)))
})

//Company new Article
router.get("/:companyId/newArticle", (req, res, next) => {
    const id = req.params.companyId
    const user = req.user

    Company.findById(id)
        .then(company => res.render("companies/newArticle", { company, user }))
        .catch(err => next(new Error(err)))
})

router.post("/:companyId/newArticle", (req, res, next) => {
    const { text, creatorId, companyId, type } = req.body
    
    Article.create({ text, creatorId, companyId, type })
        .then(() => res.redirect("/companies"))
        .catch(err => next(new Error(err)))
})

module.exports = router
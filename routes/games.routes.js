const express = require('express')
const router = express.Router()

const Game = require("../models/game.model")
const Company = require("../models/company.model")

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

//Games list
router.get("/", (req, res, next) => {

    Game.find({}, { title: 1, image: 1 })
        .then(games => res.render("games/index", { games }))
        .catch(err => next(new Error(err)))
})

//New Game
router.get("/new", isLoggedIn, checkPrivilege(['admin']), (req, res, next) => {

    Company.find({})
        .then(companies => res.render("games/new", { companies }))
        .catch(err => next(new Error(err)))
})

router.post("/new", (req, res, next) => {
    const { title, image, trailer, description, directors, company, release, platforms, price } = req.body

    Game.create({ title, image, trailer, description, directors, company, release, platforms, price })
        .then(() => res.redirect("/games/new"))
        .catch(err => next(new Error(err)))
})

//Game update
router.get('/edit', isLoggedIn, checkPrivilege(['admin']), (req, res, next) => {

    const gamePromise = Game.findById(req.query.id)
    const companiesPromise = Company.find()

    Promise.all([gamePromise, companiesPromise])
        .then(results => res.render('games/update', { game: results[0], companies: results[1] }))
        .catch(err => next(new Error(err)))
})

router.post('/edit', isLoggedIn, checkPrivilege(['admin']), (req, res, next) => {
    const { title, image, trailer, description, directors, company, release, platforms, price } = req.body

    Game.findByIdAndUpdate(req.query.id, { title, image, trailer, description, directors, company_id: company, release, platforms, price })
        .then(() => res.redirect(`/games/${req.query.id}`))
        .catch(err => next(new Error(err)))
})

//Game Delete
router.get("/delete", isLoggedIn, checkPrivilege(['admin']), (req, res, next) => {

    Game.findByIdAndDelete(req.query.id)
        .then(() => res.redirect("/games"))
        .catch(err => next(new Error(err)))
})

//Game details
router.get("/:gameId", (req, res, next) => {
    const id = req.params.gameId

    Game.findById(id)
        .populate("company")
        .then(gameDetails => res.render("games/details", gameDetails))
        .catch(err => next(new Error(err)))
})

module.exports = router
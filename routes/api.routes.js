const express = require('express')
const { get } = require('mongoose')
const { findByIdAndUpdate } = require('../models/user.model')
const router = express.Router()

const User = require('../models/user.model')
const Game = require("../models/game.model")
const Event = require("../models/event.model")

// Middleware that checks that user is logged in
const isLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')

router.get('/', (req, res, next) => {

    Event
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

// End points

// Following management
router.put('/follow/:id', isLoggedIn, (req, res, next) => {

    User.find({ _id: req.user.id, following: req.params.id }, { _id: 1 })
        .then(matchedUser => {

            if (matchedUser.length) {

                User.findByIdAndUpdate(req.user.id, { $pull: { following: req.params.id } })
                    .then(() => res.send('Following pulled correctly'))

                return
            }

            User.findByIdAndUpdate(req.user.id, { $push: { following: req.params.id } })
                .then(() => res.send('Following pushed correctly'))
                .catch(err => next(err))

            return

        })
        .catch(err => next(err))
})

// Users searcher
router.get('/search/users/:input', (req, res, next) => {

    User.find({ username: { $regex: new RegExp(req.params.input), $options: 'i' } })
        .then(match => {
            res.send(match)
        })
        .catch(err => next(err))

})

router.get('/search/games/:input', (req, res, next) => {

    Game.find({ title: { $regex: new RegExp(req.params.input), $options: 'i' } })
        .then(match => {
            res.send(match)
        })
        .catch(err => next(err))
})

module.exports = router
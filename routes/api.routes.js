const express = require('express')
const { get } = require('mongoose')
const { findByIdAndUpdate } = require('../models/user.model')
const router = express.Router()

const User = require('../models/user.model')

// Middleware that checks that user is logged in
const isLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')

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

// Search engine
router.get('/search/:input', (req, res, next) => {

    User.find({ username: { $regex: new RegExp(req.params.input), $options: 'i' } })
        .then(match => {
            console.log(match)
            res.send(match)
        })

})

module.exports = router
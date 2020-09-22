const express = require('express')
const { get } = require('mongoose')
const { findByIdAndUpdate } = require('../models/user.model')
const router = express.Router()

const User = require('../models/user.model')

// Middleware that checks that user is logged in
const isLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')

// READ (Profile view)

router.get('/home', (req, res) => res.redirect(`/users/${req.user.username}`))

// DELETE (For deleting the user)

// UPDATE (Edit my profile)
router.get('/settings', isLoggedIn, (req, res) => res.redirect(`/users/${req.user.username}/settings`))

router.get('/:username/settings', isLoggedIn, (req, res) => res.render('user/settings', { user: req.user }))

router.post('/:id/settings', isLoggedIn, (req, res, next) => {

    console.log('Estamos en el post de settings')

    const { username, email } = req.body

    console.log(`username es:`, req.body.username)

    User.find({ $and: [{ username: { $ne: req.user.username } }, { username }] })
        .then(userMatch => {

            if (userMatch.length) {

                //respuesta si el name coincide
                res.render('user/settings', { errorMessage: 'This username is already in use', user: req.user })

                return
            }

            // Checks if email is available
            User.find({ $and: [{ username: { $ne: req.user.username } }, { email }] })
                .then(emailMatch => {

                    if (emailMatch.length) {

                        //respuesta si el mail coincide
                        res.render('user/settings', { errorMessage: 'This email is already in use', user: req.user })

                        return
                    }

                    User.findOneAndUpdate(req.params.id, { username, email })
                        .then(res.redirect('/users/home'))
                        .catch(err => next(err))

                })
        })
})



// READ
router.get('/:username', isLoggedIn, (req, res) => res.render('user/profile', req.user))


module.exports = router
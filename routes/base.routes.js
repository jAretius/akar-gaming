const express = require('express')
const router = express.Router()
const passport = require('passport')

const User = require('../models/user.model')

const bcrypt = require('bcrypt')
const bcryptSalt = 10

//----- MIDDLEWARES -----

const registerUser = () => {

    return (req, res, next) => {

        const { username, email, password } = req.body

        // Checks if username is available
        User.find({ $or: [{ username }, { email }] })
            .then(userMatch => {

                if (userMatch.length) {

                    let errorMessage

                    userMatch[0].username === username ? errorMessage = 'This username is already in use' : errorMessage = 'This email is already in use'

                    res.render('auth/register', { errorMessage, user: req.user })

                    return
                }

                const salt = bcrypt.genSaltSync(bcryptSalt)
                const hash = bcrypt.hashSync(password, salt)

                return User.create({ username, email, password: hash })

            })
            .then((returned) => {

                if (returned) {

                    delete req.body.email
                    next()
                }
            })
            .catch(err => next(err))

    }

}

// Middleware that checks that user is logged in
const isLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')

// Endpoints
router.get('/', (req, res) => res.render('index'))

// AUTH

// Register
router.get('/register', (req, res, next) => {

    res.render('auth/register')

})

// Register (post)
router.post("/register", registerUser(), passport.authenticate("local", {

    successRedirect: `/users/home`,
    failureRedirect: "/register",
    failureFlash: true,
    passReqToCallback: true
}))


// Login
router.get('/login', (req, res, next) => {
    res.render('auth/login', { errorMessage: req.session.errorMessage })
    req.session.errorMessage = ''
})

// Login (post)
router.post("/login", passport.authenticate("local", {

    successRedirect: `/users/home`,
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
}))

// Logout
router.get('/logout', (req, res, next) => {

    req.logOut()
    res.redirect('/')

})

module.exports = router

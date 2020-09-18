const express = require('express')
const router = express.Router()
const passport = require('passport')

const User = require('../models/User.model')

const bcrypt = require('bcrypt')
const bcryptSalt = 10

//----- MIDDLEWARES -----

// Register (middleware)
const registerUser = () => {

    return (req, res, next) => {

        const { username, email, password } = req.body

        const salt = bcrypt.genSaltSync(bcryptSalt)

        const hash = bcrypt.hashSync(password, salt)

        User.create({ username, email, password: hash })
            .then(() => {
                console.log(req.body)
                delete req.body.email
                console.log(req.body)
                next()
            })
            .catch(err => next(err))
    }

}

// Middleware that checks that user is logged in
const isLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')

// Endpoints
router.get('/', (req, res) => req.user ? res.redirect('/home') : res.render('index'))

// AUTH

// Register
router.get('/register', (req, res, next) => {

    req.user ? res.redirect('/home') : res.render('auth/register')

})

// Register (post)
router.post("/register", registerUser(), passport.authenticate("local", {

    successRedirect: `/home`,
    failureRedirect: "/fail",
    failureFlash: true,
    passReqToCallback: true
}))


// Login
router.get('/login', (req, res, next) => res.render('auth/login'))

router.get('/fail', (req, res, next) => {

    const erroMessage = req.flash("error")

    req.user ? res.redirect('/home') : res.send(erroMessage)
})

// Login (post)
router.post("/login", passport.authenticate("local", {

    successRedirect: `/home`,
    failureRedirect: "/fail",
    failureFlash: true,
    passReqToCallback: true
}))

// Logout
router.get('/logout', (req, res, next) => {

    req.logOut()
    res.redirect('/')

})

// User home
router.get('/home', isLoggedIn, (req, res, next) => res.render('user/index'))


module.exports = router

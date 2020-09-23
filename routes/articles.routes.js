const express = require('express')
const router = express.Router()

const Article = require("../models/article.model")
const Company = require("../models/company.model")
const Game = require("../models/game.model")

//Article Update
router.get("/edit", (req, res, next) => {

    Article.findById(req.query.id, { text: 1 })
        .then(articleDetails => res.render("articles/articleEdit", articleDetails))
        .catch(err => next(new Error(err)))
})

router.post("/edit", (req, res, next) => {
    const { text } = req.body

    Article.findByIdAndUpdate(req.query.id, { text })
        .then(() => res.redirect(`/users/${req.user.username}`))
        .catch(err => next(new Error(err)))
})

//Article Delete
router.get("/delete", (req, res, next) => {

    Article.findByIdAndDelete(req.query.id)
        .then(() => res.redirect(`/users/${req.user.username}`))
        .catch(err => next(new Error(err)))
})

module.exports = router
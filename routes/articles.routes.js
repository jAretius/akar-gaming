const express = require('express')
const router = express.Router()

const Article = require("../models/article.model")
const Company = require("../models/company.model")
const Game = require("../models/game.model")

//Article Update


//Article Delete
router.get("/delete", (req, res, next) => {

    Article.findByIdAndDelete(req.query.id)
        .then(() => res.redirect("/articles"))
        .catch(err => next(new Error(err)))
})

module.exports = router
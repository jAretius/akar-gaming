const express = require('express')
const router = express.Router()

const Game = require("../models/game.model")
const Company = require("../models/company.model")

//Games list
router.get("/", (req, res, next) => {
    
    Game.find({}, { title: 1, image: 1 })
        .then(games => res.render("games/index", {games}))
        .catch(err => next(err))
})

//Game details
router.get("/:gameId", (req, res, next) => {
    const id = req.params.gameId

    Game.findById(id)
        .then(gameDetails => res.render("games/details", gameDetails))
        .catch(err => next(err))
})

module.exports = router
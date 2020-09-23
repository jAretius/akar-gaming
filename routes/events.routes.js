const express = require('express')
const router = express.Router()

const Event = require('../models/event.model')

//List events
router.get("/", (req, res, next) => {

    Event.find({})
        .then(events => res.render("events/index", { events }))
        .catch(err => next(err))
})

//New event
router.get("/new", (req, res, next) => res.render("events/new"))

router.post("/new", (req, res, next) => {
    let location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }


    const newEvent = {
        name: req.body.name,
        date: req.body.date,
        formattedDate: req.body.date,
        description: req.body.description,
        type: req.body.type,
        location
    }

    Event.create(newEvent)
        .then(() => res.redirect("/events"))
        .catch(err => next(new Error(err)))
})

//Edit event
router.get("/edit", (req, res, next) => {
    

    Event.findById(req.query.id)
        .then(eventDetails => res.render("events/edit", eventDetails))
        .catch(err => next(new Error(err)))
})

router.post("/edit/", (req, res, next) => {

    let location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }

    const newEvent = {
        name: req.body.name,
        date: req.body.date,
        description: req.body.description,
        type: req.body.type,
        location
    }

    Event.findByIdAndUpdate(req.query.id, newEvent)
        .then(() => res.redirect("/events"))
        .catch(err => next(new Error(err)))
})

//Delete event
router.get("/delete", (req, res, next) => {

    Event.findByIdAndDelete(req.query.id)
        .then(() => res.redirect("/events"))
        .catch(err => next(new Error(err)))
})

//Event details
router.get("/:eventId", (req, res, next) => {
    const id = req.params.eventId

    Event.findById(id)
        .then(eventDetails => res.render("events/details", eventDetails))
        .catch(err => next(new Error(err)))
})

//Attend Event
router.put('/attend/:id', (req, res, next) => {

    Event.find({ _id: req.params.id, attendants: req.user.id }, { _id: 1 })
        .then(matchedEvent => {

            if (matchedEvent.length) {
                
                return Event.findByIdAndUpdate(req.params.id, { $pull: { attendants: req.user.id } })
                
            }
            
            return Event.findByIdAndUpdate(req.params.id, { $push: { attendants: req.user.id } })
            
        })
        .then(() => res.send('Success'))
        .catch(err => next(new Error(err)))
})

module.exports = router
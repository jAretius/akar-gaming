const express = require('express')
const { get } = require('mongoose')
const { findByIdAndUpdate } = require('../models/user.model')
const router = express.Router()

const User = require('../models/user.model')

module.exports = router
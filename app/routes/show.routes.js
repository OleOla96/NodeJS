const express = require('express')
const route = express.Router()
const showAllController = require('../controllers/show.controller')

route.get("/", showAllController.showAll)
route.get("/:id", showAllController.showVideo)

module.exports = route
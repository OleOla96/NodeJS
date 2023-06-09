const express = require('express')
const route = express.Router()
const { authJwt } = require("../middleware")
const crudController = require("../controllers/crud.controller")


route.post("/create", authJwt.verifyToken, crudController.create)
route.get("/mycontents/:userId", authJwt.verifyToken, crudController.mycontents)
route.get("/update/:id", authJwt.verifyToken, crudController.getcontent)
route.put("/update/:id", authJwt.verifyToken, crudController.update)
route.delete("/delete/:id", authJwt.verifyToken, crudController.delete)

module.exports = route
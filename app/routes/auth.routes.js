const express = require('express')
const route = express.Router()
const { verifySignUp } = require("../middleware")
const authController = require("../controllers/auth.controller")

route.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  )
  next()
})

route.post(
  "/signup",
  [
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRolesExisted
  ],
  authController.signup
)

route.post("/signin", authController.signin)

module.exports = route
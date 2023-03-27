const express = require('express')
const route = express.Router()
const { authJwt } = require("../middleware")
const rolesController = require("../controllers/roles.controller")

route.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, Content-Type, Accept"
  );
  next();
  })

route.post("/crud/create", [authJwt.verifyToken], rolesController.creatContent)

route.get(
  "/user",
  [authJwt.verifyToken],
  rolesController.userBoard
)

route.get(
  "/user/:id",
  [authJwt.verifyToken],
  rolesController.showContent
)

route.get(
  "/mod",
  [authJwt.verifyToken, authJwt.isModerator],
  rolesController.moderatorBoard
)

route.get(
  "/admin",
  [authJwt.verifyToken, authJwt.isAdmin],
  rolesController.adminBoard
)

module.exports = route
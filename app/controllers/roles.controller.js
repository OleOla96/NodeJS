const db = require("../models")
const Contents = db.contents

exports.userBoard = (req, res, next) => {
  Contents.findAll({where: {userId: req.params.userId}})
    .then(data => {
      res.status(200).send(data)
    }
  ).catch(next)
}

exports.showContent = (req, res, next) => {
  Contents.findOne(
    {where: {id: req.params.id}})
    .then(data => {
      res.status(200).send({data})
    }
  ).catch(next)
}

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.")
}

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.")
}
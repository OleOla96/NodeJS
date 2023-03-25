
const db = require("../models")
const PublicContent = db.publicContent
const PrivateContent = db.privateContent

exports.allAccess = (req, res) => {
  PublicContent.findAll()
    .then(data => {
      res.status(200).send(data)
    }
  )
}

exports.userBoard = (req, res) => {
  PrivateContent.findAll()
    .then(data => {
      res.status(200).send({data})
    }
  )
}

exports.creatContent = (req, res) => {
  PrivateContent.create({
    name: req.body.description,
    linkImage: req.body.linkImage,
    linkVideo: req.body.linkVideo,
    userId: req.body.userId
  })
    .then(res.send({ message: "Content has been created successfully!"}))
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.")
}

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.")
}
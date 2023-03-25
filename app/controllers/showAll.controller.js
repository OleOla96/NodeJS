const db = require('../models')
const PublicContent = db.publicContent

exports.showAll = (req, res) => {
  PublicContent.findAll()
    .then(data => {
      res.status(200).send({
        data
      })
    }
  )
}

exports.showVideo = (req, res) => {
  PublicContent.findOne({where: { id: req.params.id}})
    .then(data => {
      res.status(200).send({
        data
      })
    }
  ).catch(err => {
    res.status(500).send({ message: err.message })
  })
}

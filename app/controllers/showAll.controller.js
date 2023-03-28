const db = require('../models')
const Contents = db.contents

exports.showAll = (req, res) => {
  Contents.findAll({where: { published: true }})
    .then(data => {
      res.status(200).send({
        data
      })
    })
  .catch(err => {
    res.status(500).send({ message: err.message })
  })
}

exports.showVideo = (req, res) => {
  Contents.findOne({where: { id: req.params.id, published: true }})
    .then(data => {
      res.status(200).send({
        data
      })
    }
  ).catch(err => {
    res.status(500).send({ message: err.message })
  })
}

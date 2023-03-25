const { where } = require("sequelize")
const db = require("../models")
const Op = db.sequelize.Op
const PublicContent = db.publicContent

class CrudController {
  create(req, res) {
    PublicContent.create({
      description: req.body.description,
      linkImage: req.body.linkImage,
      linkVideo: req.body.linkVideo,
      userId: req.body.userId
    })
      .then(res.send({ message: "Content has been created successfully!"}))
      .catch(err => {
        res.status(500).send({ message: err.message })
      })
  }
  
  mycontents(req, res, next) {
    const userId = req.params.userId

    PublicContent.findAll({
      where: {userId: userId}
    })
    .then(data => {
      res.status(200).send({data})
    })
    .catch(next)
  }

  update(req, res) {
    const getId = req.params.id
    const data = {
      id: req.params.id,
      description: req.body.description,
      linkImage: req.body.linkImage,
      linkVideo: req.body.linkVideo,
      userId: req.body.userId
    }
    
    PublicContent.update( data, {where : { id: getId }})
    .then(res.send({ message: "Content was updated successfully." }))
    .catch(() => {
      res.status(500).send({
        message: "Error updating content with id=" + getId
      })
    })
  }

  delete(req, res) {
    const getId = req.params.id
    PublicContent.destroy({where: { id: getId }})
    .then(res.send({ message: "Content was deleted successfully." }))
    .catch(() => {
      res.status(500).send({
        message: "Error delete content with id=" + getId
      })
    })
  }
  
  // deleteAll(req, res) {
  //   const getId = req.params.id
  //   PublicContent.destroy({where: { id: getId }})
  //   .then(res.send({ message: "Content was deleted successfully." }))
  //   .catch(() => {
  //     res.status(500).send({
  //       message: "Error delete content with id=" + getId
  //     })
  //   })
  // }

}

module.exports = new CrudController
const db = require("../models")
const Contents = db.contents

class CrudController {
  create(req, res) {
    Contents.create({
      userId: req.body.userId,
      title: req.body.title,
      description: req.body.description,
      linkVideo: req.body.linkVideo,
      published: req.body.stateContent
    })
      .then(res.send({ message: "Content has been created successfully!"}))
      .catch(err => {
        res.status(500).send({ message: err.message })
      })
  }
  
  mycontents(req, res, next) {
    const userId = req.params.userId

    Contents.findAll({
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
      title: req.body.title,
      description: req.body.description,
      linkVideo: req.body.linkVideo,
      published: req.body.stateContent
    }
    
    Contents.update( data, {where : { id: getId }})
    .then(res.send({ message: "Content was updated successfully." }))
    .catch(() => {
      res.status(500).send({
        message: "Error updating content with id=" + getId
      })
    })
  }

  delete(req, res) {
    const getId = req.params.id
    Contents.destroy({where: { id: getId }})
    .then(res.send({ message: "Content was deleted successfully." }))
    .catch(() => {
      res.status(500).send({
        message: "Error delete content with id=" + getId
      })
    })
  }
  
  // deleteAll(req, res) {
  //   const getId = req.params.id
  //   Contents.destroy({where: { id: getId }})
  //   .then(res.send({ message: "Content was deleted successfully." }))
  //   .catch(() => {
  //     res.status(500).send({
  //       message: "Error delete content with id=" + getId
  //     })
  //   })
  // }

}

module.exports = new CrudController
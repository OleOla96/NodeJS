const db = require('../models')
const Contents = db.contents
const Op = db.Sequelize.Op

exports.searchTitle = (req, res) => {
  const title = req.query.q
  var condition = title
    ? { title: { [Op.like]: `%${title}%` }, published: true }
    : null
  console.log(condition)
  Contents.findAll({ where: condition })
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => {
      res.status(500).send({ message: err.message })
    })
}

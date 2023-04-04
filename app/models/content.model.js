module.exports = (sequelize, Sequelize) => {
  const contents = sequelize.define("contents", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    linkVideo: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  })
  return contents
}
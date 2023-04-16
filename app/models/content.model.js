module.exports = (sequelize, Sequelize) => {
  const contents = sequelize.define(
    'contents',
    {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      linkVideo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      published: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_unicode_ci',
    }
  )
  return contents
}

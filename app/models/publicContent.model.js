module.exports = (sequelize, Sequelize) => {
    const PublicContent = sequelize.define("public_contents", {
      description: {
        type: Sequelize.STRING
      },
      linkImage: {
        type: Sequelize.STRING
      },
      linkVideo: {
        type: Sequelize.STRING
      }
    });
    return PublicContent;
  };
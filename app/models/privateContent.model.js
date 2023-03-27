module.exports = (sequelize, Sequelize) => {
    const PivateContent = sequelize.define("private_contents", {
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
    return PivateContent;
  };
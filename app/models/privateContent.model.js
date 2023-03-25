module.exports = (sequelize, Sequelize) => {
    const PivateContent = sequelize.define("private_contents", {
      name: {
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
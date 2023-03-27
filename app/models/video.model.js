module.exports = (sequelize, Sequelize) => {
    const Video = sequelize.define("videos", {
      description: {
        type: Sequelize.STRING
      },
      linkVideo: {
        type: Sequelize.STRING
      },
      linkImage: {
        type: Sequelize.STRING
      }
    });
  
    return Video;
  };
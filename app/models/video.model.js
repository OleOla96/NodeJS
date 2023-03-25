module.exports = (sequelize, Sequelize) => {
    const Video = sequelize.define("videos", {
      name: {
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
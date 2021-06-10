module.exports = (sequelize, Sequelize) => {
    const Labelplaceholder = sequelize.define("labelplaceholder", {
    label: {
        type: Sequelize.STRING
      },
    placeholder: {
        type: Sequelize.STRING
      }
    });
  
    return Labelplaceholder;
  };
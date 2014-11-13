"use strict";

module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    raise: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Project.belongsTo(models.Student)
      }
    }
  });
  return Project;
};

// var Project = sequelize.define('Project', {
//   name: Sequelize.STRING,
//   description: Sequelize.TEXT,
//   datefinish: Sequelize.DATE,
//   amountToRaise: Sequelize.INTEGER
// });

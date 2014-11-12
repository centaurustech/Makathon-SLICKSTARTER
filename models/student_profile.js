"use strict";

module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define("Student", {
    username: DataTypes.STRING
  }, {
    classMethods {
      assosciate: function(models) {
        User.hasMany(models.Project)
      }
    }
  })

return Student;
// var studentProfile = sequelize.define('studentProfile', {
//   first_name: Sequelize.STRING,
//   second_name: Sequelize.STRING,
//   university: Sequelize.STRING,
//   amountToRaise: Sequelize.INTEGER
});

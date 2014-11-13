"use strict";

module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define("Student", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Student.hasMany(models.Project)
      }
    }
  })

return Student;
};

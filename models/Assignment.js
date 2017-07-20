var db = require('../models');

module.exports = function (sequelize, DataTypes) {
  var Assignments = sequelize.define('Assignments', {
    assignName: {
      type: DataTypes.STRING, 
      validate: {
        isAlpha: true 
      }
    },
  }, {
    classMethods: {
      associate: function (models) {
       Assignment.hasMany(models.Grades); 
       Assignments.belongsTo(models.Students); 
      }
    }
  }); 
  return Assignments;
}

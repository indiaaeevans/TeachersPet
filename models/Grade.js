var db = require('../models');

module.exports = function (sequelize, DataTypes) {
  var Grades = sequelize.define('Grades', {
    Grades: {
      type: DataTypes.INTEGER, 
      set: function(value) {
        if (typeof value === 'string') return value = parseInt(value); 
        else return value; 
      }
    },
  }, {
    classMethods: {
      associate: function (models) {
       Grades.belongsTo(models.Assignments); 
      }
    }
  })
  return Grades;
}

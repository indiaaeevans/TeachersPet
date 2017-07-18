var db = require('../models'); 

module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    name: {
      type: DataTypes.STRING, 
      notEmpty: true 
    }, 
    email: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        Students.belongsTo(models.Teacher); 
        Students.hasMany(models.Assignments); 
        Students.hasMany(models.Attendance); 
      }
    }
  }); 
  return Students; 
}

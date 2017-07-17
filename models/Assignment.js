var db = require('../models');

module.exports = function (sequelize, DataTypes) {
  var Assignments = sequelize.define('Assignments', {
    assignName: {
      type: DataTypes.STRING, 
    },
  }, {
    classMethods: {
      associate: function (models) {
       Assignments.belongsTo(models.Students); 
      }
    }
  })
  return Teacher;
}

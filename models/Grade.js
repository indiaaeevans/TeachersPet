module.exports = function (sequelize, DataTypes) {
  var Grades = sequelize.define('Grades', {
    grade: {
      type: DataTypes.INTEGER, 
    },
  }); 
  Grades.associate = function(models) {
    Grades.belongsTo(models.Assignments); 
    Grades.belongsTo(models.Students); 
  }
  return Grades;
}

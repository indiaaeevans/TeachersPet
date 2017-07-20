module.exports = function(sequelize, DataTypes) {
  var Attendance = sequelize.define('Attendance', {
    Date: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      }
    },
    Present: {
      type: DataTypes.BOOLEAN,
      defaultValue: true, 
      set: function(value) {
        if (value === 'true') value = true; 
        if (value === 'false') value = false; 
      }
    }
  }); 
  Attendance.associate = function(models) {
    Attendance.belongsTo(models.Students); 
  }
  return Attendance; 
}

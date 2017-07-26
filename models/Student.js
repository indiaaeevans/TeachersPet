module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    firstName: {
      type: DataTypes.STRING,
      notEmpty: true,
      validate: {
        isAlpha: true
      }
    },

    lastName: {
      type: DataTypes.STRING,
      notEmpty: true,
      validate: {
      isAlpha: true
      }
    },

    email: {
      type: DataTypes.STRING,
      notEmpty: true,
      validate: {
      isEmail: true,
      }
    },

    imgUrl: {
      type: DataTypes.STRING,
      notEmpty: true
    }

  });
  Students.associate = function(models) {
    Students.belongsTo(models.Teacher);
    Students.hasMany(models.Assignments);
    Students.hasMany(models.Attendance);
  }
  return Students;
}

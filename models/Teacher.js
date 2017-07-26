module.exports = function (sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
    },
    last_login: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }
  }); 
  Teacher.associate = function(models) {
<<<<<<< HEAD
    Teacher.hasMany(models.Students); 
    Teacher.hasMany(models.Cal_Events); 

=======
    Teacher.hasMany(models.Students, {
      onDelete: 'cascade'
    }); 
>>>>>>> ecd90008261d468ffff50d55f991f181e6727fb0
  }
  return Teacher;
}

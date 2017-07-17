var db = require('../models');

module.exports = function (sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT,
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
      validate: {
        len: [6,12]
      }
    }
  }, {
    classMethods: {
      associate: function (models) {
        Teacher.hasMany(models.Students)
      }
    }
  })
  return Teacher;
}

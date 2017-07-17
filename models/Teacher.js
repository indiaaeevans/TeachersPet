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
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function (models) {
        Teacher.hasMany(models.Students, {
          onDelete: 'cascade'
        })
      }
    }
  })
  return Teacher;
}
// Require mongoose
var mongoose = require('mongoose');

// Create a Schema class with mongoose
var Schema = mongoose.Schema;


var StudentSchema = new Schema({
  student: {
    name: {
      type: String, 
      unique: true 
    },
    email: {
      type: String
    },
    attendance: [{
      date: [{
        type: Date,
        default: Date.now
      }],
      present: Boolean,
      grades: [{
        assignName: {
          type: String,
          unique: true,
        },
        grade: {
          type: Number,
          validate: {
            validator: Number.isInteger,
            message: `{VALUE} is not an integer value`
          }
        }
      }]
    }],
  }
})


// initialize Classes Schema 
var ClassSchema = new Schema({
  class: {
    name: {
        type: String,
        unique: true
      },
      students: [StudentSchema]
  },
});


var TeacherSchema = new Schema({
  teacher: {
    name: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      unique: true
    },
    // from user auth with sequelize...not sure how best to convert to mongodb
    last_login: {
      type: DATE
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    },
    classes: [ClassSchema]
  }
});


var Teacher = mongoose.model("Teacher", TeacherSchema);


module.exports = Teacher;


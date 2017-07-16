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
    username: {
      type: String,
      unique: true,
    },
    classes: [ClassSchema]
  }
});

var Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;


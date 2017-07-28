var React = require('react'); 
var helpers = require('./utils/helpers'); 

var ReactApp = React.createFactory(React.createClass({
  getInitialState: function() {
    return {
      students: []
    }
  }, 
  componentDidMount: function() {
   helpers.getStudents().then(function(students) {
     console.log(students); 
     this.setState({
       students: students.data 
     }); 
   }.bind(this)); 
  },
  render: function() {
    return (
      <div>
        <ul className="collection">

              {this.state.students.map((students, i) =>{
                return (
                  <li key={i} className="collection-item avatar">
                   <a key={`${students.name + i}`} href="#student-modal"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/150px-Placeholder_no_text.svg.png" alt="" className="circle" />
                    <p key={students.firstName} className="name">{students.firstName}</p>
                    <p key={students.email} className="email">{students.email}</p>
                  </a>
                </li>
                ); 
              })}
        </ul>
      </div>
    ); 
  }
})); 

module.exports.ReactApp = ReactApp;
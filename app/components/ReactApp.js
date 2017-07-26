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
        <div className="row">
          <div className="col s12 student-list-pnl">

            <div className="card-panel white">
              <table>
                <thead>
                  <tr>
                    <th>Students <a className="btn-floating btn-tiny waves-effect waves-light orange lighten-3 student-add-btn"><i className="tiny material-icons">add</i></a></th>
                  </tr>
                </thead>
              </table>

              <ul className="collection">

              {this.state.students.map((students, i) =>{
                return (
                  <li key={i} className="collection-item avatar">
                   <a key={`${students.name + i}`} href="#student-modal"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/150px-Placeholder_no_text.svg.png" alt="" className="circle" />
                    <p key={students.name} className="name">{students.name}</p>
                    <p key={students.email} className="email">{students.email}</p>
                  </a>
                </li>
                ); 
              })}

              </ul>

            </div>
          </div>
        </div>
      </div>

    ); 
  }
})); 

module.exports.ReactApp = ReactApp;
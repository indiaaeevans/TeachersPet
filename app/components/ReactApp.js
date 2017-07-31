var React = require('react');
var helpers = require('./utils/helpers');

var ReactApp = React.createFactory(
  React.createClass({
    getInitialState: function() {
      return {
        students: []
      };
    },
    componentDidMount: function() {
      helpers.getStudents().then(
        function(students) {
          console.log(students);
          this.setState({
            students: students.data
          });
        }.bind(this)
      );
    },
    render: function() {
      return (
              <div className="collection">

                {this.state.students.map((students, i) => {

                return (
                  <a href="#student-summary-modal" id={students.name} key={i} className="collection-item name">
                    <span className="showId">{students.id}</span> {students.name}
                  </a>
                );
                })}
              </div>
      );
    }
  })
);

module.exports.ReactApp = ReactApp;

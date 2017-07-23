var React = require('react'); 

var ReactApp = React.createFactory(React.createClass({
  componentDidMount: function() {
    console.log('this works'); 
  },
  render: function() {
    return (
      <div>
        <nav className="teal lighten-1" role="navigation">
          <div className="nav-wrapper container"><a id="logo-container" href="index.html" className="brand-logo">Teacher's Pet</a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href='#modal1'> Log In </a>
              </li>
              <li><a href='#modal2'> Register </a>
              </li>
            </ul>
            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          </div>
        </nav>

        <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <br />
            <br />
            <div className="row center extra-padding">
              <h5 className="header col s12 light">Manage your class today!</h5>
            </div>
            <div className="row extra-padding center">
              <a className="waves-effect waves-light btn orange lighten-3" type="submit" id="login" href="#modal1">ENTER TEACHER PORTAL</a>
            </div>
            <br />
            <br />
          </div>
        </div>

        <div className="container">
          <div className="section">

            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">

                  <h2 className="center light-blue-text"><i className="material-icons">flash_on</i></h2>
                  <center><img className="icons" src="/images/icon1.png" /> </center>
                  <h5 className="center">No need to write/memorize everything</h5>
                  <p className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna.
                  </p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <center><img className="icons" src="/images/icon2.png" /></center>
                  <h5 className="center">Keep things in a centralized location</h5>
                  <p className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                  </p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <center><img className="icons" src="/images/icon3.png" /></center>
                  <h5 className="center">Students can easily get a sense of where they stand</h5>
                  <p className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>

        <footer className="page-footer orange">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Eyad is awesome</h5>
                <p className="grey-text text-lighten-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Settings</h5>
                <ul>
                  <li><a className="white-text" href="#!">Link 1</a></li>
                  <li><a className="white-text" href="#!">Link 2</a></li>
                  <li><a className="white-text" href="#!">Link 3</a></li>
                  <li><a className="white-text" href="#!">Link 4</a></li>
                </ul>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <li><a className="white-text" href="#!">Link 1</a></li>
                  <li><a className="white-text" href="#!">Link 2</a></li>
                  <li><a className="white-text" href="#!">Link 3</a></li>
                  <li><a className="white-text" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
            </div>
          </div>
        </footer>


        <div id="modal1" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h4>Log In</h4>

            <div className="row">
              <form className="col s12" id="signin" name="signin" method="post" action="/signin">

                <div className="row">
                  <div className="input-field col s12">
                    <input name="email" type="email" className="validate"></input>
                    <label htmlFor="email">Email:</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input name="password" type="password" className="validate" />
                    <label htmlFor="password">Password</label>
                  </div>

                  <div className="col s2 right-align">
                    <button id="signinbutton" className="btn waves-effect waves-light blue lighten-1" type="submit" value="Sign In">Submit
                                          <i className="material-icons right">input</i>
                                      </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Cancel</a>
          </div>
        </div>

        <div id="modal2" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h4>Register</h4>

            <div className="row">
              <form className="col s12" id="signup" name="signup" method="post" action="/signup">

                <div className="row">
                  <div className="input-field col s12">
                    <input name="name" type="text" className="validate newuser"></input>
                    <label htmlFor="name">Name:</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input name="email" type="email" className="validate newuser"></input>
                    <label htmlFor="email">Email:</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input name="password" type="password" className="newuser validate" />
                    <label htmlFor="password">Password</label>
                  </div>

                  <div className="col s2 right-align">
                    <button id="signupbutton" className="btn waves-effect waves-light blue lighten-1" type="submit" value="Sign Up">Submit
                                          <i className="material-icons right">input</i>
                                      </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Cancel</a>
          </div>
        </div>
      </div>
    ); 
  }
})); 

module.exports.ReactApp = ReactApp;
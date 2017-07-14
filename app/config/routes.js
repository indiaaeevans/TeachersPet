// Include the React library
import React from 'react';

// Include the react-router module
// Include the route component for displaying individual routes
// Include the router component to contain all our Routes
// Here where we can pass in some configuration as props
// Include the hashHistory prop to handle routing client side without a server
import router, { Route, Router, hashHistory, IndexRoute } from 'react-router';

// Reference the high-level components
import Main from '../components/Main';

// Export the Routes
module.exports = (
  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Main} />
    </Route>
  </Router>
);

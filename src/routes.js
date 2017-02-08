import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import CostsContainer from './containers/costs_container';
import LocationSearch from './containers/locationSearch';
import App from './components/app';

const routes = ( 
  <Router history={browserHistory}> 
    <Route component={App} path="app">
      <Route path="/" component={LocationSearch} />
      <Route path="/planner" component={CostsContainer} />
    </Route>
  </Router>
);

export default routes;


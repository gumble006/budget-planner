import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import CostsContainer from './containers/costs_container';
import App from './components/app';

const routes = ( 
  <Router history={browserHistory}> 
    <Route component={App} path="app">
      <Route path="/" component={CostsContainer} />
    </Route>
  </Router>
);

export default routes;


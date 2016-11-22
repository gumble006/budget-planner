import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Costs_Container from './containers/costs_container';
import LocationSearch from './containers/locationSearch';
import App from './components/app';

const routes = ( 
	<Router history={browserHistory}> 
		<Route component={App} path="app">
			<Route path="/" component={LocationSearch} />
			<Route path="/planner" component={Costs_Container} />
		</Route>
	</Router>
);

export default routes;



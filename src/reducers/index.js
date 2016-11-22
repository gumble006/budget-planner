import { combineReducers } from 'redux';

import MapReducer from './reducer_map';
import CostsReducer from './reducer_costs';

const rootReducer = combineReducers({
	mapData: MapReducer,
	data: CostsReducer,
});

export default rootReducer;

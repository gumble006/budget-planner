import { combineReducers } from 'redux';

import MapReducer from './reducer_map';
import CostsReducer from './reducer_costs';
import MenuReducer from './reducer_menu';

const rootReducer = combineReducers({
	mapData: MapReducer,
	data: CostsReducer,
	selectedCategory: MenuReducer,
});

export default rootReducer
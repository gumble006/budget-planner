import { combineReducers } from 'redux';

import CostsReducer from './reducer_costs';
import SelectionReducer from './reducer_selection';

const rootReducer = combineReducers({
  data: CostsReducer,
  selected: SelectionReducer,
});

export default rootReducer;

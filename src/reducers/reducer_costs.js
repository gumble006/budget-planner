import data from '../data';

import {  FETCH_DATA, CREATE_COST, DELETE_COST, SELECT_COST, EDIT_COST, 
CREATE_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY  } from '../../src/actions/types';

const INITIAL_STATE = data;

export default function(state = INITIAL_STATE, action) {
	let dataCopy = Object.assign([],state);

	switch (action.type) {
        case FETCH_DATA:
            if(action.payload) {
                return action.payload;
            }
            
            return dataCopy;

        case CREATE_COST:
            if(!dataCopy[action.payload.catIdx].costs) {
                dataCopy[action.payload.catIdx].costs = [action.payload.newItem];    
            } else {
                dataCopy[action.payload.catIdx].costs.push(action.payload.newItem);
            }
            return dataCopy;

        case DELETE_COST:
            dataCopy[action.payload.catIdx].costs.splice(action.payload.costIdx,1);
            return dataCopy;

        case EDIT_COST:
            dataCopy[action.payload.catIdx].costs[action.payload.costIdx].name = action.payload.change.name;
            dataCopy[action.payload.catIdx].costs[action.payload.costIdx].price = action.payload.change.price;
            return dataCopy;

        case SELECT_COST:
            dataCopy[action.payload.catIdx].costs[action.payload.costIdx].active = action.payload.active;
            return dataCopy;

        case CREATE_CATEGORY:
            dataCopy.push({
                "category":action.payload.name,
                "costs": false
            });
            return dataCopy;

        case DELETE_CATEGORY:
            dataCopy.splice(action.payload.catIdx,1);
            return dataCopy;

        case EDIT_CATEGORY:
            dataCopy[action.payload.catIdx].category = action.payload.editedCategory;
            return dataCopy;

		default: return state;
	}
}

import data from '../data';

const INITIAL_STATE = data;

export default function(state=INITIAL_STATE, action) {
	let dataCopy = Object.assign([],state);

	switch (action.type) {
    	case "CREATE_COST":
			dataCopy[action.payload.catIdx].costs.push(action.payload.newItem);
            return dataCopy;

    	case "DELETE_COST":
    		dataCopy[action.payload.catIdx].costs.splice(action.payload.costIdx,1);
            return dataCopy;

        case "EDIT_COST":
            dataCopy[action.payload.catIdx].costs[action.payload.costIdx].name = action.payload.change.editedName;
            dataCopy[action.payload.catIdx].costs[action.payload.costIdx].price = action.payload.change.editedPrice;
            return dataCopy;

        case "SELECT_COST":
        	dataCopy[action.payload.catIdx].costs[action.payload.costIdx].active = action.payload.active;
            return dataCopy;

        case "CREATE_CATEGORY":
        	dataCopy.push({
        		category:action.payload.name,
        		costs: [],
        	});
            return dataCopy;

        case "DELETE_CATEGORY":
        	dataCopy.splice(action.payload.catIdx,1);
        	return dataCopy;

        case "EDIT_CATEGORY":
            dataCopy[action.payload.catIdx].category = action.payload.editedCategory;
            return dataCopy;

		default: return state;
	}
}
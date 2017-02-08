import data from '../data';

import {  FETCH_DATA, CREATE_COST, DELETE_COST, SELECT_COST, EDIT_COST, 
CREATE_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY  } from '../../src/actions/types';

const INITIAL_STATE = data;

export default function (state = INITIAL_STATE, action) {
  const stateCopy = Object.assign([], state);
  const p = action.payload;

  switch (action.type) {
    case FETCH_DATA:
      if (p) { return p; }
            
      return stateCopy;

    case CREATE_COST:
      if (!stateCopy[p.catIdx].costs) {
        stateCopy[p.catIdx].costs = [p.newItem];    
      } else {
        stateCopy[p.catIdx].costs.push(p.newItem);
      }
      return stateCopy;

    case DELETE_COST:
      stateCopy[p.catIdx].costs.splice(p.costIdx, 1);
      return stateCopy;

    case EDIT_COST:
      stateCopy[p.catIdx].costs[p.costIdx].name = p.change.name;
      stateCopy[p.catIdx].costs[p.costIdx].price = p.change.price;
      return stateCopy;

    case SELECT_COST:
      stateCopy[p.catIdx].costs[p.costIdx].active = p.active;
      return stateCopy;

    case CREATE_CATEGORY:
      stateCopy.push({
        category: p.name,
        costs: false,
      });
      return stateCopy;

    case DELETE_CATEGORY:
      stateCopy.splice(p.catIdx, 1);
      return stateCopy;

    case EDIT_CATEGORY:
      stateCopy[p.catIdx].category = p.editedCategory;
      return stateCopy;

    default: return state;
  }
}

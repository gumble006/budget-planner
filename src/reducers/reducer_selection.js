import { SELECT_CATEGORY } from '../../src/actions/types';

const INITIAL_STATE = { catIdx: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.payload;

    default: return state;
  }
}
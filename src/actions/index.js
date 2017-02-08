import * as Firebase from 'firebase';

import {  FETCH_DATA, CREATE_COST, DELETE_COST, SELECT_COST, EDIT_COST, 
CREATE_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY, SELECT_CATEGORY  } from './types';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyA3NLrogln0Yt3ooDJVtB1M8bH0GIOWPvw',
  authDomain: 'travelplan-1896b.firebaseapp.com',
  databaseURL: 'https://travelplan-1896b.firebaseio.com',
  storageBucket: 'travelplan-1896b.appspot.com',
  messagingSenderId: '1076425285810',
};

Firebase.initializeApp(config);
const firebaseRef = Firebase.database().ref();

export function saveData(data) {
  return (dispatch) => {
    firebaseRef.set(data);
  };
}

export function fetchData() {
  return (dispatch) => {
    firebaseRef.on('value', (snapshot) => {
      dispatch({
        type: FETCH_DATA,
        payload: snapshot.val(),
      });
    });
  };
}

export function createCost(catIdx, name, price) {
  return {
    type: CREATE_COST,
    payload: {
      catIdx,
      newItem: { name, price },
    },
  };
}

export function deleteCost(costIdx, catIdx) {
  return {
    type: DELETE_COST,
    payload: {
      costIdx,
      catIdx,
    },
  };
}

export function selectCost(costIdx, catIdx, active) {
  return {
    type: SELECT_COST,
    payload: {
      costIdx,
      catIdx,
      active,
    },
  };
}

export function editCost(costIdx, catIdx, change) {
  return {
    type: EDIT_COST,
    payload: {
      costIdx,
      catIdx,
      change,
    },
  };
}

export function createCategory(name) {
  return {
    type: CREATE_CATEGORY,
    payload: { name },
  };
}

export function deleteCategory(catIdx) {
  return {
    type: DELETE_CATEGORY,
    payload: { catIdx },
  };
}

export function editCategory(catIdx, editedCategory) {
  return {
    type: EDIT_CATEGORY,
    payload: { catIdx, editedCategory },
  };
}

export function selectCategory(catIdx) {
  return {
    type: SELECT_CATEGORY,
    payload: { catIdx },
  };
}


// import { FETCH_MAP } from './types';

// export function fetchMap(query) {
//   const API_KEY = '***';

//   const ROOT_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'; 
//   const queryURI = encodeURIComponent(query);
//   let url = `${ROOT_URL}${queryURI}.json?access_token=${API_KEY}`;
//   const request = axios.get(url);

//   return { 
//     type: FETCH_MAP,
//     payload: request
//   };
// }

import axios from 'axios';
import uuid from 'uuid';
import fileDownload from 'react-file-download';

import {  CREATE_COST, DELETE_COST, SELECT_COST, EDIT_COST, 
CREATE_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY, SELECT_CATEGORY, SAVE_FILE  } from './types';

export function createCost(catIdx, name, price) {
  const id = uuid();

  return {
    type: CREATE_COST,
    payload: {
      catIdx,
      newItem: { name, price, id, active: false },
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
  const id = uuid();
  return {
    type: CREATE_CATEGORY,
    payload: { name, id },
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

export function saveFile(type, data) {
  const config = {
    method: 'post',
    url: '/save',
    data,
    responseType: 'blob',
  };

  const request = axios(config)
  .then((response) => {
    fileDownload(response.data, 'MyPlan.csv');
  })
  .catch((err) => {
    alert(`Unable to download saved file:\n${err}`);
  });

  return {
    type: SAVE_FILE,
    payload: request,
  };
}


import axios from 'axios';

export const FETCH_MAP = 'FETCH_MAP';

export function fetchMap(query) {
	const API_KEY = "pk.eyJ1IjoiYWRhbXNncmVnMTAwIiwiYSI6ImNpdWl3ZDUwMzAxNzMyeW55Z2xldTU0ZXcifQ.TthhgwWHDLaLt5yzcuzp8A";

	const ROOT_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'; 
	const queryURI = encodeURIComponent(query);
	let url = `${ROOT_URL}${queryURI}.json?access_token=${API_KEY}`;
	
	const request = axios.get(url);

	return { 
		type: 'FETCH_MAP',
		payload: request
	}
}

export function createCost(catIdx,name,price) {
	return {
		type: 'CREATE_COST',
		payload: {
			catIdx:catIdx,
			newItem: {name,price}
		}
	}
}

export function deleteCost(costIdx,catIdx) {
	return {
		type: 'DELETE_COST',
		payload: {
			costIdx,
			catIdx
		}
	}
}

export function selectCost(costIdx,catIdx,active) {
	return {
		type: 'SELECT_COST',
		payload: {
			costIdx,
			catIdx,
			active
		}
	}
}

export function editCost(costIdx,catIdx,change) {
	return {
		type: 'EDIT_COST',
		payload: {
			costIdx,
			catIdx,
			change
		}
	}	
}

export function createCategory(name){
	return {
		type: 'CREATE_CATEGORY',
		payload: {name}
	}
}

export function deleteCategory(catIdx){
	return {
		type: 'DELETE_CATEGORY',
		payload: {catIdx}
	}
}

export function editCategory(catIdx,editedCategory){
	return {
		type: 'EDIT_CATEGORY',
		payload: {catIdx,editedCategory}
	}
}
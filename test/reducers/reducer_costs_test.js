import { expect } from '../test_helper';

import CostsReducer from '../../src/reducers/reducer_costs';
import {  CREATE_COST, DELETE_COST, SELECT_COST, EDIT_COST, 
CREATE_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY  } from '../../src/actions/types';

describe('CostsReducer', ()=>{

	let state;

	beforeEach(()=>{

		state = [
			{
				"category": "Transportation",
				"costs": [
					{"name": "Cab fare", "price": 20.00, "active":false},
				],
			},

			{
				"category": "Accomodations",
				"costs": [
					{"name": "Hotel", "price": 79, "active":false},
					{"name": "Tent", "price": 0, "active":false},
				]
			},
		];

	});

	it('handles action with unknown type',()=>{
		expect(CostsReducer(undefined,{})).to.be.a('array');
	});


	it(CREATE_COST, ()=>{
		const action = {
			type:CREATE_COST, 
			payload: {
				catIdx:0,
				newItem: { 
					name: 'new cost',
					price: 12.1
				}
			}
		};

		expect(CostsReducer(state,action)[0].costs.length).to.equal(2);
	});


	it(DELETE_COST, ()=>{
		const action = {
			type:DELETE_COST, 
			payload: {
				costIdx:1,
				catIdx: 1
			}
		};

		expect(CostsReducer(state,action)[1].costs.length).to.equal(1);
	});


	it(SELECT_COST, ()=>{
		const action = {
			type:SELECT_COST, 
			payload: {
				costIdx:0,
				catIdx:0,
				active:true
			}
		};

		expect(CostsReducer(state,action)[0].costs[0].active).to.be.true;
	});
	

	it(EDIT_COST, ()=>{
		const action = {
			type:EDIT_COST, 
			payload: 	{
				costIdx:0,
				catIdx:0,
				change:{name:'new name',price: 12}
			}
		};

		expect(CostsReducer(state,action)[0].costs[0].name).to.equal('new name');
	});

	it(CREATE_CATEGORY, ()=>{
		const action = {
			type:CREATE_CATEGORY, 
			payload: {name:'new category'}
		};

		expect(CostsReducer(state,action)[2].category).to.equal('new category');
	});

	it(DELETE_CATEGORY, ()=>{
		const action = {
			type:DELETE_CATEGORY, 
			payload: {catIdx:0}
		};
		
		expect(CostsReducer(state,action)[0].category).to.equal('Accomodations');
	});
	
	it(EDIT_CATEGORY, ()=>{
		const action = {
			type:EDIT_CATEGORY, 
			payload: 		{
				catIdx:1,
				editedCategory:'edited category',
			}
		};
		
		expect(CostsReducer(state,action)[1].category).to.equal('edited category');
	});
	

});

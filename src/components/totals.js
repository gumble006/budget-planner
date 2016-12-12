import React from 'react';
import Total_Table from './total_table'; 

export default (props) =>{

	// Checks for empty Firebase entries, then add up total cost 
	const costChk = props.data.filter((item)=>item.costs).length > 0;
	const totalCost = costChk ? props.data
			.filter((item)=>item.costs)
			.map((item)=> item.costs)
			.reduce((a, b)=> a.concat(b))
			.filter((item)=> item.active)
			.reduce((sum, item)=> {return sum + item.price;},0) 
		: 0;

	// Checks for empty Firebase entries, then create total list 
	const totalList = props.data.reduce((accum,item)=>{
		
		let activeCosts = [];

		if(item.costs) {
			activeCosts = item.costs.filter((i)=> {
				return i.active
			});
		}
		
		if (!activeCosts.length){
			return accum;
		}	else {
			return accum.concat({category: item.category,	costs:activeCosts});
		}
	},[]);
	

	return (
		<div className="Totals">
			<h4>3. Total Costs:</h4>
			<Total_Table totalList={totalList} totalCost={totalCost} />
			<h4>Total: $<span id="totalCost">{Math.abs(totalCost).toFixed(2)}</span></h4>
		</div>
	);
};

import React from 'react';
import Total_Table from './total_table'; 

export default (props) =>{

	const totalList = props.data.reduce((accum,item)=>{
		const activeCosts = item.costs.filter((i)=> i.active);

		if (!activeCosts.length){
			return accum;
		}	else {
			return accum.concat({category: item.category,	costs:activeCosts});
		}
	},[]);

	return (
		<div>
	 		<h4>3. Total Costs:</h4>
	 		<Total_Table totalList={totalList} totalCost={props.totalCost} />
	 		<h4>Total: ${Math.abs(props.totalCost).toFixed(2)}</h4>
 		</div>
	)
}
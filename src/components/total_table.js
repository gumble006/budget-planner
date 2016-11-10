import React from 'react';

const CategoryRow = (props) => {
  return (<tr><th colSpan="2"><em>{props.category}</em></th></tr>);
}

const CostRow = (props) => {
	return( 
		<tr>
			<td>{props.cost.name}</td>
			<td className="cost">${Math.abs(props.cost.price).toFixed(2)}</td>
		</tr> 
	)
}

const Total_Table = (props) => {

	const rows = props.totalList.map((item)=>{
		const combined = [];
		combined.push(<CategoryRow category={item.category} key={item.category} />);
		
		item.costs.forEach((cost)=>{
			combined.push(<CostRow cost={cost} />);
		})
		
		return combined
	});

	if(!props.totalList) {
		return <div><em>No items included yet</em></div>
	}

	return (
		<div>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Name</th>
						<th className="cost">Cost</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
				<tfoot>
					<tr>
						<td><strong>Total</strong></td>
						<td className="cost"><strong>${Math.abs(props.totalCost).toFixed(2)}</strong></td>
					</tr>
				</tfoot>
			</table>	
		</div>
	)
};

export default Total_Table;



import React from 'react';

const CategoryRow = props => <tr><th colSpan="2"><em>{props.category}</em></th></tr>;

const CostRow = props => (
  <tr>
    <td>{props.cost.name}</td>
    <td className="cost">${Math.abs(props.cost.price).toFixed(2)}</td>
  </tr> 
);

const TotalTable = (props) => {
  const rows = props.totalList.map((item) => {
    const combined = [];
    combined.push(<CategoryRow category={item.category} key={item.category} />);

    item.costs.forEach((cost) => {
      combined.push(<CostRow cost={cost} />);
    });

    return combined;
  });

  if (!props.totalList) {
    return <div><em>No items included yet</em></div>;
  }

  return (
    <table className="Total-Table table table-hover">
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
  );
};

CategoryRow.propTypes = {
  category: React.PropTypes.string.isRequired,
};

CostRow.propTypes = {
  cost: React.PropTypes.object.isRequired,
};

TotalTable.propTypes = {
  totalCost: React.PropTypes.number.isRequired,
  totalList: React.PropTypes.array.isRequired,
};

export default TotalTable;


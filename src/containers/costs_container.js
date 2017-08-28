import React, { Component } from 'react';
import { connect } from 'react-redux';

import CategoryMenu from '../components/category_menu';
import CostMenu from '../components/cost_menu';
import Totals from '../components/totals';

class CostsContainer extends Component {

  render() {
    if (!this.props.data) {
      return (
        <div className="text-center">
          <img src="/assets/img/ring.gif" alt="Loading.." />
          <br />
          <em>Loading..</em>
        </div>
      );
    }

    return (
      <div className="Costs-Container container">
        <div className="row">
          <div className="col-sm-4">
            <CategoryMenu 
              data={this.props.data} 
              selected={this.props.selected}
              updateList={this.forceUpdate.bind(this)}
            /> 
          </div>
          <div className="col-sm-4">
            <CostMenu
              selected={this.props.selected}
              catIdx={this.props.data.indexOf(this.props.selected)}
              updateList={this.forceUpdate.bind(this)}
            />
          </div>
          <div className="col-sm-4">
            <Totals 
              data={this.props.data}
            />
          </div>
        </div>
      </div>
    );
  }
}

CostsContainer.propTypes = {
  data: React.PropTypes.array,
  selected: React.PropTypes.object,
};

function mapStateToProps(state) {
  return { 
    data: state.data,
    selected: state.data[state.selected.catIdx],
  };
}

export default connect(mapStateToProps, null)(CostsContainer);

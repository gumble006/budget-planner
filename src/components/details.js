import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Cost from './cost';
import { createCost } from '../actions/index';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newNameInput: '',
      newCostInput: 0,
      formCollapsed: true,
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidUpdate(pvProps, pvState) {
  // focus on form input when form is shown
    if (pvState.formCollapsed) {
      this.refs.newNameInput.focus();
    }
  } 

  onFormSubmit(e) {
    // add new cost and clear form
    e.preventDefault();

    this.props.createCost(this.props.catIdx, 
      this.state.newNameInput, 
      parseFloat(this.state.newCostInput));
    
    this.setState({ newNameInput: '', newCostInput: null, formCollapsed: true });
  }

  costItems() {
    if (!this.props.selected) {
      return <li>Please select a category first</li>;
    }

    if (!this.props.selected.costs.length) {
      return <li><em>No expenses for this category</em></li>;
    }

    return this.props.selected.costs.map((c, idx) => (
      <Cost 
        key={c.name} 
        name={c.name} 
        costIdx={idx} 
        catIdx={this.props.catIdx} 
        price={c.price} 
        active={c.active} 
        updateList={this.props.updateList} 
      />
    ));
  }

  render() {
    // CSS styles
    const formCollapsed = this.state.formCollapsed ? 'collapsed' : '';
    const formDisabled = !this.props.selected ? 'disabled' : '';
    const heading = this.props.selected ? `for: ${this.props.selected.category}` : '';
    const arrow = !this.state.formCollapsed ? 'glyphicon-chevron-up' : 'glyphicon-plus';

    return (
      <div className="Details">
        <h4 className="columnHeader">2. Select individual expenses {heading}</h4>

        <ul id="costs">
          {this.costItems()}
        </ul>

        <button 
          className={`btn btn-primary ${formDisabled}`} 
          onClick={() => {
            if (!formDisabled) {
              this.setState({ formCollapsed: !this.state.formCollapsed });
            }
          }}
        >
          <span className={`glyphicon ${arrow}`} aria-hidden="true" title="Add expense" />  Add expense
        </button>

        <form onSubmit={this.onFormSubmit} className={`addForm addCost ${formCollapsed}`}>
          <input 
            type="text"
            id="addCostTitle"
            className="form-control"
            min="3"
            required="required"
            ref="newNameInput" 
            value={this.state.newNameInput} 
            onChange={e => this.setState({ newNameInput: e.target.value })}
          />
          <input 
            type="number"
            step="0.01"
            required="required"
            className="form-control"
            min="0.00"
            id="addPrice"
            value={this.state.newCostInput} 
            onChange={e => this.setState({ newCostInput: e.target.value })}
          />
          <button type="submit" className="btn btn-primary">
            <span className="glyphicon glyphicon-plus" aria-hidden="true" title="Add" />
          </button>
        </form>
      </div>
    );
  }
}

Details.propTypes = {
  updateList: React.PropTypes.func.isRequired,
  catIdx: React.PropTypes.number.isRequired,
  selected: React.PropTypes.object.isRequired,
  createCost: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createCost }, dispatch);
}

export default connect(null, mapDispatchToProps)(Details);

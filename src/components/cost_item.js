import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCost, selectCost, editCost } from '../actions/index';

class CostItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editName: this.props.name,
      editPrice: this.props.price,
      editFormShow: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  onSubmitHandler(e) {
    e.preventDefault();

    this.editHandler();
    this.toggleEdit();
  }

  onInputChange(e) {
    this.setState({ editName: e.target.value });
  }

  onPriceChange(e) {
    if (isNaN(parseFloat(e.target.value))) {
      return;
    }

    this.setState({ editPrice: Math.abs(e.target.value) });
  }

  toggleEdit() {
    if (this.state.editFormShow) {
      this.editHandler();
    }
    this.setState({ editFormShow: !this.state.editFormShow });
  }

  editHandler() {
    const change = {
      name: this.state.editName,
      price: parseFloat(this.state.editPrice),
    };

    this.props.editCost(this.props.costIdx, this.props.catIdx, change);
  }

  deleteHandler() {
    this.props.deleteCost(this.props.costIdx, this.props.catIdx);
    this.props.updateList();
  }

  selectHandler() {
    if (!this.state.editFormShow) {
      this.props.selectCost(this.props.costIdx, this.props.catIdx, !this.props.active);
    }
  }

  render() {
    // CSS styles
    const active = this.props.active ? 'active' : '';
    const editFormShow = this.state.editFormShow ? 'editFormShow' : '';
    const ifHidden = this.state.editFormShow ? 'hidden' : ''; 

    return (
      <li className="CostItem">
        <div className={`costInfo ${active}`} onClick={this.selectHandler} >
          <form onSubmit={this.onSubmitHandler}>
            <div>
              <p className={ifHidden}>{this.props.name}</p> 
              <input
                className={`form-control editForm name ${editFormShow}`}
                value={this.state.editName}
                onChange={this.onInputChange} 
                type="text"
                id="editName"
              />
            </div>

            <b>
              <span className={ifHidden}>${this.props.price.toFixed(2)}</span>
              <input
                type="number"
                step="0.01"
                min="0"
                required="required"
                className={`form-control editForm price ${editFormShow}`}
                value={Math.abs(this.state.editPrice).toFixed(2)}
                onChange={this.onPriceChange} 
                id="editPrice"
              />
            </b>
            <button type="submit" className="hidden" />
          </form>
        </div>

        <div>
          <div className="costIcons">
            <button onClick={this.toggleEdit} className="btn btn-primary">
              <span className="glyphicon glyphicon-edit" aria-hidden="true" title="Edit entry" />
            </button>
            <button onClick={this.deleteHandler} className="btn btn-primary">
              <span 
                className="glyphicon glyphicon-remove" 
                aria-hidden="true" 
                title="Delete from list"
              />
            </button>
          </div>
        </div>
      </li>
    );
  }
}

CostItem.propTypes = {
  price: React.PropTypes.number.isRequired,
  costIdx: React.PropTypes.number.isRequired,
  catIdx: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  active: React.PropTypes.bool.isRequired,
  selectCost: React.PropTypes.func.isRequired,
  editCost: React.PropTypes.func.isRequired,
  deleteCost: React.PropTypes.func.isRequired,
  updateList: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteCost, selectCost, editCost }, dispatch);
}

export default connect(null, mapDispatchToProps)(CostItem);


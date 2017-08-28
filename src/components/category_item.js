import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { editCategory, deleteCategory, selectCategory } from '../actions/index';

class CategoryItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editFormShow: false,
      editCategory: this.props.item.category,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // update form data if using Firebase pushes updates
    this.setState({ editCategory: nextProps.item.category });
  }

  onSubmitHandler(e) {
    e.preventDefault();

    this.editHandler();
    this.toggleEdit();
  }

  onInputChange(e) {
    // controlled form for inputs
    const change = {};
    change[e.target.id] = e.target.value;
    this.setState(change);
  }

  selectHandler() {
    // change selected category, but not if the user is using the editform
    if (!this.state.editFormShow) {
      this.props.selectCategory(this.props.catIdx);
    }
  }

  toggleEdit() {
    if (this.state.editFormShow) {
      this.editHandler();
    }
    this.setState({ editFormShow: !this.state.editFormShow });
  }

  editHandler() {
    // update category name
    this.props.editCategory(this.props.catIdx, this.state.editCategory);
  }

  deleteHandler() {
    // delete category, clear item list if user deletes the current category
    this.props.deleteCategory(this.props.catIdx);

    if (this.props.selected === this.props.item) {
      this.props.selectCategory(null);
    }
  }

  render() {
    // CSS styles
    const selected = this.props.selected === this.props.item ? 'selected' : '';
    const editFormShow = this.state.editFormShow ? 'editFormShow' : '';
    const ifHidden = this.state.editFormShow ? 'hidden' : '';

    return ( 
      <li key={this.props.catIdx} className="Category-Item">
        <div className={`category ${selected}`} onClick={this.selectHandler}>
          <p className={ifHidden}>{this.props.item.category}</p>
          <form onSubmit={this.onSubmitHandler} >
            <input
              className={`form-control editForm ${editFormShow}`}
              value={this.state.editCategory}
              onChange={this.onInputChange} 
              type="text"
              id="editCategory"
            />
            <button type="submit" className="hidden" />
          </form>
        </div>
        <div className="icons">
          <button onClick={() => this.deleteHandler()} className="btn btn-primary">
            <span className="glyphicon glyphicon-remove" aria-hidden="true" title="Remove" />
          </button>
          <button onClick={() => this.toggleEdit()} className="btn btn-primary">
            <span className="glyphicon glyphicon-edit" aria-hidden="true" title="Edit" />
          </button>
        </div>
      </li>
    ); 
  }
}

CategoryItem.propTypes = {
  catIdx: React.PropTypes.number.isRequired,
  selected: React.PropTypes.object,
  editCategory: React.PropTypes.func.isRequired,
  deleteCategory: React.PropTypes.func.isRequired,
  selectCategory: React.PropTypes.func.isRequired,
  item: React.PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteCategory, editCategory, selectCategory }, dispatch);
}

export default connect(null, mapDispatchToProps)(CategoryItem);

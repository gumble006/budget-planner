import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createCategory } from '../actions/index';
import CategoryItem from './category_item'; 


class CategoryMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCategory: '',
      addFormCollapsed: true,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this); 
  }

  componentDidUpdate() {
    // focus on form input when form is shown
    if (!this.state.addFormCollapsed) {
      this.refs.newCategory.focus();
    }
  }

  onFormSubmit(e) {
    e.preventDefault();
    if (this.state.newCategory) {
      this.props.createCategory(this.state.newCategory);
    }
    this.setState({ newCategory: '', addFormCollapsed: true });
  }

  menuItems() {
    if (this.props.data.length === 0) {
      return (
        <li><em>No categories, add a category first</em></li>
      );
    }

    // otherwise produce list of categories
    return this.props.data.map((item, catIdx) => (
      <CategoryItem
        item={item} 
        key={item.id} 
        catIdx={catIdx} 
        selected={this.props.selected} 
      />
    )); 
  }

  render() {
    // CSS styles
    const addFormCollapsed = this.state.addFormCollapsed ? 'collapsed' : '';
    const arrow = !this.state.addFormCollapsed ? 'glyphicon-chevron-up' : 'glyphicon-plus';  

    return (
      <div className="Category-Menu">
        <h4 className="columnHeader">1. Select/create a category:</h4>
        <ul className="menu">
          {this.menuItems()}
        </ul>

        <button 
          onClick={() => this.setState({ addFormCollapsed: !this.state.addFormCollapsed })}
          className="btn btn-primary"
        >
          <span className={`glyphicon ${arrow}`} aria-hidden="true" title="Add Category" /> Add category
        </button>

        <form onSubmit={this.onFormSubmit} className={`addForm addCategory ${addFormCollapsed}`} >
          <input 
            type="text" 
            id="newCategory"
            required="required" 
            className="form-control" 
            value={this.state.newCategory} 
            onChange={e => this.setState({ newCategory: e.target.value })} 
            ref="newCategory"
          />
          <button type="submit" className="btn btn-primary">
            <span className="glyphicon glyphicon-plus" aria-hidden="true" title="Add" />
          </button>
        </form>
      </div>
    );
  }
}

CategoryMenu.propTypes = {
  createCategory: React.PropTypes.func.isRequired,
  updateList: React.PropTypes.func.isRequired,
  selected: React.PropTypes.object,
  data: React.PropTypes.array.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createCategory }, dispatch);
}

export default connect(null, mapDispatchToProps)(CategoryMenu);

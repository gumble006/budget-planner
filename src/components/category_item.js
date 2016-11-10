import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { editCategory, deleteCategory  } from '../actions/index';

class CategoryItem extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			editFormShow:false,
			editCategory: this.props.item.category
		}
	}

	deleteHandler(){
		this.props.deleteCategory(this.props.catIdx);

		if(this.props.selected === this.props.item){
			this.props.onMenuSelect(null);
		}
	}

	editHandler(){
		this.setState({editFormShow:!this.state.editFormShow});
		this.props.editCategory(this.props.catIdx,this.state.editCategory);
	}

	selectHandler(){
		if (!this.state.editFormShow){
			this.props.onMenuSelect(this.props.item)
		}
	}

	onInputChange(e){
		const change = {};
		change[e.target.id] = e.target.value;
		this.setState(change);
	}

	render(){ 
		// CSS styles
		const selected = this.props.selected === this.props.item ? 'selected' : '';
		const editFormShow = this.state.editFormShow ? 'editFormShow' : '';
		const ifHidden = this.state.editFormShow ? 'hidden' : '';
			
		return (
			<li key={this.props.catIdx}>
				<div className={`category ${selected}`} onClick={this.selectHandler.bind(this)}>
					<p className={ifHidden}>{this.props.item.category}</p>
					<input
						className={`form-control editForm ${editFormShow}`}
						value={this.state.editCategory}
						onChange={this.onInputChange.bind(this)} 
						type="text"
						id="editCategory"
						onBlur={this.editHandler.bind(this)}  />
				</div>
				<div className="icons">
					<button onClick={()=>this.deleteHandler()} className="btn btn-primary">
						<span className="glyphicon glyphicon-remove" aria-hidden="true" title="Remove"></span>
					</button>
					<button onClick={()=>this.editHandler()} className="btn btn-primary">
						<span className="glyphicon glyphicon-edit" aria-hidden="true" title="Edit"></span>
					</button>
				</div>
			</li>
		) 
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ deleteCategory, editCategory }, dispatch);
}


export default connect(null, mapDispatchToProps)(CategoryItem);
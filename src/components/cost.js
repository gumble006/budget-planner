import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCost, selectCost, editCost } from '../actions/index';

class Cost extends Component {

  constructor(props){
		super(props);

		this.state = {
			editName: this.props.name,
			editPrice: this.props.price,
			editFormShow: false,
		};

		this.onInputChange = this.onInputChange.bind(this);
	}

	selectHandler(){
		if (!this.state.editFormShow){
			this.props.selectCost(this.props.costIdx, this.props.catIdx, !this.props.active);
		}
	}

	deleteHandler(){
		this.props.deleteCost(this.props.costIdx,this.props.catIdx);
		this.props.updateList();
	}

	editHandler(){
		const change = {
			name: this.state.editName,
			price: parseFloat(this.state.editPrice)
		};
		
		this.props.editCost(this.props.costIdx, this.props.catIdx, change);
	}

	onSubmitHandler(e){
		e.preventDefault();

		this.editHandler();
		this.toggleEdit();
	}

	toggleEdit(){
		if(this.state.editFormShow){
			this.editHandler();
		}
		this.setState({editFormShow:!this.state.editFormShow});
	}

	onInputChange(e){
		const change = {};
		change[e.target.id] = e.target.value;
		this.setState(change);
	}

	render(){
		// CSS styles from props
		const active = this.props.active ? 'active' : '';
		const editFormShow = this.state.editFormShow ? 'editFormShow' : '';
		const ifHidden = this.state.editFormShow ? 'hidden' : ''; 
		
		return (
			<li className="Cost">
				<div className={`costInfo ${active}`} onClick={this.selectHandler.bind(this)} >
					<form onSubmit={this.onSubmitHandler.bind(this)}>
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
								onChange={this.onInputChange} 
								id="editPrice"
							/>
						</b>
						<button type="submit" className="hidden"></button>
					</form>	
				</div>
				
				<div>
					<div className="costIcons">
						<button onClick={this.toggleEdit.bind(this)} className="btn btn-primary">
							<span className="glyphicon glyphicon-edit" aria-hidden="true" title="Edit entry" />
						</button>
						<button onClick={this.deleteHandler.bind(this)} className="btn btn-primary">
							<span className="glyphicon glyphicon-remove" aria-hidden="true" title="Delete from list" />
						</button>
					</div>
				</div>
			</li>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ deleteCost, selectCost, editCost }, dispatch);
}

export default connect(null, mapDispatchToProps)(Cost);


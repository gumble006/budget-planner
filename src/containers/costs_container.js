import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchData, saveData } from '../actions';
import CategoryMenu from '../components/category_menu';
import Details from '../components/details';
import Totals from '../components/totals';


export class Costs_Container extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount() {
		//this.props.fetchData();
	}

	componentWillReceiveProps(nextProps) {
		//this.props.saveData(nextProps.data);
	}

  render() {

		if (!this.props.data) {
			return (
				<div className="text-center">
					<img src="/assets/img/ring.gif" />
					<br />
					<em>Loading..</em>
				</div>
			);
		}

		const costChk = this.props.data.filter((item)=>item.costs).length !== 0;
		const totalCost = costChk ? this.props.data
				.filter((item)=>item.costs)
				.map((item)=> item.costs)
				.reduce((a, b)=> a.concat(b))
				.filter((item)=> item.active)
				.reduce((sum, item)=> {return sum + item.price;},0) 
			: 0;
		
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
						<Details
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchData,saveData }, dispatch);
}

function mapStateToProps(state){
	return { 
		data: state.data,
		selected: state.data[state.selected.catIdx]
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Costs_Container);

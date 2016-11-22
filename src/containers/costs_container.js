import React, { Component } from 'react';
import { connect } from 'react-redux';

import CategoryMenu from '../components/category_menu';
import Details from '../components/details';
import Totals from '../components/totals';


class Costs_Container extends Component {
	constructor(props){
		super(props);

		this.state = {
			selected: null,
		};
	}

  render() {
		const totalCost = this.props.data.length !== 0 
			?	this.props.data
				.map((item)=> item.costs )
				.reduce((a, b)=> a.concat(b))
				.filter((item)=> item.active)
				.reduce((sum, item)=> {return sum + item.price;},0) 
			: 0;

		if (!this.props) {
			return (
				<div className="text-center">
					<img src="/assets/img/ring.gif" />
					<br />
					<em>Loading...</em>
				</div>
			);
		}
	
    return (
			<div className="Costs-Container container">
				<div className="row">
					<div className="col-sm-3">
						<CategoryMenu 
							data={this.props.data} 
							selected={this.state.selected}
							onMenuSelect={(selected) => this.setState({selected})}
							updateList={this.forceUpdate.bind(this)} 
						/> 
					</div>
					<div className="col-sm-5">
						<Details
							selected={this.state.selected}
							catIdx={this.props.data.indexOf(this.state.selected)}
							totalCost={totalCost}
							updateList={this.forceUpdate.bind(this)}  
						/>
					</div>
					<div className="col-sm-4">
						<Totals 
							totalCost={totalCost}
							data={this.props.data} 
						/>
					</div>
				</div>
			</div>
    );
  }
}

function mapStateToProps(state){
	return { 
		// mapData: state.mapData,
		data: state.data,
	};
}

export default connect(mapStateToProps)(Costs_Container);


//<div id="map">
//<Mapper mapData={this.props.mapData} />
//</div>

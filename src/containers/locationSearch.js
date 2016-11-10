import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMap } from '../actions/index';


class LocationSearch extends Component {
	constructor(props) {
		super(props);

		this.state = {term:''};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(e){
		this.setState({term:e.target.value});
	}

	onFormSubmit(e){
		e.preventDefault();
		 	
		this.props.fetchMap(this.state.term);
		this.setState({term:''});

  	browserHistory.push('/details');
	}

	componentDidMount() {
		browserHistory.push('/planner');
	}

  render() {

    return (
    	<div>
	    	<h4><strong>Where are you going?</strong></h4>
	    	<br />
	    	
	    	<form onSubmit={this.onFormSubmit} className="input-group" >
	    		<input type="text"
		    		placeholder="Search city or name" 
		    		onChange={this.onInputChange}
		    		value={this.state.term}
		    		 />
		    	<span>     </span>
		    	<button type="submit" className="btn btn-primary">Let's Plan!</button>
	    	</form>
    	</div>
    );
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchMap }, dispatch);
}


export default connect(null, mapDispatchToProps)(LocationSearch);
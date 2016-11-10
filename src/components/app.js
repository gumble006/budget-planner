import React, { Component } from 'react';

import Header from './header';
import { fetchMap } from '../actions/index';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {searchQuery:""};
	};

	render(){

		let childrenWithProps = React.cloneElement(this.props.children, 
			{
				pullQuery2:((term)=>{this.setState({searchQuery:term})}).bind(this),
				location:this.state.searchQuery,
			});

		return (
			<div>
				<Header />
				{childrenWithProps}
			</div>
		)
	}
}; 

export default App;
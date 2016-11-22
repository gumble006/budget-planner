import React from 'react';

export default (props) => {
	return (
		<div className="Header"> 
			<div className="container">
				<div className="row">
					<div className="col-sm-5 logo">
						<img src="/assets/img/header.svg" alt="header image" />
					</div>
					<div className="col-sm-6 title">
						<h3>Trip Budget Planning</h3>
					</div>	
				</div>
			</div>
		</div>
	);

};

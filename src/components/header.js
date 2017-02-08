import React from 'react';

const Header = () => 
  (
    <div className="Header"> 
      <div className="container">
        <div className="row">
          <div className="col-sm-5 logo">
            <img src="/assets/img/header.svg" alt="header logo" />
          </div>
          <div className="col-sm-6 title">
            <h3>Trip Budget Planning</h3>
          </div>
        </div>
      </div>
    </div>
  );

export default Header;

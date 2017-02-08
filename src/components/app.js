import React, { Component } from 'react';

import Header from './header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children }
      </div>
    );
  }
} 

App.defaultProps = {
  children: <div />,
};

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;

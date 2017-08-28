import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveFile } from '../actions';

const saveMenu = (props) => {
  const handleClick = (fileType) => {
    props.saveFile(fileType, props.data);
  };

  return (
    <div className="saveMenu" >
      <a className="parent" >Save File</a>
      <div className="children">
        <a onClick={() => handleClick('csv')}>CSV</a>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveFile }, dispatch);
}

export default connect(null, mapDispatchToProps)(saveMenu);

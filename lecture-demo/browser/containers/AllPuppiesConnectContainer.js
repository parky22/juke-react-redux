import React from 'react';
import {connect} from 'react-redux';

import AllPuppies from '../components/AllPuppies';
import {changeFilterText} from '../action-creators';

function mapStateToProp (storeState) {
  return {
    puppies: storeState.puppies,
    filterText: storeState.filterText
  };
}

function mapDispatchToProps (dispatch) {
  return {
    changeText: evt => {
      const action = changeFilterText(evt.target.value);
      dispatch(action);
    }
  };
}

const AllPuppiesConnectContainer = connect(
  mapStateToProp,
  mapDispatchToProps
)(AllPuppies);

// const componentCreator = connect(
//   mapStateToProp,
//   mapDispatchToProps
// );

// const AllPuppiesConnectContainer = componentCreator(AllPuppies);

export default AllPuppiesConnectContainer;

import React from 'react';
import {connect} from 'react-redux';

import OnePuppy from '../components/OnePuppy';

const componentCreator = connect(
  function mapStateToProps (storeState) {
    return {
      puppy: storeState.puppy
    };
  }
);

const OnePuppyConnectContainer = componentCreator(OnePuppy);

export default OnePuppyConnectContainer;

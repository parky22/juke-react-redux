import React from 'react';

import AllPuppies from '../components/AllPuppies';
import store from '../store';
import {
  changeFilterText,
  receivePuppies,
  loadPuppiesAsyncActionCreator
} from '../action-creators';

class AllPuppiesContainer extends React.Component {
  constructor () {
    super();
    this.state = this.getStoreSlice();
  }
  getStoreSlice () {
    const fullState = store.getState();
    return {
      puppies: fullState.puppies,
      filterText: fullState.filterText
    };
  }
  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {
      const currentState = this.getStoreSlice();
      this.setState(currentState);
    });
    this.loadPuppies();
  }
  componentWillUnmount () {
    this.unsubscribe();
  }
  loadPuppies () {
    const thunk = loadPuppiesAsyncActionCreator();
    store.dispatch(thunk);
  }
  render () {
    return (
      <AllPuppies
        filterText={this.state.filterText}
        puppies={this.state.puppies}
        changeText={evt => {
          const action = changeFilterText(evt.target.value);
          store.dispatch(action);
        }} />
    );
  }
}

export default AllPuppiesContainer;

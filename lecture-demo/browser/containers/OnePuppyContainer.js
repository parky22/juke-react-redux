import React from 'react';
import axios from 'axios';

import store from '../store';
import OnePuppy from '../components/OnePuppy';

class OnePuppyContainer extends React.Component {
  constructor () {
    super();
    this.state = this.getStoreSlice();
  }
  getStoreSlice () {
    const currentState = store.getState();
    return {
      puppy: currentState.puppy
    };
  }
  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {
      this.setState(this.getStoreSlice());
    });
    this.loadPuppy();
  }
  componentWillUnmount () {
    this.unsubscribe();
  }
  loadPuppy () {
    axios.get(`/api/puppies/${this.props.params.name}`)
    .then(response => {
      store.dispatch({
        type: 'RECEIVE_PUPPY',
        puppy: response.data
      });
    });
  }
  render () {
    return (
      <OnePuppy puppy={this.state.puppy} />
    );
  }
}

export default OnePuppyContainer;

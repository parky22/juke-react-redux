import React from 'react';
import axios from 'axios';

import store from '../store';

class OnePuppy extends React.Component {
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
    store.subscribe(() => {
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
      <div>
        <h3>{this.state.puppy.name}</h3>
        <img src={this.state.puppy.image} />
      </div>
    );
  }
}

export default OnePuppy;

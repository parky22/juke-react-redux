import React from 'react';
import {Link} from 'react-router';

import store from '../store';
import {
  changeFilterText,
  receivePuppies,
  loadPuppiesAsyncActionCreator
} from '../action-creators';

class AllPuppies extends React.Component {
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
      <div>
        <div>
          <span>Filter by name: </span>
          <input
            type='text'
            value={this.state.filterText}
            onChange={evt => {
              const action = changeFilterText(evt.target.value);
              store.dispatch(action);
            }} />
        </div>
        <ul>
          {this.state.puppies.filter(puppy => {
            if (this.state.filterText === '') return true;
            return puppy.name.includes(this.state.filterText);
          }).map(puppy => {
            return (
              <li key={puppy.name}>
                <Link to={`/one-puppy/${puppy.name}`}>
                  {puppy.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AllPuppies;

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory, Route} from 'react-router';
import {Provider} from 'react-redux';
import axios from 'axios';

import App from './components/App';
import AllPuppiesConnectContainer from './containers/AllPuppiesConnectContainer';
import About from './components/About';
import OnePuppyConnectContainer from './containers/OnePuppyConnectContainer';
import CreatePuppyForm from './components/CreatePuppyForm';
import store from './store';
import { loadPuppiesAsyncActionCreator } from './action-creators';

// frontend routes: everything related to the UI, navigable links, etc
// backend routes: data and static files, background requests

function onPuppyEnter (routerData) {
  axios.get(`/api/puppies/${routerData.params.name}`)
  .then(response => {
    store.dispatch({
      type: 'RECEIVE_PUPPY',
      puppy: response.data
    });
  });
}

function onAllPuppiesEnter () {
  const thunk = loadPuppiesAsyncActionCreator();
  store.dispatch(thunk);
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <Route
          path='/all-puppies'
          component={AllPuppiesConnectContainer}
          onEnter={onAllPuppiesEnter} />
        <Route path='/create-a-puppy' component={CreatePuppyForm} />
        <Route path='/about' component={About} />
        <Route
          path='/one-puppy/:name'
          component={OnePuppyConnectContainer}
          onEnter={onPuppyEnter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

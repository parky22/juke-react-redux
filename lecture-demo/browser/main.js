import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory, Route} from 'react-router';

import App from './components/App';
import AllPuppies from './components/AllPuppies';
import About from './components/About';
import OnePuppy from './components/OnePuppy';
import CreatePuppyForm from './components/CreatePuppyForm';

// frontend routes: everything related to the UI, navigable links, etc
// backend routes: data and static files, background requests

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/all-puppies' component={AllPuppies} />
      <Route path='/create-a-puppy' component={CreatePuppyForm} />
      <Route path='/about' component={About} />
      <Route path='/one-puppy/:name' component={OnePuppy} />
    </Route>
  </Router>,
  document.getElementById('app')
);

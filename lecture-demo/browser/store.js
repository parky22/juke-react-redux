import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';

function puppiesReducer (previousState = [], action) {
  switch (action.type) {
    case 'RECEIVE_PUPPIES':
      return action.puppies;
    default:
      return previousState;
  }
}

function filterTextReducer (previousState = '', action) {
  switch (action.type) {
    case 'CHANGE_FILTER_TEXT':
      return action.newText;
    default:
      return previousState;
  }
}

function puppyReducer (previousState = {}, action) {
  switch (action.type) {
    case 'RECEIVE_PUPPY':
      return action.puppy;
    default:
      return previousState;
  }
}

const rootReducer = combineReducers({
  puppies: puppiesReducer,
  filterText: filterTextReducer,
  puppy: puppyReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

export default store;

import axios from 'axios';

export function changeFilterText (newText) {
  return {
    type: 'CHANGE_FILTER_TEXT',
    newText: newText
  };
};

export function receivePuppies (puppies) {
  return {
    type: 'RECEIVE_PUPPIES',
    puppies: puppies
  };
};

// // non-thunk
// export function loadPuppiesAsyncActionCreator () {
//   axios.get('/api/puppies')
//   .then(response => {
//     const action = receivePuppies(response.data);
//     store.dispatch(action);
//   });
// };

// thunk-ified
export function loadPuppiesAsyncActionCreator () {
  const thunk = function (dispatch) {
    axios.get('/api/puppies')
    .then(response => {
      const action = receivePuppies(response.data);
      dispatch(action);
    });
  };
  return thunk;
};

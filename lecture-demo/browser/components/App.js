import React from 'react';
import {Link} from 'react-router';

import OnePuppy from './OnePuppy';

class App extends React.Component {
  render () {
    return (
      <div>
        <div className='dev-border'>
          <Link
            className='dev-border'
            to='/all-puppies'>
            Show me ALL THE PUPPIES
          </Link>
          <Link
            className='dev-border'
            to='/about'>
            What are you about?
          </Link>
          <Link
            className='dev-border'
            to='/create-a-puppy'>
            Create a puppy
          </Link>
        </div>
        <div className='dev-border'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

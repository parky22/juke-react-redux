import React from 'react';
import {Link} from 'react-router';

const AllPuppies = function (props) {
  return (
    <div>
      <div>
        <span>Filter by name: </span>
        <input
          type='text'
          value={props.filterText}
          onChange={props.changeText} />
      </div>
      <ul>
        {props.puppies.filter(puppy => {
          if (props.filterText === '') return true;
          return puppy.name.includes(props.filterText);
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
};

export default AllPuppies;

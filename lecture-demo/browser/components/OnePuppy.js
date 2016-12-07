import React from 'react';

const OnePuppy = function (props) {
  return (
    <div>
      <h3>{props.puppy.name}</h3>
      <img src={props.puppy.image} />
    </div>
  );
};

export default OnePuppy;

import React from 'react';
import Songs from './Songs';



const Station = function(props){
  console.log("the props from the station component: ", props);
  return (
    <div>
      <h3> {props.genreName} </h3>
    </div>
  );
}
export default Station;


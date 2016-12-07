import React from 'react';
import Songs from './Songs';



const Station = function(props){

  return (
    <div>
      <h3> {DUMMY_GENRE_NAME} </h3>
      <Songs
        songs={props.songs}
        currentSong = {DUMMY_CURRENT_SONG}
        isPlaying = {DUMMY_IS_PLAYING}
        toggle = {DUMMY_TOGGLE_ONE}
      />
    </div>
  );
}
export default Station;


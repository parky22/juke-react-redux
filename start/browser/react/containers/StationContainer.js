import { connect } from 'react-redux';
import Station from '../components/Station';

//state:
//songs
//isPlaying
//currentSong

//params:
//genreName

//toggleOne

// const DUMMY_GENRE_NAME = 'Jazz';
// const DUMMY_SONGS = [{
//   id: 1,
//   name: "A Love Supreme",
//   genre: "Jazz",
//   artists: [{ name: "John Coltrane" }]
// }];
// const DUMMY_CURRENT_SONG = {};
// const DUMMY_IS_PLAYING = false;
// const DUMMY_TOGGLE_ONE = function () {};

const toggleSong = (song, list) => {
  return (dispatch, getState) => {
    const currentState = getState().player;
    if (currentState.currentSong.id === song.id) {
      dispatch(currentState.isPlaying ? pause() : play());
    } else {
      dispatch(startSong(song, list));
    }
  };
};

function mapStateToProps(state, ownProps){
  return {
    stations: convertSongsToStations(state.songs)
  };
}

function mapDispatchToProps(dispatch){
  return {};
}

function convertSongsToGenreStation(songsArray) {
  const stationsObject = {};

  songsArray.forEach(song => {
    if(Object.keys(stationsObject).indexOf(song.genre) > -1){
      stationsObject[song.genre].push(song);
    }
    else{
      stationsObject[song.genre] = [song];
    }
  })

  return stationsObject
}

export function getGenreSongs(genre){
  const stationsObject = convertSongsToStations(songsArray);
  return stationsObject[genre];
}

export function getGenreSongs(genre){
  const stationsObject = convertSongsToStations(songsArray);
  return stationsObject[genre];

}

const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station);

export default StationContainer;
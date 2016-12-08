import { connect } from 'react-redux';
import Stations from '../components/Stations';
import {StationContainer} from './StationContainer';

function mapStateToProps(state, ownProps){
  return {
    stations: convertSongsToStations(state.songs)
  };
}

function mapDispatchToProps(dispatch){
  return {};
}

export function convertSongsToStations(songsArray) {
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



const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations);

export default StationsContainer;
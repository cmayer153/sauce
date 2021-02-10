import React from 'react';
import {useState, useEffect} from 'react';


function Track(props) {
  const {track} = props;
  const {setSelectTrack} = props;


  return (
    <div>
      <h2 onClick={() => setSelectTrack(track)}>{track.name}</h2>
      <h4>{track.album.name}</h4>
      { track.artists.map( (artist) => (
        <ul> {artist.name}</ul>
      ))}
    </div>
  )
}

export default Track;
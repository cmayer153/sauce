import React from 'react';
import {useState, useEffect} from 'react';


function MetaTrack(props) {
const {metaTrack} = props;

  if(metaTrack === null) {
      return null;
  }

  return (
    <div>
      <h1> ***** META AUDIO *****</h1>
      <h3>acousticness: {metaTrack.acousticness} </h3>
      <h3>danceability: {metaTrack.danceability} </h3>

      <h3>energy: {metaTrack.energy} </h3>
      <h3>instrumentalness: {metaTrack.instrumentalness} </h3>
      <h3>liveness: {metaTrack.liveness} </h3>

      <h3>speechiness: {metaTrack.spechiness} </h3>

      <h3>tempo: {metaTrack.tempo} </h3>

      <h3>valence: {metaTrack.valence} </h3>

    </div>
  )
}

export default MetaTrack;
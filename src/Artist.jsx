import React from 'react';
import {useState, useEffect} from 'react';


function Artist(props) {
  const {band} = props;


  return (
    <div>
      <h2>{band.name}</h2>
      { band.genres.map( (genre) => (
        <ul> {genre}</ul>
      ))}
    </div>
  )
}

export default Artist;
import React from 'react';
import {useState, useEffect} from 'react';
import Artist from './Artist.jsx';

function ArtistList(props) {
  const {bands} = props;


  if(bands === null) {
    console.log("bands is null");
    return null;
  } else {
    return (
      <div>
        { bands.map( (band) => (
          <Artist band={band}/>
        ))};
      </div>
    )
  }
}

export default ArtistList;
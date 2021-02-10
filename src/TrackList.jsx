import React from 'react';
const axios = require('axios');
import {useState, useEffect} from 'react';
import Track from './Track.jsx';
import MetaTrack from './MetaTrack.jsx';


function TrackList(props) {
  const {authToken} = props;
  var [formInfo, setFormInfo] = useState('');
  var [trackList, setTrackList] = useState([]);
  var [selectTrack, setSelectTrack] = useState(null);
  var [metaTrack, setMetaTrack] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let searchString = formInfo.replace(/\s/g, '%20');
    const options = {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }
    axios.get(`/track?q=${searchString}`, options)
      .then ( (res) => {
        console.log("back from spotify: ", res.data.tracks.items);

        setTrackList(res.data.tracks.items);
      })
      .catch ( (err) => {
        console.log("error from spotify: ", err);
      });
  }

  const handleChange = (e) => {
    setFormInfo(e.target.value);
  }

  useEffect( () => {
    if(selectTrack === null) {
      return;
    }
    const options = {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }
    axios.get(`/meta?q=${selectTrack.id}`, options)
      .then ( (res) => {
        console.log("META back from spotify: ", res.data);

        setMetaTrack(res.data);
      })
      .catch ( (err) => {
        console.log("meta error from our server: ", err);
      });
  }, [selectTrack]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Track Search:
          <input type="text" name="track" value={formInfo} onChange={handleChange}/>
        </label>
        <input type="submit" value="Search" />
      </form>
      <div>
      { trackList.map( (track) => (
        <Track track={track} setSelectTrack={setSelectTrack}/>
      ))}
      </div>
      <MetaTrack metaTrack={metaTrack} />
    </div>
  )
}

export default TrackList;
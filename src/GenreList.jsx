import React from 'react';
const axios = require('axios');
import {useState, useEffect} from 'react';
import Artist from './Artist.jsx';


function GenreList(props) {
  const {authToken} = props;
  var [formInfo, setFormInfo] = useState('');
  var [genreList, setGenreList] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let searchString = formInfo.replace(/\s/g, '%20');
    const options = {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }
    axios.get(`/genre?q=${searchString}`, options)
      .then ( (res) => {
        console.log("back from spotify: ", res.data);
        setGenreList(res.data);
      })
      .catch ( (err) => {
        console.log("error from spotify: ", err);
      });
  }

  const handleChange = (e) => {
    setFormInfo(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Genre Search:
          <input type="text" name="genre" value={formInfo} onChange={handleChange}/>
        </label>
        <input type="submit" value="Search" />
      </form>
    { genreList.map( (band) => (
      <Artist band={band}/>
    ))}
    </div>
  )
}

export default GenreList;
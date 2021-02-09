import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';



function App(props) {
  var [authToken, setAuthToken] = useState(null);
  var [formInfo, setFormInfo] = useState('');
  var [artistList, setArtistList] = useState([]);

  useEffect( () => {
    let hash = props.location.hash;
    console.log("whole hash: ", hash);
    let startToken = hash.indexOf('=');
    let endToken = hash.indexOf('&');
    //setAuthToken(hash.slice(startToken + 1, endToken));
    console.log("start: ", startToken);
    console.log("end: ", endToken);
    let theToken = hash.slice(startToken + 1, endToken);
    console.log("MY TOKEN:", theToken);
    setAuthToken(theToken);
  }, [props.location.hash])


  const handleSubmit = (e) => {
    e.preventDefault();
    let searchString = formInfo.replace(/\s/g, '%20');
    const options = {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }
    axios.get(`/search?q=${searchString}`, options)
      .then ( (res) => {
        console.log("back from spotify: ", res.data);
      })
      .catch ( (err) => {
        console.log("error from spotify: ", err);
      });
  }

  const handleChange = (e) => {
    setFormInfo(e.target.value);
  }



    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <label>
            Artist Search:
            <input type="text" name="artist" value={formInfo} onChange={handleChange}/>
          </label>
          <input type="submit" value="Search" />
        </form>
      </div>
    )

}

export default App;
//ReactDOM.render(<App />, document.getElementById('sauce'));
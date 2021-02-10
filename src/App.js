import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ArtistList from './ArtistList.jsx';
import GenreList from './GenreList.jsx';
import TrackList from './TrackList.jsx';



function App(props) {
  var [authToken, setAuthToken] = useState(null);

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




    return (
      <div className="App">
        <ArtistList authToken={authToken}/>
        <GenreList authToken={authToken} />
        <TrackList authToken={authToken} />

      </div>
    )

}

export default App;
//ReactDOM.render(<App />, document.getElementById('sauce'));
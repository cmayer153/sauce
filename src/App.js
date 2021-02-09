import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');
import {useState} from 'react';
import {useParams} from 'react-router-dom';




function App(props) {
  var [authToken, setAuthToken] = useState(null);
  let myParams = props;

  console.log("urlPARAMS: ", myParams);


  const authorizeSpotify = () => {
    console.log("AUTHORIZING");
/*    
    axios.get(`https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=user-read-private%20user-read-email&response_type=token&state=123`)
      .then( (response) => {
        console.log("RETURNED FROM AUTH", response);
      })
      .catch((err) => {
        console.log("error returning from auth: ", err);
      });
      */
    return <Redirect to='https://spotify.com' />
  }



    return (
      <div className="App">
        passed auth?
      </div>
    )

}

export default App;
//ReactDOM.render(<App />, document.getElementById('sauce'));
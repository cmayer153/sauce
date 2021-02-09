import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App.js';

const client_id = "76f3b9696f42490fac81654042d58e2b";
const redirect_uri = 'http://localhost:3010/callback';
const authURL = `https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=user-read-private%20user-read-email&response_type=token&state=123`;

class MyRouter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    

    render() {
      // eslint-disable-next-line no-unused-vars
      return (
        <BrowserRouter>
          <Switch>
            <Route path='/auth' component={() => {
              window.location = authURL;
              return null;
            }} />
            <Route path='/callback' url={this.props.location} component={App}>
            </Route>
          </Switch>
        </BrowserRouter>
      );
    }
  }
  
  //export default App;
ReactDOM.render(<MyRouter />, document.getElementById('sauce'));
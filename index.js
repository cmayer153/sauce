const express = require('express');
const bodyParser = require('body-parser');
//import proxySetup from './setupProxy.js';
const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = require('http-proxy-middleware');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/auth', express.static(path.join(__dirname, 'public')));
app.use('/callback', express.static(path.join(__dirname, 'public')));


app.get('/search*', (req, res) => {
  console.log("server req params: ", req.header('Authorization'));
  console.log("the query: ", req.query);
  let searchString = req.query['q'].replace(/\s/g, '%20');
    const options = {
      headers: {
        Authorization: `${req.header('Authorization')}`
      }
    }
    axios.get(`https://api.spotify.com/v1/search?q=${searchString}&type=artist`, options)
      .then ( (subRes) => {
        //console.log("back from spotify(SERVER): ", subRes.data.artists.items);
        res.send(subRes.data.artists.items);
      })
      .catch ( (err) => {
        //console.log("error from spotify(SERVER): ", err);
        res.status(400).send(err);
      });
});



const PORT = 3010;


app.listen(PORT);
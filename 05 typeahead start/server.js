const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const searchWikipedia = (term, callback) => request({
  url: 'http://en.wikipedia.org/w/api.php',
  qs: {
    action: 'opensearch',
    format: 'json',
    search: term
  }
}, callback);

let delayRequest = false;

app.get('/api/search-wikipedia', function (req, res) {
  let text = req.query.text;
  console.log(`Pinged with ${text}`);
  if (delayRequest) {
    setTimeout(() => {
      searchWikipedia(text, (error, response, body) => {
        res.json(JSON.parse(body));
      });
    }, 5000);
  } else {
    searchWikipedia(text, (error, response, body) => {
      res.json(JSON.parse(body));
    });
  }
  delayRequest = !delayRequest;
});

app.listen(8080, () => console.log('REST API running on port 8080'));
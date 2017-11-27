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

app.get('/api/search-wikipedia', function (req, res) {
  let text = req.query.text;
  console.log(`Pinged with ${text}`);
  searchWikipedia(text, (error, response, body) => {
    res.json(JSON.parse(body));
  });
});

app.listen(8080, () => console.log('REST API running on port 8080'));
const input = $('#textInput');
const results = $('#results');

const searchWikipedia = term => {
  return $.ajax({
    url: 'http://en.wikipedia.org/w/api.php',
    dataType: 'jsonp',
    data: {
      action: 'opensearch',
      format: 'json',
      search: term
    }
  }).promise();
};

searchWikipedia('Java').then(data => results
    .empty()
    .append(data[1].map(v => $('<li>').text(v))),
  error => console.log('The error was:', error));
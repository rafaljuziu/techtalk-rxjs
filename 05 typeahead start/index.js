const input = $('#textInput');
const results = $('#results');

const searchWikipedia = term => {
  return $.ajax({
    url: 'http://localhost:8080/api/search-wikipedia',
    data: {
      text: term
    }
  }).promise();
};

Rx.Observable.fromEvent(input, 'keyup')
  .map(event => event.target.value)
  .filter(x => x.length > 2)
  .debounceTime(750)
  .distinctUntilChanged()
  .switchMap(text => searchWikipedia(text))
  .subscribe(data => results
    .empty()
    .append(data[1].map(v => $('<li>').text(v)))
  );

// searchWikipedia('Java').then(data => results
//     .empty()
//     .append(data[1].map(v => $('<li>').text(v))),
//   error => console.log('The error was:', error));
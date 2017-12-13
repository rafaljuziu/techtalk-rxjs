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

const inputStream = Rx.Observable.fromEvent(input, 'keyup');

inputStream
  .map(event => event.target.value)
  .filter(x => x.length > 2)
  .debounceTime(750)
  .distinctUntilChanged()
  .switchMap(value => searchWikipedia(value))
  .subscribe(data => results
    .empty()
    .append(data[1].map(v => $('<li>').text(v))));
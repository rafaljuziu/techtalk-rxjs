const Rx = require('rxjs/Rx');
const growl = require('./growl.js');
const saveService = require('./save-service');

Rx.Observable.of(1)
  .flatMap(x => saveService.save(x))
  .subscribe(savedObject => {
    growl.next('Object successfully saved');
    // some logic to redirect and display updated data from server
  });
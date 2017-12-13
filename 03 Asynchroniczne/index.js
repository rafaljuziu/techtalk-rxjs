const Rx = require('rxjs/Rx');

const data = Rx.Observable.of(1, 2, 3, 4, 5);

const sum = data.reduce((acc, cur) => acc + cur, 0);

const count = data.count();

Rx.Observable.zip(sum, count, (sum, count) => sum / count)
  .subscribe(console.log);
// const Giver = require('./giver.js');
// const Taker = require('./taker.js');
//
// const giver = new Giver();
// const taker = new Taker(giver);
//
// console.log('Before');
// taker.onWillToHaveCandy();
// console.log('After');

const Rx = require('rxjs/Rx');

Rx.Observable.of(1, 2, 3, 4, 5)
  .scan((acc, cur) => [...acc, cur], [])
  .map(arr => {
    return arr.reduce((acc, cur) => acc + cur, 0)
      / arr.length;
  });
  // .subscribe(console.log);

const data$ = Rx.Observable.of(1, 2, 3, 4, 5);

const sum$ = data$.reduce((acc, cur) => acc + cur, 0);

const count$ = data$.count();

Rx.Observable.zip(sum$, count$,
  (sum, count) => sum / count)
  .subscribe(console.log);







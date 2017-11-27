const Rx = require('rxjs/Rx');

const notifier = new Rx.Subject();

notifier.subscribe(next => {
  console.log(next);
});

module.exports = notifier;

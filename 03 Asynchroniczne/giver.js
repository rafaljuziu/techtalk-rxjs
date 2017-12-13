// const Rx = require('rxjs/Rx');

module.exports = class Giver {

  getCandy() {
    return {
      subscribe: observer => {
        observer.next(new Candy());
        observer.error();
        observer.next(new Candy());
      }
    };
  }
};

const sequence = (function *typeSeq() {
  yield 'Michałek';
  yield 'Trufla';
  yield 'Tiki Tak';
})();

class Candy {
  constructor() {
    this.type = sequence.next().value;
  }
}
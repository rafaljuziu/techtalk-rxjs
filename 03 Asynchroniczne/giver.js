class Giver {

  getCandy(callback) {
    const candy = new Candy();
    callback(candy);
  }
}

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
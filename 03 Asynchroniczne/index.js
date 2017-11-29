const Giver = require('./giver.js');
const Taker = require('./taker.js');

const giver = new Giver();
const taker = new Taker(giver);

console.log('Before');
taker.onWillToHaveCandy();
console.log('After');
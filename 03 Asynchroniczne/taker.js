class Taker {

  constructor(giver) {
    this.giver = giver;
  }

  onWillToHaveCandy() {
    const candy = this.giver.getCandy(candy => this.swallow(candy));
  }

  swallow(candy) {
    console.log(`Eaten candy ${candy.type}.`);
  }
}
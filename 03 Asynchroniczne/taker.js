module.exports = class Taker {

  constructor(giver) {
    this.giver = giver;
  }

  onWillToHaveCandy() {
    const observer = {
      next: candy => this.swallow(candy),
      error: console.log,
      complete: () => console.log('Finished')
    };

    const subscribtion = this.giver.getCandy()
      .subscribe(observer);
  }

  swallow(candy) {
    console.log(`Eaten candy ${candy.type}.`);
  }
};
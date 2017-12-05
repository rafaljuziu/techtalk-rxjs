module.exports = class Taker {

  constructor(giver) {
    this.giver = giver;
  }

  onWillToHaveCandy() {
    const observer = {
      next: candy => this.swallow(candy),
      error: error => console.log('Error:', error),
      complete: () => console.log('Successfully eaten all candies')
    };

    const subscribtion = this.giver.getCandy()
      .subscribe(observer);
  }

  swallow(candy) {
    console.log(`Eaten candy ${candy.type}.`);
  }
};
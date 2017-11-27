class Taker {
	
	constructor(giver) {
		this.giver = giver;
	}
	
	onWillToHaveCandy() {
		const candy = this.giver.getCandy(candy => {
			this.receivedCandy(candy);
		});		
	}
	
	receivedCandy() {
		this.swallow(candy);
		this.faceExpression = faceExpression;
	}
}
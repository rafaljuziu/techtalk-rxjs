class Taker {
	
	constructor(giver) {
		this.giver = giver;
	}
	
	onWillToHaveCandy() {
		const candy = this.giver.getCandy();
		this.swallow(candy);
		this.faceExpression = FACE_EXPRESSIONS.Smile;
	}
}
class Giver {
	
	onWillToGiveCandy(taker) {
		taker.feed(new Candy());
		taker.setFaceExpression(FACE_EXPRESSIONS.Smile);
	}
}
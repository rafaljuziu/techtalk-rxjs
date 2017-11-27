class Giver {
	
	getCandy(callback) {
		const candy = new Candy();
		callback(candy);
	}
}
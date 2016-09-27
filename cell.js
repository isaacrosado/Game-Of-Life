var Cell = function() {

	var that = Object.create(Cell.prototype);

	//The state of the cell
	//If true then the cell is alive, if false then the cell is dead
	var alive;

	/**
	* Sets the state of the cell
	*
	* @param {Boolean} state - true if the state will be alive, false if the state will be dead
	*/
	that.setState = function(state) {
		alive = state;
	};

	/**
	* Gets the state of the cell
	*
	* @return {Boolean} true if the cell is alive, otherwise false
	*/
	that.getState = function() {
		return alive;
	};

	/**
	* Inverts the state of the cell
	* If the cell is alive then the cell will be dead
	* If the cell is dead then the cell will be alive
	*/
	that.invertState = function() {
		alive = !alive;
	};

	Object.freeze(that);
	return that;

};
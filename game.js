var Game = function() {
	
	that = Object.create(Game.prototype);

	//The grid of the Game Of Life
	var grid;

	//Play mode
	//If true then the game is currently in play mode, if false then the game is paused
	var play = false;

	/**
	* Sets up the grid for the Game Of Life
	*
	* @param {Integer} rows - the number of rows that will be in the grid
	* @param {Integer} columns - the number of columns that will be in the grid
	*/
	that.startGame = function(columns, rows) {
		grid = Grid();
		grid.createGrid(columns, rows);
	};

	/**
	* Enters play mode
	*/
	that.enterPlay = function() {
		play = true;
	};

	/**
	* Exits play mode
	*/
	that.pause = function() {
		play = false;
	};

	/**
	* Gets the mode that the game is in
	*
	* @return {Boolean} - true if the game is in play mode, otherwise false
	*/
	that.getMode = function() {
		return play;
	};

	/**
	* Inverts the state of the cell in the grid at [column, row]
	*
	* @param {Integer} column - the column of the cell
	* @param {Integer} row - the row of the cell
	*/
	that.invertCellState = function(column, row) {
		grid.invertCellState(column, row);
	};

	/**
	* Gets the state of the cell in the grid at [column, row]
	*
	* @return {Boolean} true if the cell is alive, otherwise false
	*/
	that.getCellState = function(column, row) {
		return grid.getCellState(column, row);
	};

	/**
	* Advances the game round
	*/
	that.advanceRound = function() {
		grid.advanceRound();
	};

	Object.freeze(that);
	return that;

};
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

	/**
	* Kills all cells on the grid
	*/
	that.clearGrid = function() {
		grid.clearGrid();
	};

	/**
	* Creates a still configuration
	*/
	that.stillCity = function() {
		that.clearGrid();
		that.invertCellState(3, 4);
		that.invertCellState(3, 5);
		that.invertCellState(3, 11);
		that.invertCellState(3, 12);
		that.invertCellState(4, 3);
		that.invertCellState(4, 6);
		that.invertCellState(4, 10);
		that.invertCellState(4, 13);
		that.invertCellState(5, 3);
		that.invertCellState(5, 5);
		that.invertCellState(5, 11);
		that.invertCellState(5, 13);
		that.invertCellState(6, 4);
		that.invertCellState(6, 12);
		that.invertCellState(10, 4);
		that.invertCellState(10, 12);
		that.invertCellState(11, 3);
		that.invertCellState(11, 5);
		that.invertCellState(11, 11);
		that.invertCellState(11, 13);
		that.invertCellState(12, 3);
		that.invertCellState(12, 6);
		that.invertCellState(12, 10);
		that.invertCellState(12, 13);
		that.invertCellState(13, 4);
		that.invertCellState(13, 5);
		that.invertCellState(13, 11);
		that.invertCellState(13, 12);
	};

	/**
	* Creates several beacons
	*/
	that.beacons = function() {
		that.clearGrid();
		that.invertCellState(2, 2);
		that.invertCellState(2, 3);
		that.invertCellState(2, 13);
		that.invertCellState(2, 14);
		that.invertCellState(3, 2);
		that.invertCellState(3, 14);
		that.invertCellState(4, 5);
		that.invertCellState(4, 11);
		that.invertCellState(5, 4);
		that.invertCellState(5, 5);
		that.invertCellState(5, 11);
		that.invertCellState(5, 12);
		that.invertCellState(8, 7);
		that.invertCellState(8, 8);
		that.invertCellState(8, 9);
		that.invertCellState(11, 4);
		that.invertCellState(11, 5);
		that.invertCellState(11, 11);
		that.invertCellState(11, 12);
		that.invertCellState(12, 5);
		that.invertCellState(12, 11);
		that.invertCellState(13, 2);
		that.invertCellState(13, 14);
		that.invertCellState(14, 2);
		that.invertCellState(14, 3);
		that.invertCellState(14, 13);
		that.invertCellState(14, 14);
	};

	/**
	* Creates a pulsar
	*/
	that.pulsar = function() {
		that.clearGrid();
		that.invertCellState(2, 4);
		that.invertCellState(2, 5);
		that.invertCellState(2, 6);
		that.invertCellState(2, 10);
		that.invertCellState(2, 11);
		that.invertCellState(2, 12);
		that.invertCellState(4, 2);
		that.invertCellState(4, 7);
		that.invertCellState(4, 9);
		that.invertCellState(4, 14);
		that.invertCellState(5, 2);
		that.invertCellState(5, 7);
		that.invertCellState(5, 9);
		that.invertCellState(5, 14);
		that.invertCellState(6, 2);
		that.invertCellState(6, 7);
		that.invertCellState(6, 9);
		that.invertCellState(6, 14);
		that.invertCellState(7, 4);
		that.invertCellState(7, 5);
		that.invertCellState(7, 6);
		that.invertCellState(7, 10);
		that.invertCellState(7, 11);
		that.invertCellState(7, 12);
		that.invertCellState(9, 4);
		that.invertCellState(9, 5);
		that.invertCellState(9, 6);
		that.invertCellState(9, 10);
		that.invertCellState(9, 11);
		that.invertCellState(9, 12);
		that.invertCellState(10, 2);
		that.invertCellState(10, 7);
		that.invertCellState(10, 9);
		that.invertCellState(10, 14);
		that.invertCellState(11, 2);
		that.invertCellState(11, 7);
		that.invertCellState(11, 9);
		that.invertCellState(11, 14);
		that.invertCellState(12, 2);
		that.invertCellState(12, 7);
		that.invertCellState(12, 9);
		that.invertCellState(12, 14);
		that.invertCellState(14, 4);
		that.invertCellState(14, 5);
		that.invertCellState(14, 6);
		that.invertCellState(14, 10);
		that.invertCellState(14, 11);
		that.invertCellState(14, 12);
	};

	/**
	* Creates a spaceship and glider
	*/
	that.fleet = function() {
		that.clearGrid();
		that.invertCellState(1, 5);
		that.invertCellState(1, 7);
		that.invertCellState(2, 8);
		that.invertCellState(3, 8);
		that.invertCellState(4, 8);
		that.invertCellState(4, 5);
		that.invertCellState(5, 6);
		that.invertCellState(5, 7);
		that.invertCellState(5, 8);
		that.invertCellState(10, 7);
		that.invertCellState(11, 5);
		that.invertCellState(11, 7);
		that.invertCellState(12, 6);
		that.invertCellState(12, 7);
	};

	Object.freeze(that);
	return that;

};
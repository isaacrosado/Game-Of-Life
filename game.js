var Game = function() {
	
	that = Object.create(Game.prototype);

	//The grid of the Game Of Life
	var grid;

	//Play mode
	//If true then the game is currently in play mode, if false then the game is paused
	var play;

	/**
	* Sets up the grid for the Game Of Life
	*
	* @param {Integer} rows - the number of rows that will be in the grid
	* @param {Integer} columns - the number of columns that will be in the grid
	*/
	that.startGame = function(columns, rows) {
		grid = Grid();
		grid.createGrid(rows, columns);
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
	* Inverts the state of the cell in the grid at [column, row]
	*
	* @param {Integer} column - the column of the cell
	* @param {Integer} row - the row of the cell
	*/
	that.invertCellState = function(column, row) {
		grid.invertCellState(column, row);
		alert(grid.getCellState(column, row));
	};

	that.getCellState = function(column, row) {
		return grid.getCellState(column, row);
	};

	that.getAllCells = function() {
		return grid.getAllCells();
	};

	Object.freeze(that);
	return that;

};
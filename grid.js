var Grid = function() {

	var that = Object.create(Grid.prototype);

	//The number of rows in the grid
	var rows;

	//The number of columns in the grid
	var columns;

	//The actual grid of cells
	var grid;

	/**
	* Creates a grid of dead cells
	*
	* @param {Integer} numRows - the number of rows that will be in the grid
	* @param {Integer} numColumns - the number of columns that will be in the grid
	*/
	that.createGrid = function(numRows, numColumns) {
		rows = numRows;
		columns = numColumns;
		grid = []
		times(rows, function() {
			var column = [];
			grid.push(column);
			times(columns, function() {
				var cell = Cell();
				column.push(cell);
				cell.setState(false);
			});
		});
	};

	/**
	* Sets the cell at index [row, column] to state
	*
	* @param {Integer} row - the row of the cell
	* @param {Integer} column - the column of the cell
	* @param {Boolean} state - the state that the cell will be set to
	*/
	that.setCellState = function(row, column, state) {
		grid[row][column].setState(state);
	};

	/**
	* Gets the state of the cell at [row, column]
	*
	* @param {Integer} row - the row of the cell
	* @param {Integer} column - the column of the cell
	* @return {Boolean} the state of the cell
	*/
	that.getCellState = function(row, column) {
		return grid[row][column].getState();
	};

	/**
	* Inverts the state of the cell at [row, column]
	*
	* @param {Integer} row - the row of the cell
	* @param {Integer} column - the column of the cell
	*/
	that.invertCellState = function(row, column) {
		grid[row][column].invertState();
	};

	Object.freeze(that);
	return that;

};

/**
* Performs the function f n times
*
* @param {Integer} n - the number of times the function will be performed
* @param {Function} f - the function to be performed
*/
var times = function(n, f) {
	if (n === 0) { return; };
	f();
	times(n - 1, f);
};
var Grid = function() {

	var that = Object.create(Grid.prototype);

	//The number of rows in the grid
	var rows;

	//The number of columns in the grid
	var columns;

	//The actual grid of cells
	var grid;

	//An array representing the offsets for the neighbors
	var offsetArray = [[-1, 1], [0, 1], [1, 1],
					   [-1, 0], [1, 0],
					   [-1, -1], [0, -1], [1, -1]];

	/**
	* Creates a grid of dead cells
	*
	* @param {Integer} numRows - the number of rows that will be in the grid
	* @param {Integer} numColumns - the number of columns that will be in the grid
	*/
	that.createGrid = function(numColumns, numRows) {
		rows = numRows;
		columns = numColumns;
		grid = []
		times(columns, function() {
			var row = [];
			grid.push(row);
			times(rows, function() {
				var cell = Cell();
				row.push(cell);
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
	that.setCellState = function(column, row, state) {
		grid[column][row].setState(state);
	};

	/**
	* Gets the state of the cell at [row, column]
	*
	* @param {Integer} row - the row of the cell
	* @param {Integer} column - the column of the cell
	* @return {Boolean} the state of the cell
	*/
	that.getCellState = function(column, row) {
		return grid[column][row].getState();
	};

	/**
	* Inverts the state of the cell at [row, column]
	*
	* @param {Integer} row - the row of the cell
	* @param {Integer} column - the column of the cell
	*/
	that.invertCellState = function(column, row) {
		grid[column][row].invertState();
	};

	/**
	* Gets the number of neighbors of a cell that are alive
	* 
	* @param {Integer} column - the column of the cell
	* @param {Integer} row - the row of the cell
	*/
	that.getLiveNeighbors = function(column, row) {
		return offsetArray.map(function(e) {
			return [e[0] + column, e[1] + row];
		}).filter(function(e) {
			return (e[0] >= 0 && e[0] < columns && e[1] >= 0 && e[1] < rows);
		}).reduce(function(total, e) {
			if (that.getCellState(e[0], e[1])) {
				return total += 1;
			} else {
				return total;
			};
		}, 0);
	};

	/**
	* Gets the next cell state after a round of the Game Of Life
	*
	* @param {Integer} column - the column of the cell
	* @param {Integer} row - the row of the cell
	*/
	that.nextCellState = function(column, row) {
		var liveNeighbors = that.getLiveNeighbors(column, row);
		if (that.getCellState(column, row)) {
			if (liveNeighbors < 2 || liveNeighbors > 3) {
				that.invertCellState(column, row);
			};
		} else {
			if (liveNeighbors === 3) {
				that.invertCellState(column, row);
			};
		};
	};

	/**
	* Sets all cells to the next round state
	*/
	that.advanceRound = function() {
		var column = 0;
		times(columns, function() {
			var row = 0
			times(rows, function() {
				that.nextCellState(column, row);
				row++;
			});
			column++
		});
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
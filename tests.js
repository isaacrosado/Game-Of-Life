(function() {
  mocha.setup("bdd");
  var assert = chai.assert;

  describe("Cell", function() {
    
    describe("getState", function() {
      it("should be true", function() {
        cell = Cell();
        cell.setState(true);
        assert.isTrue(cell.getState());
      });
    });

    describe("invertState", function() {
      it("should be false", function() {
        cell = Cell();
        cell.setState(true);
        cell.invertState();
        assert.isFalse(cell.getState());
      });
    });

  });

  describe("Grid", function() {

    describe("createGrid", function() {
      it("should be false", function() {
        grid = Grid();
        grid.createGrid(6, 6);
        assert.isFalse(grid.getCellState(2, 2));
      });
    });

    describe("setCellState", function() {
      it("should be true", function() {
        grid = Grid();
        grid.createGrid(3, 3);
        grid.setCellState(0, 1, true);
        assert.isTrue(grid.getCellState(0, 1));
      });
    });

    describe("invertCellState", function() {
      it("should be true", function() {
        grid = Grid();
        grid.createGrid(4, 5);
        grid.invertCellState(2, 2);
        assert.isTrue(grid.getCellState(2, 2));
      });
    });

    describe("getLiveNeighbors", function() {
      it("should be 2", function() {
        grid = Grid();
        grid.createGrid(5, 5);
        grid.invertCellState(0, 1);
        grid.invertCellState(1, 2);
        assert.strictEqual(grid.getLiveNeighbors(0, 2), 2);
      });
    });

  });

  mocha.run();
})()
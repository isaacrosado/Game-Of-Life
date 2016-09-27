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

  });

  mocha.run();
})()
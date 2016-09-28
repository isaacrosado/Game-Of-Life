README
==============

a
--------------

The concerns I identified were the grid, game, and then the html file.  I separated the concerns by creating classes for cells, the grid, the game, and then having a index.html file that utilizes the javascript functions

b
--------------

There is a game which consists of a grid, which in turn is made of cells.  There are dependencies in terms of css pixels which will work differently on different machines, and also the preset configurations are hard-coded which means that the grid must be above a certain size.  Ideally these dependencies would be eliminated.

c
--------------

I do not have any for loops in my code.  I used map, filter, and reduce when trying to find the live neighbors of a cell, and I used a times functional in order to perform functions on the grid.  I also created a functional that runs only when the game is paused.

d
--------------

I thought it was interesting to have three different modules in order to create the javascript "objects." In this project it was superfluous given the functionality of the modules, but if there were different functions neccesary this could have been a good choice.  I had a large tradeoff between separation and time spent to create these separate modules.
# Diamond Sweeper

The goal of this exercise is to build a game.

## Game application Description

* The game board has 8x8 squares (initially, all represented by question marks).

* There are 8 diamonds hidden on the board, each diamond behind one of the squares.

* When the user clicks on a square
    * If the square was hiding a diamond, the diamond appears with green border.
    * Otherwise, the square is opened, and blank with Red border.
* The game ends when all diamonds are found. The user's score is the number of squares still left unturned.



## Advanced: Added Hints
* Part II of this problem, added hints to empty squares

* When the user clicks on a square, 
    * If the square was not a diamond, then an arrow appears, pointing towards the nearest diamond.
    * Any arrows that were previously show become hidden

## Starter App
Provided is a simple application. It contains a simple UI.

Requirements:

* node.js (the app was built against v8.1.4, but any node > 6 should work)
* npm

## To start the Application:

* Install the dependencies via npm install.
* Compile Assets: npm run compile
* Start the webserver: npm start
* Visit http://localhost:3000 to see the application

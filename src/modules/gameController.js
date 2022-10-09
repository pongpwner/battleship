import Ship from "./ship";
import GameBoard from "./gameBoard";
import Player from "./player";
import Dom from "./dom";
const GameController = (function () {
  // create gameboards and players
  let gameOver = false;
  function start() {
    const shipsArr1 = [
      Ship([62, 72]),
      Ship([52, 53, 54]),
      Ship([35, 45, 55]),
      Ship([1, 2, 3, 4]),
      Ship([91, 92, 93, 94, 95]),
    ];
    const player1 = Player("player", shipsArr1);
    const player2 = Player("cpu", shipsArr1);
    //generate dom
  }

  //todo this function is for dom tiles
  function progressTurn() {
    //on click take id of button for player attack value
    // then call cpu attack
  }

  //ends when all ships from one board are destroyed

  //play again button
  return {
    start,
  };
})();

export default GameController;

import "./styles/styles.css";
import Ship from "./modules/ship";
import GameBoard from "./modules/gameBoard";
import Dom from "./modules/dom";
import Player from "./modules/player";
import GameController from "./modules/gameController";
let content = document.querySelector("#content");
// let ship = Ship(3);
// ship.hit();
// console.log(ship);

//for testing
// const shipsArr1 = [
//   Ship([62, 72]),
//   Ship([52, 53, 54]),
//   Ship([35, 45, 55]),
//   Ship([1, 2, 3, 4]),
//   Ship([91, 92, 93, 94, 95]),
// ];
// const shipsArr2 = [
//   Ship([62, 72]),
//   Ship([52, 53, 54]),
//   Ship([35, 45, 55]),
//   Ship([1, 2, 3, 4]),
//   Ship([91, 92, 93, 94, 95]),
// ];
// const player1 = Player("player", shipsArr1);
// const player2 = Player("cpu", shipsArr2);
// Dom.generateDom(player1, player2);

//

GameController.start();

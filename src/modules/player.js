import GameBoard from "./gameBoard.js";
import Ship from "./ship";
import { shuffleArray } from "./utils.js";
let Player = function (type, ships) {
  let gameBoard = GameBoard(ships);

  //generate random attack pattern for cpu
  let cpuAttacks = [];
  for (let i = 0; i < 100; i++) {
    cpuAttacks.push(i);
  }
  shuffleArray(cpuAttacks);

  function cpuAttack(player) {
    //random number 0-99 no repeat as value in gameBoard.receiveAtack()
    console.log(this.cpuAttacks.shift());
    player.gameBoard.receiveAttack(this.cpuAttacks.shift());

    //dom methods
  }

  //type is either player or cpu
  function attack(value, player) {
    player.gameBoard.receiveAttack(value);
    //dom methods
  }

  return {
    cpuAttacks,
    gameBoard,
    type,
    attack,
    cpuAttack,
  };
};
export default Player;

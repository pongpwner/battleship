import Ship from "./ship";

//possibly take an array of ships
let GameBoard = function (shipsArr) {
  let loss = false;
  let board = [];
  for (let i = 0; i < 100; i++) {
    board.push(i);
  }
  let ships = shipsArr;
  //let shipsSunk = 0;
  //let missedAttacks = [];

  let usedAttacks = [];
  function checkLoss() {
    if (this.ships.length === 0) {
      this.loss = true;
    }
  }
  function placeShip() {}
  function receiveAttack(loc) {
    //check if location has been used before
    usedAttacks.find((space) => space === loc);

    //check if the location will hit a ship
    let prevLength = usedAttacks.length;
    //there is only one ship
    ships.forEach((ship) => {
      //maybe change find to filter
      // if (ship === undefined) {
      //   return this.checkLoss();
      // }
      ship.location.forEach((loca) => {
        if (loca === loc) {
          ship.hit();
          this.usedAttacks.push({ index: loc, status: "hit" });
        }

        if (ship.sunk === true) {
          // push ship out of array
          this.ships = this.ships.filter(
            //(ship1) => ship1.length !== ship.length
            (ship1) => !ship1.sunk
          );
          this.checkLoss();
        }
      });
    });
    if (usedAttacks.length === prevLength) {
      //missedAttacks.push(loc);
      this.usedAttacks.push({ index: loc, status: "miss" });
    }
  }
  return {
    loss,
    board,
    ships,
    usedAttacks,
    placeShip,
    checkLoss,
    receiveAttack,
  };
};

export default GameBoard;

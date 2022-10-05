import Ship from "./ship";

//possibly take an array of ships
let GameBoard = function (shipsArr) {
  let board = [];
  for (let i = 0; i < 100; i++) {
    board.push(i);
  }
  let ships = shipsArr;
  //let shipsSunk = 0;
  //let missedAttacks = [];
  let usedAttacks = [];
  function placeShip() {}
  function receiveAttack(loc) {
    //check if location has been used before
    usedAttacks.find((space) => space === loc);

    //check if the location will hit a ship
    let prevLength = usedAttacks.length;
    //there is only one ship
    ships.forEach((ship) => {
      //maybe change find to filter
      ship.location.forEach((loca) => {
        console.log(loca);
        if (loca === loc) {
          console.log("hiiiiiiiit");
          ship.hit();
          usedAttacks.push({ index: loc, status: "hit" });
        }

        if (ship.sunk === true) {
          // push ship out of array
          this.ships = this.ships.filter(
            (ship1) => ship1.length !== ship.length
          );
        }
      });
    });
    if (usedAttacks.length === prevLength) {
      //missedAttacks.push(loc);
      usedAttacks.push({ index: loc, status: "missed" });
    }
  }
  return {
    board,
    ships,
    usedAttacks,
    placeShip,
    receiveAttack,
  };
};

export default GameBoard;

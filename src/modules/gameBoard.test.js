import GameBoard from "./gameBoard";
import Ship from "./ship";

let ships = [Ship([0, 1]), Ship([3, 4, 5])];
test("Gameboard is created", () => {
  let board = [];
  for (let i = 0; i < 100; i++) {
    board.push(i);
  }

  let usedAttacks = [];
  expect(GameBoard(ships)).toMatchObject({
    board,
    ships,
    usedAttacks,
  });
});

test("receiveAttack adds to usedAttacks array and ship will be removed from ships array when sunk", () => {
  let gameBoard1 = GameBoard(ships);
  gameBoard1.receiveAttack(4);
  expect(gameBoard1.usedAttacks).toStrictEqual([{ index: 4, status: "hit" }]);

  gameBoard1.receiveAttack(5);
  expect(gameBoard1.usedAttacks).toStrictEqual([
    { index: 4, status: "hit" },
    { index: 5, status: "hit" },
  ]);

  gameBoard1.receiveAttack(3);
  expect(gameBoard1.usedAttacks).toStrictEqual([
    { index: 4, status: "hit" },
    { index: 5, status: "hit" },
    { index: 3, status: "hit" },
  ]);

  gameBoard1.ships.forEach((ship) => {
    expect(ship).toMatchObject({
      location: [0, 1],
      length: 2,
      timesHit: 0,
      sunk: false,
    });
  });
});

test("receiveAttack miss adds miss to usedAttack array", () => {
  let gameBoard1 = GameBoard(ships);
  gameBoard1.receiveAttack(20);
  expect(gameBoard1.usedAttacks).toStrictEqual([{ index: 20, status: "miss" }]);
  gameBoard1.receiveAttack(34);
  expect(gameBoard1.usedAttacks).toStrictEqual([
    { index: 20, status: "miss" },
    { index: 34, status: "miss" },
  ]);
});

test("check loss", () => {
  let gameBoard1 = GameBoard([Ship([0])]);

  gameBoard1.receiveAttack(0);

  expect(gameBoard1.checkLoss()).toBe("all of your ships have sunk");
});

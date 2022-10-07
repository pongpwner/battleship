import Ship from "./ship";
import Player from "./player";
beforeEach(() => {
  // ship array and intantiate 2 players
  let shipArr = [Ship([3, 4]), Ship([0, 10, 20])];
  let player1 = Player("player", shipArr);
  let player2 = Player("cpu", shipArr);
});

test("player is instantiated", () => {
  let shipArr = [Ship([3, 4]), Ship([0, 10, 20])];
  let player1 = Player("player", shipArr);
  let board = [];
  for (let i = 0; i < 100; i++) {
    board.push(i);
  }

  expect(player1).toMatchObject({
    gameBoard: {
      board,
      ships: shipArr,
      usedAttacks: [],
    },
    type: "player",
  });
});

test("player attack, hit and miss", () => {
  let shipArr = [Ship([3, 4]), Ship([0, 10, 20])];
  let player1 = Player("player", shipArr);
  let player2 = Player("cpu", shipArr);
  let board = [];
  for (let i = 0; i < 100; i++) {
    board.push(i);
  }
  player1.attack(0, player2);
  expect(player2.gameBoard.usedAttacks).toMatchObject([
    { index: 0, status: "hit" },
  ]);

  player1.attack(50, player2);
  expect(player2.gameBoard.usedAttacks).toMatchObject([
    { index: 0, status: "hit" },
    { index: 50, status: "miss" },
  ]);
});

test("cpu attack length goes into used attack", () => {
  let shipArr = [Ship([3, 4]), Ship([0, 10, 20])];
  let player1 = Player("player", shipArr);
  let player2 = Player("cpu", shipArr);

  player2.cpuAttack(player1);
  //console.log(player2.cpuAttacks.shift());

  expect(player1.gameBoard.usedAttacks.length).toBe(1);
  player2.cpuAttack(player1);
  expect(player1.gameBoard.usedAttacks.length).toBe(2);
});

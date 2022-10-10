import GameBoard from "./gameBoard";
const Dom = (function (player1, player2) {
  function generateDom(player, opponent) {
    let pageContent = document.querySelector("#content");
    let opponentBoard = document.createElement("div");
    opponentBoard.classList.add("board");
    let playerBoard = document.createElement("div");
    playerBoard.classList.add("board");

    //add tiles to player and opponent board
    for (let i = 0; i < 100; i++) {
      let temp = document.createElement("button");
      temp.classList.add("board-tile", "neutral");
      temp.dataset.tileNumber = i;
      temp.addEventListener(
        "click",
        (e) => {
          player.attack(i, opponent);
          //find tile and set tile to hit or miss
          let tile = opponent.gameBoard.usedAttacks.find(
            (attack) => attack.index === i
          );

          e.target.classList.add(tile.status);
          //todo oponents turn
          //call oponent attack
          let playerTileIndex = opponent.cpuAttack(player);
          //get tile from player used tiles
          //console.log(playerTileIndex);
          let playerTile = player.gameBoard.usedAttacks.find(
            (attack) => attack.index === playerTileIndex
          );

          //find player tile with queryselector
          let playerTiles = document.querySelectorAll(".player-tile");

          playerTiles.forEach((tile) => {
            if (tile.dataset.tileNumber == playerTile.index) {
              tile.classList.add(playerTile.status);
            }
          });

          //add game end check
          if (opponent.gameBoard.loss) {
            alert("opponent loses");
          } else if (player.gameBoard.loss) {
            alert("player loses");
          }
        },
        { once: true }
      );

      opponentBoard.appendChild(temp);
    }

    //load player tiles
    for (let i = 0; i < 100; i++) {
      let temp = document.createElement("button");
      //add receive attack method
      temp.classList.add("board-tile", "neutral", "player-tile");
      temp.dataset.tileNumber = i;
      player.gameBoard.ships.forEach((ship) => {
        ship.location.forEach((loca) => {
          if (loca == i) {
            temp.classList.add("player-ship");
          }
        });
      });
      playerBoard.appendChild(temp);
    }

    pageContent.appendChild(opponentBoard);
    pageContent.appendChild(playerBoard);
  }

  return {
    generateDom,
  };
})();

export default Dom;

import GameBoard from "./gameBoard";
const Dom = (function (player1, player2) {
  function generateDom(player, opponent) {
    let pageContent = document.querySelector("#content");
    let opponentHeader = document.createElement("h1");
    opponentHeader.textContent = "opponent";
    let playerHeader = document.createElement("h1");
    playerHeader.textContent = "player";
    let opponentBoard = document.createElement("div");
    opponentBoard.classList.add("board");
    let playerBoard = document.createElement("div");
    playerBoard.classList.add("board");

    //
    let opponentBoardContainer = document.createElement("div");
    opponentBoardContainer.classList.add("board-container");
    let playerBoardContainer = document.createElement("div");
    playerBoardContainer.classList.add("board-container");

    // coordinate labels, 123..ABC
    let xAxis = document.createElement("div");
    xAxis.classList.add("x-axis");
    let yAxis = document.createElement("div");
    yAxis.classList.add("y-axis");

    // coordinate labels, 123..ABC
    let xAxis2 = document.createElement("div");
    xAxis2.classList.add("x-axis");
    let yAxis2 = document.createElement("div");
    yAxis2.classList.add("y-axis");

    //append labels to x and y axis
    for (let i = 0; i < 10; i++) {
      let label = document.createElement("div");
      label.textContent = i;
      xAxis.appendChild(label);
    }
    for (let i = 0; i < 10; i++) {
      let label = document.createElement("div");
      label.textContent = String.fromCharCode(i + 65);
      yAxis.appendChild(label);
    }
    //append labels to x and y axis
    for (let i = 0; i < 10; i++) {
      let label = document.createElement("div");
      label.textContent = i;
      xAxis2.appendChild(label);
    }
    for (let i = 0; i < 10; i++) {
      let label = document.createElement("div");
      label.textContent = String.fromCharCode(i + 65);
      yAxis2.appendChild(label);
    }

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
            //alert("opponent loses");
            let gameOverScreen = document.createElement("div");
            gameOverScreen.classList.add("game-over-screen");
            let gameOverText = document.createElement("h2");
            gameOverText.textContent = "You Win";
            let resetButton = document.createElement("button");
            resetButton.textContent = "Play Again";

            resetButton.addEventListener("click", () => {
              location.reload();
            });
            gameOverScreen.appendChild(gameOverText);
            gameOverScreen.appendChild(resetButton);
            pageContent.appendChild(gameOverScreen);
          }
          if (player.gameBoard.loss) {
            //alert("player loses");
            let gameOverScreen = document.createElement("div");
            gameOverScreen.classList.add("game-over-screen");
            let gameOverText = document.createElement("h2");
            gameOverText.textContent = "You Win";
            let resetButton = document.createElement("button");
            resetButton.textContent = "Play Again";
            resetButton.addEventListener("click", () => {
              location.reload();
            });
            gameOverScreen.appendChild(gameOverText);
            gameOverScreen.appendChild(resetButton);
            pageContent.appendChild(gameOverScreen);
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
    opponentBoardContainer.appendChild(xAxis);
    opponentBoardContainer.appendChild(yAxis);
    opponentBoardContainer.appendChild(opponentBoard);
    playerBoardContainer.appendChild(xAxis2);
    playerBoardContainer.appendChild(yAxis2);
    playerBoardContainer.appendChild(playerBoard);

    pageContent.appendChild(opponentHeader);
    pageContent.appendChild(opponentBoardContainer);
    pageContent.appendChild(playerHeader);
    pageContent.appendChild(playerBoardContainer);
  }

  return {
    generateDom,
  };
})();

export default Dom;

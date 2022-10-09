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
      temp.addEventListener("click", (e) => {
        player.attack(i, opponent);
        //find tile and call set tile
        let tile = opponent.gameBoard.usedAttacks.find(
          (attack) => attack.index === i
        );

        e.target.classList.add(tile.status);
      });
      temp.dataset.tileNumber = i;
      opponentBoard.appendChild(temp);
    }
    for (let i = 0; i < 100; i++) {
      let temp = document.createElement("button");
      //add receive attack method
      temp.classList.add("board-tile", "neutral");
      temp.dataset.tileNumber = i;
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

const gameBoard = (() => {
    const board = ["", "O", "O", "O", "X", "O", "O", "O", "X"];
    function changeboard(active , spot) {
      
    }

    function showboard() {
      document.getElementById("topleft").innerText = board[0];
      document.getElementById("topmid").innerText = board[1];
      document.getElementById("topright").innerText = board[2];
      document.getElementById("midleft").innerText = board[3];
      document.getElementById("midmid").innerText = board[4];
      document.getElementById("midright").innerText = board[5];
      document.getElementById("botleft").innerText = board[6];
      document.getElementById("botmid").innerText = board[7];
      document.getElementById("botright").innerText = board[8];
    }
    return {changeboard , showboard};
    
  })();

  const Player = (name, symbol) => {
    const getName  = () => name;
    const getSymbol = () => symbol;
    return {getName , getSymbol}
  };
  
  const player1 = Player('player1', "X");
  const player2 = Player('player2', "O");

  const displayController = (() => {
    let activePlayer = 1;
    const topL = document.getElementById("topleft");
    const topM = document.getElementById("topmid");
    const topr = document.getElementById("topright");
    const midL = document.getElementById("midleft");
    const midM = document.getElementById("midmid");
    const midR = document.getElementById("midright");
    const botL = document.getElementById("botleft");
    const botM = document.getElementById("botmid");
    const botR = document.getElementById("botright");

    topL.addEventListener("click", gameBoard.changeboard(activePlayer, 0));
    return {activePlayer}
  })();
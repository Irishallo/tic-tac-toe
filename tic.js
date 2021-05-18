const gameBoard = (() => {
    const board = ["X", "O", "O", "O", "X", "O", "O", "O", "X"];
    function changeboard() {
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
    return changeboard();
    
  })();

  const Player = (name, symbol) => {
    const getName  = () => name;
    const getSymbol = () => symbol;
    return {getName , getSymbol}
  };
  
  const player1 = Player('player1', "X");
  const player2 = Player('player2', "O");

  const displayController = (() => {
    const display = [];
    const getActivePlayer = () => {}
    return {display , getActivePlayer}
  })();
const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    function changeboard(active , spot) {
      if(board[spot] == "") {
        if(active == 1) {
          board[spot] = player1.getToken;
          console.log(board[spot]);
          showboard();
        } else if (active == 2) {
          board[spot] = player2.getToken;
          console.log(board[spot])
          showboard();
        } else {
          console.log("ging iets mis");
        }
        
      } else {
        console.log("not working");
      }
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

    function checkWin() {
      
    }

    return {changeboard, showboard};
    
  })();

  const Player = (name, symbol) => {
    const getName  = () => name;
     const getToken = symbol;
    return {getName , getToken}
  };
  
  const player1 = Player('player1', "X");
  const player2 = Player('player2', "O");

  const displayController = (() => {
    let activePlayer = 1;
    function changeActive () {
      if(activePlayer == 1) {
        activePlayer = 2;
        console.log(activePlayer);
      } else if(activePlayer == 2){
        activePlayer = 1;
        console.log(activePlayer);
      } else {
        console.log("error");
        console.log(activePlayer);
      }
    }
    const topL = document.getElementById("topleft");
    const topM = document.getElementById("topmid");
    const topR = document.getElementById("topright");
    const midL = document.getElementById("midleft");
    const midM = document.getElementById("midmid");
    const midR = document.getElementById("midright");
    const botL = document.getElementById("botleft");
    const botM = document.getElementById("botmid");
    const botR = document.getElementById("botright");

    topL.addEventListener("click", () => {
      gameBoard.changeboard(activePlayer, 0);
      changeActive();
    });
   
    topM.addEventListener("click", () => {
      gameBoard.changeboard(activePlayer, 1);
      changeActive();
    });
    
    topR.addEventListener("click", () => {
      gameBoard.changeboard(activePlayer, 2);
      changeActive();
    });
  
    midL.addEventListener("click", () => {
      gameBoard.changeboard(activePlayer, 3);
      changeActive();
    });
   
    midM.addEventListener("click", () => {
      gameBoard.changeboard(activePlayer, 4);
      changeActive();
    });
    
    midR.addEventListener("click", () => {
      gameBoard.changeboard(activePlayer, 5);
      changeActive();
    });
    
    botL.addEventListener("click", () => {
      gameBoard.changeboard(activePlayer, 6);
      changeActive();
    });
    
    botM.addEventListener("click", () => {
      gameBoard.changeboard(activePlayer, 7);
      changeActive();
    });
    
    botR.addEventListener("click", () => {
      gameBoard.changeboard(activePlayer, 8);
      changeActive();
    });
    
  })();
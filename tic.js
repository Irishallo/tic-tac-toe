const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    
    function changeBoard(active , spot) {
      let placed = "no";
      if(board[spot] == "") {
        if(active == 1) {
          board[spot] = player1.getToken;
          placed = "yes";
           console.log(placed);
          showBoard();
          checkWin();
          displayController.changeActive(placed);
        } else if (active == 2) {
          board[spot] = player2.getToken;
          placed = "yes";
           console.log(placed);
          showBoard();
          checkWin();
          displayController.changeActive(placed);
        } else {
          console.log("ging iets mis");
        }
        
      } else {
        console.log("not working");
      }
      return placed;
    }

    function showBoard() {
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
      console.log(board);
      if(board[0] === board[1] && board[1] === board[2] && !board[1] == "") {
        console.log("you win!");
      } else if(board[3] === board[4] && board[4] === board[5] && !board[4] == "") {
        console.log("you win!");
      } else if(board[6] === board[7] && board[7] === board[8] && !board[7] == "") {
        console.log("you win!");
      } else if(board[0] === board[3] && board[3] === board[6] && !board[3] == "") {
        console.log("you win!");
      } else if(board[1] === board[4] && board[4] === board[7] && !board[4] == "") {
        console.log("you win!");
      } else if(board[2] === board[5] && board[5] === board[8] && !board[5] == "") {
        console.log("you win!");
      } else if(board[0] === board[4] && board[4] === board[8] && !board[4] == "") {
        console.log("you win!");
      } else if(board[2] === board[4] && board[4] === board[6] && !board[4] == "") {
        console.log("you win!");
      } else {
        console.log("keep trying");
      }
    }

    return {changeBoard, showBoard , checkWin};
    
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
    function changeActive (boardchange) {
      console.log(boardchange);
      // if(boardchange == "yes") {
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
      // } else {
      //   return
      // }
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
      gameBoard.changeBoard(activePlayer, 0);
      // gameBoard.checkWin();
    });
   
    topM.addEventListener("click", () => {
      gameBoard.changeBoard(activePlayer, 1);
      // gameBoard.checkWin();
    });
    
    topR.addEventListener("click", () => {
      gameBoard.changeBoard(activePlayer, 2);
      // gameBoard.checkWin();
    });
  
    midL.addEventListener("click", () => {
      gameBoard.changeBoard(activePlayer, 3);
      // gameBoard.checkWin();
    });
   
    midM.addEventListener("click", () => {
      gameBoard.changeBoard(activePlayer, 4);
      // gameBoard.checkWin();
    });
    
    midR.addEventListener("click", () => {
      gameBoard.changeBoard(activePlayer, 5);
      // gameBoard.checkWin();
    });
    
    botL.addEventListener("click", () => {
      gameBoard.changeBoard(activePlayer, 6);
      // gameBoard.checkWin();
    });
    
    botM.addEventListener("click", () => {
      gameBoard.changeBoard(activePlayer, 7);
      // gameBoard.checkWin();
    });
    
    botR.addEventListener("click", () => {
      gameBoard.changeBoard(activePlayer, 8);
      // gameBoard.checkWin();
    });
    
    return {changeActive}
  })();
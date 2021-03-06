const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    
    function changeBoard(active , spot , start) {
      let placed = "no";
      if(board[spot] == "" && start == "yes") {
        if(active == 1) {
          board[spot] = player1.getToken;
          placed = "yes";
           console.log(placed);
          showBoard();
          displayController.changeActive(placed);
          checkWin();
          if(player2.isComputer == "yes") {
            computerPlay(active);
          } else {}
        } else if (active == 2) {
          board[spot] = player2.getToken;
          placed = "yes";
           console.log(placed);
          showBoard();
          displayController.changeActive(placed);
          checkWin();
        } else {
          console.log("ging iets mis");
        }
        
      } else {
        console.log("not working");
      }
      return placed;
    }

    function computerPlay(active) {
      
        console.log("computer is playing!");
        let stopLoop = 0;
        do {
          let random = Math.floor(Math.random()*board.length);
          if(board[random] == "") {
            console.log("yeey het kan!")
            setTimeout(function() {changeBoard(2, random, "yes")}, 5000);
            stopLoop = 1;
          } else if(!board[0] == "" && !board[1] == "" && !board[2] == "" && !board[3] == "" &&
          !board[4] == "" && !board[5] == "" && !board[6] == "" && !board[7] == "" && !board[8] == "") {
            console.log("computer can't play because game is over");
            stopLoop = 1;
          } else {
          console.log("bezet");
          }
        }
        while(stopLoop < 1 && active > 1);
        
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
        wonTheGame(board[1])
        console.log(board);
      } else if(board[3] === board[4] && board[4] === board[5] && !board[4] == "") {
        console.log("you win!");
        wonTheGame(board[4])
        console.log(board);
      } else if(board[6] === board[7] && board[7] === board[8] && !board[7] == "") {
        console.log("you win!");
        wonTheGame(board[7])
        console.log(board);
      } else if(board[0] === board[3] && board[3] === board[6] && !board[3] == "") {
        console.log("you win!");
        wonTheGame(board[3])
        console.log(board);
      } else if(board[1] === board[4] && board[4] === board[7] && !board[4] == "") {
        console.log("you win!");
        wonTheGame(board[4])
        console.log(board);
      } else if(board[2] === board[5] && board[5] === board[8] && !board[5] == "") {
        console.log("you win!");
        wonTheGame(board[5])
        console.log(board);
      } else if(board[0] === board[4] && board[4] === board[8] && !board[4] == "") {
        console.log("you win!");
        wonTheGame(board[4])
        console.log(board);
      } else if(board[2] === board[4] && board[4] === board[6] && !board[4] == "") {
        console.log("you win!");
        wonTheGame(board[4])
        console.log(board);
      } else if(!board[0] == "" && !board[1] == "" && !board[2] == "" &&  !board[3] == "" &&
       !board[4] == "" && !board[5] == "" && !board[6] == "" && !board[7] == "" && !board[8] == "") {
        const displayTxt = document.getElementById("displaytxt");
        displayTxt.innerHTML = `It's a Tie!`;
        console.log('its a tie');
      } else {
        console.log("keep trying");
      }
    }

    function wonTheGame(token) {
      for (i = 0; i < board.length; i++) {
        if(board[i] === "")
        board[i] = "-";
      }

      if(token == "X") {
        const displayTxt = document.getElementById("displaytxt");
        displayTxt.innerHTML = `${player1.name} (${player1.getToken}) won!`;
      } else if(token == "O") {
        const displayTxt = document.getElementById("displaytxt");
        displayTxt.innerHTML = `${player2.name} (${player2.getToken}) won!`;
      } else {
        return
      }
    }

    function restartGame(activePlayer) {
      for (i = 0; i < board.length; i++) {
        if(board[i] === "X" || board[i] === "O" || board[i] === "-")
        board[i] = "";
      }
      showBoard();
      if(activePlayer == 1) {
        const displayTxt = document.getElementById("displaytxt");
        displayTxt.innerHTML = `(${player1.getToken}) it's ${player1.name}'s turn`;
        console.log(activePlayer);
      } else if(activePlayer == 2){
        const displayTxt = document.getElementById("displaytxt");
        displayTxt.innerHTML = `(${player2.getToken}) it's ${player2.name}'s turn`;
        console.log(activePlayer);
        if(player2.isComputer == "yes") {
          computerPlay(activePlayer);
        } else {
          return
        }
      } else {
        console.log("error");
        console.log(activePlayer);
      }
      
    }

    return {changeBoard, showBoard , checkWin , board , restartGame};
    
  })();

  const Player = (name, symbol, isC) => {
    const getName  = name;
    const getToken = symbol;
    const isComputer = isC;
    return {getName , getToken , isComputer}
  };
  
  const player1 = Player('player1', "X" , "no");
  const player2 = Player('player2', "O" , "yes");

  const displayController = (() => {
    let activePlayer = 1;
    let gameStart = "no";
    function changeActive (boardchange) {
      console.log(boardchange);
        if(activePlayer == 1) {
          activePlayer = 2;
          const displayTxt = document.getElementById("displaytxt");
          displayTxt.innerHTML = `(${player2.getToken}) it's ${player2.name}'s turn`;
        } else if(activePlayer == 2){
          activePlayer = 1;
          const displayTxt = document.getElementById("displaytxt");
          displayTxt.innerHTML = `(${player1.getToken}) it's ${player1.name}'s turn`;
        } else {
          console.log("error");
          console.log(activePlayer);
        }
    }

    function startGame () {
      if(document.getElementById("pl1").value == "") {
        player1.name = "Player1";
      } else {
        player1.name = document.getElementById("pl1").value;
      }
      
      if(player2.isComputer == "yes") {
        player2.name = "Computer";
      } else if(document.getElementById("pl2").value == "") {
        player2.name = "Player2";
        player2.isComputer = "no";
      } else {
        player2.name = document.getElementById("pl2").value;
        player2.isComputer = "no";
      }
      
      const playerInput = document.getElementById("playerinput");
      playerInput.style.visibility = "hidden";
      const displayTekst = document.getElementById("gamedisplay");
      displayTekst.style.visibility = "visible";
      const displayTxt = document.getElementById("displaytxt");
      displayTxt.innerHTML = `(${player1.getToken}) it's ${player1.name}'s turn`;
      gameStart = "yes";
    }

    function changeNames () { 
      console.log("change names");  
      const playerInput = document.getElementById("playerinput");
      playerInput.style.visibility = "visible";
      const displayTekst = document.getElementById("gamedisplay");
      displayTekst.style.visibility = "hidden";
      gameStart = "no";
      gameBoard.restartGame(1);
    }

    function showInput2 () {
      const input2 = document.querySelectorAll(".player2name");
      input2.forEach((item) => {
        item.classList.add("plchecked");
        item.classList.remove("compchecked");
        player2.isComputer = "no";
      })
    }

    function hideInput2 () {
      const input2 = document.querySelectorAll(".player2name");
      input2.forEach((item) => {
        item.classList.remove("plchecked");
        item.classList.add("compchecked");
        player2.isComputer = "yes";
      })
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
    const startBtn = document.getElementById("start");
    const restartBtn = document.getElementById("restart");
    const nameChangeBtn = document.getElementById("namechange");
    const radioComp = document.getElementById("computerplay");
    const radioPl2 = document.getElementById("player");

    radioComp.addEventListener("click", () => {
      hideInput2();
    });

    radioPl2.addEventListener("click", () => {
      showInput2();
    });
    
    startBtn.addEventListener("click", () => {
      startGame();
    });

    restartBtn.addEventListener("click", () => {
      gameBoard.restartGame(activePlayer);
    });

     nameChangeBtn.addEventListener("click", () => {
       changeNames();
     });

    topL.addEventListener("click", () => {
      gameBoard.changeBoard(activePlayer, 0, gameStart);
    });
   
    topM.addEventListener("click", () => {
      gameBoard.changeBoard(activePlayer, 1, gameStart);
    });
    
    topR.addEventListener("click", () => {
      gameBoard.changeBoard(activePlayer, 2, gameStart);
    });
  
    midL.addEventListener("click", () => {
      gameBoard.changeBoard(activePlayer, 3, gameStart);
    });
   
    midM.addEventListener("click", () => {
      gameBoard.changeBoard(activePlayer, 4, gameStart);
    });
    
    midR.addEventListener("click", () => {
      gameBoard.changeBoard(activePlayer, 5, gameStart);
    });
    
    botL.addEventListener("click", () => {
      gameBoard.changeBoard(activePlayer, 6, gameStart);
    });
    
    botM.addEventListener("click", () => {
      gameBoard.changeBoard(activePlayer, 7, gameStart);
    });
    
    botR.addEventListener("click", () => {
      gameBoard.changeBoard(activePlayer, 8, gameStart);
    });
    
    return {changeActive , showInput2 , activePlayer , gameStart}
  })();
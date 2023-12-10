const board = (function() {
    let boardProto = {
        clear: function(){
            gameBoard = [" "," "," "," "," "," "," "," "," "]
        },
        display: function(){
            console.log(`${gameBoard[0]} | ${gameBoard[1]} | ${gameBoard[2]}`)
            console.log(`${gameBoard[3]} | ${gameBoard[4]} | ${gameBoard[5]}`)
            console.log(`${gameBoard[6]} | ${gameBoard[7]} | ${gameBoard[8]}`)
        },
        show: function(){

            return gameBoard
        },
        change: function(position, symbol){
            gameBoard.splice(position, 1, symbol)
        },


    };

    const obj = Object.create(boardProto);
    let gameBoard = [" "," "," "," "," "," "," "," "," "];
    return obj;
})();



const player1 = (function(){
    let playerProto = {
        addScore(){
            ++score;
        },
        getScore(){
            return score
        },
        putToken(position){
            board.change(position, symbol);
        }
    }
    const obj = Object.create(playerProto);
    let score = 0;
    let symbol = "O";
    return obj;
})()

const player2 = (function(){
    let playerProto = {
        addScore(){
            ++score;
        },
        getScore(){
            return score
        },
        putToken(position){
            board.change(position, symbol);
        }
    }
    const obj = Object.create(playerProto);
    let score = 0;
    let symbol = "X";
    return obj;
})()







const game = (function (){
    let gameProto = {
        playGame(){
            function choosePlayer(){
                let choice = ""
                while(true){
                let input = prompt("Do you want X or O?: ")
                if (input.toLowerCase() === "o"){
                    choice = "player1";
                    break;
                }
                else if (input.toLowerCase() === "x"){
                    choice = "player2";
                    break;
                }
                else{
                    alert("That choice doesn't exist")
                }
                }
                return choice
            }

            function playRound(player){
                let position = ""
                if(player === "player1"){
                    while(true){
                        position = parseInt(prompt("Player 1, choose a position to put your token (0-8): "));
                        
                        if(currentBoard[position] === "X" || currentBoard[position] === "O"){
                            continue
                        }
                        break;
                    }
                    player1.putToken(position)
                }
                else{
                    while(true){
                        position = parseInt(prompt("Player 1, choose a position to put your token (0-8): "));
                        
                        if(currentBoard[position] === "X" || currentBoard[position] === "O"){
                            continue
                        }
                        break;
                    }
                }
                board.display()
                currentBoard = board.show()
            }

            let startingPlayer = choosePlayer()
            let currentBoard = board.show()
            let isEmpty = false
            //First round
            while(true){
                
                playRound(startingPlayer)
                //Check winner
                if (currentBoard[0] === "O" && currentBoard[1] === "O" && currentBoard[2] === "O" || currentBoard[3] === "O" && currentBoard[4] === "O" && currentBoard[5] === "O" || currentBoard[6] === "O" && currentBoard[7] === "O" && currentBoard[8] === "O" || currentBoard[0] === "O" && currentBoard[4] === "O" && currentBoard[8] === "O" || currentBoard[2] === "O" && currentBoard[4] === "O" && currentBoard[6] === "O"|| currentBoard[0] === "O" && currentBoard[3] === "O" && currentBoard[6] === "O" || currentBoard[1] === "O" && currentBoard[4] === "O" && currentBoard[7] === "O" || currentBoard[2] === "O" && currentBoard[5] === "O" && currentBoard[8] === "O"){
                    console.log("Player 1 has won")
                    board.clear()
                    break;
                }
                else if(
                    currentBoard[0] === "X" && currentBoard[1] === "X" && currentBoard[2] === "X" || currentBoard[3] === "X" && currentBoard[4] === "X" && currentBoard[5] === "X" || currentBoard[6] === "X" && currentBoard[7] === "X" && currentBoard[8] === "X"|| currentBoard[0] === "X" && currentBoard[4] === "X" && currentBoard[8] === "X" || currentBoard[2] === "X" && currentBoard[4] === "X" && currentBoard[6] === "X"|| currentBoard[0] === "X" && currentBoard[3] === "X" && currentBoard[6] === "X" || currentBoard[1] === "X" && currentBoard[4] === "X" && currentBoard[7] === "X" || currentBoard[2] === "X" && currentBoard[5] === "X" && currentBoard[8] === "X"
                ){
                    console.log("Player 2 has won");
                    board.clear();
                    break;
                }

                for(box of currentBoard){
                    if(box == false){
                        isEmpty = true
                    }
                } 

                if(isEmpty === false){
                    console.log("It's a draw")
                    break;
                }
                isEmpty = false



                //Second round
                if(startingPlayer === "player1"){
                    playRound("player2")
                }
                else{
                    playRound("player1")
                }

                
                //Check winner
                if (currentBoard[0] === "O" && currentBoard[1] === "O" && currentBoard[2] === "O" || currentBoard[3] === "O" && currentBoard[4] === "O" && currentBoard[5] === "O" || currentBoard[6] === "O" && currentBoard[7] === "O" && currentBoard[8] === "O" || currentBoard[0] === "O" && currentBoard[4] === "O" && currentBoard[8] === "O" || currentBoard[2] === "O" && currentBoard[4] === "O" && currentBoard[6] === "O"|| currentBoard[0] === "O" && currentBoard[3] === "O" && currentBoard[6] === "O" || currentBoard[1] === "O" && currentBoard[4] === "O" && currentBoard[7] === "O" || currentBoard[2] === "O" && currentBoard[5] === "O" && currentBoard[8] === "O"){
                    console.log("Player 1 has won")
                    board.clear()
                    break;
                }
                else if(
                    currentBoard[0] === "X" && currentBoard[1] === "X" && currentBoard[2] === "X" || currentBoard[3] === "X" && currentBoard[4] === "X" && currentBoard[5] === "X" || currentBoard[6] === "X" && currentBoard[7] === "X" && currentBoard[8] === "X"|| currentBoard[0] === "X" && currentBoard[4] === "X" && currentBoard[8] === "X" || currentBoard[2] === "X" && currentBoard[4] === "X" && currentBoard[6] === "X"|| currentBoard[0] === "X" && currentBoard[3] === "X" && currentBoard[6] === "X" || currentBoard[1] === "X" && currentBoard[4] === "X" && currentBoard[7] === "X" || currentBoard[2] === "X" && currentBoard[5] === "X" && currentBoard[8] === "X"
                ){
                    console.log("Player 2 has won");
                    board.clear();
                    break;
                }
            }
        },
        
        printResult(){

        }
    }

    const obj = Object.create(gameProto);
    return obj
})();


game.playGame()

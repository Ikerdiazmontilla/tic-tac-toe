const dom = (function(){
    let domProto = {

        playRound(event){
            let position = parseInt(event.target.id)
            event.target.textContent = token
            if(token === "O"){
                player1.putToken(position)
                div.textContent = "X turn"
            }
            else{
                player2.putToken(position)
                div.textContent = "O turn"
            }
            event.target.removeEventListener("click",playRound)

        
            if (currentBoard[0] === "O" && currentBoard[1] === "O" && currentBoard[2] === "O" || currentBoard[3] === "O" && currentBoard[4] === "O" && currentBoard[5] === "O" || currentBoard[6] === "O" && currentBoard[7] === "O" && currentBoard[8] === "O" || currentBoard[0] === "O" && currentBoard[4] === "O" && currentBoard[8] === "O" || currentBoard[2] === "O" && currentBoard[4] === "O" && currentBoard[6] === "O"|| currentBoard[0] === "O" && currentBoard[3] === "O" && currentBoard[6] === "O" || currentBoard[1] === "O" && currentBoard[4] === "O" && currentBoard[7] === "O" || currentBoard[2] === "O" && currentBoard[5] === "O" && currentBoard[8] === "O"){
                div.textContent = "Player 1 has won";
                grid.forEach((box) => event.target.removeEventListener("click",playRound))
            }
            else if(
                currentBoard[0] === "X" && currentBoard[1] === "X" && currentBoard[2] === "X" || currentBoard[3] === "X" && currentBoard[4] === "X" && currentBoard[5] === "X" || currentBoard[6] === "X" && currentBoard[7] === "X" && currentBoard[8] === "X"|| currentBoard[0] === "X" && currentBoard[4] === "X" && currentBoard[8] === "X" || currentBoard[2] === "X" && currentBoard[4] === "X" && currentBoard[6] === "X"|| currentBoard[0] === "X" && currentBoard[3] === "X" && currentBoard[6] === "X" || currentBoard[1] === "X" && currentBoard[4] === "X" && currentBoard[7] === "X" || currentBoard[2] === "X" && currentBoard[5] === "X" && currentBoard[8] === "X"
            ){
                div.textContent = "Player 2 has won";
                grid.forEach((box) => event.target.removeEventListener("click", playRound))
            }

            for(box of currentBoard){
                if(box == false){
                    isEmpty = true
                }
            } 

            if(isEmpty === false){
                div.textContent = "It's a draw"
            }
            isEmpty = false
        
            if(token === "O"){
                token = "X"
            }
            else{
                token = "O"
            }
        },


        addEvents(){
            grid.forEach((box) => {
                box.addEventListener('click',playRound)})
        },


        chooseSymbol(){
            const dialog = document.querySelector("dialog")
            dialog.showModal()
            const oButton = document.querySelector(".O")
            const xButton = document.querySelector(".X")
            oButton.addEventListener("click", (event) => {
                dialog.close()
                token = "O"
                div.textContent = "O turn"
            })
            xButton.addEventListener("click", (event) => {
                dialog.close()
                token = "X"
                div.textContent = "X turn"
            }) 
        }
    }


    const obj = Object.create(domProto)
    let token = ""
    let currentBoard = board.show()
    let isEmpty = false
    const div = document.querySelector(".turns")
    
    return obj
})();






const board = (function() {
    let boardProto = {
        clear: function(){
            gameBoard = [" "," "," "," "," "," "," "," "," "]
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
            board.change(position,playerSymbol);
        }
    }
    const obj = Object.create(playerProto);
    let score = 0;
    let playerSymbol = "O";
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
            board.change(position, playerSymbol);
        }
    }
    const obj = Object.create(playerProto);
    let score = 0;
    let playerSymbol = "X";
    return obj;
})()







const game = (function (){
    let gameProto = {
        playGame(){
            dom.chooseSymbol()
            dom.addEvents()
        }
    }

    const obj = Object.create(gameProto);
    return obj
})();


game.playGame()

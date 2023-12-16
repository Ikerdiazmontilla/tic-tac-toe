const controller = (function(){
    let token = ""
    let lastBoxClicked = 0
    const div = document.querySelector(".turns")
    const grid = document.querySelectorAll(".box")
    const restart = document.querySelector("#restart")
    

    function chooseSymbol(){
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
    

    function putToken(event){
        event.target.textContent = token
        lastBoxClicked = Number(event.target.id)
        gameBoard.add(lastBoxClicked,token)

        let win = controller.checkWinner()
        if (win === true){
            div.textContent = `Player ${token} won`
            grid.forEach((box)=> box.removeEventListener("click",putToken))
            return
        }

        if (token === "X"){
            token = "O"
            div.textContent = "O turn"
        }
        else{
            token = "X"
            div.textContent = "X turn"
        }
        event.target.removeEventListener("click", putToken)
    }
    
    function addListeners(){
        grid.forEach(box => {
            box.addEventListener("click", putToken)
        });
        restart.addEventListener("click", restartGame)
    }

    function restartGame(){
        grid.forEach(box => {
            box.textContent = ""
            box.addEventListener("click", putToken)
        });
        controller.chooseSymbol()
    }

    function checkWinner(){
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        const currentBoard = gameBoard.get()

        return winConditions
        .filter((condition) => condition.includes(lastBoxClicked))
        .some((possibleCombination) => possibleCombination.every((index)=> currentBoard[index] === token))
    }

    return {chooseSymbol, putToken, addListeners, restartGame, checkWinner}
})()

controller.chooseSymbol()
controller.addListeners()

const gameBoard = (function(){
    let board = ["","","","","","","","",""]
    

    function clear(){}

    function get(){
        return board
    }

    function add(position, symbol){
        board.splice(position, 1, symbol)
    }

    return {clear, get, add}
})()


window.onload = ()=>{
    const game = new Connect4Game()
    game.ready()

    const date = new Date().getFullYear()
    document.getElementById("copyright_year").textContent = date

    const startButton = document.getElementById("startButton")
    startButton.addEventListener("click", ()=>{
        game.start()
    })
    const restartButton = document.getElementById("restartButton")
    restartButton.addEventListener("click", ()=>{
        game.restart()
    })
}

function Connect4Game() {
    let self = this

    let rows = 6
    let columns = 7
    let board = Array.from({ length: rows }, () => Array(columns).fill(0)) // Initialize the board
    let player_1 = "Player 1"
    let player_2 = "Player 2"
    let turn = 2
    let speed = 50
    let gameStart = false

    this.ready = ()=>{
        const gameContainer = document.getElementById("connect_4_game")
        gameContainer.innerHTML = ""

        for (let col = 0; col < columns; col++) {
            const rowElement = document.createElement("div")
            rowElement.classList.add("connect_4_column")

            for (let row = 0; row < rows; row++) {
                const cellElement = document.createElement("div")
                cellElement.classList.add("connect_4_cell")
                cellElement.setAttribute("data-row", row)
                cellElement.setAttribute("data-column", col)

                // Create the inner dot element
                const dotElement = document.createElement("div")
                dotElement.classList.add("connect_4_dot")

                // Append the dot inside the cell
                cellElement.appendChild(dotElement)

                // Add click event to each cell to update the board
                cellElement.addEventListener("click", function () {
                    handleCellClick(col)
                })

                rowElement.appendChild(cellElement)
            }

            gameContainer.appendChild(rowElement)
        }
    }

    function handleCellClick(col) {
        if(gameStart){
            // Find the last empty cell in the column
            let targetRow = -1
            for (let r = rows - 1; r >= 0; r--) {
                if (board[r][col] === 0) {
                    targetRow = r
                    break
                }
            }
        
            if (targetRow === -1) {
                return // Column is full, no valid move
            }
        
            const currentPlayer = getCurrentPlayer()
        
            // Simulate the drop animation
            for (let i = 0; i <= targetRow; i++) {
                setTimeout(() => {
                    // Create a deep copy of the board for this step
                    const tempBoard = board.map((row, rowIndex) => {
                        return row.map((cell, colIndex) => {
                            // Only modify the cell that's "falling"
                            if (rowIndex === i && colIndex === col) {
                                return currentPlayer
                            }
                            return cell
                        })
                    })
                    self.displayBoard(tempBoard)
                }, i * speed)
            }
        
            // Finally, update the actual board state
            setTimeout(() => {
                updateGameTurnDisplay()
                board[targetRow][col] = currentPlayer
                let result = self.checkGameEnd()
                if(result){
                    self.showResults(result)
                    
                }          
            }, (targetRow + 1) * speed)
        }        
    }
    
    this.displayBoard = (matrix, array = [])=>{        
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                const cell = document.querySelector(`.connect_4_cell[data-row="${row}"][data-column="${col}"]`)
                if (cell) {
                    cell.classList.remove('player1', 'player2', 'winner')
    
                    if (matrix[row][col] === 1) {
                        cell.classList.add('player1')
                    } else if (matrix[row][col] === 2) {
                        cell.classList.add('player2')
                    }
    
                    // If array is not empty, add 'winner' class to the winning cells
                    if (array.some(([winRow, winCol]) => winRow === row && winCol === col)) {
                        cell.classList.add('winner')
                    }
                }
            }
        }
    }    

    this.checkGameEnd = ()=>{
        // Check if a player has won
        const checkWinner = (player) => {
            let winningCells = []
    
            // Check horizontal wins
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col <= columns - 4; col++) {
                    if (
                        board[row][col] === player &&
                        board[row][col + 1] === player &&
                        board[row][col + 2] === player &&
                        board[row][col + 3] === player
                    ) {
                        winningCells = [
                            [row, col],
                            [row, col + 1],
                            [row, col + 2],
                            [row, col + 3]
                        ]
                        return winningCells
                    }
                }
            }
    
            // Check vertical wins
            for (let row = 0; row <= rows - 4; row++) {
                for (let col = 0; col < columns; col++) {
                    if (
                        board[row][col] === player &&
                        board[row + 1][col] === player &&
                        board[row + 2][col] === player &&
                        board[row + 3][col] === player
                    ) {
                        winningCells = [
                            [row, col],
                            [row + 1, col],
                            [row + 2, col],
                            [row + 3, col]
                        ]
                        return winningCells
                    }
                }
            }
    
            // Check diagonal (top-left to bottom-right) wins
            for (let row = 0; row <= rows - 4; row++) {
                for (let col = 0; col <= columns - 4; col++) {
                    if (
                        board[row][col] === player &&
                        board[row + 1][col + 1] === player &&
                        board[row + 2][col + 2] === player &&
                        board[row + 3][col + 3] === player
                    ) {
                        winningCells = [
                            [row, col],
                            [row + 1, col + 1],
                            [row + 2, col + 2],
                            [row + 3, col + 3]
                        ]
                        return winningCells
                    }
                }
            }
    
            // Check diagonal (top-right to bottom-left) wins
            for (let row = 0; row <= rows - 4; row++) {
                for (let col = 3; col < columns; col++) {
                    if (
                        board[row][col] === player &&
                        board[row + 1][col - 1] === player &&
                        board[row + 2][col - 2] === player &&
                        board[row + 3][col - 3] === player
                    ) {
                        winningCells = [
                            [row, col],
                            [row + 1, col - 1],
                            [row + 2, col - 2],
                            [row + 3, col - 3]
                        ]
                        return winningCells
                    }
                }
            }
    
            return
        }
    
        // Check if player 1 or player 2 has won
        const player1WinningCells = checkWinner(1)
        if (player1WinningCells) {
            return {
                winner: 'Player 1',
                array: player1WinningCells
            }
        }
    
        const player2WinningCells = checkWinner(2)
        if (player2WinningCells) {
            return {
                winner: 'Player 2',
                array: player2WinningCells
            }
        }
    
        // Check if the board is full
        const isFull = board.every(row => row.every(cell => cell !== 0))
        if (isFull) {
            return {
                winner: null,
                array: []
            }
        }
        
        return // Game is not yet over
    }      

    function getCurrentPlayer(){
        return turn
    }

    function updateGameTurnDisplay(){
        const gameTurn = document.getElementById("connect_4_turn")
        turn = turn === 1 ? 2 : 1
        gameTurn.textContent = turn === 1 ? `${player_1} Turn` : `${player_2} Turn`
    }

    this.showResults = (result)=>{
        gameStart = false
        let winner = result.winner
        let array = result.array
        self.displayBoard(board, array)
        const restartButtonContainer = document.getElementById("restartButton_container")
        restartButtonContainer.style.display = "block"

        setTimeout(() => {
            alert(winner ? winner : "Draw")
        }, 1000)
    }

    this.start = ()=>{
        gameStart = true
        const gamePlayers = document.getElementById("connect_4_players")
        const gameContainer = document.getElementById("connect_4_game_container")
        const restartButtonContainer = document.getElementById("restartButton_container")

        gamePlayers.style.display = "none"
        gameContainer.style.display = "block"
        restartButtonContainer.style.display = "none"

        // Get the player names from the input fields
        const player1Name = document.getElementById("player_1").value.trim()
        const player2Name = document.getElementById("player_2").value.trim()

        // Update player names if they have been provided
        if (player1Name) {
            player_1 = player1Name
        }
        if (player2Name) {
            player_2 = player2Name
        }

        updateGameTurnDisplay() // Initialize the turn display when the game starts
    }

    this.restart = ()=>{
        gameStart = true
        turn = 2
        updateGameTurnDisplay()
        
        const restartButtonContainer = document.getElementById("restartButton_container")
        restartButtonContainer.style.display = "none"

        board = Array.from({ length: rows }, () => Array(columns).fill(0)) // Initialize the board
        self.ready()
    }
}

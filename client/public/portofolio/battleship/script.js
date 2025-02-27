window.onload = ()=>{
    const game = new BattleShipGame()
    game.ready()

    const date = new Date().getFullYear()
    document.getElementById("copyright_year").textContent = date    
}

function BattleShipGame() {
    let self = this

    let startGame = false

    const width = 10
    const userGrid = document.querySelector('.grid_user')
    const computerGrid = document.querySelector('.grid_computer')
    const shipArray = [
        {
          name: 'destroyer',
          directions: [
            [0, 1],
            [0, width]
          ]
        },
        {
          name: 'submarine',
          directions: [
            [0, 1, 2],
            [0, width, width*2]
          ]
        },
        {
          name: 'cruiser',
          directions: [
            [0, 1, 2],
            [0, width, width*2]
          ]
        },
        {
          name: 'battleship',
          directions: [
            [0, 1, 2, 3],
            [0, width, width*2, width*3]
          ]
        },
        {
          name: 'carrier',
          directions: [
            [0, 1, 2, 3, 4],
            [0, width, width*2, width*3, width*4]
          ]
        },
    ]
    let userGridMatrix = []
    let computerGridMatrix = []
    let userSquares = []
    let computerSquares = []
    let howManyRows = 10
    let howManyColumns = 10
    let vertical = false

    const buttons = document.querySelector('.battleship_game_buttons')
    const startButton = document.querySelector('#start')
    const clearButton = document.querySelector('#clear')
    const rotateButton = document.querySelector('#rotate')
    const displayGrid = document.querySelector('.grid_display')    

    let draggedShip = null
    let draggedShipParts = []
    let shipLength = 0
    
    let turn = 0 // 0 - you, 1 - computer
    const turnDisplay = document.querySelector('#turn')
    const infoDisplay = document.querySelector('#info')

    let destroyerCount = 0
    let submarineCount = 0
    let cruiserCount = 0
    let battleshipCount = 0
    let carrierCount = 0

    let cpuDestroyerCount = 0
    let cpuSubmarineCount = 0
    let cpuCruiserCount = 0
    let cpuBattleshipCount = 0
    let cpuCarrierCount = 0

    let readyClick = true

    this.ready = ()=>{
        handleClearAll()

        self.createBoards()
        self.displayBoards()
        self.addShipsToDisplayShips()

        rotateButton.addEventListener('click', self.handleRotate)
        clearButton.addEventListener('click', self.handleClear)
        startButton.addEventListener('click', self.handleStart)

        const ships = document.querySelectorAll('.ship')
        ships.forEach(ship => ship.addEventListener('dragstart', dragStart))
        userSquares.forEach(square => {
            square.addEventListener('dragover', dragOver)
            square.addEventListener('dragenter', dragEnter)
            square.addEventListener('dragleave', dragLeave)
            square.addEventListener('drop', dragDrop)
        })

        computerSquares.forEach(square => {
            square.addEventListener('click', handleSquareClick)
        })
    }
    
    this.createBoards = ()=>{
        let matrix = []
        for(let i = 0; i < howManyRows; i++){
            let row = []
            for(let j = 0; j < howManyColumns; j++){
                let el = {i, j}
                row.push(el)
            }
            matrix.push(row)
        }
        userGridMatrix = [...matrix]
        computerGridMatrix = [...matrix]
    }
    this.displayBoards = ()=>{
        self.displayBoard(userGridMatrix, userGrid, userSquares)
        self.displayBoard(computerGridMatrix, computerGrid, computerSquares)
    }
    this.displayBoard = (matrix, grid, squares)=>{
        for(let i in matrix){
            let row = matrix[i]
            for (let j in row) {
                const square = document.createElement('div')
                square.setAttribute("class", "square")
                const attributes = row[j]                
                for (let key in attributes) {
                    square.setAttribute("data-" + key, attributes[key])
                }                
                grid.appendChild(square)
                squares.push(square)
            }
        }        
    }
    this.addShipsToDisplayShips = ()=>{
        const userGridShips = document.querySelector('.grid_display_ships')
        userGridShips.innerHTML = ''
        
        const ships = [
            { id: 1, name: 'destroyer', length: 2 },
            { id: 2, name: 'submarine', length: 3 },
            { id: 3, name: 'cruiser', length: 3 },
            { id: 4, name: 'battleship', length: 4 },
            { id: 5, name: 'carrier', length: 5 },
        ]    
        
        ships.forEach(ship => {            
            const shipContainer = document.createElement('div')
            shipContainer.classList.add('ship', `${ship.name}_container`)
            shipContainer.setAttribute('draggable', 'true')    
            
            for (let i = 0; i < ship.length; i++) {
                const shipPart = document.createElement('div')
                shipPart.classList.add('ship_part')
                shipPart.id = `${ship.name}-${ship.id}`
                shipContainer.appendChild(shipPart)
            }    
            
            const numberLabel = document.createElement('div')
            numberLabel.classList.add('number')
            numberLabel.textContent = ship.id
            shipContainer.appendChild(numberLabel)    
            
            userGridShips.appendChild(shipContainer)
        })
    }
    function handleSquareClick(event) {
        const square = event.target
        userHit(square)
    }

    this.handleRotate = ()=>{
        vertical = !vertical
        displayGrid.classList.toggle('vertical')
    }

    function dragStart(e) {
        draggedShip = e.target        
        draggedShipParts = Array.from(draggedShip.children).filter(child => child.classList.contains('ship_part')) // Collect only children with the class 'ship_part'
        shipLength = draggedShipParts.length
    }    
    function dragOver(e) {
        e.preventDefault()
    }    
    function dragEnter(e) {
        e.preventDefault()
    }    
    function dragLeave(e) {}    
    function dragDrop(e) {
        const square = e.target
        const gridPosition = {
            x: parseInt(square.getAttribute('data-i')),
            y: parseInt(square.getAttribute('data-j'))
        }
    
        if (isValidPlacement(gridPosition)) {
            placeShip(gridPosition)
            updateGrid(gridPosition)          
        }
    }    
    function isValidPlacement({ x, y }) {
        if (vertical) {            
            if (x + shipLength > userGridMatrix.length) {
                alert("Ship placement is not within bounds")
                return false
            }            
            for (let i = 0; i < shipLength; i++) {
                if (!userGridMatrix[x + i][y] || userGridMatrix[x + i][y].ship) {
                    alert("Ship can't be placed over another ship")
                    return false
                }
            }
        } else {            
            if (y + shipLength > userGridMatrix[0].length) {
                alert("Ship placement is not within bounds")
                return false
            }            
            for (let i = 0; i < shipLength; i++) {                
                if (!userGridMatrix[x][y + i] || userGridMatrix[x][y + i].ship) {
                    alert("Ship can't be placed over another ship")
                    return false
                }
            }
        }
        return true
    }    
    function updateGrid({ x, y }) {        
        if (vertical) {            
            for (let i = 0; i < shipLength; i++) {
                userGridMatrix[x + i][y].ship = true
            }
        } else {            
            for (let i = 0; i < shipLength; i++) {
                userGridMatrix[x][y + i].ship = true
            }
        }
    }    
    function placeShip({ x, y }) {    
        draggedShipParts.forEach((part, index) => {
            // Calculate the target square based on the orientation (vertical or horizontal)
            const targetSquare = vertical
                ? document.querySelector(`.grid_user [data-i="${x + index}"][data-j="${y}"]`) // Vertical placement
                : document.querySelector(`.grid_user [data-i="${x}"][data-j="${y + index}"]`); // Horizontal placement
                
            if (targetSquare) {
                targetSquare.classList.add('ship') // Add the 'ship' class to the target square if it exists
            }
        })    
        
        draggedShip.parentElement.removeChild(draggedShip) // Remove the ship from the display grid
    }    

    this.handleClear = ()=>{
        if (startGame) return
        self.ready()
    }  

    this.handleStart = ()=>{
        const grid_display_ships = document.querySelectorAll('.grid_display_ships .ship')
        if(grid_display_ships.length > 0){
            alert("You must place all ships to start the game")
            return
        }
        startGame = true
        displayGrid.parentElement.classList.add('hidden')
        computerGrid.parentElement.classList.remove('hidden')
        buttons.classList.add('hidden')
        placeComputerShips()
        play()  
    }
    function placeComputerShips(){
        for(let i in shipArray){            
            generateShip(shipArray[i])
        }
    }
    function generateShip(ship){
        let randomDirection, current, direction, randomStart
        let isTaken, isAtRightEdge, isAtLeftEdge

        do {            
            randomDirection = Math.floor(Math.random() * ship.directions.length)
            current = ship.directions[randomDirection]
            direction = randomDirection === 0 ? 1 : 10            
            randomStart = Math.abs(Math.floor(Math.random() * computerSquares.length - (ship.directions[0].length * direction)))
            isTaken = current.some(index => computerSquares[randomStart + index]?.classList.contains('ship'))
            isAtRightEdge = current.some(index => (randomStart + index) % width === width - 1)
            isAtLeftEdge = current.some(index => (randomStart + index) % width === 0)
        } while (isTaken || isAtRightEdge || isAtLeftEdge)
        
        current.forEach(index => {
            computerSquares[randomStart + index].classList.add('ship', ship.name)
        })
    }

    function play(){        
        if (!startGame) return
        if (turn === 1) { // computer's turn            
            turnDisplay.innerHTML = 'Computers Go'
            setTimeout(computerHit, 1000)
        }
    }
    function userHit(enemySquare){        
        if(!readyClick){
            return
        }
        
        let classList = enemySquare.classList
        const obj = Object.values(classList)       
        if (!classList.contains('boom') && turn === 0 && startGame) {
            if (obj.includes('destroyer')) destroyerCount++
            if (obj.includes('submarine')) submarineCount++
            if (obj.includes('cruiser')) cruiserCount++
            if (obj.includes('battleship')) battleshipCount++
            if (obj.includes('carrier')) carrierCount++
        }

        if (obj.includes('ship')) {
            classList.add('boom')
        } else {
            classList.add('miss')
        }

        turn = 1
        readyClick = false

        checkForWins()
        play()
    }
    function computerHit(){        
        let square = Math.floor(Math.random() * userSquares.length)
        let classList = userSquares[square].classList
        const obj = Object.values(classList)        
        if (!classList.contains('boom') && turn === 1 && startGame) {
            if (obj.includes('destroyer')) cpuDestroyerCount++
            if (obj.includes('submarine')) cpuSubmarineCount++
            if (obj.includes('cruiser')) cpuCruiserCount++
            if (obj.includes('battleship')) cpuBattleshipCount++
            if (obj.includes('carrier')) cpuCarrierCount++
        }

        if (obj.includes('ship')) {
            classList.add('boom')
        } else {
            classList.add('miss')
        }

        turn = 0
        readyClick = true

        checkForWins()
        turnDisplay.innerHTML = 'Your Go'
    }

    function checkForWins(){
        let enemy = 'Computer'    
        if (destroyerCount === 2) {
            infoDisplay.innerHTML = `You sunk the ${enemy}'s destroyer`
            destroyerCount = 10
        }
        if (submarineCount === 3) {
            infoDisplay.innerHTML = `You sunk the ${enemy}'s submarine`
            submarineCount = 10
        }
        if (cruiserCount === 3) {
            infoDisplay.innerHTML = `You sunk the ${enemy}'s cruiser`
            cruiserCount = 10
        }
        if (battleshipCount === 4) {
            infoDisplay.innerHTML = `You sunk the ${enemy}'s battleship`
            battleshipCount = 10
        }
        if (carrierCount === 5) {
            infoDisplay.innerHTML = `You sunk the ${enemy}'s carrier`
            carrierCount = 10
        }
        if (cpuDestroyerCount === 2) {
            infoDisplay.innerHTML = `${enemy} sunk your destroyer`
            cpuDestroyerCount = 10
        }
        if (cpuSubmarineCount === 3) {
            infoDisplay.innerHTML = `${enemy} sunk your submarine`
            cpuSubmarineCount = 10
        }
        if (cpuCruiserCount === 3) {
            infoDisplay.innerHTML = `${enemy} sunk your cruiser`
            cpuCruiserCount = 10
        }
        if (cpuBattleshipCount === 4) {
            infoDisplay.innerHTML = `${enemy} sunk your battleship`
            cpuBattleshipCount = 10
        }
        if (cpuCarrierCount === 5) {
            infoDisplay.innerHTML = `${enemy} sunk your carrier`
            cpuCarrierCount = 10
        }

        // console.log(destroyerCount, submarineCount, cruiserCount, battleshipCount, carrierCount)
        // console.log(cpuDestroyerCount, cpuSubmarineCount, cpuCruiserCount, cpuBattleshipCount, cpuCarrierCount)
        // console.log(destroyerCount + submarineCount + cruiserCount + battleshipCount + carrierCount)
        // console.log(cpuDestroyerCount + cpuSubmarineCount + cpuCruiserCount + cpuBattleshipCount + cpuCarrierCount)

        if ((destroyerCount + submarineCount + cruiserCount + battleshipCount + carrierCount) === 50) {            
            gameOver()
            alert("YOU WIN")
        }
        if ((cpuDestroyerCount + cpuSubmarineCount + cpuCruiserCount + cpuBattleshipCount + cpuCarrierCount) === 50) {            
            gameOver()
            alert(`${enemy.toUpperCase()} WINS`)
        }
    }

    function gameOver() {        
        startGame = false           
        computerGrid.classList.remove('hidden_enemy')        
        self.ready()
    }

    function handleClearAll(){
        turnDisplay.innerHTML = 'Your Go'
        infoDisplay.innerHTML = ''
        userGrid.innerHTML = ''
        computerGrid.innerHTML = ''

        displayGrid.parentElement.classList.remove('hidden')
        computerGrid.parentElement.classList.add('hidden')
        buttons.classList.remove('hidden')
        displayGrid.classList.remove('vertical')

        rotateButton.removeEventListener('click', self.handleRotate)
        clearButton.removeEventListener('click', self.handleClear)
        startButton.removeEventListener('click', self.handleStart)        
        
        userGridMatrix = []
        computerGridMatrix = []
        userSquares = []
        computerSquares = []
        vertical = false

        turn = 0

        destroyerCount = 0
        submarineCount = 0
        cruiserCount = 0
        battleshipCount = 0
        carrierCount = 0

        cpuDestroyerCount = 0
        cpuSubmarineCount = 0
        cpuCruiserCount = 0
        cpuBattleshipCount = 0
        cpuCarrierCount = 0
    }
}
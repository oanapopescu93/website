var game = null
var canvas_width = 400
var canvas_height = 400
var ctx = null
var cell_w = 0
var cols = 0
var rows = 0
var cells = []

var myCell
var myStack = []

var mouse = null
var cheese = null

var myAnswer = false

$(document).ready(() => {
	$('#hidden_box').hide()
	$('body').off('click').on('click', '#button_maze_start', (e) => {	
		if($('#button_maze_select').val() == ""){
			alert('Please choose a level')
		} else {
			$("#title_box").hide()	
			if($("#maze_container div canvas").length > 0){
				$("#maze_container div canvas").remove()
			} 
			game = new mazeGame()
			game.ready()		
		}		
	})
})

function mazeGame(){
	let self = this
	
	this.ready = function(){
		cell_w = 0
		cols = 0
		rows = 0
		cells = []

		myCell
		myStack = []

		self.updateCanvasSize()

		$(window).off('resize').on('resize', () => {
			self.updateCanvasSize()
			self.main_structure()
		})
		
		self.main_structure()
	}

	this.updateCanvasSize = function () {
		if(window.innerWidth > 480){
			canvas_width = 600
			canvas_height = 600
		} else {
			canvas_width = 400
			canvas_height = 400
		}
	}
	
	this.main_structure = () => {	
		$("#maze_container div").append('<canvas id="myCanvas">Your browser does not support the HTML5 canvas tag.</canvas>')
		$('#hidden_box').show()
		switch($('#button_maze_select').val()) {
			case '20':
				cell_w = canvas_width/20
				break
			case '16':
				cell_w = canvas_width/16 
				break
			case '10':
				cell_w = canvas_width/10 
				break
			case '8':
				cell_w = canvas_width/8
				break
			default:			
				cell_w = 40
		}
		
		cols = Math.floor(canvas_width/cell_w)
		rows = Math.floor(canvas_height/cell_w)	
		
		self.createCanvas(canvas_width, canvas_height)
		self.createCells(rows, cols)
		self.drawCells()

		let last_cell = {i: Math.sqrt(cells.length) - 1, j: Math.sqrt(cells.length) - 1}
		cheese = new Cheese(last_cell.i, last_cell.j)
		cheese.show(ctx)
		
		mouse = new Mouse(0, 0)
		let move = [false, false, true, false]
		mouse.moveMouse(0, 0, move)
		mouse.show(ctx)
		
		$('body').off('click').on('click', '.button_icon', (e) => {	
			let id = $(e.target).attr('id')

			if(id == "button_maze_up"){ // top				
				if(possible_move(mouse.i, mouse.j, 'top')){
					let move = mouse.move
					move = [true, false, false, false]
					self.moveMouse(mouse.i, mouse.j - 1, move)
				}
			} else if(id == "button_maze_right"){ // right				
				if(possible_move(mouse.i, mouse.j, 'right')){
					let move = mouse.move
					move = [false, true, false, false]
					self.moveMouse(mouse.i, mouse.j - 1, move)
				}				
			} else if(id == "button_maze_down"){ // bottom				
				if(possible_move(mouse.i, mouse.j, 'bottom')){
					let move = mouse.move
					move = [false, false, true, false]
					self.moveMouse(mouse.i, mouse.j - 1, move)
				}				
			} else if(id == "button_maze_left"){ // left				
				if(possible_move(mouse.i, mouse.j, 'left')){
					let move = mouse.move
					move = [false, false, false, true]
					self.moveMouse(mouse.i, mouse.j - 1, move)
				}
			} else if(id == "button_give_up"){
				myAnswer = true
				self.show_answer()
				message('You lost')
			}
		})
		
		document.onkeydown = (e) => {
			if(e.keyCode == 38){ // top
				if(possible_move(mouse.i, mouse.j, 'top')){
					let move = mouse.move
					move = [true, false, false, false]
					self.moveMouse(mouse.i, mouse.j - 1, move)
				}
			} else if(e.keyCode == 39){ // right
				if(possible_move(mouse.i, mouse.j, 'right')){
					let move = mouse.move
					move = [false, true, false, false]
					self.moveMouse(mouse.i + 1, mouse.j, move)
				}				
			} else if(e.keyCode == 40){ // bottom
				if(possible_move(mouse.i, mouse.j, 'bottom')){
					let move = mouse.move
					move = [false, false, true, false]
					self.moveMouse(mouse.i, mouse.j + 1, move)
				}				
			} else if(e.keyCode == 37){ // left
				if(possible_move(mouse.i, mouse.j, 'left')){
					let move = mouse.move
					move = [false, false, false, true]
					self.moveMouse(mouse.i - 1, mouse.j, move)
				}
			}
		}		
	}

	this.moveMouse = (i, j, move) => {
		ctx.clearRect(0,0,canvas_width,canvas_width)

		game.drawCells()

		cheese.show(ctx)

		mouse.moveMouse(i, j, move)
		mouse.show(ctx)		
	}
	
	this.createCanvas = (canvas_width, canvas_height) => {
		let canvas = document.getElementById("myCanvas")
		ctx = canvas.getContext("2d")		
		canvas.width  = canvas_width
		canvas.height = canvas_height
	}
	
	this.createCells = (rows, cols) => {
		for(let j=0; j < rows; j++){
			for(let i=0; i < cols; i++){
				let cell = new Cell(i, j)
				cells.push(cell)
			}
		}		
		
		myCell = cells[0]
		myCell.visited = true
		myStack.push(myCell)
		let next = myCell.checkNeighbours()
		
		while(self.check_all_visited() > 0){
			if(next){
				self.removeWalls(myCell, next)
				myCell = next
				myCell.visited = true
				myStack.push(myCell)
				next = myCell.checkNeighbours()
			} else if(myStack.length > 0){	
				myStack.pop()
				myCell = myStack[myStack.length - 1]
				myCell.visited = true
				next = myCell.checkNeighbours()
			}
		}		
	}
			
	this.drawCells = () => {		
		for(let i in cells){
			cells[i].show(ctx, "#013300", '#7f8000')
		}
	}
	
	this.check_all_visited = () => {
		let unvisited = 0
		for(let i in cells){
			if(!cells[i].visited){
				unvisited++
			}
		}
		return unvisited
	}
	
	this.removeWalls = (myCell, next) => {
		// next went down
		if(next.i == myCell.i && next.j == myCell.j + 1){			
			myCell.wall[2] = false
			next.wall[0] = false
		}
		
		// next went right
		if(next.i == myCell.i + 1 && next.j == myCell.j){			
			myCell.wall[1] = false
			next.wall[3] = false
		}
		
		// next went top
		if(next.i == myCell.i && next.j == myCell.j - 1){			
			myCell.wall[0] = false
			next.wall[2] = false
		}
		
		// next went left
		if(next.i == myCell.i - 1 && next.j == myCell.j){			
			myCell.wall[3] = false
			next.wall[1] = false
		}
	}

	this.show_answer = () => {
		if(myAnswer){
			self.getRoute()
		}
		myAnswer = false		
	}

	this.getRoute = () => {		
		for (let i in cells) {
			cells[i].visited = false
		}
		
		let last_cell = {i: Math.sqrt(cells.length) - 1, j: Math.sqrt(cells.length) - 1}
		let myStack = []
		let myCell = cells[0]
		myCell.visited = true
		myStack.push(myCell)		
		let next = myCell.getNextNeighbour()
		
		while (self.check_all_visited() > 0) {
			if (next) {
				myCell = next
				myCell.visited = true
				myStack.push(myCell)
				if(myCell.i === last_cell.i && myCell.j === last_cell.j){
					break
				} else {
					next = myCell.getNextNeighbour()
				}
			} else if(myStack.length > 0){
				myStack.pop()
				myCell = myStack[myStack.length - 1]
				myCell.visited = true
				next = myCell.getNextNeighbour()
			}
		}
		self.drawRoute(myStack)
	}

	this.drawRoute = (array) => {
		for(var i in array){
			array[i].show(ctx, '#ff0000', "#ff6600");
		}
		
		cheese.show(ctx)

		move = [false, false, true, false]
		mouse.moveMouse(0, 0, move)
		mouse.show(ctx)
	}
}	

function Mouse(i, j){	
	this.i = i
	this.j = j
	this.move = [false, false, false, false]  // top, right, bottom, left

	this.moveMouse = (i, j, move) => {
		this.i = i
		this.j = j
		this.move = move
	}
	
	this.show = (ctx) => {
		let x = this.i * cell_w
		let y = this.j * cell_w
		let img = new Image()
		
		let completeOne = false
		let isComplete = () => {
			if(completeOne === true){
				return true              
			}
			return false
		}

		let last_cell = {i: Math.sqrt(cells.length) - 1, j: Math.sqrt(cells.length) - 1}
				
		if(last_cell.i == this.i && last_cell.j == this.j){			
			message('You won')
		}
		
		ctx.beginPath()		
		
		if(this.move[0]){			
			img.src = "img/mouse-up.png"
		}
		if(this.move[1]){			
			img.src = "img/mouse-right.png"
		}
		if(this.move[2]){
			img.src = "img/mouse-down.png"			
		}
		if(this.move[3]){
			img.src = "img/mouse-left.png"			
		}
		
		img.onload = () => {
			completeOne = true
			if(isComplete()){
				ctx.drawImage(img, x, y, cell_w, cell_w)
			}
		}
	}
	
}

function Cheese(i, j) {
    this.i = i
    this.j = j
    this.img = new Image()
    this.loaded = false   
    this.img.src = "img/cheese.png"
    
    this.img.onload = () => {
        this.loaded = true
        this.show(ctx)
    }

    this.show = (ctx) => {
        let x = this.i * cell_w
        let y = this.j * cell_w

        ctx.beginPath()
        ctx.moveTo(x, y)
        
        if (this.loaded) {
            ctx.drawImage(this.img, x + 5, y + 5, 0.8 * cell_w, 0.7 * cell_w)
        }
    }
}


function Cell(i, j){	
	this.i = i
	this.j = j
	this.wall = [true, true, true, true]  // top, right, bottom, left
	this.visited = false
	
	this.show = (ctx, color, border) => {		
		let x = i * cell_w
		let y = j * cell_w
		
		ctx.beginPath()		
		
		if(this.wall[0]){
			ctx.moveTo(x, y)
			ctx.lineTo(x + cell_w, y) // top line
		}
		if(this.wall[1]){
			ctx.moveTo(x + cell_w, y)
			ctx.lineTo(x + cell_w, y + cell_w) // right line
		}
		if(this.wall[2]){
			ctx.moveTo(x + cell_w, y + cell_w)
			ctx.lineTo(x, y + cell_w) // bottom line
		}
		if(this.wall[3]){
			ctx.moveTo(x, y + cell_w)
			ctx.lineTo(x, y) // left line
		}
		
		if(this.visited){
			ctx.fillStyle = color
			ctx.fillRect(x, y, cell_w, cell_w)
		} 
		
		ctx.lineWidth = 2
		ctx.strokeStyle = border
		ctx.stroke()

		// Display the cell coordinates (i, j)
		// ctx.fillStyle = "white"
		// ctx.font = "12px Arial"
		// ctx.textAlign = "center"
		// ctx.textBaseline = "middle"
		// ctx.fillText(`(${i},${j})`, x + cell_w / 2, y + cell_w / 2)
	}
	
	this.checkNeighbours = () => {
		let neighbours = []
		
		let top = cells[index(i, j-1, cols)]	
		let right = cells[index(i+1, j, cols)]
		let bottom = cells[index(i, j+1, cols)]
		let left = cells[index(i-1, j, cols)]	
		
		if(top && !top.visited){
			neighbours.push(top)
		}
		if(right && !right.visited){
			neighbours.push(right)
		}
		if(bottom && !bottom.visited){
			neighbours.push(bottom)
		}
		if(left && !left.visited){
			neighbours.push(left)
		}
		
		if(neighbours.length > 0){
			let r = Math.floor(Math.random() * neighbours.length)
			return neighbours[r]
		}
		return
	}

	this.getNextNeighbour = () => {
		let neighbours = []
		if(!this.wall[0]){
			let nextCell = cells[index(i, j-1, cols)]
			if(nextCell && !nextCell.visited){
				neighbours.push(nextCell)
			}
		}
		if(!this.wall[1]){
			let nextCell = cells[index(i+1, j, cols)]
			if(nextCell && !nextCell.visited){
				neighbours.push(nextCell)
			}
		}
		if(!this.wall[2]){
			let nextCell = cells[index(i, j+1, cols)]
			if(nextCell && !nextCell.visited){
				neighbours.push(nextCell)
			}
		}
		if(!this.wall[3]){
			let nextCell = cells[index(i-1, j, cols)]
			if(nextCell && !nextCell.visited){
				neighbours.push(nextCell)
			}
		}
		if(neighbours.length > 0){			
			return neighbours[0]
		}
		return
	}
}

function index(i, j, cols){
	if(i < 0 || j < 0 || i > cols - 1 || j > cols - 1){
		return -1
	}
	return i + j * cols
}

function possible_move(i, j, move){
	let wall = cells[index(i, j, cols)].wall
	let possible_move_mouse = false
	switch(move) {
		case 'top':
			if(!wall[0]){
				possible_move_mouse = true
			}
			break
		case 'right':
			if(!wall[1]){
				possible_move_mouse = true
			}
			break
		case 'bottom':
			if(!wall[2]){
				possible_move_mouse = true
			}					
			break
		case 'left':
			if(!wall[3]){
				possible_move_mouse = true
			}
			break
	}
	return possible_move_mouse
}

function message(title, text){
	let close = false
	if(typeof text == "undefined"){
		$("body").append('<div class="message_banner_main"><div class="message_banner text-center"><div class="message_banner_text"><h1 class="text-uppercase">' + title + '</h1><button id="button_try_again" class="button_try_again">Try again</button></div></div></div>');
	} else {
		$("body").append('<div class="message_banner_main"><div class="message_banner text-center"><div class="message_banner_text"><h1 class="text-uppercase">' + title + '</h1><p>' + text + '</p><button id="button_try_again" class="button_try_again">Try again</button></div></div></div>');
	}

	$('body').off('click').on('click', '#button_try_again', () => {
		close = true
		$('.message_banner_main').remove()
		if($("#maze_container div canvas").length > 0){
			$("#maze_container div canvas").remove()
		} 
		$('#button_maze_select').val('')	
		$("#title_box").show()	
		$('#hidden_box').hide()
	})

	$("#button_maze_start").click(() => {
		if(close){
				if($('#button_maze_select').val() == ""){
				alert('Please choose a level')
			} else {
				$("#title_box").hide()
				$('#hidden_box').show()
				if($("#maze_container div canvas").length > 0){
					$("#maze_container div canvas").remove()
				} 
				game = new mazeGame()
				game.ready()			
			}
		}			
	})
}
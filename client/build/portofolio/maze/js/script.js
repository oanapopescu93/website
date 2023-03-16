var game;
var canvas_width = 400;
var canvas_height = 400;
var ctx;
var cell_w = 0;
var cols = 0;
var rows = 0;	
var cells = [];

var myCell;
var myStack = [];

var mouse;
var cheese;

var myAnswer = false;

$(document).ready(function(){
	$('body').off('click').on('click', '#button_maze_start', function (e) {	
		if($('#button_maze_select').val() == ""){
			alert('Please choose a level');
		} else {			
			if($("#maze_container div canvas").length > 0){
				$("#maze_container div canvas").remove();
			} 
			game = new mazeGame();
			game.ready();				
		}		
	});
	
	
});

function mazeGame(){
	var self = this;
	
	this.ready = function(){
		cell_w = 0;
		cols = 0;
		rows = 0;	
		cells = [];

		myCell;
		myStack = [];
		
		self.main_structure();
	}
	
	this.main_structure = function(){		
		$("#maze_container div").append('<canvas id="myCanvas">Your browser does not support the HTML5 canvas tag.</canvas>');
		if($('#button_give_up').parent().hasClass('hidden')){
			$('#button_give_up').parent().removeClass('hidden');
		}
		switch($('#button_maze_select').val()) {
			case '20':			
				cell_w = canvas_width/20;    
				break;	
			case '16':			
				cell_w = canvas_width/16;    
				break;	
			case '10':			
				cell_w = canvas_width/10;    
				break;	
			case '8':			
				cell_w = canvas_width/8;    
				break;	
			default:			
				cell_w = 40;
		}
		
		cols = Math.floor(canvas_width/cell_w);
		rows = Math.floor(canvas_height/cell_w);	
		
		self.createCanvas(canvas_width, canvas_height);
		self.createCells(rows, cols);
		self.drawCells();		
		
		mouse = new Mouse(0, 0);
		mouse.move[2] = true;
		mouse.show(ctx);
		
		cheese = new Cheese(myCell.i, myCell.j);
		cheese.show(ctx);
		
		$('body').off('click').on('click', '.button_icon', function (e) {	
			var id = $(this).attr('id');

			if(id == "button_maze_up"){                   // top
				console.warn('possible_move', possible_move(mouse.i, mouse.j, 'top'), mouse.i, mouse.j);
				if(possible_move(mouse.i, mouse.j, 'top')){
					mouse.j = mouse.j-1;
					mouse = new Mouse(mouse.i, mouse.j);
					mouse.move[0] = true;
					mouse.show(ctx);
				}
			} else if(id == "button_maze_right"){           // right
				console.warn('possible_move', possible_move(mouse.i, mouse.j, 'right'), mouse.i, mouse.j);
				if(possible_move(mouse.i, mouse.j, 'right')){
					mouse.i = mouse.i+1;
					mouse = new Mouse(mouse.i, mouse.j);
					mouse.move[1] = true;
					mouse.show(ctx);
				}				
			} else if(id == "button_maze_down"){           // bottom				
				console.warn('possible_move', possible_move(mouse.i, mouse.j, 'bottom'), mouse.i, mouse.j);
				if(possible_move(mouse.i, mouse.j, 'bottom')){
					mouse.j = mouse.j+1;
					mouse = new Mouse(mouse.i, mouse.j);
					mouse.move[2] = true;
					mouse.show(ctx);
				}				
			} else if(id == "button_maze_left"){           // left
				console.warn('possible_move', possible_move(mouse.i, mouse.j, 'left'), mouse.i, mouse.j);
				if(possible_move(mouse.i, mouse.j, 'left')){
					mouse.i = mouse.i-1;
					mouse = new Mouse(mouse.i, mouse.j);
					mouse.move[3] = true;
					mouse.show(ctx);
				}
			} else if(id == "button_give_up"){
				myAnswer = true;			
				self.show_answer(myStack);
			
				message('You lost');
			}
		});
		
		document.onkeydown = function(e) {
			// console.warn(e.keyCode);
			if(e.keyCode == 38){                   // top
				//console.warn('possible_move', possible_move(mouse.i, mouse.j, 'top'), mouse.i, mouse.j);
				if(possible_move(mouse.i, mouse.j, 'top')){
					mouse.j = mouse.j-1;
					mouse = new Mouse(mouse.i, mouse.j);
					mouse.move[0] = true;
					mouse.show(ctx);
				}
			} else if(e.keyCode == 39){           // right
				//console.warn('possible_move', possible_move(mouse.i, mouse.j, 'right'), mouse.i, mouse.j);
				if(possible_move(mouse.i, mouse.j, 'right')){
					mouse.i = mouse.i+1;
					mouse = new Mouse(mouse.i, mouse.j);
					mouse.move[1] = true;
					mouse.show(ctx);
				}				
			} else if(e.keyCode == 40){           // bottom				
				//console.warn('possible_move', possible_move(mouse.i, mouse.j, 'bottom'), mouse.i, mouse.j);
				if(possible_move(mouse.i, mouse.j, 'bottom')){
					mouse.j = mouse.j+1;
					mouse = new Mouse(mouse.i, mouse.j);
					mouse.move[2] = true;
					mouse.show(ctx);
				}				
			} else if(e.keyCode == 37){           // left
				//console.warn('possible_move', possible_move(mouse.i, mouse.j, 'left'), mouse.i, mouse.j);
				if(possible_move(mouse.i, mouse.j, 'left')){
					mouse.i = mouse.i-1;
					mouse = new Mouse(mouse.i, mouse.j);
					mouse.move[3] = true;
					mouse.show(ctx);
				}
			}
		}		
	}
	
	this.createCanvas = function(canvas_width, canvas_height){
		var canvas = document.getElementById("myCanvas");
		ctx = canvas.getContext("2d");
		
		canvas.width  = canvas_width;
		canvas.height = canvas_height;
	}
	
	this.createCells = function(rows, cols){
		for(var j=0; j<rows; j++){
			for(var i=0; i<cols; i++){
				var cell = new Cell(i, j);
				cells.push(cell);
			}
		}		
		
		myCell = cells[0]
		myCell.visited = true;
		myStack.push(myCell);
		var next = myCell.checkNeighbours();		
		
		// while(typeof next != "undefined"){
			// removeWalls(myCell, next);
			// myCell = next;
			// myCell.visited = true;
			// myStack.push(myCell);
			// next = myCell.checkNeighbours();
		// }	
		
		// while(typeof next == "undefined"){
			// if(myStack.length > 0){	
				// myStack.pop()
				// myCell = myStack[myStack.length-1]
				// myCell.visited = true;
				// next = myCell.checkNeighbours();

				// console.warn('pop', myStack, myCell, next);
			// }
		// }
		
		while(check_all_visited() > 0){			
			if(typeof next != "undefined"){
				removeWalls(myCell, next);
				myCell = next;
				myCell.visited = true;
				myStack.push(myCell);
				next = myCell.checkNeighbours();
			} else if(myStack.length > 0){	
				myStack.pop()
				myCell = myStack[myStack.length-1]
				myCell.visited = true;
				next = myCell.checkNeighbours();
			}
		}	
		
	}
			
	this.drawCells = function(){		
		for(var i in cells){
			cells[i].show(ctx, "#013300", '#7f8000');
		}
	}
	
	function check_all_visited(){
		var unvisited = 0;
		for(var i in cells){
			if(!cells[i].visited){
				unvisited++;
			}
		}
		return unvisited;
	}
	
	function removeWalls(myCell, next){	
		
		// next went down
		if(next.i == myCell.i && next.j == myCell.j + 1){			
			myCell.wall[2] = false;
			next.wall[0] = false;
			//console.warn('next01', myCell.wall, next.wall);
		}
		
		// next went right
		if(next.i == myCell.i + 1 && next.j == myCell.j){			
			myCell.wall[1] = false;
			next.wall[3] = false;
			//console.warn('next02', myCell.wall, next.wall);
		}
		
		// next went top
		if(next.i == myCell.i && next.j == myCell.j - 1){			
			myCell.wall[0] = false;
			next.wall[2] = false;
			//console.warn('next03', myCell.wall, next.wall);
		}
		
		// next went left
		if(next.i == myCell.i - 1 && next.j == myCell.j){			
			myCell.wall[3] = false;
			next.wall[1] = false;
			//console.warn('next04', myCell.wall, next.wall);
		}
	}

	this.show_answer = function(myStack){
		//console.warn('show_answer', myAnswer);
		for(var i in myStack){
			myStack[i].show(ctx, '#ff0000', "#ff6600");
		}
		myAnswer = false;		
	}
}

function Mouse(i, j){
	var self = this;
	
	self.i = i;
	self.j = j;
	self.move = [false, false, false, false];  // top, right, bottom, left
	
	this.show = function(ctx){
		var x = i*cell_w;
		var y = j*cell_w;
		var img = new Image();
		
		var completeOne = false;
		var isComplete = function(){
			if(completeOne === true){
				 return true;               
			} else {
				return false;
			}
		};
		
		ctx.clearRect(0,0,canvas_width,canvas_width);
		console.warn('mouse', myAnswer);
		if(myAnswer){
			game.drawCells();
		} else {
			game.drawCells();
			game.show_answer();			
		}
		
		
		//console.warn(myCell.i, myCell.j, i, j);
				
		if(myCell.i == i && myCell.j == j){			
			message('You won');
		} else {
			cheese = new Cheese(myCell.i, myCell.j);
			cheese.show(ctx);
		}
		
		ctx.beginPath();		
		
		if(self.move[0]){
			//console.warn('up', x, y);
			img.src = "img/mouse-up.png"; 
		}
		if(self.move[1]){
			//console.warn('right', x, y);
			img.src = "img/mouse-right.png";
		}
		if(self.move[2]){
			//console.warn('down', x, y);
			img.src = "img/mouse-down.png"; 			
		}
		if(self.move[3]){
			//console.warn('left', x, y);
			img.src = "img/mouse-left.png"; 			
		}
		
		img.onload = function(){
			completeOne = true;		
			if(isComplete()){
				ctx.drawImage(img, x, y, cell_w, cell_w);
			}
		};
	}
	
}

function Cheese(i, j){
	var self = this;
	
	self.i = i;
	self.j = j;	
	
	this.show = function(ctx){
		var x = i*cell_w;
		var y = j*cell_w;
		var img = new Image();
		
		var completeOne = false;
		var isComplete = function(){
			if(completeOne === true){
				 return true;               
			} else {
				return false;
			}
		};
		
		ctx.beginPath();
		ctx.moveTo(x, y);	
		img.src = "img/cheese.png"; 
		
		img.onload = function(){
			completeOne = true;			
			if(isComplete()){
				ctx.drawImage(img, x+5, y+5, 0.8*cell_w, 0.7*cell_w)
			}
		};
	}
}

function Cell(i, j){
	var self = this;
	
	self.i = i;
	self.j = j;
	self.wall = [true, true, true, true];  // top, right, bottom, left
	self.visited = false;
	
	this.show = function(ctx, color, border){		
		var x = i*cell_w;
		var y = j*cell_w;
		
		ctx.beginPath();		
		
		if(self.wall[0]){
			ctx.moveTo(x, y);
			ctx.lineTo(x+cell_w, y); // top line
		}
		if(self.wall[1]){
			ctx.moveTo(x+cell_w, y);
			ctx.lineTo(x+cell_w, y+cell_w); // right line
		}
		if(self.wall[2]){
			ctx.moveTo(x+cell_w, y+cell_w);
			ctx.lineTo(x, y+cell_w); // bottom line
		}
		if(self.wall[3]){
			ctx.moveTo(x, y+cell_w);
			ctx.lineTo(x, y); // left line
		}
		
		if(self.visited){
			//ctx.fillStyle = "#013300";
			ctx.fillStyle = color;
			ctx.fillRect(x,y, cell_w,cell_w);
		} 
		
		ctx.lineWidth = 2;
		//ctx.strokeStyle = '#7f8000';
		ctx.strokeStyle = border;
		ctx.stroke();
	}
	
	this.checkNeighbours = function(ctx){		
		var neighbours = [];
		
		var top = cells[index(i, j-1, cols)];		
		var right = cells[index(i+1, j, cols)];
		var bottom = cells[index(i, j+1, cols)];
		var left = cells[index(i-1, j, cols)];		
		
		if(top && !top.visited){
			neighbours.push(top);
		}
		if(right && !right.visited){
			neighbours.push(right);
		}
		if(bottom && !bottom.visited){
			neighbours.push(bottom);
		}
		if(left && !left.visited){
			neighbours.push(left);
		}
		
		if(neighbours.length > 0){
			var r = Math.floor(Math.random() * neighbours.length);
			return neighbours[r];
		} else {
			return undefined;
		}
	}	
}

function index(i, j, cols){
	if(i<0 || j<0 || i>cols-1 || j>cols-1){
		return -1;
	} else {
		return i + j * cols;
	}
}

function possible_move(i, j, move){
	var wall = cells[index(i, j, cols)].wall;
	var possible_move_mouse = false;
	switch(move) {
		case 'top':
			if(!wall[0]){
				// console.warn('possible_move0', wall, move);
				possible_move_mouse = true;
			}
			break;
		case 'right':
			if(!wall[1]){
				// console.warn('possible_move1', wall, move);
				possible_move_mouse = true;
			}
			break;		
		case 'bottom':
			if(!wall[2]){
				// console.warn('possible_move2', wall, move);
				possible_move_mouse = true;
			}					
			break;		
		case 'left':
			if(!wall[3]){
				// console.warn('possible_move3', wall, move);
				possible_move_mouse = true;
			}
			break;		
	}
	return possible_move_mouse;
}

function message(title, text){
	var close = false;
	//console.warn('You won', title, text, $("#button_try_again").is(":focus"), $("#button_maze_start").is(":focus"));
	if(typeof text == "undefined"){
		$("body").append('<div class="message_banner_main"><div class="message_banner text-center"><div class="message_banner_text"><h1 class="text-uppercase">' + title + '</h1><button id="button_try_again" class="button_try_again">Try again</button></div></div></div>');
	} else {
		$("body").append('<div class="message_banner_main"><div class="message_banner text-center"><div class="message_banner_text"><h1 class="text-uppercase">' + title + '</h1><p>' + text + '</p><button id="button_try_again" class="button_try_again">Try again</button></div></div></div>');
	}
	$('body').off('click').on('click', '#button_try_again', function (e) {	
		$('.message_banner_main').remove();
		if($("#maze_container div canvas").length > 0){
			$("#maze_container div canvas").remove();
		} 
		$('#button_maze_select').val('');
		close = true;
		$('#button_give_up').parent().addClass('hidden');
	});	
	$("#button_maze_start").click(function(){
		if(close){
				if($('#button_maze_select').val() == ""){
				alert('Please choose a level');
			} else {			
				if($("#maze_container div canvas").length > 0){
					$("#maze_container div canvas").remove();
				} 
				game = new mazeGame();
				game.ready();				
			}
		}
			
	});	
}
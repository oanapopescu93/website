var game;
var canvas_width = 400;
var canvas_height = 400;
var ctx;
var cell_w = canvas_width/20;
var cols = Math.floor(canvas_width/cell_w);
var rows = Math.floor(canvas_height/cell_w);		
var cells = [];

var snake_element;
var snake_tail = [];
var snake_i = 0;
var snake_j = 0;

var eaten = false;

var fruit;
var how_many_fruit = 0;	
// var fruit_x = Math.floor(Math.random() * 20);
// var fruit_y = Math.floor(Math.random() * 20);
var fruit_x = 1;
var fruit_y = 1;

$(document).ready(function(){
	game = new snake_game();
	game.ready();
});

function snake_game(){
	var self = this;	
	
	this.ready = function(){
		self.main_structure();
	}
	
	this.main_structure = function(){
		$("#snake_game_container div").append('<canvas id="myCanvas">Your browser does not support the HTML5 canvas tag.</canvas>');
		
		self.createCanvas(canvas_width, canvas_height);
		
		self.createCells(rows, cols);
		self.drawCells();			
			
		self.createTail(0, 0, false, eaten, how_many_fruit);
		self.drawTail(eaten, how_many_fruit);
		console.warn('snake_tail',snake_tail);	
		
		fruit = new Fruit(fruit_x, fruit_y, 0, 0);
		fruit.show(ctx);
		
		document.onkeydown = function(e) {
			
			if(e.keyCode == 38){                   // top
				if(wall_collision(snake_i, snake_j-1)){	
					snake_j = snake_j-1;
					self.fruit_collision(snake_i, snake_j);							
				}	
			} else if(e.keyCode == 39){           // right	
				if(wall_collision(snake_i+1, snake_j)){	
					snake_i = snake_i+1;					
					self.fruit_collision(snake_i, snake_j);				
				}
			} else if(e.keyCode == 40){           // bottom	
				if(wall_collision(snake_i, snake_j+1)){	
					snake_j = snake_j+1;
					self.fruit_collision(snake_i, snake_j);				
				}
			} else if(e.keyCode == 37){           // left
				if(wall_collision(snake_i-1, snake_j)){	
					snake_i = snake_i-1;
					self.fruit_collision(snake_i, snake_j);						
				}
			}
			console.warn('snake_tail',snake_tail, snake_tail.length);
		}
	}
	
	this.fruit_collision = function(i, j){
		if(snake_i == fruit.i && snake_j == fruit.j){
			console.warn('collision YES', eaten);
			eaten = true;
			how_many_fruit++;
			
			self.createTail(snake_i, snake_j, false, eaten, how_many_fruit);
			self.drawTail(eaten, how_many_fruit);
			
			fruit_x = Math.floor(Math.random() * 20);
			fruit_y = Math.floor(Math.random() * 20);
			fruit = new Fruit(fruit_x, fruit_y, snake_i, snake_j);
			fruit.show(ctx);
		} else {
			console.warn('collision NO', eaten);			
			self.createTail(snake_i, snake_j, false, eaten, how_many_fruit);
			self.drawTail(eaten, how_many_fruit);
			
			fruit = new Fruit(fruit_x, fruit_y, snake_i, snake_j);
			fruit.show(ctx);
			
			eaten = false;
		}	
	}
	
	this.createTail = function(i, j, visible, eaten, how_many_fruit){
		snake_element = new Snake(i, j, visible, "#014d00");
		for(var k in snake_tail){
			snake_tail[k].color = "#026600"
		}
		snake_tail.push(snake_element);	
		
	}
	
	this.drawTail = function(eaten, how_many_fruit){
		console.warn(eaten, how_many_fruit);
			
		ctx.clearRect(0,0,canvas_width,canvas_width);
		game.drawCells();
		
		for(var k=how_many_fruit+1; k>0; k--){
			snake_tail[snake_tail.length-k].show(ctx)
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
	}
	
	this.drawCells = function(){
		for(var i in cells){
			cells[i].show(ctx);
		}
	}
	
}

function Cell(i, j){
	var self = this;
	
	self.i = i;
	self.j = j;
	
	this.show = function(ctx){
		var x = i*cell_w;
		var y = j*cell_w;
		
		ctx.beginPath();
		
		ctx.moveTo(x, y);
		
		if((i+j) % 2 == 0){
			ctx.fillStyle = "#5E5E3C";
		} else {
			ctx.fillStyle = "#736E46";
		}
		
		ctx.fillRect(x,y, cell_w,cell_w);
	}
}

function Fruit(i, j, snake_x, snake_y){
	var self = this;
	
	self.i = i;
	self.j = j;	
	
	this.show = function(ctx){
		var x = i*cell_w;
		var y = j*cell_w;		
		
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
		
		ctx.moveTo(x, y);			
		ctx.fillStyle = "red";
		ctx.fillRect(x,y, cell_w,cell_w);
	}
}

function Snake(i, j, visible, color){
	var self = this;
	
	self.i = i;
	self.j = j;
	self.visible = visible;
	self.color = color;
	
	this.show = function(ctx){
		var x = i*cell_w;
		var y = j*cell_w;	
		
		ctx.moveTo(x, y);			
		ctx.fillStyle = self.color;	//"#014d00" //#026600	
		ctx.fillRect(x,y, cell_w,cell_w);
	}
}

function wall_collision(i, j){
	var wall_collision_snake = false;
			
	if(i>-1 && j>-1 && i<cols && j<cols){
		wall_collision_snake = true;
	} 
	
	return wall_collision_snake;
}

var game;
var canvas_width = 500;
var canvas_height = 500;
var ctx;

$(document).ready(function() {
	game = new canvas_game("myCanvas");
	game.ready();
	
	var date = new Date();
	date = date.getFullYear();
	$('#copyright_year').text(date);
});

function canvas_game(canvas_id){
	var self = this;	
	var count_frame = 0;
	var score = 0;
	
	var player = {
		x: 50,
		dir_x: 30,
		y: 40,
		dir_y: 5,
		name: 'P',
		health: 10,
		width: 20,
		height:20,
		color: "green",
	}
	
	var start_game = Date.now();
	
	var enemyList = [];
	var foodList = [];	
	var bulletList = [];	
	
	var collision_width_food = false;
	var collision_width_enemy = false;
			
	this.ready = function(){			
		self.createCanvas(canvas_width, canvas_height);			
		ctx.font = '30px Arial';
		
		for(i=0; i<3; i++){
			self.generate_enemy_random();
			self.generate_food_random();
		}
		
		setInterval(function(){ 
			self.update();
		}, 50);
		
		self.move_player_mouse();
	}
	
	this.createCanvas = function(canvas_width, canvas_height){
		var canvas = document.getElementById(canvas_id);
		ctx = canvas.getContext("2d");
		
		
		canvas.width  = canvas_width;
		canvas.height = canvas_height;
	}
	
	this.generate_enemy = function(id, x, y, dir_x, dir_y, w, h, color){
		var enemy_id = id;
		var enemy_x = x;
		var enemy_y = y;
		var enemy_dir_x = dir_x;
		var enemy_dir_y = dir_y;
		var enemy_w = w;
		var enemy_h = h;
		var enemy_color = color;
		
		var enemy = {
			x: enemy_x,
			dir_x: enemy_dir_x,
			y: enemy_y,
			dir_y: enemy_dir_y,
			name: 'E',
			id: enemy_id,
			width: enemy_w,
			height: enemy_h,
			color: enemy_color,
		}
		enemyList.push(enemy);
	}
	this.generate_enemy_random = function(){
		var x = Math.random() * canvas_width;
		var y = Math.random() * canvas_height;
		var width = 10 + Math.random() * 30; // between 10 and 30
		var height = 10 + Math.random() * 30; // between 10 and 30
		var id = "E"+Math.random();
		var dir_x = 5 + Math.random() * 5;
		var dir_y = 5 + Math.random() * 5;
		var color = "red"
		self.generate_enemy(id, x, y, dir_x, dir_y, width, height, color);			
	}
	
	this.generate_food = function(id, x, y, dir_x, dir_y, w, h, color){
		var food_id = id;
		var food_x = x;
		var food_y = y;
		var food_dir_x = dir_x;
		var food_dir_y = dir_y;
		var food_w = w;
		var food_h = h;
		var food_color = color;			
		
		var food = {
			x: food_x,
			dir_x: food_dir_x,
			y: food_y,
			dir_y: food_dir_y,
			name: 'F',
			id: food_id,
			width: food_w,
			height: food_h,
			color: food_color,
		}
		foodList.push(food);
	}
	this.generate_food_random = function(){
		var x = Math.random() * canvas_width;
		var y = Math.random() * canvas_height;
		var width = 10;
		var height = 10;
		var id = "E"+Math.random();
		var dir_x = 0;
		var dir_y = 0;
		var color = "orange"
		self.generate_food(id, x, y, dir_x, dir_y, width, height, color);
	}
	
	this.generate_bullet = function(id, x, y, dir_x, dir_y, w, h, color){
		var bullet_id = id;
		var bullet_x = x;
		var bullet_y = y;
		var bullet_dir_x = dir_x;
		var bullet_dir_y = dir_y;
		var bullet_w = w;
		var bullet_h = h;
		var bullet_color = color;			
		
		var bullet = {
			x: bullet_x,
			dir_x: bullet_dir_x,
			y: bullet_y,
			dir_y: bullet_dir_y,
			name: 'B',
			id: bullet_id,
			width: bullet_w,
			height: bullet_h,
			color: bullet_color,
		}
		bulletList.push(bullet);
	}
	this.generate_bullet_random = function(){
		var x = player.x;
		var y = player.y;
		var width = 10;
		var height = 10;
		var id = "B"+Math.random();
		var angle = Math.random() * 360;
		var dir_x = 0;
		var dir_y = -10;
		var color = "white"
		self.generate_bullet(id, x, y, dir_x, dir_y, width, height, color);
	}
	
	this.update = function(){
		ctx.clearRect(0,0, canvas_width, canvas_height);
		
		count_frame++;
		score++;
		
		if(count_frame == 100){
			count_frame = 0;
			self.generate_enemy_random();
			self.generate_food_random();
		}
		if(count_frame % 10 == 0){
			self.generate_bullet_random();
		}
		
		for(var i in enemyList){
			self.update_entity(enemyList[i]);
			var collision = self.test_collision_entities(player, enemyList[i]);
			if(collision){	
				collision_width_enemy = true;
				//console.warn('collision_width_enemy', collision_width_enemy);	
			} 
		}
		for(var i in foodList){
			self.update_entity(foodList[i]);
			var collision = self.test_collision_entities(player, foodList[i]);
			if(collision){
				collision_width_food = true;
				delete foodList[i];
				//console.warn('collision_width_food', collision_width_food);	
			} 
		}
		for(var i in bulletList){
			self.update_entity(bulletList[i]);
			for(var j in enemyList){					
				var collision = self.test_collision_entities(bulletList[i], enemyList[j]);
				if(collision){
					delete bulletList[i];
					delete enemyList[j];
				} 
				break;
			}
		}
		
		if(count_frame % 4 == 0){
			if(collision_width_enemy){						
				//console.warn('collision_width_enemy', count_frame, collision_width_enemy);	
				collision_width_enemy = false;
				player.health--;
			}
			if(collision_width_food){						
				//console.warn('collision_width_food', count_frame, collision_width_food);	
				collision_width_food = false;
				player.health++;
				score = score + 10;
				if(player.health > 10){
					player.health = 10;
				}					
			}				
		}
		
		
		
		if(player.health <= 0){						
			var time_survived = (Date.now() - start_game)/1000;
			//console.warn("LOST ", time_survived);
			self.resetGame();
		}
				
		self.draw_entity(player);
		ctx.font = '12px Arial';
		ctx.fillStyle = "white";			
		ctx.fillText('Health: ' + player.health, 5, 20);
		ctx.fillText('Score: ' + score, 430, 20);
	}		
	this.update_entity = function(entity){
		self.update_entity_position(entity);
		self.draw_entity(entity);			
	}	
	this.update_entity_position = function(entity){		
		entity.x = entity.x + entity.dir_x;
		entity.y = entity.y + entity.dir_y;	

		if(entity.name != "B"){
			if(entity.x < 0 || entity.x > canvas_width){
				entity.dir_x = -entity.dir_x;
			}
			
			if(entity.y < 0 || entity.y > canvas_height){
				entity.dir_y = -entity.dir_y;
			}
		}
	}
	
	this.resetGame = function(){
		player.health = 10;	
		start_game = Date.now();
		count_frame = 0;
		score = 0;
		enemyList = [];
		foodList = [];
		bulletList = [];
		
		for(i=0; i<3; i++){
			self.generate_enemy_random();				
		}
		self.generate_food_random();
	}
	
	this.draw_entity = function(entity){
		ctx.fillStyle = entity.color;
		//ctx.fillText(entity.name, entity.x, entity.y);
		ctx.fillRect(entity.x-entity.width/2, entity.y-entity.height/2, entity.width, entity.height);
		ctx.fillStyle = "black";
	}
	
	this.getDistance_between_entities = function(entity01, entity02){
		var distance_x = entity01.x - entity02.x;
		var distance_y = entity01.y - entity02.y;
		return Math.sqrt(distance_x * distance_x + distance_y * distance_y);
	}
	
	this.test_collision_entities = function(entity01, entity02){
		var rect01 = {
			x: entity01.x - 10,
			y: entity01.y - 10,
			width: 20,
			height: 20,
		}
		var rect02 = {
			x: entity02.x - 15,
			y: entity02.y - 15,
			width: 30,
			height: 30,
		}
		return self.collision_entities(rect01, rect02);
	}
	this.collision_entities = function(rect01, rect02){	
		var cond01 = rect01.x <= rect02.x + rect02.width;
		var cond02 = rect01.y <= rect02.y + rect02.height;
		var cond03 = rect02.x <= rect01.x + rect01.width;
		var cond04 = rect02.y <= rect01.y + rect01.height;
		
		return cond01 && cond02 && cond03 && cond04;
	}

	this.move_player_mouse = function(){
		document.onmousemove = function(mouse){
			var left = document.getElementById('myCanvas').getBoundingClientRect().left;
			var top = document.getElementById('myCanvas').getBoundingClientRect().top;
			
			var mouse_x = mouse.clientX - left;
			var mouse_y = mouse.clientY - top;
			
			if(mouse_x < player.width/2){									
				mouse_x = player.width/2;
			}
			if(mouse_y < player.height/2){									
				mouse_y = player.height/2;
			}
			if(mouse_x > canvas_width - player.width/2){									
				mouse_x = canvas_width - player.width/2;
			}
			if(mouse_y > canvas_height - player.height/2){									
				mouse_y = canvas_height - player.height/2;
			}
			
			player.x = mouse_x;
			player.y = mouse_y;
		}
	}
}

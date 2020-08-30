function cardGame(title){
    var self = this;	
	var cards = $('.mycard');
	var game = new MixandMatch(100, cards);
	var nr = ['01', '02', '03', '04', '05', '06', '07', '08'];
	var k = -1;
    
    this.ready = function(){
		
		self.main_structure(title, nr);
		
		$(".overlay_text_small").click(function(){
			game.startGame();
			game.suffleCards($('.mycard'));			
		});	
			
		
		$('body').on('click', '.mycard', function (e) {
			game.flipCard($(e.currentTarget));
		});
    }
	
	this.main_structure = function(title, nr){
		$('#'+title).append('<div class="card_title text-center"><h1 class="text-uppercase">Halloween card game</h1></div>');
		$('#'+title).append('<div id="timer" class="card_info text-center"><h2>Timer: <span>100</span></h2></div>');
		$('#'+title).append('<div id="flips" class="card_info text-center"><h2>Flips: <span>0</span></h2></div>');
		
		$('#'+title).append('<div class="card_container"></div>');
		for (i = 0; i < 4; i++){
			$('#'+title+' .card_container').append('<div class="card_row text-center"></div>');
			for (j = 0; j < 4; j++){
				$('.card_row').last().append('<div class="mycard"><div class="card-face card-back"></div><div class="card-face card-front"></div></div>');
				
				$('.card_row').last().find('.mycard').last().find('.card-back').append('<img src="img/Cobweb.png" class="cob-web cob-web-top-left">');
				$('.card_row').last().find('.mycard').last().find('.card-back').append('<img src="img/Cobweb.png" class="cob-web cob-web-top-right">');
				$('.card_row').last().find('.mycard').last().find('.card-back').append('<img src="img/Cobweb.png" class="cob-web cob-web-bottom-left">');
				$('.card_row').last().find('.mycard').last().find('.card-back').append('<img src="img/Cobweb.png" class="cob-web cob-web-bottom-right">');
				$('.card_row').last().find('.mycard').last().find('.card-back').append('<img src="img/Spider.png" class="spider">');
				
				$('.card_row').last().find('.mycard').last().find('.card-front').append('<img src="img/CobwebGrey.png" class="cob-web cob-web-top-left">');	
				$('.card_row').last().find('.mycard').last().find('.card-front').append('<img src="img/CobwebGrey.png" class="cob-web cob-web-top-right">');	
				$('.card_row').last().find('.mycard').last().find('.card-front').append('<img src="img/CobwebGrey.png" class="cob-web cob-web-bottom-left">');	
				$('.card_row').last().find('.mycard').last().find('.card-front').append('<img src="img/CobwebGrey.png" class="cob-web cob-web-bottom-right">');	
				k = k + 1;
				if(k > 7){k = 0;}
				$('.card_row').last().find('.mycard').last().find('.card-front').append('<img src="img/img'+nr[k]+'.png" class="spider">');
			}			
		}
	}
	 
}

function MixandMatch(totalTime, cards) {
	var self = this;
	
	this.totaTime = totalTime;
	this.totalClicks = 0;
	this.timeRemaining = totalTime;
	this.timer = $('#timer span');
	this.flips = $('#flips span');
	var downloadTimer;	
	
	this.startGame = function(){
		$('#overlay').addClass('closed');
		$(".overlay_text_small").parent().find('h1').text('Game over');
		
		$('#flips span').html('0');
		
		self.timeRemaining = totalTime;
		$('#timer span').html(totalTime);
		
		timerGame();
	};
	
	function timerGame(){		
		
		downloadTimer = setInterval(function(){
		  self.timeRemaining = self.timeRemaining - 1;
		  $('#timer span').html(self.timeRemaining);
		  if(self.timeRemaining <= 0){
			clearInterval(downloadTimer);
			LoseGame();
		  }
		}, 1000);
	}
	
	this.flipCard = function(card){
		if(canflipCard(card)){	

			switch($('.clicked').length) {
				case 0:
					card.addClass('clicked');
					break;				
				case 1:
					card.addClass('clicked');
					
					$.each( $('.clicked'), function( i, div ) {
						$(div).find( ".card-front img.spider" ).attr('class', 'spider img_clicked' + i)
					} );
					
					var first = $('.clicked').find(".card-front img.img_clicked0").attr('src');
					var second= $('.clicked').find(".card-front img.img_clicked1").attr('src');
					
					setTimeout(function(){ 
						if(first == second){
							$('.clicked').addClass('identical');
							$('.clicked').removeClass('clicked');
							WinGame();
						} else {
							$('.clicked').removeClass('clicked');
						}	
					}, 1000);					
					
					
					break;				
			}		
			
		
			self.totalClicks = self.totalClicks + 1;
			$('#flips span').html(self.totalClicks);
		}		
	};
	
	function canflipCard(card){
		if(card.hasClass('clicked')){
			return false;
		} else {			
			return true;
		}		
	}
	
	function WinGame(){
		if($('.identical').length == 16){
			$('#overlay').removeClass('closed');
			$('#overlay h1').text('Congratulation');
			clearInterval(downloadTimer);
		}
	}
	
	function LoseGame(){
		$('#overlay').removeClass('closed');
		$('#overlay h1').text('You lost')
	}
	
	this.suffleCards = function(cards){
		cards.removeClass('identical');
		
		var x, j;
		
		for (var i = cards.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));			
			x = cards.eq(i).html();
			cards.eq(i).html(cards.eq(j).html());
			cards.eq(j).html(x);
		}
		
		return cards;
	}
}
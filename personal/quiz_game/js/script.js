function quizGame(title){
	var self = this;
	var game = new quizMatch(title);
	
	this.ready = function(){
		self.main_structure(title);
		
		$('body').on('click', '.button-green', function (e) {
			var question_nr = 0;
			var result = [];
			var score = 0;
			var downloadTimer;
			var timeRemaining = totalTime;
			game.startGame(title);	
		});
		
	}	
	
	this.main_structure = function(title){		
		$('#'+title).append('<div class="quiz_title text-center"><h1 class="text-uppercase">Quiz game</h1></div>');
		$('#'+title).append('<div class="quiz_info text-center"></div>');
		$('#'+title+' .quiz_info').append('<div class="timer"><h2>Timer: <span>'+totalTime+'</span></h2></div><div class="instructions"><p>Instructions will come here</p></div>');		
		$('#'+title).append('<div class="quiz_container"><button class="button-green">Start</button></div>');
	}	
}

function quizMatch(title){
	var self = this;	
	var question_nr = 0;
	var result = [];
	var score = 0;
	var downloadTimer;
	var timeRemaining = totalTime;
	
	this.startGame = function(title){
		question_nr = 0;
		result = [];
		score = 0;
		downloadTimer;
		timeRemaining = totalTime;
			
		$('#'+title+' .quiz_container').empty();
		$('#'+title+' .quiz_container').append('<div class="quiz_question text-center"><h3>' + questions[0].question + '</h3></div>');
		$('#'+title+' .quiz_container').append('<div class="row"></div>');
		for(var i=0; i<4; i++){
			$('#'+title+' .quiz_container .row').append('<div class="col-sm-6"><div class="box_answer">'+ questions[0].answers[i] +'</div></div>');
		}
		
		//$('body').on('click', '.box_answer', function (e) {	
		$('#'+title).off('click').on('click', '.box_answer', function (e) {
			self.box_answer_click($(this));
		});
		
		timerGame(title);
	};
	
	function timerGame(){	
		downloadTimer = setInterval(function(){
			timeRemaining = timeRemaining - 1;
			$('#'+title).addClass('oana-found');
			$('#'+title).find('.timer span').html(timeRemaining);
			if(timeRemaining <= 0){
				clearInterval(downloadTimer);
				self.finish_quiz();
			}
		}, 1000);
	}
	
	this.box_answer_click = function(box_answer){
		box_answer.addClass('clicked');
		self.verify_answer(box_answer[0].innerHTML, question_nr);
		question_nr = question_nr + 1;
		if(question_nr < questions.length){			
			self.next_question(question_nr);
		} else {
			self.finish_quiz();
		}
		
	}
	
	this.verify_answer = function(box_answer, nr){	
		if(box_answer == questions[nr].solution){
			result.push(box_answer);
			score = score + 1;
		} else {
			result.push(box_answer);
		}
	}
	
	this.next_question = function(nr){		
		$('#'+title+' .quiz_container').empty();
		$('#'+title+' .quiz_container').append('<div class="quiz_question text-center"><h3>' + questions[nr].question + '</h3></div>');
		$('#'+title+' .quiz_container').append('<div class="row"></div>');
		for(var i=0; i<4; i++){
			$('#'+title+' .quiz_container .row').append('<div class="col-sm-6"><div class="box_answer">'+ questions[nr].answers[i] +'</div></div>');
		}		
	}
	
	this.finish_quiz = function(){
		$('#'+title+' .quiz_container').empty();
		clearInterval(downloadTimer);
		
		var percent = (score/questions.length)*100;		
		if(percent % 1 != 0){
			percent = percent.toFixed(2);
		} 
		if(percent < 25){
			var result_text = "very bad";
		} else if(percent >= 25 && percent < 50){
			var result_text = "poor";
		} else if(percent >= 50 && percent < 75){
			var result_text = "good";
		} else if(percent >= 75){
			var result_text = "perfect";
		}
		
		
		$('#'+title+' .quiz_container').append('<div class="quiz_question text-center"><h3>Quiz result - ' + result_text + '</h3></div><div class="quiz_result row"><div class="col-sm-offset-3 col-sm-6 col-md-offset-2 col-md-8 quiz_result_table"></div></div>');
		
		$('#'+title+' .quiz_result_table').append('<h3 class="text-center">Score: '+ score +'/'+ questions.length +' ('+ percent +'%)</h3>')
		$('#'+title+' .quiz_result_table').append('<table><tr><th>Question</th><th>Your answer</th><th>Answer</th></tr></table>');
		for (var i in questions){
			if(typeof result[i] != "undefined"){
				$('#'+title+' .quiz_result_table table').append('<tr><td>' + questions[i].question + '</td><td>' + result[i] + '</td><td>' + questions[i].solution + '</td></tr>');
			} else {
				$('#'+title+' .quiz_result_table table').append('<tr><td>' + questions[i].question + '</td><td>-</td><td>' + questions[i].solution + '</td></tr>');
			}			
		}
		$('#'+title+' .quiz_container').append('<button class="button-green">Try again</button>');	
		
	}	
}
$(document).ready(function(){
	$("#irregular_verbs_game_german").append('<div class="row"><div class="col-sm-12 title_box"><h1 class="text-center text-uppercase">German</h1></div></div>');
	$("#irregular_verbs_game_german").append('<div class="row"><div class="col-sm-12"><div class="quiz_verb_box"><ul class="quiz_verb_group"><li><span>Beginner</span></li><li><span>Advanced</span></li></ul></div></div></div>');
	$('body').off('click').on('click', '.quiz_verb_group li', function () {
		var game;	
		switch($(this).text()) {
			case 'Beginner':
			  	game = new irregular_verbs_game("irregular_verbs_game_german", "beginner");
				game.ready();
			  	break;
			case 'Advanced':
			  	game = new irregular_verbs_game("irregular_verbs_game_german", "advanced");
				game.ready();
				break;
		}
		
	});	
});

function irregular_verbs_game(id, level){
	var self = this;
	var title = "German";	
	this.ready = function(){	
		self.main_structure(id, level);		
		$('body').off('click').on('click', '.quiz_verb_group li', function (e) {	
			var quiz = new quiz_game("irregular_verbs_game_german", level);
			quiz.ready($(e.currentTarget));	
		});
	}	
	this.main_structure = function(id, level){
		$("#"+id).empty();
		$("#"+id).append('<div class="row"><div class="col-sm-12 title_box"><h1 class="text-center text-uppercase">'+title+'</h1></div></div>');	
		$("#"+id).append('<div class="quiz_verb_group_container"><div class="row"><div class="col-sm-12"><div class="quiz_verb_box"><ul class="quiz_verb_group"></ul></div></div></div></div>');	
		switch(level) {
			case 'beginner':
				for(var i=1; i<=5; i++){
					$("#"+id+" .quiz_verb_group").append('<li>Level'+i+'</li>');
				}
			  	break;
			case 'advanced':
				for(var i=1; i<=31; i++){
					$("#"+id+" .quiz_verb_group").append('<li>Level'+i+'</li>');
				}
				break;
		}
	}
}

function quiz_game(id, level){
	var self = this;
	var question_nr = 0;
	var verb_group = [];
	var result_answers = [];
	var score = 0;
	
	this.ready = function(elem){		
		self.generate_group_quiz(elem);
	}
	
	this.generate_group_quiz = function(elem){		
		var str = elem.text();
		var verb_category = str.split('Level')[1];		
		verb_group = [];	
		switch(level) {
			case 'beginner':
				for(var i in verbs_beginner){
					if(verbs_beginner[i].category == verb_category){
						verb_group.push(verbs_beginner[i]);
					}				
				}
				self.generate_box_answer(verb_group);	
			  	break;
			case 'advanced':
				for(var i in verbs){
					if(verbs[i].category == verb_category){
						verb_group.push(verbs[i]);
					}				
				}
				self.generate_box_answer(verb_group);	
				break;
		}
	}

	this.generate_box_answer = function(verb){
		if(verb.length > 0){
			$("#"+ id + ' .quiz_verb_group_container').empty();	

			$('#'+id+' .quiz_verb_group_container').append('<div class="row"><div id="box_answer_container" class="col-sm-12 text-center"></div></div>');
			$('#box_answer_container').append('<div id="first_form" class="box_answer"><p>'+verb[0].first_form+'</p></div>');
			$('#box_answer_container').append('<div id="second_form" class="box_answer"><input type="text"></input></div>');
			$('#box_answer_container').append('<div id="aux_form" class="box_answer"><select><option value="" selected disabled hidden>haben/sein</option><option value="haben">haben</option><option value="sein">sein</option></select></div>');
			$('#box_answer_container').append('<div id="third_form" class="box_answer"><input type="text"></input></div>');			
			$('#box_answer_container').append('<div id="translate" class="box_answer"><input type="text"></input></div>');
			
			$('#'+id+' .quiz_verb_group_container').append('<div class="row"><div class="col-sm-12"><button class="button_green" id="check">Check</button></div></div>');
			$('#'+id+' .quiz_verb_group_container').append('<div class="row"><div id="result" class="col-sm-12 text-center"></div>');
			
			$('#'+id).off('click').on('click', '#check', function (e) {
				self.box_answer_click();
			});
		
		} else {
			alert('In progress');
		}
	}
	
	this.box_answer_click = function(box_answer){			
		self.verify_answer(question_nr);
	}
	
	this.verify_answer = function(nr){
		var myform01 = $('#second_form input').val().toLowerCase();
		var myform02 = $('#third_form input').val().toLowerCase();
		var myform03 = $('#translate input').val().toLowerCase();
		var myform04 = $('#aux_form select').val() ? $('#aux_form select').val().toLowerCase() : '';
		
		var form01 = verb_group[nr].second_form;
		var form02 = verb_group[nr].third_form;
		var translate = verb_group[nr].translate;
		var form03 = translate.split(", ");	
		var form04 = verb_group[nr].aux;	
		var myanswer = {};
		
		if(form01 != myform01 || form02 != myform02 || !form03.includes(myform03) || form04 != myform04){
			if(form01 != myform01 && form02 != myform02 && !form03.includes(myform03) && form04 != myform04){
				$('#'+id+' #result').append('<p>Both forms, the auxilary and the translation was wrong</p>');
				$('#second_form').append('<p class="text-center">'+form01+'</p>');
				$('#third_form').append('<p class="text-center">'+form02+'</p>');
				$('#translate').append('<p class="text-center">'+translate+'</p>');
				$('#aux_form').append('<p class="text-center">'+form04+'</p>');
			} else {
				if(form01 != myform01){
					$('#'+id+' #result').append('<p>Second form was wrong</p>');
					$('#second_form').append('<p class="text-center">'+form01+'</p>');
				}
				if(form02 != myform02){
					$('#'+id+' #result').append('<p>Third form was wrong</p>');
					$('#third_form').append('<p class="text-center">'+form02+'</p>');
				}
				if(!form03.includes(myform03)){
					$('#'+id+' #result').append('<p>Translation was wrong</p>');
					$('#translate').append('<p class="text-center">'+translate+'</p>');
				}
				if(form04 != myform04){
					$('#'+id+' #result').append('<p>Auxiliary verb was wrong</p>');
					$('#aux_form').append('<p class="text-center">'+form04+'</p>');
				}
			}			
			
			myanswer.form00 = verb_group[nr].first_form;
			myanswer.form01 = verb_group[nr].second_form;
			myanswer.form02 = verb_group[nr].third_form;
			myanswer.form03 = verb_group[nr].translate;
			myanswer.form04 = verb_group[nr].aux;
			
			if(myform01 != ""){
				myanswer.myform01 = myform01;
			} else {
				myanswer.myform01 = "-";
			}
			if(myform02 != ""){
				myanswer.myform02 = myform02;
			} else {
				myanswer.myform02 = "-";
			}
			if(myform03 != ""){
				myanswer.myform03 = myform03;
			} else {
				myanswer.myform03 = "-";
			}
			if(myform04 != ""){
				myanswer.myform04 = myform04;
			} else {
				myanswer.myform04 = "-";
			}			
			result_answers.push(myanswer);
		} else {
			$('#'+id+' #result').append('<p>Corect answer!</p>');			
			score++;
		}
		
		$('#check').parent().parent().remove();
		$('#'+id+' .quiz_verb_group_container').append('<div class="row"><div class="col-sm-12"><button class="button_green" id="next_question">Next question</button></div></div>');
		
		$('body').off('click').on('click', '#next_question', function (e) {	
			question_nr = question_nr + 1;
			if(question_nr < verb_group.length){			
				self.next_question(question_nr);
			} else {
				self.finish_quiz();
			}
		});
	}
	
	this.next_question = function(nr){	
		$('#'+id+' .quiz_verb_group_container').empty();

		$('#'+id+' .quiz_verb_group_container').append('<div class="row"><div id="box_answer_container" class="col-sm-12 text-center"></div></div>');
		$('#box_answer_container').append('<div id="first_form" class="box_answer"><p>'+verb_group[nr].first_form+'</p></div>');
		$('#box_answer_container').append('<div id="second_form" class="box_answer"><input type="text"></input></div>');
		$('#box_answer_container').append('<div id="aux_form" class="box_answer"><select><option value="" selected disabled hidden>haben/sein</option><option value="haben">haben</option><option value="sein">sein</option></select></div>');
		$('#box_answer_container').append('<div id="third_form" class="box_answer"><input type="text"></input></div>');			
		$('#box_answer_container').append('<div id="translate" class="box_answer"><input type="text"></input></div>');

		$('#'+id+' .quiz_verb_group_container').append('<div class="row"><div class="col-sm-12"><button class="button_green" id="check">Check</button></div></div>');
		$('#'+id+' .quiz_verb_group_container').append('<div class="row"><div id="result" class="col-sm-12 text-center"></div>');
	}
	
	this.finish_quiz = function(){
		//console.warn('finish_quiz', result_answers, verb_group.length, score);
		$('#'+id+' .quiz_verb_group_container').empty();
		$('#'+id+' .quiz_verb_group_container').append('<h2 class="text-center">Finish</h2><br>');
		$('#'+id+' .quiz_verb_group_container').append('<h3 class="text-center">Your score: ' + score + ' puncte din ' + verb_group.length + '</h3>');
		var percent = "";
		percent = last_decimals((score/verb_group.length)*100);
		$('#'+id+' .quiz_verb_group_container').append('<h3 class="text-center">('+percent+'%)</h3><br>');
		
		if(result_answers != []){
			for(var i in result_answers){
				$('#'+id+' .quiz_verb_group_container').append('<p><b>Correct answer:</b></p>');
				$('#'+id+' .quiz_verb_group_container').append('<p>'+result_answers[i].form00+' / '+result_answers[i].form01+' / '+result_answers[i].form02+' / '+result_answers[i].form03+' (' +result_answers[i].form04+ ')</p>');
				$('#'+id+' .quiz_verb_group_container').append('<p><b>Your answer:</b></p>');
				$('#'+id+' .quiz_verb_group_container').append('<p>'+result_answers[i].form00+' / '+result_answers[i].myform01+' / '+result_answers[i].myform02+' / '+result_answers[i].myform03+' (' +result_answers[i].myform04+ ')</p>');
				$('#'+id+' .quiz_verb_group_container').append('<hr>');
			}
		}
		
		$('#'+id+' .quiz_verb_group_container').append('<div class="row"><div class="col-sm-12"><button class="button_green" id="try_again">Try again</button></div></div>');
			
		$('#'+id).off('click').on('click', '#try_again', function (e) {
			console.warn('try_again');
			var game = new irregular_verbs_game("irregular_verbs_game_german");
			game.ready();	
		});
	}
	
	function last_decimals(nr){
		var str = nr.toString();
		var n = str.indexOf(".");
		var res = str.slice(0, n+3);
		return res;
	}
};
$(document).ready(function(){
	var game = new irregular_verbs_game("irregular_verbs_game_english");
	game.ready();
});

function irregular_verbs_game(id){
	var self = this;
    var title = "English";	
	this.ready = function(){	
		self.main_structure(id);		
		$('body').off('click').on('click', '.quiz_verb_group li', function (e) {	
			var quiz = new quiz_game("irregular_verbs_game_english");	
			quiz.ready($(e.currentTarget));	
		});
	}	
	this.main_structure = function(id){
		$("#"+id).empty();
		$("#"+id).append('<div class="row"><div class="col-sm-12 title_box"><h1 class="text-center text-uppercase">'+title+'</h1></div></div>');	
		$("#"+id).append('<div class="quiz_verb_group_container"><div class="row"><div class="col-sm-12"><div class="quiz_verb_box"><ul class="quiz_verb_group"><li>A, B</li><li>C, D</li><li>E, F</li><li>G, H</li><li>K, L</li><li>M - Q</li><li>R</li><li>S</li><li>T - W</li></ul><div></div></div></div>');	
	}
}

function quiz_game(id){
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
		var letters = str.split(", ");		
		verb_group = [];
		for(var i in letters){			
			for(var j in verbs){
				if(verbs[j].id == letters[i]){
					verb_group.push(verbs[j]);
				}				
			}
		}
		
		if(verb_group.length > 0){
			$("#"+ id + ' .quiz_verb_group_container').empty();	
			$('#'+id+' .quiz_verb_group_container').append('<div class="row"><div id="first_form" class="col-sm-3 box_answer"><p class="text-center">'+verb_group[0].first_form+'</p></div><div id="second_form" class="col-sm-3 box_answer"><input class="text-center" type="text"></input></div><div id="third_form" class="col-sm-3 box_answer"><input class="text-center" type="text"></input></div><div id="translate" class="col-sm-3 box_answer"><input class="text-center" type="text"></input></div></div>');
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
		
		var form01 = verb_group[nr].second_form;
		var form02 = verb_group[nr].third_form;
		var translate = verb_group[nr].translate;
		var form03 = translate.split(", ");		
		var myanswer = {};
		
		if(form01 != myform01 || form02 != myform02 || !form03.includes(myform03)){
			if(form01 != myform01 && form02 != myform02){
				$('#'+id+' #result').append('<p>Ambele forme si traducerea sunt gresite</p>');
				$('#second_form').append('<p class="text-center">'+form01+'</p>');
				$('#third_form').append('<p class="text-center">'+form02+'</p>');
				$('#translate').append('<p class="text-center">'+translate+'</p>');
			} else {
				if(form01 != myform01){
					$('#'+id+' #result').append('<p>Forma a doua e gresite</p>');
					$('#second_form').append('<p class="text-center">'+form01+'</p>');
				}
				if(form02 != myform02){
					$('#'+id+' #result').append('<p>Forma a treia e gresite</p>');
					$('#third_form').append('<p class="text-center">'+form02+'</p>');
				}
				if(!form03.includes(myform03)){
					$('#'+id+' #result').append('<p>Traducerea e gresite</p>');
					$('#translate').append('<p class="text-center">'+translate+'</p>');
				}
			}			
			
			myanswer.form00 = verb_group[nr].first_form;
			myanswer.form01 = verb_group[nr].second_form;
			myanswer.form02 = verb_group[nr].third_form;
			myanswer.form03 = verb_group[nr].translate;
			
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
			result_answers.push(myanswer);
		} else {
			$('#'+id+' #result').append('<p>Raspuns corect!</p>');			
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
		$('#'+id+' .quiz_verb_group_container').append('<div class="row"><div id="first_form" class="col-sm-3 box_answer"><p class="text-center">'+verb_group[nr].first_form+'</p></div><div id="second_form" class="col-sm-3 box_answer"><input class="text-center" type="text"></input></div><div id="third_form" class="col-sm-3 box_answer"><input class="text-center" type="text"></input></div><div id="translate" class="col-sm-3 box_answer"><input class="text-center" type="text"></input></div></div>');
		$('#'+id+' .quiz_verb_group_container').append('<div class="row"><div class="col-sm-12"><button class="button_green" id="check">Check</button></div></div>');
		$('#'+id+' .quiz_verb_group_container').append('<div class="row"><div id="result" class="col-sm-12 text-center"></div>');		
	}
	
	this.finish_quiz = function(){
		$('#'+id+' .quiz_verb_group_container').empty();
		$('#'+id+' .quiz_verb_group_container').append('<h2 class="text-center">Finish</h2><br>');
		$('#'+id+' .quiz_verb_group_container').append('<h3 class="text-center">Your score: ' + score + ' puncte din ' + verb_group.length + '</h3>');
		var percent = "";
		percent = last_decimals((score/verb_group.length)*100);
		$('#'+id+' .quiz_verb_group_container').append('<h3 class="text-center">('+percent+'%)</h3><br>');
		
		if(result_answers != []){
			for(var i in result_answers){
				$('#'+id+' .quiz_verb_group_container').append('<p><b>Varianta corecta:</b></p>');
				$('#'+id+' .quiz_verb_group_container').append('<p>'+result_answers[i].form00+' / '+result_answers[i].form01+' / '+result_answers[i].form02+' / '+result_answers[i].form03+'</p>');
				$('#'+id+' .quiz_verb_group_container').append('<p><b>Varianta ta:</b></p>');
				$('#'+id+' .quiz_verb_group_container').append('<p>'+result_answers[i].form00+' / '+result_answers[i].myform01+' / '+result_answers[i].myform02+' / '+result_answers[i].myform03+'</p>');
				$('#'+id+' .quiz_verb_group_container').append('<hr>');
			}
		}
		
		$('#'+id+' .quiz_verb_group_container').append('<div class="row"><div class="col-sm-12"><button class="button_green" id="try_again">Try again</button></div></div>');
			
		$('#'+id).off('click').on('click', '#try_again', function (e) {
			var game = new irregular_verbs_game("irregular_verbs_game_english");
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
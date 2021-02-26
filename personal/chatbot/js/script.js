$(document).ready(function(){
	var site = new website();
	site.ready();
});

function website(){
	var self = this;	
	var chatbot_name = "Oana";
	var titles = [];
	var errors = 0
	
	this.ready = function(){
		footer_time();
		titles = get_title_knowledgeBase();
		
		$('body').off('click', '#chatbot_button').on('click', '#chatbot_button', function () {
			var text = $('#chatbot_input').val();
			$(".chatbot_input").prop('disabled', true);  
			$("#chatbot_button").prop('disabled', true); 
			self.chat_send_text(text);
		});
		
		window.addEventListener('keydown', (e) => {
			if(e.keyCode == 13){
				var text = $('#chatbot_input').val();
				$(".chatbot_input").prop('disabled', true);  
				$("#chatbot_button").prop('disabled', true); 
				self.chat_send_text(text);
			}			
		})	

		$('body').off('click', '.chatbot_button_options').on('click', '.chatbot_button_options', function () {
			var option = $(this).attr('option').replace(/_/g, ' ')
			var search_word = $(this).attr('result');			
			//console.log('chatbot_button_options', option);
			$(".chatbot_input").prop('disabled', false);  
			$("#chatbot_button").prop('disabled', false); 
			wait_reply(3).then(function(data) {			
				write_reply(option, search_word);
			});	
		});
	}
	
	this.chat_send_text = function(text){	
		$('input').blur();
		$('#chatbot_input').val('');
		$('#chatbot_textarea').append('<div class="text_chat"><div class="text_me"><p><b>Me:</b></p><p>'+text+'</p></div><div>');
		wait_reply(6).then(function(data) {			
			write_reply(text);
		});	
	}
	
	function get_title_knowledgeBase(){		
		for(var i in knowledgeBase){
			titles.push(knowledgeBase[i][0][0]);
		}
		return titles;
	}
		
	function get_bigrams(string){
		var s = string.toLowerCase();
		var v = [];	
		var res = "";		
		
		for (var i=0; i<s.length-1; i++){		
			var res = s[i].concat(s[i+1]);
			v.push(res);
		}
		
		return v
	}
	
	function string_similarity(str1, str2, a){
		var union = 0;
		var count = 0;
		var pairs1 = [];
		var pairs2 = [];
		
		if (str1.length > 0 && str2.length > 0){
			pairs1 = get_bigrams(str1);
			pairs2 = get_bigrams(str2);
			
			union = pairs1.length + pairs2.length;
			
			for(var i in pairs1){
				for(var j in pairs2){
					if(pairs1[i] == pairs2[j]){
						count++;
					}
				}
			}
			
			if (count > 0){
				return ((2 * count) / union);
			}
            
		}
		return 0;
	}
	
	this.refreshSearch = function(search){
		var title = "";
		var results = [];
		var myresult_title = "";
		var myresult_answers = [];
		var myresult_answer = "";
		var t = 0;
		
		for(var i in titles){
			title = titles[i];
			relevance = string_similarity(search, title);
			obj = {title: title, relevance: relevance, i: i};
			results.push(obj);
		}
		
		results.sort(function(a, b) {
			return parseFloat(a.relevance) - parseFloat(b.relevance);
		});
		//console.warn("answers", results);
		if(results[results.length-1].relevance > 0.5){
			myresult_title = results[results.length-1].title;
			t = results[results.length-1].i;
			myresult_answers = knowledgeBase[t][1];
			myresult_answer = myresult_answers[Math.floor(Math.random() * myresult_answers.length)];
			
			//console.warn("myresult_answer", results, myresult_answers, myresult_answer);
		} else {
			errors++
			myresult_answer = "I don't understand.";
			if(errors == 1){
				myresult_answer = "I don't understand.///If there is no typo then it's not in my knowledge base.///I'm sorry I'm still a very simple chatbot.";
			} else if(errors == 2){
				myresult_answer = "I STILL don't understand.///Maybe it's better to speak to Oana direcly.";
			}
		}
		
		return myresult_answer;
	}
	
	function wait_reply(x){
		return new Promise(function(resolve, reject){			
			$('#chatbot_textarea').append('<div id="wait_container" class="text_chat"><div class="text_oana"><p><b>Oana:</b></p><p id="wait"></p></div></div>');
			$("#chatbot_textarea").scrollTop($("#chatbot_textarea")[0].scrollHeight);
			
			var i = 0;
			var j = 0;
			var Wait = setInterval(function() {
				i = ++i % 4;											
				$("#wait").html("Typing"+Array(i+1).join("."));
				
				j++	
				if(j > x){
					clearInterval(Wait);					
					$("#wait_container").remove();
					resolve(true);
				}
			}, 300);
		});	
	}

	function write_reply(search, search_word){
		return new Promise(function(resolve, reject){			
			var chatbot_text = self.refreshSearch(search)
			var text_list_found = chatbot_text.includes("///");
			if(text_list_found){
				var text_list = chatbot_text.split('///')
				for(var i in text_list){
					if(i == 0){	
						$('#chatbot_textarea').append('<div class="text_chat"><div class="text_oana"><p><b>'+chatbot_name+':</b></p><p>'+text_list[i]+'</p></div><div>');	
					} else {
						$('#chatbot_textarea').append('<div class="text_chat"><div class="text_oana"><p>'+text_list[i]+'</p></div><div>');
					}					
				}
				check_special = text_list[text_list.length-1];
			} else {
				if(typeof search_word != "undefined" && search_word != ""){	
					var q = search_word.split(' ').join('+')
					var google_search = "https://google.com/search?q="+q;
					$('#chatbot_textarea').append('<div class="text_chat"><div class="text_oana"><p><b>'+chatbot_name+':</b></p><p>'+chatbot_text+' <a target="_blank" href="'+google_search+'">'+q+'</a></p></div><div>');
				} else {
					$('#chatbot_textarea').append('<div class="text_chat"><div class="text_oana"><p><b>'+chatbot_name+':</b></p><p>'+chatbot_text+'</p></div><div>');
				}				
				
				check_special = chatbot_text;
			}
			$(".chatbot_input").prop('disabled', false);  
			$("#chatbot_button").prop('disabled', false);	
			$("#chatbot_textarea").scrollTop($("#chatbot_textarea")[0].scrollHeight);			

			if(typeof check_special != "undefined"){
				self.check_special_questions(check_special, search, search_word);
			}			
			
			var objDiv = document.getElementById("chatbot_textarea");
			objDiv.scrollTop = objDiv.scrollHeight;
			
			resolve(true);
		});
	}

	this.check_special_questions = function(question, search){
		var trigger_found = false;
		var trigger = "";
		for(var i in trigger_data){
			trigger_found = question.toLowerCase().includes(trigger_data[i].toLowerCase());
			//console.log(question, question.toLowerCase(), trigger_data[i], trigger_found);
			if(trigger_found){
				trigger = trigger_data[i];
				break;
			}
		}		
		
		if(trigger_found){
			//console.log('qqq', question, trigger, search);
			var chat_options = "";
			switch (trigger) {
				case "Would you like to know more about me and what I do?":
					chat_options = "<div option='talk_overview_yes' class='chatbot_button_options'>Yes</div><div option='talk_overview_no' class='chatbot_button_options'>No</div>"
					$(".chatbot_input").prop('disabled', true); 
					$("#chatbot_button").prop('disabled', true); 
					break;		
				case "Would you like to contact me?":
					chat_options = "<div option='talk_contact_yes' class='chatbot_button_options'>Yes</div><div option='talk_contact_no' class='chatbot_button_options'>No</div>"
					$(".chatbot_input").prop('disabled', true); 
					$("#chatbot_button").prop('disabled', true); 
					break;	
				case "Want me to search for you?":
					var search_list_questions = ["what is a ", "what is the ", "what is ", "what are ", "what's ", "what's a ", "what're "]
					var index_search = -1;
					var a
					for(var i in search_list_questions){
						index_search = search.indexOf(search_list_questions[i]);
						a = search_list_questions[i]
						//console.log('qqq', index_search, a)
						if(index_search != -1){
							index_search = search_list_questions[i].length							
							break;
						}
					}
					
					var obj_search = search.substring(index_search, search.length).replace(/[?=]/g, "");
					//console.log('obj_search', index_search, obj_search, a);
					chat_options = "<div option='talk_search_yes' class='chatbot_button_options' result='"+obj_search+"'>Yes</div><div option='talk_search_no' class='chatbot_button_options'>No</div>"
					$(".chatbot_input").prop('disabled', true); 
					$("#chatbot_button").prop('disabled', true); 
					break;	
			  }
			$('#chatbot_textarea').append('<div class="text_chat"><div class="text_oana"><p><b>'+chatbot_name+':</b></p><p>'+chat_options+'</p></div><div>');
			$("#chatbot_textarea").scrollTop($("#chatbot_textarea")[0].scrollHeight);
		} 
	}
	
	function footer_time(){
		var date = new Date();
		date = date.getFullYear();		
		$('#copyright_year').text(date);
	}
}

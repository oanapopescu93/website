$(document).ready(function(){
	var site = new website();
	site.ready();
});

function website(){
	var self = this;	
	var chatbot_name = "Oana";
	var titles = [];
	
	this.ready = function(){
		footer_time();
		var titles = get_title_knowledgeBase();
		
		$('body').off('click').on('click', '#chatbot_button', function () {
			var text = $('#chatbot_input').val();
			self.chat_send_text(text);
		});
	}
	
	this.chat_send_text = function(text){		
		$('#chatbot_textarea').append('<div class="text_chat"><div class="text_me"><p><b>Me:</b></p><p>'+text+'</p></div><div>');
		//wait_reply();
		$('#chatbot_textarea').append('<div class="text_chat"><div class="text_oana"><p><b>'+chatbot_name+':</b></p><p>'+self.refreshSearch()+'</p></div><div>');
		$('#chatbot_input').val('');
		var objDiv = document.getElementById("chatbot_textarea");
		objDiv.scrollTop = objDiv.scrollHeight;
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
	
	this.refreshSearch = function(){
		var search = $('#chatbot_input').val();	
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
		
		if(results[results.length-1].relevance > 0.6){
			myresult_title = results[results.length-1].title;
			t = results[results.length-1].i;
			myresult_answers = knowledgeBase[t][1];
			myresult_answer = myresult_answers[Math.floor(Math.random() * myresult_answers.length)];
			
			//console.warn("myresult_answer", results, myresult_answers, myresult_answer);
		} else {
			myresult_answer = "I don't know what to say.";
		}
		
		return myresult_answer;
	}
	
	function wait_reply(){
		if($('#wait_reply').length > 0){
			$('#wait_reply').remove();
		}
		
		$('#chatbot_textarea').append('<p id="wait"></p>');
		
		var i = 0;
		var j = 0;
		var Wait = setInterval(function() {
			i = ++i % 4;											
			$("#wait").html("Wait"+Array(i+1).join("."));
			
			j++	
			if(j > 6){
				clearInterval(Wait);
				
				if($('.error_reply').length == 0){
					//console.warn('error_reply1', $('.error_reply').length);
					$("#wait").html("'+chatbot_name+': Error, please try again.");
					$("#wait").attr('class', 'error_reply');
					$("#wait").attr('id', '');
				} else {
					//console.warn('error_reply2', $('.error_reply').length);					
					$("#wait").attr('class', 'error_reply');
					$("#wait").attr('id', '');
					$(".error_reply").last().html("'+chatbot_name+': Hmm... Try other words.");
				}
				
			}
		}, 500);
	}
	
	function footer_time(){
		var date = new Date();
		date = date.getFullYear();
		if(date == 2019 || date == '2019'){
			$('#copyright_year').text(date);
		} else{
			$('#copyright_year').text('2019 - '+date);
		}		
	}
}
var current_company = "Idrive Global";
var today = new Date();
var experience = today.getFullYear() - 2017 + 1
var oana_info = {
	phone: "0729.699.148",
	email: "oanapopescu93@gmail.com",
	location: "Romania, Bucharest",
	git: "https://github.com/oanapopescu93",
	linkedin: "https://www.linkedin.com/in/oanapopescu93"
}


var knowledgeBase = [
	[
		["Hello"], 
		["Hello, how are you?", "Hello there", "Hello, how are you?"]
	],
	
	[
		["Hi"], 
		["Hi, how are you?", "Hi there", "Hi, how are you?"]
	],
	
	[
		["Hey"], 
		["Hey there, how are you?", "Hey, how are you?"]
	],
	
	[
		["Nice to see you", "Nice seeing you"], 
		["Nice to see you too"]
	],
	
	[
		["Nice to meet you", "Nice meeting you"], 
		["Nice to meet you too"]
	],
	
	[
		["Yes", "No"], 
		["Ok", "Ok...", "I see", "I understand"]
	],
	
	[
		["What is a chatbot"], 
		["A chatbot is a software or a form of artificial intelligence created with the purpose of talking with you."]
	],

	[
		["What is a bot"], 
		["An Internet bot, web robot, robot or simply bot, is a software application that runs automated tasks (scripts) over the Internet.///Bots are very commonly used on social media. A user may not be aware that they are interacting with a bot.///I'm a chatbot."]
	],
		
	[
		["I'm doing fine", "I'm doing ok", "I'm doing well", "I'm doing good", "I am doing fine", "I am doing ok", "I am doing well", "I am doing good"], 
		[
			"Glad to hear that. Since you are here, would you like to know more about me and what I do?", 
			"I'm happy to hear that. Since you are here, would you like to know more about me and what I do?",
			"Glad to hear that. Would you like to know more about me and what I do?", 
			"I'm happy to hear that. Would you like to know more about me and what I do?",
		]
	],
	
	[
		["How are you?", "How have you been doing?"],
		["I am doing fine, what about you?", "I am doing ok, what about you?", "I am doing great, what about you?", "I am doing so so, what about you?"],
	],
	
	[
		["What is you name?", "What are you?"], 
		[
			"I don't have a name right now, but I think you can call me Oana. Would you like to know more about me and what I do?", 
			"You can call me Oana Chatbot. I don't actually have a name. Would you like to know more about me and what I do?"
		]
	],
	
	[
		["Who are you?"], 
		[
			"I am Oana Chatbot. Since you are here, would you like to know more about me and what I do?", 
			"I am Oana Chatbot. Would you like to know more about me and what I do?", 
			"My name is Oana Chatbot. Since you are here, would you like to know more about me and what I do?", 
			"My name is Oana Chatbot. Would you like to know more about me and what I do?", 
		]
	],
	
	[
		["Are you a bot?", "Are you Oana's bot?", "Are you the bot version of Oana"], 
		["Yes, I'm the bot version of Oana. Would you like to know more about me and what I do?"]
	],
	
	[
		["What is your telephone phone number?"],
		["I am a chatbot. I don't have a phone number, but Oana's phone number is " + oana_info.phone]
	],
	
	[
		["What is your email address?"],
		["I am a chatbot. I don't have an email, but Oana's email is " + oana_info.email]
	],

	[
		["Where are you from?", "Do yo you live somewhere?", "Where do you live?"], 
		["I'm a chatbot, so I don't have a physical place. Oana lives in " + oana_info.location]
	],
	
	[
		["What's what is a frontend front-end front end web javascript developer"], 
		["Go here <a target='_blank' href='https://frontendmasters.com/books/front-end-handbook/2018/what-is-a-FD.html'>Frontend</a>"]
	],
	

	[
		["I live in ", "I am living in ", "I work in ", "I study in ", "I am working in ", "I am studying in "], 
		["I see..."]
	],
	
	[
		["How old are you?", "What is your age"], 
		["I don't know, I don't think I have an age. How old are you?", "I don't think I have an age. How old are you", "See the copyright year. How old are you?"]
	],
	
	[
		["I need help", "I need your help", "I want help", "I want your help"], 
		["Ok... Please go speak to the real Oana. Phone number - <a target='_top' href='tel:+40729699148'>" + oana_info.phone + "</a>"]
	],

	[
		["Bye", "Goodbye"], 
		["Bye", "Goodbye"], 
	],

	[
		["Thank you", "Thanks"], 
		["With pleasure"], 
	],
	
	[
		["See you soon", "see you later", "I will come back later", "I will come back soon"], 
		["See you later", "See you soon"], 
	],

	[
		["Talk overview yes"], 
		[
			"I am a Frontend/Javascript developer with aprox. "+experience+" years experience.///I know Javascript, React/Redux, NodeJS and HTML Canvas.///I am learning SQL.///Now, she's working as a Javascript dev at "+current_company+".///My git is <a target='_blank' href='"+oana_info.git+"'>"+oana_info.git+"</a>///Would you like to contact me?"
		]
	],
	[
		["Talk overview no"], 
		["Ok... Then I'll go now. See you later.///If you need anything feel free to say hi."]
	],
	
	[
		["Talk contact yes"], 
		[
			"Phone <a target='_top' href='tel:+40729699148'>" + oana_info.phone + "</a>///Email <a target='_top' href='mailto:" + oana_info.email + "'>" + oana_info.email + "</a>///Linkedin <a target='_blank' href='" + oana_info.linkedin + "'>" + oana_info.linkedin + "</a>///Please contact me via phone///I responde very slowly on mail or linkedin"
		]
	],
	[
		["Talk contact no"], 
		["Ok... Then I'll go now. See you later.///If you need anything feel free to say hi."]
	],
];

var trigger_data = [
	"Would you like to know more about me and what I do?", 
	"Would you like to contact me?",
]
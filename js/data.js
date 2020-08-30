var subtitles = ["home" , "about" , "portofolio" , "contact"];
var nav_contacts = [
	{link: "tel:+40729699148", text: "0729.699.148"},
	{link: "https://www.linkedin.com/in/oanapopescu93/", text: "fa fa-linkedin"},
	{link: "https://github.com/oanapopescu93", text: "fa fa-github"},
];
var contacts = [
	[
		{link: "tel:+40729699148", icon: "fa fa-phone", text: "0729.699.148"},
		{link: "mailto:oanapopescu93@gmail.com", icon: "fa fa-envelope", text: "oanapopescu93@gmail.com"},
	],
	[
		{link: "https://www.linkedin.com/in/oanapopescu93/", icon: "fa fa-linkedin"},
		{link: "https://github.com/oanapopescu93", icon: "fa fa-github"},
	],
];

var header_info = ["img/logo-bear.png", "Oana Popescu", "Frontend / Javascript developer", "Hello. <br>I'm a self-taught frontend and javascript developer.<br>My passion is to create <b>websites</b>, <b>web applications</b>, and <b>games</b>."]

var section_header = [
	{text: "About me", icon: "glyphicon-user"},
	{text: "My portofolio", icon: "glyphicon-folder-open"},
	{text: "Contact me", icon: "glyphicon-send"},
];

var section_about = ["skills", "experience", "education"];

var skills = [
	{name: "HTML / CSS", value: "100"},
	{name: "JavaScript / Jquery", value: "80"},
	{name: "React js / Redux", value: "30"},
	{name: "Node js / Express", value: "30"},	
	{name: "Bootstrap", value: "100"},
	{name: "HTML Canvas", value: "80"},	
	{name: "Wordpress", value: "50"},
	{name: "Magento", value: "50"},
	{name: "Version control", value: "50"},
	{name: "Photoshop", value: "30"},
];
var education = [
	{
		school_name: "Self-taught coding", 
		period: "2017 - present", 
		description: "HTML, CSS, Bootstrap, Javascript, Jquery, OOP Javascript, HTML Canvas (now I'm learning Node js and React js)"
	},
	{
		school_name: "Academy of Economic Studies", 
		title: "Agrifood economics",
		period: "2011 - 2015", 
		school_location: "Romania, Bucharest",
		description: "I learnt MYSQL and Primary Accounting"
	},
	{
		school_name: "Marin Preda Highschool", 
		period: "2007 - 2011", 
		school_location: "Romania, Bucharest",
		description: "I learnt HTML, Turbo Pascal, Visual Basic and English"
	},		
]
var experience = [
	{
		job_title: "Javascript developer", 
		period: "October 2018 - Present", 
		company_name: "Idrive Global", 
		company_description: "Professional Dash Camera for Fleet Monitoring & GPS Tracking", 
		job_location: "Romania, Bucharest", 
		job_description: "HTML, CSS, Bootstrap, Javascript, Jquery, React js, Node js, HTML canvas, OOP", 
		job_description_list: [
			"Providing maintenance and new features",
			"Creating architecture for new features that will be implemented",
			"Build reusable and modular features",
			"Providing input on end-user product",
			"Staying up to date with industry technologies",
			"Writing clean, readable and well documented code and unit tests for it",
			"Being involved in the entire life-cycle of a product from concept to delivery",
			"Being able to offer reliable estimates for tasks",
		],
		platform_used: "Wordpress",
		accomplishments: "Learnt OOP Javascript, Promises and Canvas (I'm learning Node js and React js)",
		link_company: "https://idriveglobal.com",
		projects: [
			{project_name: "Idrive Global platform", project_link: "https://idriveglobal.com/platform/"},
		],
	},
	{
		job_title: "Frontend developer", 
		period: "November 2017 - April 2018", 
		company_name: "Salomon", 
		company_description: "E-commerce sport equipment", 
		job_location: "Romania, Bucharest", 
		job_description: "HTML, CSS, Bootstrap, Javascript, Jquery, Photoshop", 
		job_description_list: [
			"Create user-friendly web pages",
			"Maintain and improve website",
			"Stay up-to-date on emerging technologies",
		],
		platform_used: "Magento",
		accomplishments: "Learnt Magento",
		link_company: "https://www.salomon.ro/",
		projects: [
			{project_name: "Salomon site", project_link: "https://www.salomon.ro/"},
		],
	},
	{
		job_title: "Frontend developer", 
		period: "February 2017 - July 2017", 
		company_name: "Expremio Technology", 
		company_description: "IT Company for hotels, restaurants and bars", 
		job_location: "Romania, Bucharest", 
		job_description: "HTML, CSS, Bootstrap, Javascript, Jquery, Photoshop",
		job_description_list: [
			"Create user-friendly web pages",
			"Maintain and improve website",
			"Collaborate with back-end developers and web designers to improve usability",
			"Get feedback from, and build solutions for, users and customers",
			"Stay up-to-date on emerging technologies",
		],
		projects: [
			{project_name: "Pizza Hut Delivery", project_link: "https://www.pizzahutdelivery.ro/de-ce-pizza-hut-delivery"},
			{project_name: "City Grill", project_link: "https://citygrill.ro/ro"},
		],
	},
	{
		job_title: "Frontend / Javascript developer", 
		period: "2017 - present", 
		company_name: "Freelancer",
		job_location: "Romania, Bucharest", 
		job_description: "HTML, CSS, Bootstrap, Javascript, Jquery, Photoshop", 
		platform_used: "Wordpress, Magento",
		projects: [
			{project_name: "Noblisime", project_link: "portofolio"},
			{project_name: "Exclusive doors", project_link: "portofolio"},
			{project_name: "Credimag", project_link: "portofolio"},
			{project_name: "Konart", project_link: "portofolio"},
		],
	},
];

var mycolors = ["#189cb0","#bebebe"];

var portofolio_list = ["games", "react/node", "websites/webapps", "web pages"];

var portofolio_items = [
	[		
		{
			title: "Halloween flip card game", 
			link: "personal/flip_cards/game-flip-card.html", 							
			src: "img/pics/game-flip-card.png", 
			used: "HTML, CSS, Bootstrap, Javascript, OOP, Jquery", 
			git: "https://github.com/oanapopescu93/flip_cards",
		},
		{
			title: "ChatBot", 
			link: "personal/chatbot/index.html", 							
			src: "img/pics/chatbot.png", 
			used: "HTML, CSS, Bootstrap, Javascript, OOP, Jquery, Machine Learning", 
			git: "https://github.com/oanapopescu93/chatbot",
		},
		{
			title: "Snake game", 
			link: "personal/snake/index.html", 							
			src: "img/pics/snake.jpg", 
			used: "HTML, CSS, Bootstrap, Javascript, OOP, Jquery, Canvas", 
			git: "https://github.com/oanapopescu93/snake_game",
		},
		{
			title: "Backtracking maze game", 
			link: "personal/maze/index.html", 							
			src: "img/pics/maze.png", 
			used: "HTML, CSS, Bootstrap, Javascript, OOP, Jquery, Canvas", 
			git: "https://github.com/oanapopescu93/backtrack_mouse_maze",
		},
		{
			title: "Irregular verbs quiz game", 
			link: "personal/verbs/index.html", 							
			src: "img/pics/game-quiz.png", 
			used: "HTML, CSS, Bootstrap, Javascript, OOP, Jquery", 
			git: "https://github.com/oanapopescu93/irregular_verbs",
		},
	],
	[	
		{
			title: "Casino roulette",
			src: "img/pics/casino_roulette.png",
			used: "HTML, CSS, Bootstrap, Javascript, OOP, Jquery, React JS, Redux, Node JS, Express, HTML Canvas",
			git: "https://github.com/oanapopescu93/casino_roulette"
		},
		{
			title: "Chat, tic-toc and weather app",
			src: "img/pics/nodejs-image.png",
			used: "HTML, CSS, Bootstrap, Javascript, OOP, Jquery, Node JS, Express, Socket.io",
			git: "https://github.com/oanapopescu93/nodeapp"
		},	
		{
			title: "React JS Calculator",
			src: "img/pics/react_logo.png",
			used: "HTML, CSS, Bootstrap, Javascript, OOP, Jquery, React JS, Redux",
			git: "https://github.com/oanapopescu93/calculator-with-react"
		},			
	],
	[			
		{
			title: "Global Drive",
			link: "https://globalcenter.idriveglobal.com",
			src: "img/pics/globalcenter.png",
			used: "HTML, CSS, Bootstrap, Javascript, OOP, Jquery, DevExtreme, HTML Canvas",
		},
		{
			title: "Salomon Romania",
			link: "https://www.salomon.ro",
			src: "img/pics/salomon.png",
			used: "HTML, CSS, Bootstrap, Javascript, Jquery, Photoshop",
			platform: "Magento",
		},
		{
			title: "Noblisime",
			link: "https://noblisime.ro",
			src: "img/pics/noblisime.jpg",
			used: "HTML, CSS, Bootstrap, Javascript, Jquery, Photoshop",
			platform: "Magento",
		},
		{
			title: "City Grill",
			link: "https://citygrill.ro/ro",
			src: "img/pics/citygrill.png",
			used: "HTML, CSS, Bootstrap, Javascript, Jquery, Photoshop",
			platform: "October CMS",
		},
		{
			title: "Clubul sportiv RealGym",
			link: "http://clubulsportivrealgym.ro",
			src: "img/pics/realgym.png",
			used: "HTML, CSS, Bootstrap, Javascript, Jquery, Photoshop",
			platform: "Wordpress",
		},
		{
			title: "Konart",
			link: "http://www.kon-art.ro",
			src: "img/pics/konart.png",
			used: "HTML, CSS, Bootstrap, Javascript, Jquery, Photoshop",
			platform: "Magento",
		},
		{
			title: "Exclusive doors",
			link: "https://exclusivedoors.ro",
			src: "img/pics/exclusivedoor.png",
			used: "HTML, CSS, Bootstrap, Javascript, Jquery, Photoshop",
			platform: "Magento",
			//status: "still in localhost",
		},		
	],
	[			
		{
			title: "Credimag (Scoring persoane fizice)",
			link: "https://credite.credimag.ro/scoring-persoane-fizice/",
			src: "img/pics/credimag.png",
			used: "HTML, CSS, Bootstrap, Javascript, Jquery",
			platform: "Wordpress",
		},
		{
			title: "Pizza Hut Delivery (De ce Pizza Hut)",
			link: "https://www.pizzahutdelivery.ro/de-ce-pizza-hut-delivery",
			src: "img/pics/PHD01.jpg",
			used: "HTML, CSS, Bootstrap, Javascript, Jquery, Photoshop",
		},
		{
			title: "Ape Rider",
			link: "http://aperider.com/",
			src: "img/pics/aperider.png",
			used: "HTML, CSS, Bootstrap, Javascript, Jquery, Photoshop",
		},
	],	
];
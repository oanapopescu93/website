module.exports = Object.freeze({
    CONTACT: [
        [
            {link: "tel:+40729699148", icon: "fa fa-phone", text: "0729.699.148"},
            {link: "mailto:oanapopescu93@gmail.com", icon: "fa fa-envelope", text: "oanapopescu93@gmail.com"},
        ],
        [
            {link: "https://www.linkedin.com/in/oanapopescu93/", icon: "fa fa-linkedin"},
            {link: "https://github.com/oanapopescu93", icon: "fa fa-github"},
        ],
    ],
    HEADER_INFO: [
        "Oana Popescu", 
        "Frontend / Javascript developer", 
        "My passion is to create <b>websites</b>, <b>web applications</b>, and <b>games</b>.<br>I work with <b>Javascript</b>, <b>ReactJS</b> and <b>NodeJS</b>."
    ],
    SKILLS_TITLE: ['frontend', 'backend', 'other'],
    SKILLS: [
        {name: "HTML / CSS / Bootstrap", value: "100", type: "frontend"},
        {name: "JavaScript / Jquery", value: "90", type: "frontend"},
        {name: "React / Redux", value: "80", type: "frontend"},
        {name: "NodeJs / Express", value: "50", type: "backend"},
        {name: "SQL", value: "30", type: "backend"},
        {name: "Version control", value: "50", type: "other"},	
        {name: "HTML Canvas", value: "80", type: "frontend"},	
        {name: "Wordpress / Magento", value: "50", type: "frontend"},
        {name: "Photoshop", value: "30", type: "other"},
    ],
    LANGUAGES: [
        {name: "English", name: "english", level: "advanced", perc: 90},
        {name: "German", name: "german", level: "beginner", perc: 20},
        // {name: "French", name: "french", level: "beginner", perc: 20},
        {name: "Romania", name: "romanian", level: "native", perc: 100},
    ],
    EDUCATION: [
        {
            school_name: "Self-taught programming", 
            period: "2017 - present", 
            description: "I learnt Javascript, NodeJs, React, HTML Canvas (now I'm learning SQL)"
        },
        {
            school_name: "Academy of Economic Studies", 
            title: "Agrifood economics",
            period: "2011 - 2015", 
            school_location: "Romania, Bucharest",
            description: "I learnt SQL and Primary Accounting"
        },
        {
            school_name: "Marin Preda Highschool", 
            period: "2007 - 2011", 
            school_location: "Romania, Bucharest",
            description: "I learnt HTML, Turbo Pascal, Visual Basic and English"
        },		
    ],
    EXPERIENCE: [
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
                "Collaborate with back-end developers and web designers to improve usability",
                "Staying up to date with industry technologies",
                "Writing clean, readable and well documented code and unit tests for it",
                "Being involved in the entire life-cycle of a product from concept to delivery",
            ],
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
                "Collaborate with back-end developers and web designers to improve usability",
                "Get feedback, and build solutions for, users and customers",
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
                "Get feedback, and build solutions for, users and customers",
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
    ],
    PIE_COLORS: ["#189cb0","#bebebe"],
    PORTOFOLIO_LIST: ["games", "react/node", "websites/webapps", "other"],
    PORTOFOLIO_ITEMS: [
        [		
            {
                title: "Halloween flip card game", 
                link: "personal/flip_cards/game-flip-card.html", 							
                src: "img/pics/game-flip-card.png", 
                used: "HTML, CSS, Bootstrap, Javascript, OOP, Jquery", 
                git: "https://github.com/oanapopescu93/flip_cards",
                img_alt: "halloween flip card game",
                img_title: "halloween flip card game",
            },
            {
                title: "ChatBot", 
                link: "personal/chatbot/index.html", 							
                src: "img/pics/chatbot.png", 
                used: "HTML, CSS, Bootstrap, Javascript, OOP, Jquery, Machine Learning", 
                git: "https://github.com/oanapopescu93/chatbot",
                img_alt: "chatbot",
                img_title: "speak with oana chatbot",
            },
            {
                title: "Backtracking maze game", 
                link: "personal/maze/index.html", 							
                src: "img/pics/maze.png", 
                used: "HTML, CSS, Bootstrap, Javascript, OOP, Jquery, Canvas", 
                git: "https://github.com/oanapopescu93/backtrack_mouse_maze",
                img_alt: "backtracking maze game",
                img_title: "backtracking maze game",
            },	
            {
                title: "Snake game", 
                link: "personal/snake/index.html", 							
                src: "img/pics/snake.jpg", 
                used: "HTML, CSS, Bootstrap, Javascript, OOP, Jquery, Canvas", 
                git: "https://github.com/oanapopescu93/snake_game",
                img_alt: "snake game",
                img_title: "snake game",
            },			
            {
                title: "Space Invaders", 
                link: "personal/space_invaders/index.html", 							
                src: "img/pics/game_icon.png", 
                used: "HTML, CSS, Bootstrap, Javascript, OOP, Jquery, Canvas", 
                git: "https://github.com/oanapopescu93/space_invader",
                img_alt: "space invaders",
                img_title: "space invaders - game to cure office boredom",
            },
            {
                title: "Irregular verbs quiz game", 
                link: "personal/verbs/index.html", 							
                src: "img/pics/game-quiz.png", 
                used: "HTML, CSS, Bootstrap, Javascript, OOP, Jquery", 
                git: "https://github.com/oanapopescu93/irregular_verbs",
                img_alt: "irregular verbs quiz game",
                img_title: "irregular verbs quiz game",
            },
            // {
            //     title: "Hexapawn", 
            //     link: "personal/hexapawn/index.html", 							
            //     src: "img/pics/hexapawn_img.png", 
            //     used: "HTML, CSS, Bootstrap, Javascript, OOP, Jquery, Canvas", 
            //     git: "https://github.com/oanapopescu93/hexapawn",
            //     img_alt: "hexapawn",
            //     img_title: "hexapawn - the game that learns",
            // },
        ],
        [	
            {
                title: "Nodejs & React Casino",
                link: "https://bunnybet.herokuapp.com/",
                src: "img/pics/casino_roulette.png",
                used: "HTML, CSS, Bootstrap, Javascript, OOP, Jquery, React JS, Redux, Node JS, Express, HTML Canvas",
                git: "https://github.com/oanapopescu93/casino",
                img_alt: "nodejs react casino",
                img_title: "nodejs react casino",
            },
            {
                title: "Chat, tic-toc and weather app",
                src: "img/pics/nodejs-image.png",
                used: "HTML, CSS, Bootstrap, Javascript, OOP, Jquery, Node JS, Express, Socket.io",
                git: "https://github.com/oanapopescu93/nodeapp",
                img_alt: "chat tic-toc and weather nodejs app",
                img_title: "chat tic-toc and weather nodejs app",
            },	
            {
                title: "Calculator with React/Redux",
                src: "img/pics/react_logo.png",
                used: "HTML, CSS, Bootstrap, Javascript, OOP, Jquery, React JS, Redux",
                git: "https://github.com/oanapopescu93/calculator-with-react",
                img_alt: "calculator with react/redux",
                img_title: "calculator with react/redux",
            },			
        ],
        [			
            {
                title: "Global Drive",
                link: "https://idriveglobal.com/platform/",
                src: "img/pics/globalcenter.png",
                used: "HTML, CSS, Bootstrap, Javascript, OOP, Jquery, DevExtreme, HTML Canvas, React/Redux, NodeJs/Express",
                img_alt: "idrive global",
                img_title: "idrive global",
            },
            {
                title: "Salomon Romania",
                link: "https://www.salomon.ro",
                src: "img/pics/salomon.png",
                used: "HTML, CSS, Bootstrap, Javascript, Jquery, Photoshop",
                platform: "Magento",
                img_alt: "salomon",
                img_title: "salomon",
            },
            {
                title: "Noblisime",
                link: "https://noblisime.ro",
                src: "img/pics/noblisime.jpg",
                used: "HTML, CSS, Bootstrap, Javascript, Jquery, Photoshop",
                platform: "Magento",
                img_alt: "noblisime",
                img_title: "noblisime",
            },
            {
                title: "City Grill",
                link: "https://citygrill.ro/ro",
                src: "img/pics/citygrill.png",
                used: "HTML, CSS, Bootstrap, Javascript, Jquery, Photoshop",
                platform: "October CMS",
                img_alt: "city grill",
                img_title: "city grill",
            },
            {
                title: "Clubul sportiv RealGym",
                link: "http://clubulsportivrealgym.ro",
                src: "img/pics/realgym.png",
                used: "HTML, CSS, Bootstrap, Javascript, Jquery, Photoshop",
                platform: "Wordpress",
                img_alt: "clubul sportiv realgym karate kickbox",
                img_title: "clubul sportiv realgym karate kickbox",
            },
            {
                title: "Konart",
                link: "http://www.kon-art.ro",
                src: "img/pics/konart.png",
                used: "HTML, CSS, Bootstrap, Javascript, Jquery, Photoshop",
                platform: "Magento",
                img_alt: "konart",
                img_title: "konart",
            },
            {
                title: "Exclusive doors",
                link: "https://exclusivedoors.ro",
                src: "img/pics/exclusivedoor.png",
                used: "HTML, CSS, Bootstrap, Javascript, Jquery, Photoshop",
                platform: "Magento",
                img_alt: "exclusive doors",
                img_title: "exclusive doors",
                status: "still in localhost",
            },		
        ],
        [
            {
                title: "Pizza Hut Delivery (De ce Pizza Hut)",
                link: "https://www.pizzahutdelivery.ro/ro",
                src: "img/pics/PHD01.jpg",
                used: "HTML, CSS, Bootstrap, Javascript, Jquery, Photoshop",
                img_alt: "pizza hut delivery",
                img_title: "pizza hut delivery",
            },
            {
                title: "Ape Rider",
                link: "http://aperider.com/",
                src: "img/pics/aperider.png",
                used: "HTML, CSS, Bootstrap, Javascript, Jquery, Photoshop",
                img_alt: "ape rider biciclete",
                img_title: "ape rider biciclete",
            },
        ],	
    ],
    TUTORIALS: [
        {
            name: "Javascript promises",
            description: "Understand and use promises in javascript",
            used: ["javascript", "jquery"],
            link: "https://github.com/oanapopescu93/tutorial_javascript_promises"
        },
        {
            name: "React crud",
            description: "react app for managing books",
            used: ["javascript", "jquery", "react", "redux"],
            link: "https://github.com/oanapopescu93/tutorial_react_crud"
        },
        {
            name: "React print pdf",
            description: "React app to print a pdf",
            used: ["javascript", "react", "jquery"],
            link: "https://github.com/oanapopescu93/tutorial_react_print_pdf"
        },
        {
            name: "React export pdf",
            description: "React app that exports text, images and svg",
            used: ["javascript", "react", "jquery"],
            link: "https://github.com/oanapopescu93/react_export_pdf"
        },
        {
            name: "React module",
            description: "Tutorial react module",
            used: ["javascript", "react", "jquery"],
            link: "https://github.com/oanapopescu93/tutorial_react_module"
        },
        {
            name: "NodeJs App",
            description: "chat with socket.io, weather app, and tic-toc game",
            used: ["javascript", "jquery", "nodejs", "socket.io", "express"],
            link: "https://github.com/oanapopescu93/nodeapp"
        },
        {
            name: "HTML Canvas graphics",
            description: "Graphics, pie charts and doughnuts tutorial",
            used: ["javascript", "jquery", "HTML Canvas"],
            link: "https://github.com/oanapopescu93/pie_doughnut_chart"
        },
        {
            name: "Game of life",
            description: "A tutorial on how to generate lanscape",
            used: ["javascript", "jquery", "HTML Canvas"],
            link: "https://github.com/oanapopescu93/game_of_live_rpg"
        },
        {
            name: "Python basics",
            description: "python fundamentals and idiot proofing an app",
            used: ["arduino", "embeded C"],
            link: "https://github.com/oanapopescu93/tutorial_python_basics"
        },
        {
            name: "weather_arduino",
            description: "python fundamentals and idiot proofing an app",
            used: ["arduino", "embeded C"],
            link: "https://github.com/oanapopescu93/weather_arduino"
        },
        {
            name: "weather_api_arduino",
            description: "python fundamentals and idiot proofing an app",
            used: ["arduino", "embeded C"],
            link: "https://github.com/oanapopescu93/weather_api_arduino"
        },
        {
            name: "arduino_date_time",
            description: "python fundamentals and idiot proofing an app",
            used: ["arduino", "embeded C"],
            link: "https://github.com/oanapopescu93/arduino_date_time"
        },
    ]
})
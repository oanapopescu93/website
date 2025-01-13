var info = {
    email: "oanapopescu93@gmail.com",
    phone_text: "(+40) 0729.699.148",
    phone: "+400729699148",
    location: {
        city: "Bucharest",
        country: "Romania"
    },
    linkedin: "https://www.linkedin.com/in/oanapopescu93",
    github: "https://github.com/oanapopescu93",
}

var experience = [
    {
        job_title: "Javascript / React developer", 
        period: "October 2018 - Present", 
        company_name: "Idrive Global", 
        company_description: "Professional Dash Camera for Fleet Monitoring & GPS Tracking", 
        job_location: "Romania, Bucharest", 
        job_description: "HTML, CSS, Bootstrap, Javascript, Jquery, React/Redux, NodeJs, HTML canvas", 
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
            {project_name: "Idrive Global platform", project_link: "https://idriveglobal.com/fleet-management-platform/"},
        ],
    },
    {
        job_title: "Frontend / Javascript / React developer", 
        period: "2017 - present", 
        company_name: "Freelancer",
        job_location: "Romania, Bucharest", 
        job_description: "HTML, CSS, Bootstrap, Javascript, Jquery, Photoshop, React/Redux, NodeJs", 
        platform_used: "Wordpress, Magento",
        projects: [
            {project_name: "Clubul sportiv RealGym", project_link: "portofolio"},
            {project_name: "Noblisime", project_link: "portofolio"},
            {project_name: "Exclusive doors", project_link: "portofolio"},
            {project_name: "Credimag", project_link: "portofolio"},
            {project_name: "Konart", project_link: "portofolio"},
        ],
        personal_projects: [
            {project_name: "Casino", project_link: "portofolio"},
            {project_name: "E-commerce Shop", project_link: "portofolio"},
        ]
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
            {project_name: "Pizza Hut Delivery", project_link: "portofolio"},
            {project_name: "City Grill", project_link: "portofolio"},
        ],
    },            
]

let array = [
    //contact
    {
        "type": "contact_info",
        "queries": [
            "What's your email?",
            "Can you provide your email address?",
            "How can I contact you via email?",
            "What is your email?",
            "Give me your email address.",
            "Can you give me your email address?",
            "I need your email address.",
            "What was your email address?",
            "Can you repeat your email?",
            "I forgot your email, can you tell me?"
        ],
        "responses": [
            `My email is <a href="mailto:${info.email}">${info.email}</a>.`,
            `You can reach me at <a href="mailto:${info.email}">${info.email}</a>.`,
            `Feel free to email me at <a href="mailto:${info.email}">${info.email}</a>.`
        ]
    },
    {
        "type": "contact_info",
        "queries": [
            "What's your phone number?",
            "Can you provide your phone number?",
            "How can I contact you via phone?",
            "What is your phone number?",
            "Give me your phone number.",
            "What's your full phone number?",
            "Can you give me your complete phone number?",
            "I need your full phone number.",
            "Provide your full phone number.",
            "What is your complete phone number?"
        ],
        "responses": [
            `My phone number is <a href="tel:${info.phone}">${info.phone_text}</a>.`,
            `You can call me at <a href="tel:${info.phone}">${info.phone_text}</a>.`,
            `Feel free to reach me at <a href="tel:${info.phone}">${info.phone_text}</a>.`
        ]
    },
    {
        "type": "contact_info",
        "queries": [
            "Where are you located?",
            "What is your city and country?",
            "Can you provide your location?",
            "What is your address?",
            "Tell me your city and country.",
            "Where are you from?",
            "Can you tell me your location?",
            "What city and country are you in?",
            "What is your location?",
            "Provide your location details."
        ],
        "responses": [
            `I am located in ${info.location.city}, ${info.location.country}.`,
            `I live in ${info.location.city}, ${info.location.country}.`,
            `My location is ${info.location.city}, ${info.location.country}.`
        ]
    },
    {
        "type": "contact_info",
        "queries": [
            "What is your LinkedIn profile?",
            "Can you provide your LinkedIn URL?",
            "Where can I find your LinkedIn profile?",
            "What is your LinkedIn profile link?",
            "Share your LinkedIn profile.",
            "Can you share your LinkedIn URL?",
            "I need your LinkedIn link.",
            "Repeat your LinkedIn profile URL.",
            "What is your LinkedIn link?",
            "Provide your LinkedIn profile link.",
            "How can I find you on LinkedIn?",
            "Can you provide your LinkedIn profile?",
            "What is your LinkedIn URL?",
            "Give me your LinkedIn link.",
            "Tell me your LinkedIn profile URL."
        ],
        "responses": [
            `You can find my LinkedIn profile at <a href="${info.linkedin}" target="_blank">${info.linkedin}</a>.`,
            `My LinkedIn profile is available at <a href="${info.linkedin}" target="_blank">${info.linkedin}</a>.`,
            `Here is my LinkedIn profile: <a href="${info.linkedin}" target="_blank">${info.linkedin}</a>.`
        ]
    },
    {
        "type": "contact_info",
        "queries": [
            "What's your GitHub profile account link?",
            "Can you provide your GitHub profile account link?",
            "Where can I find your GitHub profile account link?",
            "What is your GitHub profile account link?",
            "Share your GitHub profile account link.",
            "Can you share your GitHub profile account link?",
            "I need your GitHub profile account link.",
            "Repeat your GitHub profile account link.",
            "What is your GitHub profile account link?",
            "Provide your GitHub profile account link.",
            "How can I find you on GitHub profile account link?",
            "Can you provide your GitHub profile account link?",
            "What's your GitHub profile account link?",
            "Give me your GitHub profile account link.",
            "Tell me your GitHub profile account link."
        ],
        "responses": [
            `You can check out my GitHub profile at <a href="${info.github}" target="_blank">${info.github}</a>.`,
            `My GitHub profile is at <a href="${info.github}" target="_blank">${info.github}</a>.`,
            `Here is my GitHub profile: <a href="${info.github}" target="_blank">${info.github}</a>.`
        ]
    },

    //experience

]

export const knowledgeBankEng = () => {
    return array
}

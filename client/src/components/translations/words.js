var current_company = "Idrive Global";
var today = new Date();
var experience = today.getFullYear() - 2017 + 1
var word_bank = {
    "RO":{
        "yes": "Da",
        "no": "Nu",
        "about": "Despre",
        "portofolio": "Portofoliu",
        "contact": "Contact",

        "header_description": "Pasiunea mea este de a crea <b>site-uri web</b>, <b>aplicatii web</b>, si <b>jocuri</b>.<br>Lucrez cu <b>Javascript</b>, <b>ReactJS</b>, <b>NodeJS</b> si <b>HTML Canvas</b>.",
        "read_more": "Citeste mai mult",
        "contact_me": "Contacteaza-ma",

        "skills": "Aptitudini",
        "experience": "Experienta",
        "education": "Educatie",

        "other": "Alte",
        "languages": "Limbi",
        "english": "Engleza",
        "romanian": "Romana",
        "native": "Nativ",
        "location": "Locatie",
        "company_profile": "Profil companie",
        "tools_used": "Ce am folosit",
        "my_work": "Ce am facut",
        "projects": "Proiecte",
        "personal_projects": "Proiecte personale",
        "platforms_used": "Platforme folosite",
        "accomplishments": "Realizari",        
        "see_my_projects": "Vezi mai multe proiecte",
        "what_i_learnt": "Ce am invatat",
        "error_skills": "Eroare",
        "error_experience": "Eroare",
        "error_education": "Eroare",

        "first_name": "Prenume",
        "last_name": "Nume",
        "email": "Email",
        "phone": "Telefon",
        "title": "Titlu",
        "message": "Mesaj",
        "send": "Trimite",
        "error_email": "Emailul nu este valid",
        "error_title": "Titlul nu este valid",
        "error_message": "Mesajul nu este valid",
        "Romania, Bucharest": "Romania, Bucuresti",

        "choose": "Alege",
        "tutorials": "Tutoriale",
        "take_a_look": "Arunca o privire",
        "see_the_code": "Vezi cod",
        "platform": "Platforma",
        "what_I_used": "Ce am folosit",
        "details": "Detalii",
        "error": "Eroare",

        "all_rights_reserved": "Toate drepturile rezervate",

        "login_title": "Logare",
        "login_button": "Intra",
        "visitor_button": "Sunt vizitator",
        "login_error": "Daca nu ai o parola, te rog sa bifezi Sunt vizitator",

        "see_old_chatbot": "Vezi Chatbot-ul vechi",
        "back": "Inapoi",
        "under_construction": "In constructie",
        "hello": "Buna",
        "goodbye": "La revedere",

        "bot_welcome": "Buna. Eu sunt Cahtbot-ul Oanei. Incantat de cunostinta.",
        "bot_question_01": "Ce pot sa fac pentru tine?",
        "would_you_like_to": "Vrei sa...",
        "know_more_about_me": "sti mai multe despre mine",
        "bot_contact_me": "ma contactezi",
        "would_you_like_to_contact_me": "Vrei sa ma contactezi?",

        "about_me_01": "Sunt un Frontend/Javascript/React developer cu aprox. "+experience+" ani de experienta.",
        "about_me_02": "Stiu Javascript, React/Redux, NodeJS si HTML Canvas.",
        "about_me_03": "Now, she's working as a Javascript dev at "+current_company+".",
        "please_contact_me": "Te rog suna-ma, raspund destul de greu pe email sau pe Linkedin"
    },
    "ENG":{
        "yes": "Yes",
        "no": "No",
        "about": "About",
        "portofolio": "Portofolio",
        "contact": "Contact",

        "header_description": "My passion is to create <b>websites</b>, <b>web applications</b>, and <b>games</b>.<br>I work with <b>Javascript</b>, <b>ReactJS</b>, <b>NodeJS</b> and <b>HTML Canvas</b>.",
        "read_more": "Read more",
        "contact_me": "Contact me",

        "skills": "Skills",
        "experience": "Experience",
        "education": "Education",

        "other": "Other",
        "languages": "Languages",
        "english": "English",
        "romanian": "Romanian",
        "native": "Native",
        "location": "Location",
        "company_profile": "Company profile",
        "tools_used": "Tools used",
        "my_work": "My work",
        "projects": "Projects",
        "personal_projects": "Personal projects",
        "platforms_used": "Platforms used",
        "accomplishments": "Accomplishments",
        "see_my_projects": "See my projects",
        "what_i_learnt": "What I learnt",
        "error_skills": "Error",
        "error_experience": "Error",
        "error_education": "Error",        

        "first_name": "First name",
        "last_name": "Last name",
        "email": "Email",
        "phone": "Phone",
        "title": "Title",
        "message": "Message",
        "send": "Send",
        "error_email": "Email is not valid",
        "error_title": "Title is not valid",
        "error_message": "Messaj is not valid",
        "Romania, Bucharest": "Romania, Bucharest",

        "choose": "Choose",
        "tutorials": "Tutorials",
        "take_a_look": "Take a look",
        "see_the_code": "See the code",
        "platform": "Platform",
        "what_I_used": "What I used",
        "details": "Details",
        "error": "Error",

        "all_rights_reserved": "All rights reserved",

        "login_title": "Login",
        "login_button": "Enter",
        "visitor_button": "I am a visitor",
        "login_error": "If you don't have a password, please check I am a Visitor",

        "see_old_chatbot": "See the old Chatbot",
        "back": "Back",
        "under_construction": "Under construction",
        "hello": "Hello",
        "goodbye": "Goodbye",

        "bot_welcome": "Hello. I am Oana's Chatbot. Nice to meet you.",
        "bot_question_01": "What can I do for you?",
        "would_you_like_to": "Would you like to...",
        "know_more_about_me": "Know more about me",
        "bot_contact_me": "contact me",
        "would_you_like_to_contact_me": "Would you like to contact me?",

        "about_me_01": "I am a Frontend/Javascript/React developer with aprox. "+experience+" years experience",
        "about_me_02": "I know Javascript, React/Redux, NodeJS and HTML Canvas.",
        "about_me_03": "Now, she's working as a Javascript dev at "+current_company+".",
        "please_contact_me": "Please contact me via phone, I responde very slowly on mail or Linkedin"
    }
}

export const words = function(lang, info){
    return word_bank[lang][info]
}
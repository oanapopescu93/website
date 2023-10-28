var current_company = "Idrive Global";
var today = new Date();
var experience = today.getFullYear() - 2017 + 1
var word_bank = {
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
    "all": "tot",

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
}

export const wordsRo = function(info){
    return word_bank[info]
}
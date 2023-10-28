var current_company = "Idrive Global";
var today = new Date();
var experience = today.getFullYear() - 2017 + 1
var word_bank = {
    "yes": "Ja",
    "no": "Nein",
    "about": "Über",
    "portofolio": "Portfolio",
    "contact": "Kontakt",

    "header_description": "Meine Leidenschaft ist die Erstellung von <b>Websites</b>, <b>Webanwendungen</b> und <b>Spiele</b>.<br>Ich arbeite mit <b>Javascript</b>, <b>ReactJS</b>, <b>NodeJS</b> und <b>HTML Canvas</b>.",
    "read_more": "Mehr lesen",
    "contact_me": "Kontaktiere mich",

    "skills": "Fähigkeiten",
    "experience": "Erfahrung",
    "education": "Bildung",

    "other": "Andere",
    "languages": "Sprachen",
    "english": "Englisch",
    "romanian": "Rumänisch",
    "native": "Muttersprache",
    "location": "Ort",
    "company_profile": "Firmenprofil",
    "tools_used": "Verwendete Werkzeuge",
    "my_work": "Meine Arbeit",
    "projects": "Projekte",
    "personal_projects": "Persönliche Projekte",
    "platforms_used": "Verwendete Plattformen",
    "accomplishments": "Erfolge",
    "see_my_projects": "Meine Projekte ansehen",
    "what_i_learnt": "Was ich gelernt habe",
    "error_skills": "Fehler",
    "error_experience": "Fehler",
    "error_education": "Fehler",

    "first_name": "Vorname",
    "last_name": "Nachname",
    "email": "E-Mail",
    "phone": "Telefon",
    "title": "Titel",
    "message": "Nachricht",
    "send": "Senden",
    "error_email": "E-Mail ist ungültig",
    "error_title": "Titel ist ungültig",
    "error_message": "Nachricht ist ungültig",
    "Romania, Bucharest": "Rumänien, Bukarest",

    "choose": "Wählen",
    "tutorials": "Tutorialkurse",
    "take_a_look": "Einen Blick werfen",
    "see_the_code": "Code anzeigen",
    "platform": "Plattform",
    "what_I_used": "Was ich verwendet habe",
    "details": "Details",
    "error": "Fehler",
    "all": "alle",

    "all_rights_reserved": "Alle Rechte vorbehalten",

    "login_title": "Anmeldung",
    "login_button": "Eintreten",
    "visitor_button": "Ich bin ein Besucher",
    "login_error": "Wenn Sie kein Passwort haben, überprüfen Sie bitte Ich bin ein Besucher",

    "see_old_chatbot": "Siehe den alten Chatbot",
    "back": "Zurück",
    "under_construction": "Im Aufbau",
    "hello": "Hallo",
    "goodbye": "Auf Wiedersehen",

    "bot_welcome": "Hallo. Ich bin Oanas Chatbot. Schön, Sie kennenzulernen.",
    "bot_question_01": "Was kann ich für Sie tun?",
    "would_you_like_to": "Möchten Sie...",
    "know_more_about_me": "Mehr über mich erfahren",
    "bot_contact_me": "Kontaktiere mich",
    "would_you_like_to_contact_me": "Möchten Sie mich kontaktieren?",

    "about_me_01": "Ich bin ein Frontend/Javascript/React-Entwickler mit ca. "+experience+" Jahren Erfahrung",
    "about_me_02": "Ich kenne Javascript, React/Redux, NodeJS und HTML Canvas.",
    "about_me_03": "Derzeit arbeite ich als Javascript-Entwickler bei "+current_company+".",
    "please_contact_me": "Bitte kontaktieren Sie mich telefonisch, ich antworte sehr langsam auf E-Mails oder Linkedin"
}


export const wordsDe = function(info){
    return word_bank[info]
}
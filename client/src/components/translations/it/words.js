var current_company = "Idrive Global";
var today = new Date();
var experience = today.getFullYear() - 2017 + 1
var word_bank = {
    "yes": "Sì",
    "no": "No",
    "about": "Su di me",
    "portofolio": "Portfolio",
    "contact": "Contatto",

    "header_description": "La mia passione è creare <b>siti web</b>, <b>applicazioni web</b> e <b>giochi</b>.<br>Lavoro con <b>Javascript</b>, <b>ReactJS</b>, <b>NodeJS</b> e <b>HTML Canvas</b>.",
    "read_more": "Leggi di più",
    "contact_me": "Contattami",

    "skills": "Competenze",
    "experience": "Esperienza",
    "education": "Formazione",

    "other": "Altro",
    "languages": "Lingue",
    "english": "Inglese",
    "romanian": "Rumeno",
    "native": "Lingua madre",
    "location": "Posizione",
    "company_profile": "Profilo dell'azienda",
    "tools_used": "Strumenti utilizzati",
    "my_work": "Il mio lavoro",
    "projects": "Progetti",
    "personal_projects": "Progetti personali",
    "platforms_used": "Piattaforme utilizzate",
    "accomplishments": "Riconoscimenti",
    "see_my_projects": "Vedi i miei progetti",
    "what_i_learnt": "Cosa ho imparato",
    "error_skills": "Errore",
    "error_experience": "Errore",
    "error_education": "Errore",

    "first_name": "Nome",
    "last_name": "Cognome",
    "email": "Email",
    "phone": "Telefono",
    "title": "Titolo",
    "message": "Messaggio",
    "send": "Invia",
    "error_email": "L'indirizzo email non è valido",
    "error_title": "Il titolo non è valido",
    "error_message": "Il messaggio non è valido",
    "Romania, Bucharest": "Romania, Bucarest",

    "choose": "Scegli",
    "tutorials": "Tutorial",
    "take_a_look": "Dai un'occhiata",
    "see_the_code": "Guarda il codice",
    "platform": "Piattaforma",
    "what_I_used": "Cosa ho usato",
    "details": "Dettagli",
    "error": "Errore",
    "all": "tutto",

    "all_rights_reserved": "Tutti i diritti riservati",

    "login_title": "Accesso",
    "login_button": "Entra",
    "visitor_button": "Sono un visitatore",
    "login_error": "Se non hai una password, seleziona Sono un visitatore",

    "see_old_chatbot": "Guarda il vecchio Chatbot",
    "back": "Indietro",
    "under_construction": "In costruzione",
    "hello": "Ciao",
    "goodbye": "Arrivederci",

    "bot_welcome": "Ciao. Sono il Chatbot di Oana. Piacere di conoscerti.",
    "bot_question_01": "Cosa posso fare per te?",
    "would_you_like_to": "Desideri...",
    "know_more_about_me": "Sapere di più su di me",
    "bot_contact_me": "contattarmi",
    "would_you_like_to_contact_me": "Desideri contattarmi?",

    "about_me_01": "Sono uno sviluppatore Frontend/Javascript/React con circa "+experience+" anni di esperienza",
    "about_me_02": "Conosco Javascript, React/Redux, NodeJS e HTML Canvas.",
    "about_me_03": "Attualmente lavoro come sviluppatore Javascript presso "+current_company+".",
    "please_contact_me": "Ti prego di contattarmi telefonicamente, rispondo molto lentamente alle e-mail o a Linkedin"
}


export const wordsIt = function(info){
    return word_bank[info]
}
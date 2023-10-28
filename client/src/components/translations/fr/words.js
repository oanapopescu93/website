var current_company = "Idrive Global";
var today = new Date();
var experience = today.getFullYear() - 2017 + 1
var word_bank = {
    "yes": "Oui",
    "no": "Non",
    "about": "À propos",
    "portofolio": "Portfolio",
    "contact": "Contact",

    "header_description": "Ma passion est de créer des <b>sites web</b>, des <b>applications web</b> et des <b>jeux</b>.<br>Je travaille avec <b>Javascript</b>, <b>ReactJS</b>, <b>NodeJS</b> et <b>HTML Canvas</b>.",
    "read_more": "Lire la suite",
    "contact_me": "Me contacter",

    "skills": "Compétences",
    "experience": "Expérience",
    "education": "Éducation",

    "other": "Autre",
    "languages": "Langues",
    "english": "Anglais",
    "romanian": "Roumain",
    "native": "Langue maternelle",
    "location": "Emplacement",
    "company_profile": "Profil de l'entreprise",
    "tools_used": "Outils utilisés",
    "my_work": "Mon travail",
    "projects": "Projets",
    "personal_projects": "Projets personnels",
    "platforms_used": "Plateformes utilisées",
    "accomplishments": "Réalisations",
    "see_my_projects": "Voir mes projets",
    "what_i_learnt": "Ce que j'ai appris",
    "error_skills": "Erreur",
    "error_experience": "Erreur",
    "error_education": "Erreur",

    "first_name": "Prénom",
    "last_name": "Nom de famille",
    "email": "E-mail",
    "phone": "Téléphone",
    "title": "Titre",
    "message": "Message",
    "send": "Envoyer",
    "error_email": "L'e-mail n'est pas valide",
    "error_title": "Le titre n'est pas valide",
    "error_message": "Le message n'est pas valide",
    "Romania, Bucharest": "Roumanie, Bucarest",

    "choose": "Choisir",
    "tutorials": "Tutoriels",
    "take_a_look": "Jeter un coup d'œil",
    "see_the_code": "Voir le code",
    "platform": "Plateforme",
    "what_I_used": "Ce que j'ai utilisé",
    "details": "Détails",
    "error": "Erreur",
    "all": "tout",

    "all_rights_reserved": "Tous droits réservés",

    "login_title": "Connexion",
    "login_button": "Entrer",
    "visitor_button": "Je suis un visiteur",
    "login_error": "Si vous n'avez pas de mot de passe, veuillez cocher Je suis un visiteur",

    "see_old_chatbot": "Voir l'ancien Chatbot",
    "back": "Retour",
    "under_construction": "En cours de construction",
    "hello": "Bonjour",
    "goodbye": "Au revoir",

    "bot_welcome": "Bonjour. Je suis le Chatbot d'Oana. Ravi de vous rencontrer.",
    "bot_question_01": "Que puis-je faire pour vous?",
    "would_you_like_to": "Souhaitez-vous...",
    "know_more_about_me": "En savoir plus sur moi",
    "bot_contact_me": "me contacter",
    "would_you_like_to_contact_me": "Souhaitez-vous me contacter?",

    "about_me_01": "Je suis un développeur Frontend/Javascript/React avec environ "+experience+" ans d'expérience",
    "about_me_02": "Je connais Javascript, React/Redux, NodeJS et HTML Canvas.",
    "about_me_03": "Actuellement, je travaille en tant que développeur Javascript chez "+current_company+".",
    "please_contact_me": "Veuillez me contacter par téléphone, je réponds très lentement aux e-mails ou à Linkedin"
}


export const wordsFr = function(info){
    return word_bank[info]
}
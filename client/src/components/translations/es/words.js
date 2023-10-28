var current_company = "Idrive Global";
var today = new Date();
var experience = today.getFullYear() - 2017 + 1
var word_bank = {
    "yes": "Sí",
    "no": "No",
    "about": "Acerca de",
    "portofolio": "Portafolio",
    "contact": "Contacto",

    "header_description": "Mi pasión es crear <b>sitios web</b>, <b>aplicaciones web</b> y <b>juegos</b>.<br>Trabajo con <b>Javascript</b>, <b>ReactJS</b>, <b>NodeJS</b> y <b>HTML Canvas</b>.",
    "read_more": "Leer más",
    "contact_me": "Contáctame",

    "skills": "Habilidades",
    "experience": "Experiencia",
    "education": "Educación",

    "other": "Otros",
    "languages": "Idiomas",
    "english": "Inglés",
    "romanian": "Rumano",
    "native": "Nativo",
    "location": "Ubicación",
    "company_profile": "Perfil de la empresa",
    "tools_used": "Herramientas utilizadas",
    "my_work": "Mi trabajo",
    "projects": "Proyectos",
    "personal_projects": "Proyectos personales",
    "platforms_used": "Plataformas utilizadas",
    "accomplishments": "Logros",
    "see_my_projects": "Ver mis proyectos",
    "what_i_learnt": "Lo que aprendí",
    "error_skills": "Error",
    "error_experience": "Error",
    "error_education": "Error",

    "first_name": "Nombre",
    "last_name": "Apellido",
    "email": "Correo electrónico",
    "phone": "Teléfono",
    "title": "Título",
    "message": "Mensaje",
    "send": "Enviar",
    "error_email": "El correo electrónico no es válido",
    "error_title": "El título no es válido",
    "error_message": "El mensaje no es válido",
    "Romania, Bucharest": "Rumania, Bucarest",

    "choose": "Elegir",
    "tutorials": "Tutoriales",
    "take_a_look": "Echar un vistazo",
    "see_the_code": "Ver el código",
    "platform": "Plataforma",
    "what_I_used": "Lo que usé",
    "details": "Detalles",
    "error": "Error",
    "all": "todo",

    "all_rights_reserved": "Todos los derechos reservados",

    "login_title": "Iniciar sesión",
    "login_button": "Entrar",
    "visitor_button": "Soy un visitante",
    "login_error": "Si no tiene una contraseña, por favor marque Soy un visitante",

    "see_old_chatbot": "Ver el antiguo Chatbot",
    "back": "Volver",
    "under_construction": "En construcción",
    "hello": "Hola",
    "goodbye": "Adiós",

    "bot_welcome": "Hola. Soy el Chatbot de Oana. Encantado de conocerte.",
    "bot_question_01": "¿En qué puedo ayudarte?",
    "would_you_like_to": "¿Te gustaría...",
    "know_more_about_me": "Saber más sobre mí",
    "bot_contact_me": "contáctame",
    "would_you_like_to_contact_me": "¿Te gustaría contactarme?",

    "about_me_01": "Soy un desarrollador Frontend/Javascript/React con aproximadamente "+experience+" años de experiencia",
    "about_me_02": "Conozco Javascript, React/Redux, NodeJS y HTML Canvas.",
    "about_me_03": "Actualmente, trabajo como desarrollador Javascript en "+current_company+".",
    "please_contact_me": "Por favor, contáctame por teléfono, respondo muy lentamente a los correos electrónicos o a Linkedin"
}


export const wordsEs = function(info){
    return word_bank[info]
}
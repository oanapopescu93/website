var current_company = "Idrive Global";
var today = new Date();
var experience = today.getFullYear() - 2017 + 1
var word_bank = {
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
    "all": "all",

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

export const wordsEng = function(info){
    return word_bank[info]
}
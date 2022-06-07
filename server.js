var express = require("express");
const app = express();

var http = require('http').createServer(app);
var io = require('socket.io')(http);
const port = process.env.PORT || 5000;
app.set("port", port);

var nodemailer = require('nodemailer');
var data = require('./var/data');
var routes = require("./router");

var login_password = data.LOGIN_PASSWORD;
var header = data.HEADER_INFO;
var skills_title = data.SKILLS_TITLE;
var skills = data.SKILLS ;
var language = data.LANGUAGES ;
var education = data.EDUCATION;
var experience = data.EXPERIENCE;
var pie_colors = data.PIE_COLORS;
var portofolio_list = data.PORTOFOLIO_LIST;
var portofolio_items = data.PORTOFOLIO_ITEMS;
var tutorials = data.TUTORIALS;
var contact = data.CONTACT;

var transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
	    user: data.AUTH_USER,
	    pass: data.AUTH_PASS
	}
});
var mailOptions = {
	from: '',
	to: data.AUTH_FROM,
	subject: 'WEBSITE!!!',
	html: ''
};

app.use(routes);

io.on('connection', function(socket) {
    socket.on('info_send', function(data) {
        let login_visitor;
        if(data.reason === "refresh" || data.login_visitor === "true"){
            login_visitor = data.login_visitor;
        } else {
            if(login_password === data.login_password){
                login_visitor = false;
            } else {
                login_visitor = true;
            }
        }
        let payload = {
            header: header,
            about: {
                skills_title: skills_title, 
                skills: skills, 
                language: language, 
                education: education, 
                experience: experience, 
                pie_colors: pie_colors 
            },
            portofolio: {
                portofolio_list: portofolio_list,
                portofolio_items: portofolio_items,
                tutorials: tutorials, 
            },
            contact: contact,
            login_visitor: login_visitor,
        };
        try{
            io.to(socket.id).emit('info_read', payload);
        }catch(e){
            console.log('[error]','info_read :', e);
        }
	});
    socket.on('contact_send', function(data) {
        mailOptions.from = data.email;
        mailOptions.subject = data.subject;
        mailOptions.html = mailOptions.html + ' First name--> ' + data.first_name;
        mailOptions.html = mailOptions.html + ' Last_name--> ' + data.last_name ;
        mailOptions.html = mailOptions.html + ' Phone--> ' + data.phone;
        mailOptions.html = mailOptions.html + ' Title--> ' + data.subject;
        mailOptions.html = mailOptions.html + ' Message--> ' + data.html;
        transport.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log('error--> ', error);
              io.emit('contact_read', ["Error!", "we couldn't send the mail!"]);
            } else {
              console.log('info--> ', info.response);
              io.emit('contact_read', ["Success!", "Message has been sent!"]);
            }
        });		
	});
});

http.listen(port, () => console.log("Server started on port " + app.get("port") + " on dirname " + __dirname));
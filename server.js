var express = require("express");
const app = express();

var http = require('http').createServer(app);
var io = require('socket.io')(http);
const port = process.env.PORT || 5000;
app.set("port", port);

var data = require('./var/data');
var header = data.HEADER_INFO;
var skills_title = data.SKILLS_TITLE;
var skills = data.SKILLS ;
var language = data.LANGUAGES ;
var education = data.EDUCATION;
var experience = data.EXPERIENCE;
var pie_colors = data.PIE_COLORS;
var portofolio_list = data.PORTOFOLIO_LIST;
var portofolio_items = data.PORTOFOLIO_ITEMS;
var contact = data.CONTACT;

io.on('connection', function(socket) {	
    socket.on('info_send', function(data) {
		io.emit('info_read', {
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
            },
            contact: contact,
        });
	});
});

http.listen(port, () => console.log("Server started on port " + app.get("port") + " on dirname " + __dirname));
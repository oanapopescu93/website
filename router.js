var express = require("express")
// var path = require("path")
var router = express.Router()

var data = require('./var/data')
var skills_title = data.SKILLS_TITLE
var skills = data.SKILLS 
var language = data.LANGUAGES 
var education = data.EDUCATION
var experience = data.EXPERIENCE
var pie_colors = data.PIE_COLORS
var portofolio_list = data.PORTOFOLIO_LIST
var portofolio_items = data.PORTOFOLIO_ITEMS
var tutorials = data.TUTORIALS
var contact = data.CONTACT

// router.use(express.static(path.join(__dirname, '/client/build')))
// router.get('*', function(req, res) {
// 	res.sendFile(path.join(__dirname, '/client/build', 'index.html'))
// })

router.get('/api/home', function(req, res, next){
	let payload = {
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
	}
  	res.send(payload)
});

module.exports = router
var express = require("express")
var bodyParser = require('body-parser')
var path = require("path")
var router = express.Router()

var contact = require('./var/home').CONTACT
var skills_title = require('./var/home').SKILLS_TITLE
var skills = require('./var/home').SKILLS
var languages = require('./var/home').LANGUAGES
var education = require('./var/home').EDUCATION
var experience = require('./var/home').EXPERIENCE
var portofolio_list = require('./var/home').PORTOFOLIO_LIST
var portofolio_items = require('./var/home').PORTOFOLIO_ITEMS
var tutorials = require('./var/home').TUTORIALS
const { sendEmail } = require("./utils/mail")

var jsonParser = bodyParser.json() 
router.use(express.static(path.resolve(__dirname, '../client/build')))

router.post("/api/home", jsonParser, (req, res, next) => {
  let payload = {contact, skills_title, skills, languages, education, experience, portofolio_list, portofolio_items, tutorials}
  res.send(JSON.stringify(payload))
})
router.post("/api/contact", jsonParser, (req, res, next) => {
  sendEmail('contact', req.body).then((data)=>{
    try{
      res.send(data)
    }catch(e){
      console.log('[error]','contact--> ', e)
      res.send({send: "email_no_send"})
    }
  }) 
})
router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

module.exports = router
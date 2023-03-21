var express = require("express")
const app = express()

var http = require('http').createServer(app)
var io = require('socket.io')(http)
const port = process.env.PORT || 5333
app.set("port", port)

var nodemailer = require('nodemailer')
var data = require('./var/data')
var routes = require("./router")

app.use(routes)

var login_password = data.LOGIN_PASSWORD
var transport = nodemailer.createTransport({
	host: "sandbox.smtp.mailtrap.io",
	port: 2525,
	auth: {
	    user: data.AUTH_USER,
	    pass: data.AUTH_PASS
	}
})
var mailOptions = {
	from: '',
	to: data.AUTH_FROM,
	subject: 'WEBSITE!!!',
	html: '<div>'
}
var jwt = require('jsonwebtoken')
var secret = require('crypto').randomBytes(64).toString('hex')
function generateAccessToken(payload) {
    return jwt.sign(payload, secret, { expiresIn: '1h' })
}

io.on('connection', function(socket) {
    socket.on('info_send', function(data) {
        let login_visitor = true
        let token
        let payload = {}

        if(data.reason === "refresh"){
            token = data.login_token
            jwt.verify(token, secret, function(err, decoded) {
                if(decoded && decoded.login_visitor){
                    login_visitor = decoded.login_visitor
                }
            }) 
        } else {
            if(!data.login_visitor){ //verify the password only if the client didn't check "I am a visitor"
                if(login_password === data.login_password){
                    login_visitor = false
                } else {
                    login_visitor = true
                }
            }
            
            token = generateAccessToken(data)
        }
        payload.login_visitor = login_visitor
        payload.login_token = token
        
        try{
            io.to(socket.id).emit('info_read', payload)
        }catch(e){
            console.log('[error]','info_read :', e)
        }
	})
    socket.on('contact_send', function(data) {
        mailOptions.from = data.email
        mailOptions.subject = data.subject
        if(typeof data.first_name !== "undefined" && data.first_name !== 'null' && data.first_name !== null && data.first_name !== ""){
            mailOptions.html = mailOptions.html + '<p>First name--> ' + data.first_name + '</p>'
        }
        if(typeof data.last_name !== "undefined" && data.last_name !== 'null' && data.last_name !== null && data.last_name !== ""){
            mailOptions.html = mailOptions.html + '<p>Last name--> ' + data.last_name + '</p>'
        }
        if(typeof data.phone !== "undefined" && data.phone !== 'null' && data.phone !== null && data.phone !== ""){
            mailOptions.html = mailOptions.html + '<p>Phone--> ' + data.phone + '</p>'
        }        
        mailOptions.html = mailOptions.html + '<p>Message--> ' + data.html + '</p>'
        transport.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log('error--> ', error)
              let payload = {
                sent: false,
                RO: ["Eroare!", "Mesajul nu a fost transmis!"],
                ENG: ["Error!", "The message has not been sent!"]
              }
              io.emit('contact_read', payload)
            } else {
                let payload = {
                    send: true,
                    RO: ["Succes!", "Mesajul a fost transmis!"],
                    ENG: ["Success!", "Message has been sent!"]
                  }
              io.emit('contact_read', payload)
            }
        })	
	})
    socket.on('heartbeat', function(data) {
		console.log('heartbeat', data)
	})
})

http.listen(port, () => console.log("Server started on port " + app.get("port") + " on dirname " + __dirname))
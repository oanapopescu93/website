var express = require("express")
const app = express()

var http = require('http').createServer(app)
var io = require('socket.io')(http)
const port = process.env.PORT || 5111
app.set("port", port)

var nodemailer = require('nodemailer')
var data = require('./var/data')
var routes = require("./router")

var login_password = data.LOGIN_PASSWORD
var list = []
var jwt = require('jsonwebtoken')
var secret = require('crypto').randomBytes(64).toString('hex')
function generateAccessToken(payload) {
    return jwt.sign(payload, secret, { expiresIn: '1h' })
}

var transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
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
	html: ''
}

app.use(routes)

io.on('connection', function(socket) {
    socket.on('info_send', function(data) {
        let login_visitor = true
        let token
        let payload = {}

        if(data.reason === "refresh"){
            token = data.login_token
            jwt.verify(token, secret, function(err, decoded) {
                console.log(decoded, secret)
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
        mailOptions.html = mailOptions.html + ' First name--> ' + data.first_name
        mailOptions.html = mailOptions.html + ' Last_name--> ' + data.last_name 
        mailOptions.html = mailOptions.html + ' Phone--> ' + data.phone
        mailOptions.html = mailOptions.html + ' Title--> ' + data.subject
        mailOptions.html = mailOptions.html + ' Message--> ' + data.html
        transport.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log('error--> ', error)
              io.emit('contact_read', ["Error!", "we couldn't send the mail!"])
            } else {
              console.log('info--> ', info.response)
              io.emit('contact_read', ["Success!", "Message has been sent!"])
            }
        })	
	})
    socket.on('heartbeat', function(data) {
		console.log('heartbeat', data)
	})
})

http.listen(port, () => console.log("Server started on port " + app.get("port") + " on dirname " + __dirname))
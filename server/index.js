const express = require("express")
const app = express()
const bodyParser = require('body-parser')

var http = require('http').createServer(app)
var io = require('socket.io')(http)

const crypto = require('crypto')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })) 

const dotenv = require('dotenv')
const path = require('path')
var NODE_ENV = process.env.NODE_ENV.trim() 
dotenv.config({
  path: path.resolve(__dirname, `.env.${NODE_ENV}`)
})

const PORT = process.env.PORT || 1111

var routes = require("./routes")
app.use(routes) 

var password = require('./var/constants').PASSWORD

io.on('connection', function(socket) {
  socket.on('login', function(data) {
    const {guest, input} = data
    let payload = null
    if(guest){
      let uuid = crypto.randomBytes(20).toString('hex')
      payload = {uuid, guest: 1}
    } else {
      if(input === password){
        let uuid = crypto.randomBytes(20).toString('hex')
        payload = {uuid, guest: 0}
      }
    }
    try{
      io.to(socket.id).emit('login_read', payload)
    } catch (e){
      console.log('[error]','login_read :', e)
    }
	})
  socket.on('heartbeat', function(data) {
		console.log('heartbeat', data)
	})
  socket.on('disconnect', function() {  
    console.log('Got disconnect!')
  })
})

http.listen(PORT, () => {console.log(`Server listening on ${PORT}`)})
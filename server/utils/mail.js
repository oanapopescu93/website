var nodemailer = require('nodemailer')
var constants = require('../var/constants')

const transports = {
    default: nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: constants.AUTH_USER,
            pass: constants.AUTH_PASS
        }
    })
}

function getTransport(email) {
    const domain = email.split('@')[1]
    if(domain){
        if (domain.includes('gmail.com')){
            return transports.default
        } else if (domain.includes('yahoo.com')) {
            return transports.default
        } else {
            return transports.default
        }
    } else {
        return transports.default
    }
}

function sendEmail(reason, e){
    return new Promise((resolve, reject)=>{
        if(!e.email){
            resolve({send: "email_no_send"})
        }
        let email = e.email
        const transport = getTransport(email)
        
        let subject = ''
        let html = ''
        let success_message = "email_send"
        switch (reason) {            
            case "contact":
                subject = e.title
                if(e.phone){
                    html = html + "<p><b>Phone: </b> " + e.phone + "</p>"
                }
                html = html + "<p><b>Message: </b> " + e.message + "</p>"
                success_message = "email_send"
        }
        
        let mailOptions = {
            from: constants.AUTH_FROM,
            to: email,
            subject: subject,
            html: html
        }
        
        transport.sendMail(mailOptions, (error, info)=>{
            if (error) {
                console.log('error--> ', error, mailOptions)
                resolve({send: "email_no_send"})
            } else {
                resolve({send: success_message})
            }
        })
    })
}

module.exports = {
    sendEmail,
}
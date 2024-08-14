import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { translate } from '../../../translations/translate'
import { isEmpty } from '../../../utils/utils'
import { validateInput } from '../../../utils/validate'

function ContactForm(props){
    const {sending, sendResults, lang} = props

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')

    let defaultErrors = {
        name: { fill: true, validate: true, fill_message: "fill_field", validate_message: "validate_name" },
        email: { fill: true, validate: true, fill_message: "fill_field", validate_message: "validate_email" },
        phone: { fill: true, validate: true, fill_message: "fill_field", validate_message: "validate_phone" },
        title: { fill: true, validate: true, fill_message: "fill_field", validate_message: "validate_title" },
        message: { fill: true, validate: true, fill_message: "fill_field", validate_message: "validate_message" },
    }

    const [errors, setErrors] = useState(defaultErrors)	

    function sendForm(){
		validateSubmit()
    }

    function validateSubmit(data){
        let myErrors = {...defaultErrors}
        setErrors(myErrors)

        if(isEmpty(email)){
            myErrors.email.fill = false
        }
        if(!validateInput(email, "email")){
            myErrors.email.validate = false
        }            
        if(!isEmpty(phone) && !validateInput(phone, "phone")){ //if the user wrote a phone number but it is not a phone number
            myErrors.phone.validate = false
        }
        if(isEmpty(title)){
            myErrors.title.fill = false
        }
        if(isEmpty(message)){
            myErrors.message.fill = false
        }

        setErrors(myErrors)

        let problem = Object.values(myErrors).some(error => !error.fill || !error.validate)
        if(!problem){
            sendPayload()
        }
    }

    function sendPayload(){
        let payload = {email, phone, title, message}
        props.handleSend(payload)       
    }

    return <div className="contact_form shadow_convex">
        <Form>            
            <Row>
                <Col sm={12}>
                    <label htmlFor="email">{translate({lang: lang, info: "email"})} *</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        name="email"
                    />
                    {!errors.email.fill ? <div className="alert alert-danger">
                        <p className="text_red">
                            {translate({lang: lang, info: errors.email.fill_message})}
                        </p>
                    </div> : <>
                        {!errors.email.validate ? <div className="alert alert-danger">
                            <p className="text_red">
                                {translate({lang: lang, info: errors.email.validate_message})}
                            </p>
                        </div> : null}
                    </>}
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <label htmlFor="phone">{translate({lang: lang, info: "phone"})}</label>
                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        name="phone"
                    />
                    {!errors.phone.fill ? <div className="alert alert-danger">
                        <p className="text_red">
                            {translate({lang: lang, info: errors.phone.fill_message})}
                        </p>
                    </div> : <>
                        {!errors.phone.validate ? <div className="alert alert-danger">
                            <p className="text_red">
                                {translate({lang: lang, info: errors.phone.validate_message})}
                            </p>
                        </div> : null}
                    </>}
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <label htmlFor="title">{translate({lang: lang, info: "title"})} *</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        name="title"
                    />
                    {!errors.title.fill ? <div className="alert alert-danger">
                        <p className="text_red">
                            {translate({lang: lang, info: errors.title.fill_message})}
                        </p>
                    </div> : <>
                        {!errors.title.validate ? <div className="alert alert-danger">
                            <p className="text_red">
                                {translate({lang: lang, info: errors.title.validate_message})}
                            </p>
                        </div> : null}
                    </>}
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <label htmlFor="message">{translate({lang: lang, info: "message"})} *</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        name="message"
                        cols="25"
                        rows="6"
                    />
                    {!errors.message.fill ? <div className="alert alert-danger">
                        <p className="text_red">
                            {translate({lang: lang, info: errors.message.fill_message})}
                        </p>
                    </div> : <>
                        {!errors.message.validate ? <div className="alert alert-danger">
                            <p className="text_red">
                                {translate({lang: lang, info: errors.message.validate_message})}
                            </p>
                        </div> : null}
                    </>}
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Button onClick={()=>{sendForm()}} className="mybutton button_accent" name="send" type="button">
                        {!sending ? <span>
                            {translate({lang: lang, info: "send"})}
                        </span> : <span>
                            {translate({lang: lang, info: "sending"})}
                        </span>}                        
                    </Button>
                </Col>
            </Row>
        </Form>
    </div>
}

export default ContactForm
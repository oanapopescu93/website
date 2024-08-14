import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactInfo from '../subsections/contactInfo'
import ContactMap from '../subsections/contactMap'
import ContactForm from '../subsections/contactForm'
import { postData } from '../../../utils/utils'

function Contact(props) {
    const {user, home, settings} = props
    const {lang} = settings
    const {guest} = user
    const {contact} = home

    const [sending, setSending] = useState(false)
    const [sendResults, setSendResults] = useState(null)

    function handleSend(e){
        setSending(true)
        postData("/api/contact", e).then((data) => {
            setSending(false)
            if(data && data.send){
                setSendResults(data.send)
                setTimeout(() => {
                    setSendResults(null)
                }, 1500)
            }
        })
    }

    return <Container>
        <Row>
            <Col sm={12} className="visible-xs-block">
                <Row>
                    <Col sm={12}>
                        <ContactInfo guest={guest} contact={contact} lang={lang} />
                    </Col>
                    <Col sm={12} className="hidden-xs">
                        <ContactMap guest={guest} contact={contact} lang={lang} />
                    </Col>
                </Row>
			</Col>
            <Col md={4}>
                <ContactForm contact={contact} lang={lang} sending={sending} sendResults={sendResults} handleSend={(e)=>handleSend(e)}/>
            </Col>
            <Col md={8} className="hidden-xs">
                <Row>
                    <Col sm={12}>
                        <ContactInfo guest={guest} contact={contact} lang={lang} />
                    </Col>
                    <Col sm={12} className="hidden-xs">
                        <ContactMap guest={guest} contact={contact} lang={lang} />
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
}

export default Contact
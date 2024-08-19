import React, { useState } from 'react'
import { translate } from '../../translations/translate'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Language from '../settings/language'
import { isEmpty } from '../../utils/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

function LoginPage(props) {
    const {socket, settings} = props
    const {lang} = settings

    const [guest, setGuest] = useState(false)
    const [showError, setShowError] = useState(false)
    const [input, setInput] = useState('')

    function handleClick(){
        setShowError(false)
        if(!guest && isEmpty(input)){
            setShowError(true)
            return
        }
        let payload = {input, guest}
        socket.emit('login', payload)
    }

    function handleChange(){
        setGuest(!guest)
    }

    function handleInput(e){
        setInput(e.target.value)
    }

    return <div id='login' className="full-height">
        <div className="language_container">
            <Language title={lang}></Language>
        </div>
        <div className="full-height-content">
            <Container>
                <Row>
                    <Col sm={1} md={2} lg={3}></Col>
                    <Col sm={10} md={8} lg={6}>                        
                        <div className="header_title_container">
                            <div id="login_form" className="header_title shadow_convex">
                                <Row>
                                    <Col sm={12}><h2>{translate({lang: lang, info: "login"})}</h2></Col>
                                </Row>
                                <Form className="row">
                                    <Col sm={8}>
                                        <input type="password" autoComplete="off" value={input} onChange={(e)=>{handleInput(e)}}/>
                                    </Col>
                                    <Col sm={4}>
                                        <div id="login_guest" className="checkbox_radio_container">
                                            <label>
                                                <input className="input_light" type="checkbox" name="checkbox1" checked={guest} onChange={()=>{handleChange()}}/>
                                                <h6>
                                                    <span className="checkmark_text">{translate({lang: lang, info: "guest_button"})}</span>
                                                </h6>
                                            </label>
                                        </div>
                                    </Col>
                                </Form>
                                <Row>
                                    <Col sm={12}>
                                        <Button id="login_enter" onClick={()=>handleClick()} className="mybutton button_transparent02" type="button">
                                            <FontAwesomeIcon icon={faRightToBracket} /> {translate({lang: lang, info: "enter"})}
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        { showError ? <div className="alert alert-danger">{translate({lang: lang, info: "login_error"})}</div> : null } 
                    </Col>
                    <Col sm={1} md={2} lg={3}></Col>
                </Row>
            </Container>
        </div>
    </div>
}

export default LoginPage
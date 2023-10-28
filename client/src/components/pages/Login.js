import React, { useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import $ from 'jquery'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { translate } from '../translations/translate'
import Language from './settings/language'
import { getCookie } from './utils'

function Login(props){
    const [toggleVisitor, settoggleVisitor] = useState(false)
    const [showError, setShowError] = useState(false)    

    function handleClick(){
        if(!toggleVisitor && (typeof $('#login_password').val() === "undefined" || $('#login_password').val() === "null" || $('#login_password').val() === null || $('#login_password').val() === "")){
            setShowError(true)
            return
        }
        let payload = {
            login_password: $('#login_password').val(),
            login_visitor: toggleVisitor,
            reason: "load",
        }
        props.choice(payload)
    }
    function handleChange(){
        if(toggleVisitor){
            settoggleVisitor(false)
        } else {
            settoggleVisitor(true)
        }
    }
    let done = ""
    if(toggleVisitor){
        done = " done"
    }
    return <div id='login' className={"full-height " + props.darkMode}>
            <div className="full-height-content">
                <div id="language_container">
                    <Language title={props.lang}></Language>
                </div>
                <Container>
                    <Row>
                        <Col sm={1} md={2} lg={3}></Col>
                        <Col sm={10} md={8} lg={6}>                        
                            <div id="login_form" className="header-title-container shadow_convex">
                                <Row>
                                    <Col sm={12}><h2>{translate({lang: props.lang, info: "login_title"})}</h2></Col>
                                </Row>
                                <Form className="row">
                                    <Col sm={8}>
                                        <Form.Group className="mb-3" controlId="login_password">
                                            <Form.Control className="shadow_concav" type="password" placeholder="Password" autoComplete="off"/>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={4}>
                                        <Button id="login_visitor" onClick={()=>handleChange()} className={"button-white"+done} type="button">
                                            {done ? <span className="checkmark_box">
                                                <span className="checkmark">
                                                    <div className="checkmark_stem"></div>
                                                    <div className="checkmark_kick"></div>
                                                </span>
                                            </span> : null}
                                            <span className="checkmark_text">{translate({lang: props.lang, info: "visitor_button"})}</span>
                                        </Button>
                                    </Col>
                                </Form>
                                <Row>
                                    <Col sm={12}>
                                        <Button id="login_enter" onClick={()=>handleClick()} className="button-white" type="button">
                                            {translate({lang: props.lang, info: "login_button"})}
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                            { showError ? <div className="alert alert-danger">{translate({lang: props.lang, info: "login_error"})}</div> : null } 
                        </Col>
                        <Col sm={1} md={2} lg={3}></Col>
                    </Row>
                </Container>
            </div>
    </div>
}

export default Login
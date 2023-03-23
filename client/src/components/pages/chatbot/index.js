import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { changePage } from '../../reducers/page'
import { translate } from '../../translations/translate'
import under_construction from '../../img/under_construction.png'

function Chatbot(props){
    const {lang, mode} = props
    let dispatch = useDispatch()

    useEffect(() => {
        
    }, [])

    function handleBack(){
        dispatch(changePage("default"))
    }

    return <div id="chatbot" class="full-height">
        <div class="full-height-title"></div>
        <div class="full-height-content">
            <Container className="chatbot_container">
                <Row>
                    <Col sm={12} className="chatbot">
                        <img id="under_construction" src={under_construction} alt="under construction" />
                    </Col>
                    <Col sm={12}>
                        <div className="text-black button-white text-uppercase shadow_convex" style={{'cursor': 'pointer'}} onClick={()=>{handleBack()}}>
                            {translate({lang: lang, info: "back"})}
                        </div>
                        <a href="/portofolio/chatbot/index.html" target="_blank" className="text-black button-white text-uppercase shadow_convex">
                            {translate({lang: lang, info: "see_old_chatbot"})}
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>   
    </div>
}
export default Chatbot
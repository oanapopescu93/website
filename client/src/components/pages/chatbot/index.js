import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import $ from 'jquery'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { changePage } from '../../reducers/page'
import { changeMessage } from '../../reducers/chatbot'
import { translate } from '../../translations/translate'
import Settings from '../settings/settings'

function ChatBox(props){
    let visitor = props.visitor //true = visitor; false = HR / future employer
    return <>
        {(() => {                       
            switch (props.choice) {
                case "ask_choice":
                    return <div className="chatbot_choices">
                        <p>{translate({lang: props.lang, info: "would_you_like_to"})}</p>
                        <div className="text-black button-white shadow_convex" onClick={()=>{props.clickChoice("know_more_about_me")}}>
                            {translate({lang: props.lang, info: "know_more_about_me"})}
                        </div>
                        <div className="text-black button-white shadow_convex" onClick={()=>{props.clickChoice("contact_me")}}>
                            {translate({lang: props.lang, info: "bot_contact_me"})}
                        </div>
                    </div>
                case "contact_me":
                case "contact_me_yes":
                    return <div className="chatbot_choices">
                        {!visitor ? <p>{translate({lang: props.lang, info: "phone"})} <a target='_top' href='tel:+40729699148'>0729.699.148</a></p> : null}
                        <p>{translate({lang: props.lang, info: "email"})} <a target='_top' href='mailto:oanapopescu93@gmail.com'>oanapopescu93@gmail.com</a></p>
                        <p>Linkedin <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/oanapopescu93'>https://www.linkedin.com/in/oanapopescu93</a></p>
                        {!visitor ? <p>{translate({lang: props.lang, info: "please_contact_me"})}</p> : null}  
                    </div>
                case "show_git_account":
                    return <div className="chatbot_choices">
                        <p>My git is <a target='_blank'rel="noopener noreferrer" href="https://github.com/oanapopescu93">https://github.com/oanapopescu93</a></p>
                    </div>
                case "show_contact_me":
                    return <div className="chatbot_choices">
                        <p>{translate({lang: props.lang, info: "would_you_like_to_contact_me"})}</p>
                        <div className="text-black button-white shadow_convex" onClick={()=>{props.clickChoice("contact_me_yes")}}>
                            {translate({lang: props.lang, info: "yes"})}
                        </div>
                        <div className="text-black button-white shadow_convex" onClick={()=>{props.clickChoice("contact_me_no")}}>
                            {translate({lang: props.lang, info: "no"})}
                        </div>
                    </div>
                case "contact_me_no":
                    return <div className="chatbot_choices">
                        <p>Ok</p>
                    </div>
                default:
                    return
            }
        })()}
    </>
}

function Chat(props){
    const [message, setMessage] = useState('')
    let messages = useSelector(state => state.chatbot.messages)
    let visitor = useSelector(state => state.settings.visitor)
    let dispatch = useDispatch()  

    const scrollToBottom = () => {
        $(".chatbot_bubble_container").scrollTop($(".chatbot_bubble_container").scrollHeight);
    }

    useEffect(scrollToBottom, [messages])

    useEffect(() => {
        if(messages && messages.length === 0){
            let array = [
                {message: translate({lang: props.lang, info: "bot_welcome"})},
                {message: translate({lang: props.lang, info: "bot_question_01"})},
                {choice: "ask_choice", visitor: visitor}
            ]
            botTalk(array, 1000)        
        }
	}, [])

    function botTalk(array, start_time=100, time=500){
        if(array && array.length>0){
            let i = 0
            setTimeout(function(){ 
                (function loop() {
                    dispatch(changeMessage(array[i]))
                    if (++i < array.length) {
                        setTimeout(loop, time)
                    }
                })() 
            }, start_time)
        }
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(changeMessage({message: message}))
        setMessage("")
    }

    function handleClickChoice(choice){
        switch (choice) {
            case "know_more_about_me":  
                let array = [
                    {message: translate({lang: props.lang, info: "about_me_01"})},
                    {message: translate({lang: props.lang, info: "about_me_02"})},
                    {message: translate({lang: props.lang, info: "about_me_03"})},
                    {choice: "show_git_account"},
                    {choice: "show_contact_me"},
                ]
                botTalk(array)      
                break                       
            case "contact_me":                
            case "contact_me_yes":
                dispatch(changeMessage({choice: choice}))
                break
            case "contact_me_no":
                dispatch(changeMessage({message: translate({lang: props.lang, info: "goodbye"})}))                
                break
        }
    }
    
    return <div className="box-form">
        <Form onSubmit={(e)=>{handleClick(e)}}>
            <Row>
                <Col sm={12} className="chatbot_display_container form-control shadow_concav">            
                    <div id="chatbot_display">
                        {(() => {                            
                            if(messages.length === 0){
                                return
                            } else {
                                return <>
                                    {messages.map(function(item, i){
                                        return <div key={i} className={'chatbot_bubble_container ' + item.type}>
                                            <div className='chatbot_bubble'>
                                                {item.choice ? <ChatBox lang={props.lang} choice={item.choice} clickChoice={(e)=>handleClickChoice(e)} visitor={visitor}></ChatBox> : <span>{item.message}</span>}                                                
                                            </div>
                                        </div>
                                    })}
                                </>
                            }
                        })()}
                    </div>
                </Col>                
            </Row>
        </Form>
    </div>
}

function Chatbot(props){
    let dispatch = useDispatch()
    function handleBack(){
        dispatch(changePage("default"))
    }

    return <>
        <div className="settings_container_chatbot">
            <Settings lang={props.lang}></Settings>
        </div>
        <div id="chatbot" className="full-height">
            <div className="full-height-content">
                <Container className="chatbot_container">
                    <Row>
                        <Col sm={12}>
                            <h2>Chatbot</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>                        
                            <div className="chatbot">
                                <Chat lang={props.lang}></Chat>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div className="text-black button-white shadow_convex" style={{'cursor': 'pointer'}} onClick={()=>{handleBack()}}>
                                {translate({lang: props.lang, info: "back"})}
                            </div>
                            <a href="/portofolio/chatbot/index.html" rel="noopener noreferrer" target="_blank" className="text-black button-white shadow_convex">
                                {translate({lang: props.lang, info: "see_old_chatbot"})}
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>   
        </div>
    </>
}
export default Chatbot
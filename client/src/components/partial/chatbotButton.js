import React from 'react'
import { translate } from '../../translations/translate'
import { useDispatch } from 'react-redux'
import { changePopup } from '../../reducers/popup'
import chatbot_dark from '../../img/chatbot/chatbot_dark.png'
import chatbot_light from '../../img/chatbot/chatbot_light.png'

function ChatbotButton(props) {
    const { settings } = props
    const { lang, mode } = settings

    function chooseImage(){
        switch (mode) {
            case 'dark':
                return chatbot_dark
            default:
                return chatbot_light
        }      
    }
	
	let dispatch = useDispatch()

    function handleClick(){
        let payload = {
			open: true,
			template: "chatbot",
			title: translate({lang, info: "chatbot"}),
			size: "lg",
		}
		dispatch(changePopup(payload))
    }

    return <div id="chatbotButton" onClick={() => {handleClick()}}>
        <img src={chooseImage()} alt="chatbot" title="chatbot" />
    </div>
}

export default ChatbotButton
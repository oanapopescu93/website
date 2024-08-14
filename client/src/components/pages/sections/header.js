import React from 'react'
import { useDispatch } from 'react-redux'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { translate } from '../../../translations/translate'
import { scroll_anywhere } from '../../../utils/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import logo_icon_light from '../../../img/logo-rat-white.png'
import logo_icon_dark from '../../../img/logo-rat-blue.png'
import { changePopup } from '../../../reducers/popup'

function Header(props) {
    const {settings} = props
    const {lang, mode} = settings
	
	let dispatch = useDispatch()

	function handleChatBot(){
		let payload = {
			open: true,
			template: "chatbot",
			title: translate({lang: lang, info: "chatbot"}),
			size: "lg",
		}
		dispatch(changePopup(payload))
	}

    return <Container>
        <Row>
            <Col sm={12}>
                <div className="header_title_container">
                    <div className="header_title text-center shadow_convex">
                        <Row>
                            <Col sm={12}>
                                {(() => {
                                    if(mode && (mode === '' || mode === 'light')){
                                        return <img className="logo" alt="logo_icon" src={logo_icon_dark} />
                                    } else {                                
                                        return <img className="logo" alt="logo_icon" src={logo_icon_dark} />
                                    }
                                })()}
                                <h1 className="text-uppercase">Oana Popescu</h1>
                                <h2 className="text-uppercase color_text_blue">Frontend/Javascript/React developer</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={2}></Col>
                            <Col sm={8} id="header-sapou">
                                <hr className="line"></hr>
                                <p dangerouslySetInnerHTML={{ __html: translate({lang: lang, info: "header_description"}) }}></p>
                                <hr className="line"></hr>
                            </Col>
                            <Col sm={2}></Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <div className="button_action_group">
                                    <Button type="button" className="mybutton button_accent shadow_convex" onClick={()=>scroll_anywhere("about")}>
                                        {translate({lang: lang, info: "read_more"})}
                                    </Button>
                                    <Button type="button" className="mybutton button_accent shadow_convex" onClick={()=>scroll_anywhere("contact")}>
                                        {translate({lang: lang, info: "contact_me"})}
                                    </Button>
                                    {/* <Button type="button" className="mybutton button_accent shadow_convex" onClick={()=>handleChatBot()}>
                                        {translate({lang: lang, info: "chatbot"})}
                                    </Button> */}
                                </div>                        
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
        <ul className="scroll">
            <li onClick={()=>scroll_anywhere("about")}><FontAwesomeIcon icon={faAngleDown} /></li>
		</ul>
    </Container>
}

export default Header
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import { translate } from '../../translations/translate'
import { scroll_anywhere } from '../../utils/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faGear } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { changePopup } from '../../reducers/popup'

function Navbar(props){
    const { home, settings } = props
    const { contact } = home
    const { lang } = settings

    let myContact = contact ? contact[lang] : contact[lang]

	const [moveAway, setMoveAway] = useState("")
	const [change, setChange] = useState("")

	let dispatch = useDispatch()

	function handleMenu(){
		if(moveAway === ""){
			setMoveAway("show")
		} else {
			setMoveAway("")
		}
		if(change === ""){
			setChange("change")
		} else {
			setChange("")
		}
	}

	function handleSettings(){
		let payload = {
			open: true,
			template: "settings",
			title: translate({lang: lang, info: "settings"}),
			size: "sm",
		}
		dispatch(changePopup(payload))
	}
	
	return <div id = "mynavbar" className="mynavbar">			
			<Container>	
				<div id="menu" onClick={()=>handleMenu()}>
					<span className="sr-only">Toggle navigation</span>
					<span className={"bar1 " + change}></span>
					<span className={"bar2 " + change}></span>
					<span className={"bar3 " + change}></span>
				</div>					
				<div className={"navbar-box 1 " + moveAway}>
					<ul className="nav-left">
						<li onClick={()=>scroll_anywhere("header")}><span><FontAwesomeIcon icon={faHouse} /></span></li>
						<li onClick={()=>scroll_anywhere("about")}><span>{translate({lang: lang, info: "about"})}</span></li>
						<li onClick={()=>scroll_anywhere("portofolio")}><span>{translate({lang: lang, info: "portofolio"})}</span></li>
						<li onClick={()=>scroll_anywhere("contact")}><span>{translate({lang: lang, info: "contact"})}</span></li>						
					</ul>
				</div>
				<ul className="nav-right">					
					<li>
						<a href={myContact.linkedin ? myContact.linkedin : "https://www.linkedin.com/in/oanapopescu93"} rel="noopener noreferrer" target="_blank">
							<FontAwesomeIcon icon={faLinkedinIn} />
						</a>
					</li>
					<li>
						<a href={myContact.github ? myContact.github : "https://github.com/oanapopescu93"} rel="noopener noreferrer" target="_blank">
							<FontAwesomeIcon icon={faGithub} />
						</a>
					</li>
					<li onClick={()=>handleSettings()}><FontAwesomeIcon icon={faGear} /></li>
				</ul>
			</Container>		
	</div>
}

export default Navbar
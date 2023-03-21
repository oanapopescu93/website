import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import { scroll_anywhere } from '../utils'
import ukraine from '../../img/ukraine.svg'
import Language from './language'
import { translate } from '../../translations/translate'

function Navbar(props){
	const [moveAway, setMoveAway] = useState("")
	const [change, setChange] = useState("")

	function handleMenu(){
		if(moveAway === ""){
			setMoveAway("move-away")
		} else {
			setMoveAway("")
		}
		if(change === ""){
			setChange("change")
		} else {
			setChange("")
		}
	}
	
	return <div id = "mynavbar" className="mynavbar">
			<Language></Language>
			<Container>	
				<div id="menu" onClick={()=>handleMenu()}>
					<span className="sr-only">Toggle navigation</span>
					<span className={"bar1 " + change}></span>
					<span className={"bar2 " + change}></span>
					<span className={"bar3 " + change}></span>
				</div>
				<div className={"navbar-box " + moveAway}>
					<ul className="nav-left">
						<li className="active">
							<a href="#header" className="scroll-button glyphicon glyphicon-home" onClick={(e)=>{scroll_anywhere(e)}}> </a>
						</li>
						<li><a href="#about" className="scroll-button" onClick={(e)=>{scroll_anywhere(e)}}>{translate({lang: props.lang, info: "about"})}</a></li>
						<li><a href="#portofolio" className="scroll-button" onClick={(e)=>{scroll_anywhere(e)}}>{translate({lang: props.lang, info: "portofolio"})}</a></li>
						<li><a href="#contact" className="scroll-button" onClick={(e)=>{scroll_anywhere(e)}}>{translate({lang: props.lang, info: "contact"})}</a></li>
					</ul>
					<ul className="nav-right hidden-xs" style={{"marginRight":"0px"}}>
						{!props.login_visitor ? <li>
							<a href="tel:+40729699148" target="_top">
								<span>0729.699.148</span>
							</a>
						</li> : null}								
						<li>
							<a href="https://www.linkedin.com/in/oanapopescu93/" rel="noopener noreferrer" target="_blank">
								<span className="fa fa-linkedin"></span>
							</a>
						</li>
						<li>
							<a href="https://github.com/oanapopescu93" rel="noopener noreferrer" target="_blank">
								<span className="fa fa-github"></span>
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/fundraisers/explore/search/charities/?query=ukraine" rel="noopener noreferrer" target="_blank">
								<img id="ukraine_icon" alt="ukraine_icon" src={ukraine} style={{"width":"20px"}}/>
							</a>									
						</li>
					</ul>
				</div>
			</Container>		
	</div>
}

export default Navbar
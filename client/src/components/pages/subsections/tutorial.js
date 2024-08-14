import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { changePopup } from '../../../reducers/popup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { translate } from '../../../translations/translate'

function Tutorial(props){
    const { settings } = props
    const { lang } = settings

	const [closed, setClosed] = useState('')
    let dispatch = useDispatch()
	let login_visitor = props.login_visitor
	let pos = " down"
	if(login_visitor === true || login_visitor === "true"){
		pos = " up"
	}

    function handleClick(){
        let payload = {
            open: true,
            template: "tutorials",
            title: translate({lang: lang, info: "tutorials"}),
            size: "lg",
        }
       dispatch(changePopup(payload))
    }
	function handleSlide(){
        if(closed === ''){
            setClosed('closed')
        } else {
            setClosed('')
        }
    }	
	
	return <div className={"mytutorials_container " + closed +pos}>
		<div className="mytutorials_close shadow_convex" onClick={()=>{handleSlide()}}>x</div>
		<div id="mytutorials" className="mytutorials shadow_convex" onClick={()=>{handleClick()}}>
            <FontAwesomeIcon icon={faBook} /><span>{translate({lang: lang, info: "tutorials"})}</span>
		</div>
	</div>
}
export default Tutorial
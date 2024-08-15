import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { changePopup } from '../../../reducers/popup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { translate } from '../../../translations/translate'

function Tutorial(props){
    const { user, settings } = props
    const { lang } = settings
    const { guest } = user

	const [closed, setClosed] = useState('')
    let dispatch = useDispatch()
	let pos = " up"
	if(parseInt(guest) === 0){
		pos = " down"
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
	
	return <div id="tutorials_tag" className={"tag_container " + closed + pos}>
		<div className="tag_close shadow_convex" onClick={()=>{handleSlide()}}>x</div>
		<div className="tag shadow_convex" onClick={()=>{handleClick()}}>
            <FontAwesomeIcon icon={faBook} /><span>{translate({lang: lang, info: "tutorials"})}</span>
		</div>
	</div>
}
export default Tutorial
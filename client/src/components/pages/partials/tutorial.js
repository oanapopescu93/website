import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { changePopup } from '../../reducers/popups'
import {translate} from '../../translations/translate'

function Tutorial(props){
	const [closed, setClosed] = useState('')
    let dispatch = useDispatch()
	let login_visitor = props.login_visitor
	let pos = " down"
	if(login_visitor === true || login_visitor === "true"){
		pos = " up"
	}

    function handleClick(){
        dispatch(changePopup({open: true, title: translate({lang: props.lang, info: "tutorials"}), template: "tutorials", data: props.tutorials, size: "lg"}))
    }
	function handleSlide(){
        if(closed === ''){
            setClosed('closed')
        } else {
            setClosed('')
        }
    }	
	
	return <div className={"mytutorials_container " + closed +pos}>
		<div className="mytutorials_close shadow_convex" onClick={()=>{handleSlide()}}>
			<i className="fa fa-times"></i>
		</div>
		<div id="mytutorials" className="mytutorials shadow_convex" onClick={()=>{handleClick()}}>
			<i className="fa fa-book" data-toggle="tooltip" data-placement="left" title="" data-original-title="My tutorials"></i>
		</div>
	</div>
}
export default Tutorial
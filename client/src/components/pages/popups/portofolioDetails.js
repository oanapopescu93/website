import React from 'react'
import { translate } from '../../translations/translate'

function PortofolioDetails(props){ 
    return <>
        <div className="title">
			<p><b>{props.item.title}</b></p>
			{props.item.git ? <a className="modal_button" href={props.item.git} target="_blank" rel="noopener noreferrer">                
				{translate({lang: props.lang, info: "see_the_code"})}
            </a> : null}
			{props.item.link ? <a className="modal_button" href={props.item.link} target="_blank" rel="noopener noreferrer">
				{translate({lang: props.lang, info: "take_a_look"})}
            </a> : null}
		</div>
		{props.item.platform ? <div className="platform"><b>{translate({lang: props.lang, info: "platform"})}: </b>{props.item.platform}</div> : null}		
		<div className="used">
			<b>{translate({lang: props.lang, info: "what_I_used"})}: </b><br></br>
			{
				props.item.used.map(function(x, i){
					return <span key={i} className="box">{x}</span>
				})
			}
		</div>
    </>
}

export default PortofolioDetails
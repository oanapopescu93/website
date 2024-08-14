import React from 'react'
import { translate } from '../../translations/translate'

function PortofolioDetails(props){ 
    const {data, settings} = props
    const {lang} = settings

    return <>
        <div className="portofolio_buttons">
            {data.git ? <a className="mybutton button_accent shadow_convex" href={data.git} target="_blank" rel="noopener noreferrer">                
                {translate({lang: lang, info: "see_the_code"})}
            </a> : null}
            {data.link ? <a className="mybutton button_accent shadow_convex" href={data.link} target="_blank" rel="noopener noreferrer">
                {translate({lang: lang, info: "take_a_look"})}
            </a> : null}
        </div>
        {data.platform ? <div className="portofolio_platform"><b>{translate({lang: lang, info: "platform"})}: </b>{data.platform}</div> : null}		
        <div className="portofolio_used">
            <b>{translate({lang: lang, info: "what_I_used"})}: </b><br></br>
            {data.used.map(function(x, i){
                return <span key={i} className="box">{x}</span>
            })}
        </div>
    </>
}
export default PortofolioDetails
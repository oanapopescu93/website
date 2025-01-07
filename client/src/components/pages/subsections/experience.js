import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { translate } from '../../../translations/translate'
import { scroll_anywhere } from '../../../utils/utils'

function Experience(props) {
    const { home, settings } = props
    const { experience } = home
    const { lang } = settings

    useEffect(() => {
        if(document.getElementById('about_content_box')){
            document.getElementById('about_content_box').scrollTo(0, 0)
        }       
	}, [])

    return <Row id="experience_row">
        {(() => {
            if(experience && experience.length>0){
                return <Col sm={12}>
                    {experience.map(function(item, t){
                            return(
                                <div key={t}>
                                    <div className="job_header">
                                        {item.job_title ? <div className="job_title"><h4 className="text-uppercase">{translate({lang: lang, info: item.job_title})}</h4></div> : null}
                                        {item.period ? <div className="period">{'(' + translate({lang: lang, info: item.period}) + ')'}</div> : null}
                                        {(() => {
                                            if(item.company_name){
                                                if(item.link_company){
                                                    return <div className="company_name"><a href={item.link_company} target="_blank" rel="noopener noreferrer"><b>{translate({lang: lang, info: item.company_name})}</b></a></div>
                                                } else {
                                                    return <div className="company_name"><b>{translate({lang: lang, info: item.company_name})}</b></div>
                                                }
                                            }
                                        })()}
                                    </div>
                                    <div className="job_body">
                                        {item.job_location ? <div className="job_location">
                                            <b>{translate({lang: lang, info: "location"})}: </b>
                                            {translate({lang: lang, info: item.job_location})}
                                        </div> : null}
                                        {item.company_description ? <div className="company_description">
                                            <b>{translate({lang: lang, info: "company_profile"})}: </b>
                                            {item.company_description}
                                        </div> : null}
                                        {item.job_description ? <div className="job_description">
                                            <b>{translate({lang: lang, info: "tools_used"})}: </b>
                                            {item.job_description}
                                        </div> : null}
                                        {(() => {
                                            if(item.job_description_list && item.job_description_list.length>0){
                                                return(
                                                    <div className="projects">
                                                        <b>{translate({lang: lang, info: "my_work"})}: </b>
                                                        <ul>
                                                            {item.job_description_list.map(function(x, i){
                                                                return <li key={i}>{translate({lang: lang, info: x})}</li>
                                                            })}
                                                        </ul>
                                                    </div>
                                                )
                                            } else {
                                                return
                                            }
                                        })()}
                                        {item.platform_used ? <div className="platform_used">
                                            <b>{translate({lang: lang, info: "platforms_used"})}: </b>
                                            {item.platform_used}
                                        </div> : null}
                                        {item.accomplishments ? <div className="accomplishments">
                                            <b>{translate({lang: lang, info: "accomplishments"})}: </b>
                                            {item.platform_used}
                                        </div> : null}
                                        {(() => {
                                            if(item.projects && item.projects.length>0){
                                                return <div className="projects">
                                                    <b>{translate({lang: lang, info: "projects"})}: </b>
                                                    <ul>
                                                        {item.projects.map(function(y, j){
                                                            if(y.project_link === "portofolio"){
                                                                return <li key={j}><a href={'#' + y.project_link} className="scroll-button" onClick={()=>{scroll_anywhere("portofolio")}}>{y.project_name}</a></li>
                                                            } else {
                                                                return <li key={j}><a target="_blank" rel="noopener noreferrer" href={y.project_link}>{y.project_name}</a></li>
                                                            }
                                                        })}
                                                    </ul>
                                                </div>
                                            } else {
                                                return
                                            }
                                        })()}
                                        {(() => {
                                            if(item.personal_projects && item.personal_projects.length>0){
                                                return <div className="projects">
                                                    <b>{translate({lang: lang, info: "personal_projects"})}: </b>
                                                    <ul>
                                                        {item.personal_projects.map(function(y, j){
                                                            if(y.project_link === "portofolio"){
                                                                return <li key={j}><a href={'#' + y.project_link} className="scroll-button" onClick={()=>{scroll_anywhere("portofolio")}}>{y.project_name}</a></li>
                                                            } else {
                                                                return <li key={j}><a target="_blank" rel="noopener noreferrer" href={y.project_link}>{y.project_name}</a></li>
                                                            }
                                                        })}
                                                    </ul>
                                                </div>
                                            } else {
                                                return
                                            }
                                        })()}
                                    </div>
                                </div>
                            )
                    })}
                </Col>
            } else {
                return <p>{translate({lang: lang, info: "error"})}</p>
            }
        })()}
    </Row>
}

export default Experience
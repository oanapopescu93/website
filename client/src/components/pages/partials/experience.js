import React, { useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import { scroll_anywhere } from '../utils'
import { translate } from '../../translations/translate'

function Experience(props){	
	let experience = props.experience[props.lang]

	useEffect(() => {
        if(document.getElementById('about_content_box')){
            document.getElementById('about_content_box').scrollTo(0, 0)
        }       
	}, [])

	return(
		<Row id="experience_row">
			{(() => {
				if(experience && experience.length>0){
					return(
						<div className="col-sm-12">
							{
								experience.map(function(item, t){
									return(
										<div key={t}>
											<div className="job_header">
												{item.job_title ? <div className="job_title"><h4 className="text-uppercase">{item.job_title}</h4></div> : null}
												{item.period ? <div className="period">{'(' + item.period + ')'}</div> : null}
												{(() => {
													if(item.company_name){
														if(item.link_company){
															return <div className="company_name"><a href={item.link_company} target="_blank" rel="noopener noreferrer"><b>{item.company_name}</b></a></div>
														} else {
															return <div className="company_name"><b>{item.company_name}</b></div>
														}
													}
												})()}
											</div>
											<div className="job_body">
												{item.job_location ? <div className="job_location">
													<b>{translate({lang: props.lang, info: "location"})}: </b>
													{item.job_location}
												</div> : null}
												{item.company_description ? <div className="company_description">
													<b>{translate({lang: props.lang, info: "company_profile"})}: </b>
													{item.company_description}
												</div> : null}
												{item.job_description ? <div className="job_description">
													<b>{translate({lang: props.lang, info: "tools_used"})}: </b>
													{item.job_description}
												</div> : null}
												{(() => {
													if(item.job_description_list && item.job_description_list.length>0){
														return(
															<div className="projects">
																<b>{translate({lang: props.lang, info: "my_work"})}: </b>
																<ul>
																	{
																		item.job_description_list.map(function(x, i){
																			return(
																				<li key={i}>{x}</li>
																			)
																		})
																	}
																</ul>
															</div>
														)
													} else {
														return
													}
												})()}
												{item.platform_used ? <div className="platform_used">
													<b>{translate({lang: props.lang, info: "platforms_used"})}: </b>
													{item.platform_used}
												</div> : null}
												{item.accomplishments ? <div className="accomplishments">
													<b>{translate({lang: props.lang, info: "accomplishments"})}: </b>
													{item.platform_used}
												</div> : null}
												{(() => {
													if(item.projects && item.projects.length>0){
														return(
															<div className="projects">
																<b>{translate({lang: props.lang, info: "projects"})}: </b>
																<ul>
																	{
																		item.projects.map(function(y, j){
																			if(y.project_link === "portofolio"){
																				return <li key={j}><a href={'#' + y.project_link} className="scroll-button" onClick={(e)=>{scroll_anywhere(e)}}>{y.project_name}</a></li>
																			} else {
																				return <li key={j}><a target="_blank" rel="noopener noreferrer" href={y.project_link}>{y.project_name}</a></li>
																			}
																		})
																	}
																</ul>
															</div>
														)
													} else {
														return
													}
												})()}
												{(() => {
													if(item.personal_projects && item.personal_projects.length>0){
														return(
															<div className="projects">
																<b>{translate({lang: props.lang, info: "personal_projects"})}: </b>
																<ul>
																	{
																		item.personal_projects.map(function(y, j){
																			if(y.project_link === "portofolio"){
																				return <li key={j}><a href={'#' + y.project_link} className="scroll-button" onClick={(e)=>{scroll_anywhere(e)}}>{y.project_name}</a></li>
																			} else {
																				return <li key={j}><a target="_blank" rel="noopener noreferrer" href={y.project_link}>{y.project_name}</a></li>
																			}
																		})
																	}
																</ul>
															</div>
														)
													} else {
														return
													}
												})()}
											</div>
										</div>
									)
								})
							}
						</div>
					)
				} else {
					return <p>{translate({lang: props.lang, info: "error_experience"})}</p>
				}
			})()}
		</Row>
	)
}

export default Experience
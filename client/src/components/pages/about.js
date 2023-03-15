import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Skills from './partials/skills'
import Experience from './partials/experience'
import Education from './partials/education'
import { scroll_anywhere } from './utils'
import $ from 'jquery' 
import {translate} from '../translations/translate'

function About(props){
	const [visible, setVisible] = useState( "skills")
	function handleChangeTab(id){
		setVisible(id)
		$('#about-div .about_tabs').removeClass('open')
		$('#'+id).parent().parent().addClass('open')
	}
	return <Container>
			<Row id="about-div">
				<Col id="about_tabs_main" className="about_tabs_main" xs={12} sm={4} md={4} lg={2}>
					<div id="skills" className="about_tabs open" onClick={()=>{handleChangeTab('skills')}}>
						<div className="about_tabs_header">
							<h4 className="about_tabs_title text-uppercase grey666 shadow_convex">{translate({lang: props.lang, info: "skills"})}</h4>
						</div>
					</div>
					<div id="experience" className="about_tabs" onClick={()=>{handleChangeTab('experience')}}>
						<div className="about_tabs_header">
							<h4 className="about_tabs_title text-uppercase grey666 shadow_convex">{translate({lang: props.lang, info: "experience"})}</h4>
						</div>
					</div>
					<div id="education" className="about_tabs" onClick={()=>{handleChangeTab('education')}}>
						<div className="about_tabs_header">
							<h4 className="about_tabs_title text-uppercase grey666 shadow_convex">{translate({lang: props.lang, info: "education"})}</h4>
						</div>
					</div>
				</Col>
				<Col id="about_content_main" className="about_content_main" xs={12} sm={8} md={8} lg={10}>
					<div id="about_content_box" className="about_content_box shadow_concav">									
						{(() => {
							switch (visible) {
								case "skills":
									return <Skills lang={props.lang} language={props.data.language} pie_colors={props.data.pie_colors} skills={props.data.skills} skills_title={props.data.skills_title}></Skills>
								case "experience":
									return <Experience lang={props.lang} experience={props.data.experience}></Experience>
								case "education":
									return <Education lang={props.lang} education={props.data.education}></Education>
								default:
									return(
										<Skills lang={props.lang} language={props.data.language} pie_colors={props.data.pie_colors} skills={props.data.skills} skills_title={props.data.skills_title}></Skills>
									)						
							}
						})()}	
					</div>
				</Col>
			</Row>
			<Row>
				<Col xs={12} sm={4} md={4} lg={2}></Col>
				<Col id="go_portofolio" className="about_content_main" xs={12} sm={8} md={8} lg={10}>
					<a href="#portofolio" className="button-white text-black text-uppercase scroll-button shadow_convex" onClick={(e)=>{scroll_anywhere(e)}}>
						{translate({lang: props.lang, info: "see_my_projects"})}
					</a>
				</Col>
			</Row>
	</Container>
}

export default About
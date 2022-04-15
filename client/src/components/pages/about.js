import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Skills from './partials/skills';
import Experience from './partials/experience';
import Education from './partials/education';
import { scroll_anywhere } from './utils';
import $ from 'jquery'; 

var self;
class About extends Component {
	constructor(props) {
		super(props);
		self = this;
		self.state = {
			visible: "skills",
			language: props.data.language,
			pie_colors: props.data.pie_colors,
			skills: props.data.skills,
			skills_title: props.data.skills_title,
			education: props.data.education,
			experience: props.data.experience,
		};
	}
	componentDidMount() {
		$('body').on('click', '#about-div .about_tabs_title', function (e) {	
			var parent_id = $(this).parent().attr('id');
			
			if(!$(this).parent().parent().hasClass('open')){
				$('#about-div .about_tabs').removeClass('open');
				$(this).parent().parent().addClass('open');
			} else {				
				$(this).parent().parent().removeClass('open');
			}	

			if(parent_id === "skills"){
				self.setState({ visible: "skills" });
			} else if(parent_id === "experience"){
				self.setState({ visible: "experience" });
			} else if(parent_id === "education"){
				self.setState({ visible: "education" });	
			};
		});
	}
	render() {
		return (
			<Container>
				<Row id="about-div">
					<Col id="about_tabs_main" className="about_tabs_main" xs={12} sm={4} md={4} lg={2}>
						<div id="about_tabs_0" className="about_tabs open">
							<div id="skills" className="about_tabs_header">
								<h3 className="about_tabs_title text-uppercase grey666">skills</h3>
							</div>
						</div>
						<div id="about_tabs_1" className="about_tabs">
							<div id="experience" className="about_tabs_header">
								<h3 className="about_tabs_title text-uppercase grey666">experience</h3>
							</div>
						</div>
						<div id="about_tabs_2" className="about_tabs">
							<div id="education" className="about_tabs_header">
								<h3 className="about_tabs_title text-uppercase grey666">education</h3>
							</div>
						</div>
					</Col>
					<Col id="about_content_main" className="about_content_main" xs={12} sm={8} md={8} lg={10}>
						<div id="about_content_box" className="about_content_box">									
							{(() => {
								switch (self.state.visible) {
									case "skills":
										return (
											<Skills language={self.state.language} pie_colors={self.state.pie_colors} skills={self.state.skills} skills_title={self.state.skills_title}></Skills>
										)
									case "experience":
										return (
											<Experience experience={self.state.experience}></Experience>
										)									
									case "education":
										return (
											<Education education={self.state.education}></Education>
										)
									default:
										return(
											<Skills language={self.state.language} pie_colors={self.state.pie_colors} skills={self.state.skills} skills_title={self.state.skills_title}></Skills>
										)						
								}
							})()}	
						</div>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={4} md={4} lg={2}></Col>
					<Col id="go_portofolio" className="about_content_main" xs={12} sm={8} md={8} lg={10}>
						<a href="#portofolio" className="button-white text-black text-uppercase scroll-button" onClick={(e)=>{scroll_anywhere(e)}}>See my projects</a>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default About;
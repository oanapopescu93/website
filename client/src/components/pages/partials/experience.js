import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import $ from 'jquery'; 

var self;
class Experience extends Component {	
	constructor(props) {
		super(props);
		self = this;
        self.state = {
			experience: props.experience,
		};
	}

	componentDidMount() {
        if($('#about_content_box')){
            $('#about_content_box').scrollTop(0);
        }
        $('#about_content_box .row').append('<div class="col-sm-12"></div>');
        for (var i in self.state.experience){
			$('#about_content_box .row > div').append('<div class="job_header"></div>');
			if(typeof self.state.experience[i].job_title != "undefined"){
				$('#about_content_box .row > div .job_header').eq(i).append('<div class="job_title"><h4 class="text-uppercase">'+ self.state.experience[i].job_title +'</h4></div>');
			}
			if(typeof self.state.experience[i].period != "undefined"){
				$('#about_content_box .row > div .job_header').eq(i).append('<div class="period">('+ self.state.experience[i].period +')</div>');
			}
			if(typeof self.state.experience[i].company_name != "undefined"){
				if(typeof self.state.experience[i].link_company != "undefined"){
					$('#about_content_box .row > div .job_header').eq(i).append('<div class="company_name"><a href="' + self.state.experience[i].link_company + '" target="_blank"><b>'+ self.state.experience[i].company_name +'</b></a></div>');
				} else {
					$('#about_content_box .row > div .job_header').eq(i).append('<div class="company_name"><b>'+ self.state.experience[i].company_name +'</b></div>');
				}
			}			
			
			$('#about_content_box .row > div').append('<div class="job_body"></div>');	
			
			if(typeof self.state.experience[i].job_location != "undefined"){
				$('#about_content_box .row > div .job_body').eq(i).append('<div class="job_location"><b>Location: </b>'+ self.state.experience[i].job_location +'</div>');
			}
			if(typeof self.state.experience[i].company_description != "undefined"){
				$('#about_content_box .row > div .job_body').eq(i).append('<div class="company_description"><b>Company profile: </b>'+ self.state.experience[i].company_description +'</div>');
			}
			if(typeof self.state.experience[i].job_description != "undefined"){
				$('#about_content_box .row > div .job_body').eq(i).append('<div class="job_description"><b>What I did: </b>'+ self.state.experience[i].job_description +'</div>');
			}
			if(typeof self.state.experience[i].job_description_list != "undefined"){
				var job_description_list = self.state.experience[i].job_description_list;
				var job_description_list_element = "";
				for(let j in job_description_list){					
					job_description_list_element = job_description_list_element + '<li>' + job_description_list[j] + '</li>';					
				}
				$('#about_content_box .row > div .job_body').eq(i).append('<div class="projects"><b>My work: </b><ul>'+ job_description_list_element +'</ul></div>');
			}
			if(typeof self.state.experience[i].platform_used != "undefined"){
				$('#about_content_box .row > div .job_body').eq(i).append('<div class="jplatform_used"><b>Platforms used: </b>'+ self.state.experience[i].platform_used +'</div>');
			}
			if(typeof self.state.experience[i].accomplishments != "undefined"){
				$('#about_content_box .row > div .job_body').eq(i).append('<div class="accomplishments"><b>Accomplishments: </b>'+ self.state.experience[i].accomplishments +'</div>');
			}
			if(typeof self.state.experience[i].projects != "undefined"){
				var projects = self.state.experience[i].projects;
				var project_element = "";
				for(let j in projects){
					if(projects[j].project_link === "portofolio"){
						project_element = project_element + '<li><a href="#' + projects[j].project_link + '" class="scroll-button">' + projects[j].project_name + '</li>';
					} else {
						project_element = project_element + '<li><a target="_blank" href="' + projects[j].project_link + '">' + projects[j].project_name + '</li>';
					}
					
				}
				$('#about_content_box .row > div .job_body').eq(i).append('<div class="projects"><b>Projects: </b><ul>'+ project_element +'</ul></div>');
			}
		}
	}
    
	render() {
		return (
            <Row id="experience_row"></Row>
	    );
    }
}

export default Experience;
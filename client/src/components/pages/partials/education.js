import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import $ from 'jquery'; 
import Col from 'react-bootstrap/Col'

var self;
class Education extends Component {	
	constructor(props) {
		super(props);
		self = this;
        self.state = {
			education: props.education,
		};
	}

	componentDidMount() {
        if($('#about_content_box')){
            $('#about_content_box').scrollTop(0);
        }
        $('#education_row').append('<div class="col-sm-12"></div>');
        for (var i in self.state.education){
			$('#education_row > div').append('<div class="edu_header"></div>');
			if(typeof self.state.education[i].school_name != "undefined"){
				$('#education_row > div .edu_header').eq(i).append('<div class="edu_school"><h4 class="text-uppercase">'+ self.state.education[i].school_name +'</h4></div>');
			}
			if(typeof self.state.education[i].title != "undefined"){
				$('#education_row .row > div .edu_header').eq(i).append('<div class="edu_title"><b>'+ self.state.education[i].title +'</b></div>');
			}
			if(typeof self.state.education[i].period != "undefined"){
				$('#education_row > div .edu_header').eq(i).append('<div class="edu_period">('+ self.state.education[i].period +')</div>');
			}
			
			$('#education_row > div').append('<div class="edu_body"></div>');
			if(typeof self.state.education[i].school_location != "undefined"){
				$('#education_row > div .edu_header').eq(i).append('<div class="edu_location"><b>Location: </b>'+ self.state.education[i].school_location +'</div>');
			}
			if(typeof self.state.education[i].description != "undefined"){
				$('#education_row > div .edu_body').eq(i).append('<div class="edu_period"><b>What I learnt: </b>'+ self.state.education[i].description +'</div>');
			}
		}
	}
    
	render() {
		return (
            <Row id="education_row"></Row>
	    );
    }
}

export default Education;
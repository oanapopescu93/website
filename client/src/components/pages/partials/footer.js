import React, { Component } from 'react';
import $ from 'jquery';
class Footer extends Component {
	componentDidMount(){
        var date = new Date();
		date = date.getFullYear();
		$('#copyright_year').text(date);	
    }
	render() {
        return (
            <footer className="text-center">
				<h6>Copyright © <span id="copyright_year">2022</span> Oana Popescu. All rights reserved.</h6>
			</footer>
        );
    }
}
export default Footer;
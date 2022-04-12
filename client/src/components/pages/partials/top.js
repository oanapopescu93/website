import React, { Component } from 'react';
import $ from 'jquery'; 
import { scroll_anywhere } from '../utils';

var self;
class Top extends Component {
	constructor(props) {
		super(props);
        self = this;
        self.backToTop = self.backToTop.bind(self);
	}

	componentDidMount(){
        self.backToTop();
        $(window).on('scroll', function () {
            self.backToTop();
        });
    }

    backToTop(){
        var scrollTrigger = 500
		var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
            $('#top').addClass('show');
        } else {
            $('#top').removeClass('show');
        }
	};

	render() {
        return (
            <a href="#header" id="top" title="Back to top" className="text-uppercase scroll-button fa fa-arrow-circle-up" onClick={(e)=>{scroll_anywhere(e)}}> </a>
        );
    }
}

export default Top;
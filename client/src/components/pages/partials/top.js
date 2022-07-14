import React, { useEffect } from 'react';
import $ from 'jquery'; 
import { scroll_anywhere } from '../utils';

function Top(props){
    useEffect(() => {
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
    }, []);
    function backToTop(){
        let scrollTrigger = 500
		let scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
            $('#top').addClass('show');
        } else {
            $('#top').removeClass('show');
        }
	};	
    return (
        <a href="#header" id="top" title="Back to top" className="text-uppercase scroll-button fa fa-arrow-circle-up" onClick={(e)=>{scroll_anywhere(e)}}> </a>
    );
}
export default Top;
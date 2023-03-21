import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import { scroll_anywhere } from '../../utils'

function Top(props){
    const [show, setShow] = useState('')
    useEffect(() => {
        backToTop()
        $(window).on('scroll', function () {
            backToTop()
        })
    }, [])
    function backToTop(){
        let scrollTrigger = 500
		let scrollTop = $(window).scrollTop()
        if (scrollTop > scrollTrigger) {
            setShow('show')
        } else {
            setShow('')
        }
	}
    return <a href="#header" id="top" title="Back to top" className={"text-uppercase scroll-button fa fa-arrow-circle-up " + show} onClick={(e)=>{scroll_anywhere(e)}}> </a>
}
export default Top
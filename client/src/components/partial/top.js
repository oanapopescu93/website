import React, { useEffect, useState } from 'react'
import { scroll_anywhere } from '../../utils/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'

function Top() {
    const [show, setShow] = useState('')

    useEffect(() => {        
        const backToTop = () => {
            const scrollTrigger = 500
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            if (scrollTop > scrollTrigger) {
                setShow('show')
            } else {
                setShow('')
            }
        }        
        backToTop()        
        window.addEventListener('scroll', backToTop)
        return () => {
            window.removeEventListener('scroll', backToTop)
        }
    }, [])

    return <span
        href="#header"
        id="top"
        title="Back to top"
        className={show}
        onClick={() => {scroll_anywhere("header")}}
    ><FontAwesomeIcon icon={faCircleArrowUp} /></span>
}

export default Top
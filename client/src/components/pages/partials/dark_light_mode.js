import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { dark_mode } from '../../actions/actions'
import { getCookie, setCookie } from '../utils'

function DarkLightMode(props){
    const [checked, setChecked] = useState(false)
    const [style, setStyle] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
		let dark_mode_cookies = getCookie('dark_mode') ? getCookie('dark_mode') : 'light'
        dispatch(dark_mode(dark_mode_cookies))	
        if(dark_mode_cookies === 'dark'){
            setStyle('move') 
        }	
	}, [])

	function handleChange(){
        setChecked(!checked)
        if(style === ''){
            setStyle('move')
            dispatch(dark_mode('dark'))
            setCookie('dark_mode', 'dark')
        } else {
            setStyle('')
            dispatch(dark_mode('light'))
            setCookie('dark_mode', 'light')
        }
    }
	
    return (
        <div className="darkLightMode">
            <label className={"darkLightMode_label " + style}>
                <input type="checkbox" checked={checked} onChange={handleChange} id="darkLightMode_input"></input>
                <i className="fa fa-sun-o icon_light"></i>
                <i className="fa fa-moon-o icon_dark"></i>
            </label>
        </div>
    )
}
export default DarkLightMode
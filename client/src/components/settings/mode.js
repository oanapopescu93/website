import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { changeMode } from '../../reducers/settings'

function Mode(props) {
    let title = props.title
	const [move, setMove] = useState(title === "light" ? 'left' : 'right')  
    let dispatch = useDispatch()
    
    const handleChange = () => {
        if(move === 'left'){
            setMove('right')              
        } else {
            setMove('left')            
        }
        dispatch(changeMode(move === 'left' ? 'dark' : 'light'))
    }
    return <div id="lightDarkMode">
        <div className={"checkbox " + move} onClick={()=>{handleChange()}}>
            <div className="moon"><FontAwesomeIcon icon={faMoon} /></div>
            <div className="sun"><FontAwesomeIcon icon={faSun} /></div>
            <span className={"ball " + move}></span>
        </div>
    </div>
}

export default Mode
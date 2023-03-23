import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { changeMode } from '../../reducers/settings'
import { getCookie } from '../utils'

function LightDarkModeMode(){
    const [move, setMove] = useState(getCookie("website_mode") === '' || getCookie("website_mode") === 'light' ? 'left' : 'right')  
    let dispatch = useDispatch()
    
    const handleChange = () => {
        if(move === 'left'){
            setMove('right')
            dispatch(changeMode('dark'))
        } else {
            setMove('left')
            dispatch(changeMode('light'))
        }
    }
    return <div id="lightDarkMode">
        <div className="checkbox" onClick={()=>{handleChange()}}>
            <i className="fa fa-moon-o"></i>
            <i className="fa fa-sun-o"></i>
            <span className={"ball " + move}></span>
        </div>
    </div>
}
export default LightDarkModeMode
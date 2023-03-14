import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { changeLanguage } from '../../reducers/settings'
import { getCookie } from '../utils'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Language(){
    const [lang, setlang] = useState(getCookie("website_language") === '' ? 'ENG' : getCookie("website_language"))
    let dispatch = useDispatch()
    
    const handleSelect=(choice)=>{
        setlang(choice)
        dispatch(changeLanguage(choice))
    }
  return <div id="languages">
    <DropdownButton title={lang} id="dropdown-menu-align-right" onSelect={handleSelect}>
        <Dropdown.Item eventKey="ENG">ENG</Dropdown.Item>
        <Dropdown.Item eventKey="RO">RO</Dropdown.Item>
    </DropdownButton>
  </div>
}
export default Language
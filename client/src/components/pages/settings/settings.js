import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Language from './language'
import LightDarkModeMode from './lightDarkMode'

function Settings(){
    return <Dropdown variant="success" id="settings">
        <Dropdown.Toggle id="settings_button">
            <i className="fa fa-cog"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Language></Language>
            <LightDarkModeMode></LightDarkModeMode>
        </Dropdown.Menu>
    </Dropdown>
}
export default Settings
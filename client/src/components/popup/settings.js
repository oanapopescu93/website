import React from 'react'
import { translate } from '../../translations/translate'
import { Button } from 'react-bootstrap'
import Language from '../settings/language'
import Mode from '../settings/mode'
import { setCookie } from '../../utils/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function Settings(props) {
    const {settings} = props
    const {lang, mode} = settings

    function handleLogout(){
        setCookie('website_uuid', '')
        window.location.reload(false)
    }

    return <div className="settings">
        <div className="settings_box settings_language">
            <h4>{translate({lang: lang, info: "settings_language"})}</h4>
            <Language title={lang} />
        </div>
        <div className="settings_box settings_mode">
            <h4>{translate({lang: lang, info: "settings_mode"})}</h4>
            <Mode title={mode}/>
        </div>
        <hr className="line" />
        <div className="settings_box settings_logout">
            <Button type="button" className="mybutton button_accent shadow_convex" onClick={()=>handleLogout()}>
                <FontAwesomeIcon icon={faRightFromBracket} /> {translate({lang: lang, info: "logout"})}
            </Button>
        </div>
    </div>
}

export default Settings
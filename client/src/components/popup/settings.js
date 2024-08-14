import React from 'react'
import { translate } from '../../translations/translate'
import Language from '../settings/language'
import Mode from '../settings/mode'

function Settings(props) {
    const {settings} = props
    const {lang, mode} = settings

    return <div className="settings">
        <div className="settings_language">
            <h4>{translate({lang: lang, info: "settings_language"})}</h4>
            <Language title={lang} />
        </div>
        <div className="settings_mode">
            <h4>{translate({lang: lang, info: "settings_mode"})}</h4>
            <Mode title={mode}/>
        </div>
    </div>
}

export default Settings
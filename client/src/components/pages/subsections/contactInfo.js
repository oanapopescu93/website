import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function ContactInfo(props){
    const {guest, contact, lang} = props

    return <ul className="contact_info">
        <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href={`mailto:${contact[lang].email}`}>{contact[lang].email}</a>
        </li>
        {parseInt(guest) === 0 ? <li>
            <FontAwesomeIcon icon={faPhone} />
            <a href={`tel:${contact[lang].phone}`}>{contact[lang].phone_text}</a>
        </li> : null}
        <li>
            <FontAwesomeIcon icon={faGithub} /> 
            <a href={contact[lang].github ? contact[lang].github: "https://github.com/oanapopescu93"} target="_blank" rel="noopener noreferrer">
                {contact[lang].github ? contact[lang].github: "https://github.com/oanapopescu93"}
            </a>
        </li>
        <li>
            <FontAwesomeIcon icon={faLinkedin} /> 
            <a href={contact[lang].linkedin ? contact[lang].linkedin : "https://www.linkedin.com/in/oanapopescu93"} target="_blank" rel="noopener noreferrer">
                {contact[lang].linkedin ? contact[lang].linkedin : "https://www.linkedin.com/in/oanapopescu93"}
            </a>
        </li>
        <li>
            <FontAwesomeIcon icon={faLocationDot} /> 
            {contact[lang].country}, {contact[lang].city}
        </li>
    </ul>
}

export default ContactInfo
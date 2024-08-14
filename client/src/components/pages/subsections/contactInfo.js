import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function ContactInfo(props){
    const {guest, contact, lang} = props
    let myContact = contact[lang] ? contact[lang] : contact['ENG']

    return <ul className="contact_info">
        <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href={`mailto:${myContact.email}`}>{myContact.email}</a>
        </li>
        {parseInt(guest) === 0 ? <li>
            <FontAwesomeIcon icon={faPhone} />
            <a href={`tel:${myContact.phone}`}>{myContact.phone_text}</a>
        </li> : null}
        <li>
            <FontAwesomeIcon icon={faGithub} /> 
            <a href={myContact.github} target="_blank" rel="noopener noreferrer">
                {myContact.github}
            </a>
        </li>
        <li>
            <FontAwesomeIcon icon={faLinkedin} /> 
            <a href={myContact.linkedin} target="_blank" rel="noopener noreferrer">
                {myContact.linkedin}
            </a>
        </li>
        <li>
            <FontAwesomeIcon icon={faLocationDot} /> 
            {myContact.country}, {myContact.city}
        </li>
    </ul>
}

export default ContactInfo
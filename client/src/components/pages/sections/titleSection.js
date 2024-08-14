import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { translate } from '../../../translations/translate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFolderOpen, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function TitleSection(props) {
    const {template, settings} = props
    const {lang} = settings

    let icon = null
    switch(template){
        case "about":
            icon = <FontAwesomeIcon icon={faUser} />
            break
        case "portofolio":
            icon = <FontAwesomeIcon icon={faFolderOpen} />
            break
        case "contact":
            icon = <FontAwesomeIcon icon={faPaperPlane} />
            break
    }

    return <Container>
        <Row>
            <Col sm={12}>
                <hr className="line"></hr>
                <h3 className="text-uppercase">{icon ? icon : null}{translate({lang: lang, info: template})}</h3>
                <hr className="line"></hr>
            </Col>
        </Row>
    </Container>
}

export default TitleSection
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { translate } from '../../translations/translate'

function Sapou(props) {
    switch (props.template) {
        case "about":
            return <Container>
                    <Row>
                        <Col sm={12}>
                            <hr className="line"></hr>
                            <h3 className="text-uppercase">{translate({lang: props.lang, info: "about"})}<span className="glyphicon glyphicon-user title-icon"></span></h3>
                            <hr className="line"></hr>
                        </Col>
                    </Row>
                </Container>
        case "portofolio":
            return <Container>
                    <Row>
                        <Col sm={12}>
                            <hr className="line"></hr>
                            <h3 className="text-uppercase">{translate({lang: props.lang, info: "portofolio"})}<span className="glyphicon glyphicon-folder-open title-icon"></span></h3>
                            <hr className="line"></hr>
                        </Col>
                    </Row>
                </Container>
        case "contact":
            return <Container>
                    <Row>
                        <Col sm={12}>
                            <hr className="line"></hr>
                            <h3 className="text-uppercase">{translate({lang: props.lang, info: "contact"})}<span className="glyphicon glyphicon-send title-icon"></span></h3>
                            <hr className="line"></hr>
                        </Col>
                    </Row>
                </Container>
        default:
            return null
    }	
}

export default Sapou
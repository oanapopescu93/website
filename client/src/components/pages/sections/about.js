import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { translate } from '../../../translations/translate'
import Skills from '../subsections/skills'
import Experience from '../subsections/experience'
import Education from '../subsections/education'
import { scroll_anywhere } from '../../../utils/utils'

function About(props) {
    const {settings} = props
    const {lang} = settings

    const [visible, setVisible] = useState("skills")
	const [index, setIndex] = useState(0)

    let about_tabs_header = ["skills", "experience", "education"]

    function handleChangeTab(id, i){
		setVisible(id)
		setIndex(i)
	}

    return <Container>
        <Row>
            <Col sm={4} id="about_tabs_main">
                {about_tabs_header.map(function(x, i){
                    let style = ""
                    if(i === index){
                        style = "open"
                    }
                    return <div key={i} id={x} className={"about_tabs " + style} onClick={()=>{handleChangeTab(x, i)}}>
                        <div className="about_tabs_header">
                            <h4 className="about_tabs_title text-uppercase">{translate({lang: lang, info: x})}</h4>
                        </div>
                    </div>
                })}
            </Col>
            <Col sm={8} id="about_content_main">
                <div id="about_content_box" className="about_content_box shadow_concav">
                    {(() => {
                        switch (visible) {
                            case "skills":
                                return <Skills {...props} />
                            case "experience":
                                return <Experience {...props} />
                            case "education":
                                return <Education {...props} />
                            default:
                                return 
                        }
                    })()}
                </div>
            </Col>
        </Row>
        <Row>
            <Col sm={4} />
            <Col id="go_portofolio" sm={8}>
                <Button type="button" className="mybutton button_accent shadow_convex" onClick={()=>scroll_anywhere("portofolio")}>
                    {translate({lang: lang, info: "see_my_projects"})}
                </Button>
            </Col>
        </Row>
    </Container>
}

export default About
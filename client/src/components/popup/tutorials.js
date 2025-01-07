import React, {useState, useEffect} from 'react'
import { translate } from '../../translations/translate'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

function Tutorials(props){
    const {home, settings} = props
    const {lang} = settings

    const [tutorials, setTutorials] = useState(home.tutorials)
	const [tutorialHeader, setTutorialHeader] = useState([translate({lang: lang, info: "all"})])
    const [titleHeader, setTitleHeader] = useState(tutorialHeader[0])

    useEffect(() => {
		let tutorial_header = [translate({lang: lang, info: "all"})]
		for(let i in tutorials){
			if(!tutorial_header.includes(tutorials[i].type)){
				tutorial_header.push(tutorials[i].type)
			}
		}
		setTutorialHeader(tutorial_header)
	}, [])

    function handleTutorialClick(type){
        setTitleHeader(type)
		switch (type) {
			case "javascript":
			case "react":
			case "node":
			case "python":
            case "embedded c":
            case "c++":
				const my_tutorials = home.tutorials.filter((x) => x.type === type)
				setTutorials(my_tutorials)
				break
			default:
				setTutorials(home.tutorials)
		}
	}
    
    return <>
        <div id="tutorial_header_container">
            <DropdownButton title={titleHeader} id="language_button" onSelect={handleTutorialClick}>
                {tutorialHeader.map(function(item, i){
                    return <Dropdown.Item key={i} eventKey={item}>
                        <span>{item}</span>
                    </Dropdown.Item>                        
                })}
            </DropdownButton>
        </div>
        <div id="tutorial_box_container">
            {(() => {
                if(typeof tutorials !== "undefined" && tutorials !== null){
                    if(tutorials.length>0){
                        return <>
                            {tutorials.map(function(item1, i){
                                return <div key={i} className="tutorial_box">
                                    <Row>
                                        <Col sm={8} md={10}>
                                            <h4 className="tutorial_name">{item1.name}</h4>
                                            <p>{item1.description}</p>
                                            <p>{translate({lang: lang, info: "what_I_used"})}</p>
                                            <>
                                                {item1.used.map(function(item2, j){
                                                    return <span key={j} className="box">{item2}</span> 
                                                })}
                                            </>
                                        </Col>
                                        <Col sm={4} md={2}>
                                            <a className="tutorial_link" href={tutorials[i].link} target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </Col>
                                    </Row>
                                </div>
                            })}
                        </>
                    } else {
                        return <p>{translate({lang: lang, info: "error"})}</p>
                    }
                } else {
                    return <p>{translate({lang: lang, info: "error"})}</p>
                }
            })()}
        </div>
    </>
}
export default Tutorials
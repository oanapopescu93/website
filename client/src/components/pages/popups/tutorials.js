import React, {useState, useEffect} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Tutorials(props){
    const [tutorials, setTutorials] = useState(props.tutorials)
	const [tutorialHeader, setTutorialHeader] = useState(["all"])	
    const [active, setActive] = useState(0)	

    useEffect(() => {
		let tutorial_header = ["all"]
		for(let i in tutorials){
			if(!tutorial_header.includes(tutorials[i].type)){
				tutorial_header.push(tutorials[i].type)
			}	
		}
		setTutorialHeader(tutorial_header)
	}, [])
    
    function handleTutorialClick(index, type){	
        setActive(index)
		switch (type) {
			case "javascript":
			case "react":
			case "node":
			case "python":
			case "embedded c":
				const my_tutorials = props.tutorials.filter((x) => x.type === type)
				setTutorials(my_tutorials)
				break
			default:
				setTutorials(props.tutorials)
		}
	}

    return <>
        <div id="tutorial_header_container">
            {(() => {
                return(
                    <>
                        {
                            tutorialHeader.map(function(item, i){
                                const style = active === i ? 'active' : '';  
                                return <div key={i} className={style} id={item} onClick={()=>{handleTutorialClick(i, item)}}>{item}</div>
                            })
                        }
                    </>
                )							
            })()}
        </div>
        <div id="tutorial_box_container">
            {(() => {
                if(typeof tutorials !== "undefined" && tutorials !== null){
                    if(tutorials.length>0){
                        return(
                            <>
                                {
                                    tutorials.map(function(item1, i){
                                        return <Row key={i} id={"tutorial_box_"+i}>
                                                <Col sm={8} className="box01">
                                                    <h4 className="tutorial_name">{item1.name}</h4>
                                                    <p>{item1.description}</p>
                                                    <p>What I used:</p>
                                                    <>
                                                        {
                                                            item1.used.map(function(item2, j){
                                                                return <span key={j} className="box">{item2}</span> 
                                                            })
                                                        }
                                                    </>
                                                </Col>
                                                <Col sm={4} className="box02">
                                                    <a className="tutorial_link" href={tutorials[i].link} target="_blank" rel="noopener noreferrer">Link</a>
                                                </Col>
                                            </Row>
                                    })
                                }
                            </>
                        )
                    } else {
                        return <div>No tutorials yet</div>
                    }
                } else {
                    return <div>No tutorials yet</div>
                }
            })()}
        </div>
    </>
}

export default Tutorials
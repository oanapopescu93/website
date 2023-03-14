import React, { useState, useEffect } from 'react'
import { Modal} from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import $ from 'jquery'
import Popup from '../popups/popup'

function Tutorial(props){
	const [tutorials, setTutorials] = useState(props.tutorials)
	const [tutorialHeader, setTutorialHeader] = useState(["all"])	
	const [isOpenTutorials, setIsOpenTutorials] = useState(false)
	let login_visitor = props.login_visitor
	let pos = " down"
	if(login_visitor === true || login_visitor === "true"){
		pos = " up"
	}
	
	function openModalTutorials(){
		setIsOpenTutorials(true)
	}
  	function closeModalTutorials(){
		setIsOpenTutorials(false)
	}

	useEffect(() => {
		let tutorial_header = ["all"]
		for(let i in tutorials){
			if(!tutorial_header.includes(tutorials[i].type)){
				tutorial_header.push(tutorials[i].type)
			}	
		}
		setTutorialHeader(tutorial_header)
	}, [])

    function handleClick(){
        openModalTutorials()
    }
	function handleSlide(){
        if($('.mytutorials_container')){
            $('.mytutorials_container').toggleClass('closed')
        }
    }
	function handleTutorialClick(type){	
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
	
	
	return (
		<>
			<div className={"mytutorials_container"+pos}>
				<div className="mytutorials_close shadow_convex" onClick={()=>{handleSlide()}}>
					<i className="fa fa-times"></i>
				</div>
				<div id="mytutorials" className="mytutorials shadow_convex" onClick={()=>{handleClick()}}>
					<i className="fa fa-book" data-toggle="tooltip" data-placement="left" title="" data-original-title="My tutorials"></i>
				</div>
			</div>

			{/* <Popup template="tutorials" title="Tutorials"></Popup> */}

			<Modal id="myModal_tutorials" className="mymodal text-center" show={isOpenTutorials} onHide={closeModalTutorials}>
				<Modal.Header closeButton>
					<Modal.Title>Tutorials</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div id="tutorial_header_container">
						{(() => {
							return(
								<>
									{
										tutorialHeader.map(function(item, i){
											return <div key={i} id={item} onClick={()=>{handleTutorialClick(item)}}>{item}</div>
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
				</Modal.Body>
			</Modal>
		</>
	)
}
export default Tutorial
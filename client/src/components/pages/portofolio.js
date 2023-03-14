import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import $ from 'jquery'
import Carousel from './partials/carousel'
import { Modal} from "react-bootstrap"
import { translate } from '../translations/translate'

function Child(props){ 
	function handleClick(x){
		props.getItem(x)
	}   
	return <Carousel template={props.template} id={props.id} itemList={props.itemList} getItem={handleClick}></Carousel>
}

function ModalPortofolio(props){	
	return <>
		<div className="title">
			<p><b>{props.item.title}</b></p>
			{props.item.git ? <a className="modal_button" href={props.item.git} target="_blank" rel="noopener noreferrer">Take a look</a> : null}
			{props.item.link ? <a className="modal_button" href={props.item.link} target="_blank" rel="noopener noreferrer">See the code</a> : null}
		</div>
		{props.item.platform ? <div className="platform"><b>Platform: </b>{props.item.platform}</div> : null}		
		<div className="used">
			<b>What I used: </b><br></br>
			{
				props.item.used.map(function(x, i){
					return <span key={i} className="box">{x}</span>
				})
			}
		</div>
	</>
}

function Portofolio(props){
	let portofolio = props.data
	let portofolio_list = portofolio.portofolio_list[props.lang]
	const [tutorials, setTutorials] = useState(props.data.tutorials)

	const [tutorialHeader, setTutorialHeader] = useState(["all"])

	const [isOpenPortofolio, setIsOpenPortofolio] = useState(false)
	const [isOpenTutorials, setIsOpenTutorials] = useState(false)

	const [item, setItem] = useState(null)

	function openModalPortofolio(){
		setIsOpenPortofolio(true)
	}
	function closeModalPortofolio(){
		setIsOpenPortofolio(false)
	}
	function openModalTutorials(){
		setIsOpenTutorials(true)
	}
	function closeModalTutorials(){
		setIsOpenTutorials(false)
	}

	useEffect(() => {
		let tutorial_header = ["all"]
		for(let i in portofolio.tutorials){
			if(!tutorial_header.includes(portofolio.tutorials[i].type)){
				tutorial_header.push(portofolio.tutorials[i].type)
			}	
		}
		setTutorialHeader(tutorial_header)
	}, [])

	function handleClickItem(x){
		setItem(x)
		openModalPortofolio()
	}

	function portofolioClick(e){
		$('.portofolio-list li').removeClass('active')
		$('.portofolio-container .owl_container').hide()
		let element = $(e.target)
		element.addClass('active')
		let order = $(e.target).attr('order')
		if($('#owl_carousel_'+order)){
			$('#owl_carousel_'+order).show()
		}
	}

	function portofolioTutorialsClick(){
		openModalTutorials()
	}	

	function handleTutorialClick(type){	
		switch (type) {
			case "javascript":
			case "react":
			case "node":
			case "python":
			case "embedded c":
				const my_tutorials = props.data.tutorials.filter((x) => x.type === type)
				setTutorials(my_tutorials)
				break
			default:
				setTutorials(props.data.tutorials)
		}
	}
	
	return (
		<>
			<Container>
				<Row>
					<Col sm={12}>
						<ul className="portofolio-list text-center">
							{
								portofolio_list.map(function(item, i){
									let active = ""
									if(i === 0){
										active = "active"
									}
									return <li key={i} order={i} className={active} onClick={(e)=>{portofolioClick(e)}}>{item}</li>
								})
							} 
						</ul>
						<div className="portofolio-container text-left">
							{
								portofolio.portofolio_items.map(function(item, i){
									return <Child key={i} id={"owl_carousel_"+i} template={"portofolio"} itemList={item} getItem={handleClickItem}></Child>
								})
							} 
						</div>
					</Col>
				</Row>
				<Row>
					<Col sm={12} className="text-center">
						<div id="portofolio_links_other">
							<a id="portofolio_git" href="https://github.com/oanapopescu93" rel="noopener noreferrer" target="_blank">
								<Button>
									<i className="fa fa-github"></i> <span>https://github.com/oanapopescu93</span>
								</Button>
							</a>
							<Button id="portofolio_tutorials" data-toggle="modal" data-target="#myModal_tutorials" onClick={()=>{portofolioTutorialsClick()}}>
								<i className="fa fa-book"></i> <span>{translate({lang: props.lang, info: "tutorials"})}</span>
							</Button>
						</div>
					</Col>
				</Row>
			</Container>

			<Modal id="myModal_portofolio" className="mymodal text-center" show={isOpenPortofolio} onHide={closeModalPortofolio}>
				<Modal.Header closeButton>
					<Modal.Title>Details</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{item ? <ModalPortofolio item={item}></ModalPortofolio> : null}
				</Modal.Body>
			</Modal>

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
											return <div key={i} onClick={()=>{handleTutorialClick(item)}}>{item}</div>
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

export default Portofolio
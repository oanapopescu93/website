import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import $ from 'jquery'
import Carousel from './partials/carousel'
import { Modal} from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { changePopup } from '../reducers/popups'
import {translate} from '../translations/translate'

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
	const [isOpenPortofolio, setIsOpenPortofolio] = useState(false)
	const [item, setItem] = useState(null)
	let dispatch = useDispatch()

	function openModalPortofolio(){
		setIsOpenPortofolio(true)
	}
	function closeModalPortofolio(){
		setIsOpenPortofolio(false)
	}

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
		dispatch(changePopup({open: true, title: translate({lang: props.lang, info: "tutorials"}), template: "tutorials", data: props.data.tutorials}))
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
		</>
	)
}

export default Portofolio
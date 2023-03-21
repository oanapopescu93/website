import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Carousel from './partials/carousel'
import { useDispatch } from 'react-redux'
import { changePopup } from '../reducers/popups'
import {translate} from '../translations/translate'

function Child(props){ 
	function handleClick(x){
		props.getItem(x)
	}   
	return <Carousel template={props.template} active={props.active} index={props.index} id={props.id} itemList={props.itemList} getItem={handleClick}></Carousel>
}

function Portofolio(props){
	let portofolio = props.data
	let portofolio_list = portofolio.portofolio_list[props.lang]
	const [active, setActive] = useState(0)	
	let dispatch = useDispatch()	

	function handleClickItem(x){
		dispatch(changePopup({open: true, title: translate({lang: props.lang, info: "details"}), template: "portofolio_details", data: x, size: "lg"}))
	}

	function portofolioClick(e, index){
		setActive(index)
	}

	function portofolioTutorialsClick(){
		dispatch(changePopup({open: true, title: translate({lang: props.lang, info: "tutorials"}), template: "tutorials", data: props.data.tutorials, size: "lg"}))
	}	
	
	return <Container>
		<Row>
			<Col sm={12}>
				<ul className="portofolio-list text-center">
					{
						portofolio_list.map(function(item, i){
							const style = active === i ? 'active' : ''; 
							return <li key={i} order={i} className={style} onClick={(e)=>{portofolioClick(e, i)}}>{item}</li>
						})
					} 
				</ul>
				<div className="portofolio-container text-left">
					{
						portofolio.portofolio_items.map(function(item, i){
							return <Child key={i} active={active} index={i} id={"owl_carousel_"+i} template={"portofolio"} itemList={item} getItem={handleClickItem}></Child>
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
							<h6><i className="fa fa-github"></i> <span>https://github.com/oanapopescu93</span></h6>
						</Button>
					</a>
					<Button id="portofolio_tutorials" data-toggle="modal" data-target="#myModal_tutorials" onClick={()=>{portofolioTutorialsClick()}}>
						<h6><i className="fa fa-book"></i> <span>{translate({lang: props.lang, info: "tutorials"})}</span></h6>
					</Button>
				</div>
			</Col>
		</Row>
	</Container>
}

export default Portofolio
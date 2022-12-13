import React, { Component } from 'react'
import { Modal} from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import $ from 'jquery'

class Tutorial extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen_tutorials: false,
            tutorials: props.tutorials,
			login_visitor: props.login_visitor,
			active: "all", 
		}
		this.tutorial_header = ["all"]
		this.handle_click = this.handle_click.bind(this)
		this.handle_slide = this.handle_slide.bind(this)
		this.handleTutorialClick = this.handleTutorialClick.bind(this)
	}
	
	openModal_tutorials = () => this.setState({ isOpen_tutorials: true })
  	closeModal_tutorials = () => this.setState({ isOpen_tutorials: false })

	componentDidMount(){
		for(let i in this.state.tutorials){
			if(!this.tutorial_header.includes(this.state.tutorials[i].type)){
				this.tutorial_header.push(this.state.tutorials[i].type)
			}									
		}
	}

    handle_click(){
        this.openModal_tutorials()
    }
	handle_slide(){
        if($('.mytutorials_container')){
            $('.mytutorials_container').toggleClass('closed')
        }
    }
	handleTutorialClick(type){
		switch (type) {
			case "javascript":
			case "react":
			case "node":
			case "python":
			case "embedded c":
				const my_tutorials = this.props.tutorials.filter((x) => x.type === type)
				this.setState({ tutorials: my_tutorials })
				break
			default:
				this.setState({ tutorials: this.props.tutorials })
		}
		this.setState({ active: type })
	}

	render() {
		let self = this
		let pos = " down"
		if(self.state.login_visitor === true || self.state.login_visitor === "true"){
			pos = " up"
		}
        return (
            <>
                <div className={"mytutorials_container"+pos}>
                    <div className="mytutorials_close shadow_convex" onClick={()=>{self.handle_slide()}}>
                        <i className="fa fa-times"></i>
                    </div>
                    <div id="mytutorials" className="mytutorials shadow_convex" onClick={()=>{self.handle_click()}}>
                        <i className="fa fa-book" data-toggle="tooltip" data-placement="left" title="" data-original-title="My tutorials"></i>
                    </div>
                </div>

                <Modal id="myModal_tutorials" className="mymodal text-center" show={self.state.isOpen_tutorials} onHide={self.closeModal_tutorials}>
					<Modal.Header closeButton>
						<Modal.Title>Tutorials</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div id="tutorial_header_container">
							{(() => {
								return(
									<>
										{
											self.tutorial_header.map(function(item, i){
												let style = ""
												if(self.state.active === item){
													style = "active"
												}
												return <div key={i} id={item} className={style} onClick={()=>{self.handleTutorialClick(item)}}>{item}</div>
											})
										}
									</>
								)							
							})()}
						</div>
						<div id="tutorial_box_container">
							{(() => {
								let tutorials = self.state.tutorials
								if(typeof tutorials !== "undefined" && tutorials !== null){
									if(tutorials.length>0){
										return(
											<>
												{
													tutorials.map(function(item1, i){
														return (
															<Row key={i} id={"tutorial_box_"+i}>
																<Col sm={8} className="box01">
																	<h4 className="tutorial_name">{item1.name}</h4>
																	<p>{item1.description}</p>
																	<p>What I used:</p>
																	<>
																		{
																			item1.used.map(function(item2, j){
																				return (
																					<span key={j} className="box">{item2}</span> 
																				)
																			})
																		}
																	</>
																</Col>
																<Col sm={4} className="box02">
																	<a className="tutorial_link" href={tutorials[i].link} target="_blank" rel="noopener noreferrer">Link</a>
																</Col>
															</Row>
														)
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
}
export default Tutorial
import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import Row from 'react-bootstrap/Row'
import { Col } from 'react-bootstrap'
import { translate } from '../../translations/translate'
import { Piechart } from '../graphics/pie'

function Skills(props){	
	let mode = useSelector(state => state.settings.mode)
	let skills_title = props.skills_title[props.lang]
	let skills = props.skills
	let pie_colors = props.pie_colors
	let language = props.language
	let pie_element = []
	let myPiechart = []	

	useEffect(() => {
		if(document.getElementById('about_content_box')){
            document.getElementById('about_content_box').scrollTo(0, 0)
        } 
		for(let t in skills_title){
			for(let i in skills){
				if(skills_title[t] === skills[i].type){
					pie_element = []	
					pie_element.push(skills[i])
					myPiechart[i] = new Piechart("myskill_"+ i, "pie_legend_"+ i, pie_element, pie_colors, 0.8, 120, 120, mode)
					myPiechart[i].draw()
				}
			}
		}
	}, [mode])
	
	return (
		<>
			{(() => {
				if(skills_title && skills_title.length>0 && skills && skills.length){
					return <>
							<Row id="skills_row">
								{
									skills_title.map(function(item, t){
										return(
											<div key={t}>
												<Col sm={12}>
													<h4 className="grey666">{translate({lang: props.lang, info: item, capitalize_first_fetter:true})}</h4>
												</Col>
												<Row>
												{(() => {
													if(skills && skills.length>0){
														return(
															<>
																{
																	skills.map(function(x, i){																		
																		if(item === x.type){
																			return <div key={i} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
																				<canvas id={"myskill_"+ i}></canvas>
																				<div className="legend" id={"pie_legend_"+ i}></div>
																			</div>
																		}
																	})
																}
															</>
														)
													}
												})()}
												</Row>
											</div>
										)
									})
								}
							</Row>
							<Row id="language_row">
								<Col sm={12}>
									<h4 className="grey666">{translate({lang: props.lang, info: "languages"})}</h4>
								</Col>
								<Col id="language_bar_container" sm={6} md={4} lg={3}>
									{(() => {
										if(language && language.length>0){
											return(
												<>
													{
														language.map(function(item, i){
															let width = {'width': item.perc+"%"}
															return (
																<div key={i}>
																	<p className="language_bar_title">{translate({lang: props.lang, info: item.name})}<span>({translate({lang: props.lang, info: item.level})})</span></p>
																	<div className="language_bar_box">
																		<div style={width} className={"language_bar " + item.name}>{item.perc}%</div>
																	</div>
																</div>
															)
														})
													}
												</>
											)
										}
									})()}
								</Col>
							</Row>
					</>
				} else {
					return <p>{translate({lang: props.lang, info: "error_skills"})}</p>
				}
			})()}
		</>
	)
}

export default Skills
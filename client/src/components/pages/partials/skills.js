import React, { useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import $ from 'jquery' 
import { Col } from 'react-bootstrap'
import { translate } from '../../translations/translate'

function Piechart(mycanvas, mylegend, dataSource, colors, doughnutHoleSize, w, h){	
    var canvas = document.getElementById(mycanvas)
    var ctx = canvas.getContext("2d")
	canvas.height = h
	canvas.width = w
    
    this.draw = function(){		
		var total_value = 100
        var color_index = 0
		var start_angle = 0    
		
		for (var i in dataSource){ 
			let slice_angle = 2 * Math.PI * dataSource[i].value / total_value					
			drawPieSlice(
                ctx,
                canvas.width/2,
                canvas.height/2,
                Math.min(canvas.width/2, canvas.height/2),
                start_angle,
                start_angle+slice_angle,
                colors[i]
            )
            start_angle = start_angle + slice_angle
            color_index = color_index + 1
        }
		
		if(dataSource.length === 1){
			let slice_angle = (2 * Math.PI) - (2 * Math.PI * dataSource[i].value / total_value)						
			drawPieSlice(
				ctx,
				canvas.width/2,
				canvas.height/2,
				Math.min(canvas.width/2, canvas.height/2),
				start_angle,
				start_angle+slice_angle,
				colors[1]
			)
		}
		
		if(doughnutHoleSize > 0){	
			drawPieSlice(
                ctx,
                canvas.width/2,
                canvas.height/2,
                doughnutHoleSize * Math.min(canvas.width/2,canvas.height/2),
                0,
                2 * Math.PI,
                "#f3f4f6"
            )
		} 
		
		for (let i in dataSource){ 
			if (doughnutHoleSize > 0){
				let labelText = Math.round(100 * dataSource[i].value / total_value)
				ctx.fillStyle = "black"
				ctx.font = "bold 16px Arial"
				ctx.fillText(labelText+"%", canvas.width/2-20, canvas.height/2+5)
			} else {
				let val = dataSource[i].value
				let slice_angle = 2 * Math.PI * val / total_value
				let pieRadius = Math.min(canvas.width/2,canvas.height/2)
				let labelX = canvas.width/2 + (pieRadius / 2) * Math.cos(start_angle + slice_angle/2)
				let labelY = canvas.height/2 + (pieRadius / 2) * Math.sin(start_angle + slice_angle/2)		
				let offset = (pieRadius * doughnutHoleSize ) / 2
				
				labelX = canvas.width/2 + (offset + pieRadius / 2) * Math.cos(start_angle + slice_angle/2)
				labelY = canvas.height/2 + (offset + pieRadius / 2) * Math.sin(start_angle + slice_angle/2)    

				ctx.beginPath()
				ctx.rect(labelX-25,labelY-25, 50, 20)
				ctx.fillStyle = 'white'
				ctx.fill()
				ctx.strokeStyle = 'black'
				ctx.stroke()
				ctx.closePath()
			 
				let labelText = Math.round(100 * dataSource[i].value / total_value)
				ctx.fillStyle = "black"
				ctx.font = "bold 16px Arial"
				ctx.fillText(labelText+"%", labelX-20,labelY-10)	
			
				start_angle = start_angle + slice_angle
			}		
        } 		
		
		if(mylegend){
			if($('#' + mycanvas)){
				$('#' + mycanvas).after('<div class="legend" id="' + mylegend + '"></div>')		
				let legendHTML = ""
				for (let i in dataSource){ 
					legendHTML = legendHTML + "<div><span style='display:inline-block;width:20px;background-color:"+colors[i]+";'>&nbsp;</span> "+dataSource[i].name+"</div>"
				}
				$('#' + mylegend).html(legendHTML)
			}
		}
		
	}

    function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.moveTo(centerX,centerY)
        ctx.arc(centerX, centerY, radius, startAngle, endAngle)
        ctx.closePath()
        ctx.fill()
    }
}

function Skills(props){	
	let skills_title = props.skills_title
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
					myPiechart[i] = new Piechart("myskill_"+ i, "pie_legend"+ i, pie_element, pie_colors, 0.8, 120, 120)
					myPiechart[i].draw()
				}
			}
		}
	}, [])
	
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
												<div className="col-xs-12"><h4 className="grey666">{translate({lang: props.lang, info: item, capitalize_first_fetter:true})}</h4></div>
												<div className="col-xs-12">
												{(() => {
													if(skills && skills.length>0){
														return(
															<>
																{
																	skills.map(function(x, i){																		
																		if(item === x.type){
																			return(
																				<div key={i}>
																					<div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 text-center"><canvas id={"myskill_"+ i}></canvas></div>
																				</div>
																			)
																		}
																	})
																}
															</>
														)
													}
												})()}
												</div>
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
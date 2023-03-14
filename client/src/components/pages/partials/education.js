import React, { useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import {translate} from '../../translations/translate'

function Education(props){	
	let education = props.education[props.lang]

	useEffect(() => {
		if(document.getElementById('about_content_box')){
            document.getElementById('about_content_box').scrollTo(0, 0)
        }      
	}, [])
	
	return(
		<Row id="education_row">
			{(() => {
				if(education && education.length>0){
					return(
						<div className="col-sm-12">
							{
								education.map(function(item, t){
									return(
										<div key={t}>
											<div className="edu_header">
												{item.school_name ? <div className="edu_school"><h4 className="text-uppercase">{item.school_name}</h4></div> : null}
												{item.title ? <div className="edu_title"><b>{item.title}</b></div> : null}
												{item.period ? <div className="edu_period">{'(' + item.period + ')'}</div> : null}
											</div>
											<div className="edu_body">
												{item.school_location ? <div className="edu_location"><b>{translate({lang: props.lang, info: "location"})}: </b>{item.school_location}</div> : null}
												{item.description ? <div className="edu_period"><b>{translate({lang: props.lang, info: "what_i_learnt"})}: </b>{item.description}</div> : null}
											</div>
										</div>
									)
								})
							}
						</div>
					)
				} else {
					return <p>{translate({lang: props.lang, info: "error_education"})}</p>
				}
			})()}
		</Row>
	)
}

export default Education
import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { translate } from '../../../translations/translate'

function Education(props) {
    const { home, settings } = props
    const { education } = home
    const { lang } = settings

    useEffect(() => {
		if(document.getElementById('about_content_box')){
            document.getElementById('about_content_box').scrollTo(0, 0)
        }      
	}, [])

    return<Row id="education_row">
        {(() => {
            if(education && education.length>0){
                return(
                    <div className="col-sm-12">
                        {
                            education.map(function(item, t){
                                return(
                                    <div key={t}>
                                        <div className="edu_header">
                                            {item.school_name ? <div className="edu_school"><h4 className="text-uppercase">{translate({lang: lang, info: item.school_name})}</h4></div> : null}
                                            {item.title ? <div className="edu_title"><b>{translate({lang: lang, info: item.title})}</b></div> : null}
                                            {item.period ? <div className="edu_period">{'(' + translate({lang: lang, info: item.period}) + ')'}</div> : null}
                                        </div>
                                        <div className="edu_body">
                                            {item.location ? <div className="edu_location"><b>{translate({lang: lang, info: "location"})}: </b>{translate({lang: lang, info: item.location})}</div> : null}
                                            {item.description ? <div className="edu_period"><b>{translate({lang: lang, info: "what_i_learnt"})}: </b>{translate({lang: lang, info: item.description})}</div> : null}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            } else {
                return <p>{translate({lang: lang, info: "error"})}</p>
            }
        })()}
    </Row>
}

export default Education
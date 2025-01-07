import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { translate } from '../../../translations/translate'
import PieChart, { Series, Label, Connector, Size, Legend } from 'devextreme-react/pie-chart'

function Skills(props) {
    const { home, settings } = props
    const { skills_title, skills, languages } = home
    const { lang } = settings

    const [containerSize, setContainerSize] = useState(200)

    useEffect(() => {
        const handleResize = () => {
            const skillPieElement = document.querySelector('.skill_pie')            
            if (skillPieElement) {
                setContainerSize(skillPieElement.offsetWidth)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if(document.getElementById('about_content_box')){
            document.getElementById('about_content_box').scrollTo(0, 0)
        }       
	}, [])

    return <>
        <Row id="skills_row">
            {skills_title.map((item, t) => (
                <div key={t}>
                    <Col sm={12}>
                        <h4>{translate({ lang, info: item })}</h4>
                    </Col>
                    <Col sm={12}>
                        <Row>
                            {skills && skills.length > 0 && skills.map((x, i) => {
                                if (item === x.type) {
                                    const dataSource = [
                                        { name: x.name, value: x.value },
                                        { name: 'Remaining', value: 100 - x.value }
                                    ]
                                    return <Col key={i} xs={6} sm={3}>
                                        <div className="skill_pie">
                                            <PieChart
                                                id={"pie_" + i}
                                                dataSource={dataSource}
                                                palette={["#189cb0", "#dededede"]}
                                                innerRadius={0.85}
                                                sizeGroup="pies"
                                                type="doughnut"
                                            >
                                                <Series
                                                    argumentField="name"
                                                    valueField="value"
                                                >
                                                    <Label visible={false}>
                                                        <Connector visible={false} />
                                                    </Label>
                                                </Series>
                                                <Legend visible={false} />
                                                <Size width={containerSize} height={containerSize} />
                                            </PieChart>
                                            <p>{x.name}</p>
                                        </div>                                        
                                    </Col>
                                }
                                return
                            })}
                        </Row>
                    </Col>
                </div>
            ))}
        </Row>
        <Row id="language_row">
            <Col sm={12}>
                <h4>{translate({lang: lang, info: "languages"})}</h4>
            </Col>
			<Col sm={6} md={4} lg={3}>
                {(() => {
                    if(languages && languages.length>0){
                        return <>{languages.map(function(item, i){
                                let width = {'width': item.perc+"%"}
                                return <div key={i}>
                                    <p className="language_bar_title">{translate({lang: lang, info: item.name})}<span>({translate({lang: lang, info: item.level})})</span></p>
                                    <div className="language_bar_box">
                                        <div style={width} className={"language_bar " + item.name}>{item.perc}%</div>
                                    </div>
                                </div>
                            })}
                        </>
                    }
                })()}
			</Col>
		</Row>
    </>
}

export default Skills

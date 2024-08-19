import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container,Row, Col } from 'react-bootstrap'
import Carousel from '../../carousel/carousel'
import { translate } from '../../../translations/translate'
import { changePopup } from '../../../reducers/popup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Portofolio(props) {
    const { home, settings } = props
    const { portofolio_list, portofolio_items, contact } = home
    const { lang } = settings
    
    let myContact = contact[lang] ? contact[lang] : contact['ENG']
    const portofolio_carousel_options = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        draggable: true,
        dots: false,
        arrows: false,
        initialSlide: 0,
        swipeThreshold: 20,
        responsive: [            
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                }
            }, 
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    const [active, setActive] = useState(0)	

    let dispatch = useDispatch()	

    function portofolioClick(index){
        setActive(index)
    }

    function handleClickItem(e){
        let payload = {
            open: true,
            template: "portofolio",
            title: e.title,
            data: e,
            size: "lg",
        }
        dispatch(changePopup(payload))        
    }

    function portofolioTutorialsClick(){
        let payload = {
            open: true,
            template: "tutorials",
            title: translate({lang: lang, info: "tutorials"}),
            size: "lg",
        }
       dispatch(changePopup(payload))
    }

    return <Container>
        <Row>
            <Col sm={12}>
                <ul className="portofolio-list">
					{portofolio_list.map(function(item, i){
                        const style = active === i ? 'active' : ''; 
                        return <li key={i} order={i} className={style} onClick={()=>{portofolioClick(i)}}>{translate({lang: lang, info: item})}</li>
					})} 
				</ul>
				<div className="portofolio-container">
                    <Carousel 
                        {...props}
                        id="carousel_portofolio"
                        template="portofolio" 
                        options={portofolio_carousel_options}
                        itemList={portofolio_items[portofolio_list[active]]} 
                        getItem={(e)=>handleClickItem(e)}
                    />
				</div>
            </Col>
        </Row>
        <Row>
			<Col sm={12} className="text-center">
				<ul className="portofolio_links_other">
					<li>
                        <a id="portofolio_git" href={myContact.github} rel="noopener noreferrer" target="_blank">
                            <h6><FontAwesomeIcon icon={faGithub} /> <span>{myContact.github}</span></h6>
                        </a>
                    </li>
					<li onClick={()=>{portofolioTutorialsClick()}}>
						<h6><FontAwesomeIcon icon={faBook} /> <span>{translate({lang: lang, info: "tutorials"})}</span></h6>
					</li>
				</ul>
			</Col>
		</Row>
    </Container>
}

export default Portofolio
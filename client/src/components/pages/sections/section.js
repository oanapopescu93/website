import React, {useState, useEffect} from 'react'
import Header from './header'
import Sapou from '../partials/sapou'
import About from './about'
import Portofolio from './portofolio'
import Contact from './contact'
import { screenInfo } from '../utils'

function Section(props){
    const [windowDimensions, setWindowDimensions] = useState(screenInfo())
    const [sectionStyle, setSectionStyle] = useState({})

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, []) 
    
    function handleResize() {
        setWindowDimensions(screenInfo())
        if(props.template !== "contact"){
            setSectionStyle({height:  windowDimensions.height})
        }
    }

    return <div id={props.template} className="full-height" style={sectionStyle}>
            <div className="full-height-title">
                <Sapou template={props.template} lang={props.lang}></Sapou>
            </div>
            <div className="full-height-content">
                {(() => {
                    switch (props.template) {
                        case "about":
                            return <About login_visitor={props.login_visitor} socket={props.socket} data={props.data} lang={props.lang} mode={props.mode}></About>
                        case "portofolio":
                            return <Portofolio login_visitor={props.login_visitor} socket={props.socket} data={props.data} lang={props.lang} mode={props.mode}></Portofolio>
                        case "contact":
                            return <Contact login_visitor={props.login_visitor} socket={props.socket} data={props.data} lang={props.lang} mode={props.mode}></Contact>
                        default:
                            return <Header login_visitor={props.login_visitor} socket={props.socket} data={props.data} lang={props.lang} mode={props.mode}></Header>
                    }
                })()}
            </div>
    </div>
}

export default Section
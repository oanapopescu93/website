import React from 'react'
import Header from './header'
import Sapou from '../partials/sapou'
import About from './about'
import Portofolio from './portofolio'
import Contact from './contact'

function Section(props){
    return <div id={props.template} className="full-height">
            <div className="full-height-title">
                <Sapou template={props.template} lang={props.lang}></Sapou>
            </div>
            <div className="full-height-content">
                {(() => {
                    switch (props.template) {
                        case "about":
                            return <About login_visitor={props.login_visitor} socket={props.socket} data={props.data} lang={props.lang}></About>
                        case "portofolio":
                            return <Portofolio login_visitor={props.login_visitor} socket={props.socket} data={props.data} lang={props.lang}></Portofolio>
                        case "contact":
                            return <Contact login_visitor={props.login_visitor} socket={props.socket} data={props.data} lang={props.lang}></Contact>
                        default:
                            return <Header login_visitor={props.login_visitor} socket={props.socket} data={props.data} lang={props.lang}></Header>
                    }
                })()}
            </div>
    </div>
}

export default Section
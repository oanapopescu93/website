import React from 'react'
import Header from './header'
import Sapou from './partials/sapou'
import About from './about'
import Portofolio from './portofolio'
import Contact from './contact'

function Section(props){
	let template = props.template
    let data = props.data
    let socket = props.socket
    let login_visitor = props.login_visitor	
    return (
        <div id={template} className="full-height">
            <div className="full-height-title">
                <Sapou template={template}></Sapou>
            </div>
            <div className="full-height-content">
                {(() => {
                    switch (template) {
                        case "about":
                            return <About login_visitor={login_visitor} socket={socket} data={data}></About>
                        case "portofolio":
                            return <Portofolio login_visitor={login_visitor} socket={socket} data={data}></Portofolio>
                        case "contact":
                            return <Contact login_visitor={login_visitor} socket={socket} data={data}></Contact>
                        default:
                            return <Header login_visitor={login_visitor} socket={socket} data={data}></Header>
                    }
                })()}
            </div>
        </div>
    )
}

export default Section
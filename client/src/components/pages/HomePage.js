import React from 'react'
import Navbar from './navbar'
import Cv from './partials/cv'
import Footer from './partials/footer'
import Top from './partials/top'
import Tutorial from './partials/tutorial'
import Popup from './popups/popup'
import Section from './section'

function HomePage(props){
    let login_visitor = props.data.login_visitor // true = visitor; false = HR / future employer
    return (
        <>                	
            <Navbar login_visitor={login_visitor} lang={props.lang}></Navbar>
            <Section template="header" login_visitor={login_visitor} data={props.data.header} socket={props.socket} lang={props.lang}></Section>
            <Section template="about" login_visitor={login_visitor} data={props.data.about} socket={props.socket} lang={props.lang}></Section>
            <Section template="portofolio" login_visitor={login_visitor} data={props.data.portofolio} socket={props.socket} lang={props.lang}></Section>
            <Section template="contact" login_visitor={login_visitor} data={props.data.contact} socket={props.socket} lang={props.lang}></Section>
            { !login_visitor ? <Cv login_visitor={login_visitor} lang={props.lang}></Cv> : null}
            <Tutorial login_visitor={login_visitor} tutorials={props.data.portofolio.tutorials} lang={props.lang}></Tutorial>
            <Top></Top>
            <Footer lang={props.lang}></Footer>
            <Popup lang={props.lang}></Popup>
        </>
    )
}

export default HomePage

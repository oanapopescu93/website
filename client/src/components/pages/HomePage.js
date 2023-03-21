import React from 'react'
import { translate } from '../translations/translate'
import Navbar from './partials/navbar'
import Cv from './partials/cv'
import Footer from './partials/footer'
import Top from './partials/top'
import Tutorial from './partials/tutorial'
import Section from './sections/section'
import Popup from './popups/popup'

function HomePage(props){
    const {socket, data, lang, visitor} = props
    let login_visitor = visitor ? visitor : false //true = visitor; false = HR / future employer

    return <>
        {props.data ? <>
            <Navbar login_visitor={login_visitor} lang={props.lang}></Navbar>
            <Section template="header" login_visitor={login_visitor} data={data.header} socket={socket} lang={lang}></Section>
            <Section template="about" login_visitor={login_visitor} data={data.about} socket={socket} lang={lang}></Section>
            <Section template="portofolio" login_visitor={login_visitor} data={data.portofolio} socket={socket} lang={lang}></Section>
            <Section template="contact" login_visitor={login_visitor} data={data.contact} socket={socket} lang={lang}></Section>
            { !login_visitor ? <Cv login_visitor={login_visitor} lang={lang}></Cv> : null}
            <Tutorial login_visitor={login_visitor} tutorials={data.portofolio.tutorials} lang={lang}></Tutorial>
            <Top></Top>
            <Footer lang={lang}></Footer>
            <Popup lang={lang}></Popup>
        </> : <p>{translate({lang: props.lang, info: "error"})}</p>}  
    </>
}

export default HomePage

import React from 'react';
import Navbar from './navbar'
import Cv from './partials/cv';
import Footer from './partials/footer';
import Top from './partials/top';
import Tutorial from './partials/tutorial';
import Section from './section';

function HomePage(props){
	let socket = props.socket;
    let data = props.data;
    let login_visitor = props.data.login_visitor; // true = visitor; false = HR / future employer	
    return (
        <>                	
            <Navbar login_visitor={login_visitor}></Navbar>
            <Section template="header" login_visitor={login_visitor} data={data.header} socket={socket}></Section>
            <Section template="about" login_visitor={login_visitor} data={data.about} socket={socket}></Section>
            <Section template="portofolio" login_visitor={login_visitor} data={data.portofolio} socket={socket}></Section>
            <Section template="contact" login_visitor={login_visitor} data={data.contact} socket={socket}></Section>
            { !login_visitor ? <Cv login_visitor={login_visitor}></Cv> : null}
            <Tutorial login_visitor={login_visitor} tutorials={data.portofolio.tutorials}></Tutorial>
            <Top></Top>
            <Footer></Footer>
        </>
    );
}

export default HomePage;

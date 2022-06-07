import React, { Component } from 'react';
import Header from './header';
import Sapou from './partials/sapou';
import About from './about'
import Portofolio from './portofolio';
import Contact from './contact';

class Section extends Component {
	constructor(props) {
		super(props);
		this.state = {
            template: props.template,
			data: props.data,
            socket: props.socket
		};
	}
	render() {
        let login_visitor = this.props.login_visitor;
		return (
			<div id={this.props.template} className="full-height">
				<div className="full-height-title">
					<Sapou template={this.props.template}></Sapou>
				</div>
				<div className="full-height-content">
                    {(() => {
                        switch (this.props.template) {
                            case "about":
                                return (
                                    <About login_visitor={login_visitor} socket={this.state.socket} data={this.state.data}></About>
                                );
                            case "portofolio":
                                return (
                                    <Portofolio login_visitor={login_visitor} socket={this.state.socket} data={this.state.data}></Portofolio>
                                );
                            case "contact":
                                return (
                                    <Contact login_visitor={login_visitor} socket={this.state.socket} data={this.state.data}></Contact>
                                );
                            default:
                                return (
                                    <Header login_visitor={login_visitor} socket={this.state.socket} data={this.state.data}></Header>
                                );
                        }
                    })()}
                </div>
            </div>
		);
	}
}

export default Section;
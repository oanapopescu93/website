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
		};
	}
	render() {
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
                                    <About data={this.state.data}></About>
                                );
                            case "portofolio":
                                return (
                                    <Portofolio data={this.state.data}></Portofolio>
                                );
                            case "contact":
                                return (
                                    <Contact data={this.state.data}></Contact>
                                );
                            default:
                                return (
                                    <Header data={this.state.data}></Header>
                                );
                        }
                    })()}
                </div>
            </div>
		);
	}
}

export default Section;
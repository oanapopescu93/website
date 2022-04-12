import React, { Component } from 'react';
import Header from './header';
import Sapou from './partials/sapou';
import { scroll_anywhere } from './utils';

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
                                    <>aaa01</>
                                );
                            case "portofolio":
                                return (
                                    <>aaa02</>
                                );
                            case "contact":
                                return (
                                    <>aaa03</>
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
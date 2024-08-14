import React from 'react'
import TitleSection from './titleSection'
import Header from './header'
import About from './about'
import Portofolio from './portofolio'
import Contact from './contact'

function Section(props) {
    const {template} = props

    return <div id={template} className="full-height">
        {template !== "header" ? <div className="full-height-title">
            <TitleSection {...props} />
        </div> : null}
        <div className="full-height-content">
            {(() => {
                switch (template) {
                    case "about":
                        return <About {...props}/>
                    case "portofolio":
                        return <Portofolio {...props}/>
                    case "contact":
                        return <Contact {...props}/>
                    default:
                        return <Header {...props}/>
                }
            })()}
        </div>
    </div>
}

export default Section
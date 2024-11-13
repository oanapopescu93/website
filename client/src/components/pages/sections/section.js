import React from 'react'
import TitleSection from './titleSection'
import Header from './header'
import About from './about'
import Portofolio from './portofolio'
import Contact from './contact'

function Section(props) {
    const { template, settings } = props
    const { mode } = settings

    const backgroundStyle = template === "header" 
        ? mode === "light"
            ? { backgroundImage: 'url(/img/bg-desk.jpg)', backgroundSize: 'cover' }
            : { backgroundImage: 'url(/img/bg-desk-dark.jpg)', backgroundSize: 'cover' }
        : {}

    return <div id={template} className="full-height" style={backgroundStyle}>
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
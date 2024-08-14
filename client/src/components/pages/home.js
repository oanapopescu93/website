import React, {useEffect} from 'react'
import Section from './sections/section'
import Navbar from '../partial/navbar'
import Top from '../partial/top'
import Footer from '../partial/footer'
import Cv from './subsections/cv'
import Tutorial from './subsections/tutorial'

function Home(props) {
    const { user } = props
    const { guest } = user

    useEffect(() => {
        const watermark = document.querySelector('dx-license')
        if (watermark) {
            const boxDiv = document.createElement('div')
            boxDiv.className = 'watermark_box'
            watermark.parentNode.insertBefore(boxDiv, watermark)
            boxDiv.appendChild(watermark)
            watermark.style.display = 'none'
        }
    }, [])

    return <>
        <Navbar {...props} />     
        <Section template="header" {...props} />
        <Section template="about" {...props} />
        <Section template="portofolio" {...props} />
        <Section template="contact" {...props} />
        <Top />
        {parseInt(guest) === 0 ? <Cv {...props} /> : null}
        <Tutorial {...props} />
        <Footer {...props} />
    </>
}

export default Home
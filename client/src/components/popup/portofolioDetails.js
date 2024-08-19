import React, { useEffect } from 'react'
import { translate } from '../../translations/translate'

function PortofolioDetails(props){
    const { data, settings } = props
    const { lang } = settings

    useEffect(() => {
        magnify("myimage", 3)
    }, [data.src])

    function magnify(imgID, zoom){
        var img, glass, w, h, bw
        img = document.getElementById(imgID)
        glass = document.createElement("DIV")
        glass.setAttribute("class", "img-magnifier-glass")
        img.parentElement.insertBefore(glass, img)
        glass.style.backgroundImage = "url('" + img.src + "')"
        // glass.style.backgroundRepeat = "no-repeat"
        glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px"
        bw = 3
        w = glass.offsetWidth / 2
        h = glass.offsetHeight / 2
        
        glass.addEventListener("mousemove", moveMagnifier)
        img.addEventListener("mousemove", moveMagnifier)        
        glass.addEventListener("touchmove", moveMagnifier)
        img.addEventListener("touchmove", moveMagnifier)

        function moveMagnifier(e){
            var pos, x, y            
            e.preventDefault()            
            pos = getCursorPos(e)
            x = pos.x
            y = pos.y           
            if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
            if (x < w / zoom) { x = w / zoom; }
            if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
            if (y < h / zoom) { y = h / zoom; }            
            glass.style.left = (x - w) + "px"
            glass.style.top = (y - h) + "px"            
            glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px"
        }

        function getCursorPos(e){
            var a, x = 0, y = 0
            e = e || window.event
            a = img.getBoundingClientRect()            
            x = e.pageX - a.left
            y = e.pageY - a.top            
            x = x - window.pageXOffset
            y = y - window.pageYOffset
            return { x: x, y: y }
        }
    }

    return <>
        <div className="portofolio_image">
            <div className="portofolio_image_box img-magnifier-container">
                <img id="myimage" src={data.src} alt={data.alt} title={data.title} />
            </div>
        </div>
        {data.description ? (
            <div className="portofolio_description">
                <p>{data.description}</p>
            </div>
        ) : null}
        <div className="portofolio_buttons">
            {data.git ? (
                <a className="mybutton button_accent shadow_convex" href={data.git} target="_blank" rel="noopener noreferrer">
                    {translate({ lang: lang, info: "see_the_code" })}
                </a>
            ) : null}
            {data.link ? (
                <a className="mybutton button_accent shadow_convex" href={data.link} target="_blank" rel="noopener noreferrer">
                    {translate({ lang: lang, info: "take_a_look" })}
                </a>
            ) : null}
        </div>
        {data.platform ? (
            <div className="portofolio_platform"><b>{translate({ lang: lang, info: "platform" })}: </b>{data.platform}</div>
        ) : null}
        <div className="portofolio_used">
            <b>{translate({ lang: lang, info: "what_I_used" })}: </b><br />
            {data.used.map((x, i) => (
                <span key={i} className="box">{x}</span>
            ))}
        </div>
    </>
}

export default PortofolioDetails

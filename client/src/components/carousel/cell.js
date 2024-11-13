import React, { useState, useRef } from 'react'
import { translate } from '../../translations/translate'

function Cell(props) {
    const {index, data, template, settings} = props
    const {lang} = settings
    const [isDragging, setIsDragging] = useState(false)
    const dragStart = useRef({ x: 0, y: 0 })
    const dragThreshold = 5 // pixels

    const handleMouseDown = (e) => {
        setIsDragging(false)
        dragStart.current = { x: e.clientX, y: e.clientY }
      }
    
    const handleMouseMove = (e) => {
        const dx = e.clientX - dragStart.current.x
        const dy = e.clientY - dragStart.current.y
        if (Math.abs(dx) > dragThreshold || Math.abs(dy) > dragThreshold) {
          setIsDragging(true)
        }
    }
    
    const handleMouseUp = () => {
        setTimeout(() => setIsDragging(false), 0) // Small delay to ensure click event processes
    }

    const handleClick = () => {
        if(!isDragging){
            props.getItem(data) 
        }
    }

	return <>
        {(() => {
            switch (template) {
                case "portofolio":
                    return <div 
                        className="cell_container"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onClick={handleClick}
                    >
                        <div className="cell">
                            <div className="cell_info">
                                <img className="cell_img" alt={data.alt} title={data.title} src={window.location.origin + data.src}></img>                          
                            </div>
                            <div className="cell_more_info">
                                <p className="grid_title">{translate({lang: lang, info: data.title})}</p>
							</div>
                        </div>
                    </div>                
                default:
                    return <div key={index}>{translate({lang: lang, info: "error"})}</div>
            }
        })()}
    </>
}

export default Cell
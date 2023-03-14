import React from 'react'
import cv_pdf from '../../files/CV - Oana Popescu.pdf'
import cv_doc from '../../files/CV - Oana Popescu.doc'
import {translate} from '../../translations/translate'

function Cv(props){
    return <>
        <h3 className="text-uppercase" id="myModalLabel">{translate({lang: props.lang, info: "choose"})}</h3>
        <a href={cv_pdf} target = "_blank" rel="noopener noreferrer"><span className="cv-lang">PDF</span></a>
        <a href={cv_doc} target = "_blank" rel="noopener noreferrer"><span className="cv-lang">WORD</span></a>
    </>
}

export default Cv
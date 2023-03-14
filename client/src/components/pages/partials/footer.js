import React, { useEffect, useState } from 'react'
import { translate } from '../../translations/translate'
function Footer(props){
    const [date, setDate] = useState('')
    useEffect(() => {
        let my_date = new Date()
		my_date = my_date.getFullYear()
        setDate(my_date)
    }, [])
    return <footer className="text-center">
        <h6>Copyright © <span id="copyright_year">{date}</span> Oana Popescu. {translate({lang: props.lang, info: "all_rights_reserved"})}.</h6>
    </footer>
}
export default Footer
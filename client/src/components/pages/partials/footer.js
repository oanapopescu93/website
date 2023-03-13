import React, { useEffect, useState } from 'react'
function Footer(props){
    const [date, setDate] = useState('')
    useEffect(() => {
        let my_date = new Date()
		my_date = my_date.getFullYear()
        setDate(my_date)
    }, [])
    return <footer className="text-center">
        <h6>Copyright © <span id="copyright_year">{date}</span> Oana Popescu. All rights reserved.</h6>
    </footer>
}
export default Footer
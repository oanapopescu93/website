import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Home from './home'
import Login from './login'
import Popup from '../popup/popup'
import { changeUser } from '../../reducers/auth'
import { changePopup } from '../../reducers/popup'
import { bringPayload } from '../../reducers/home'
import { translate } from '../../translations/translate'
import { isEmpty } from '../../utils/utils'
import Loader from '../partial/loader'

function Page(props) {
    const {socket} = props 
    let home = useSelector(state => state.home)
    let user = useSelector(state => state.auth.user)
    let settings = useSelector(state => state.settings)
    let page = useSelector(state => state.page)
    let dispatch = useDispatch()

    useEffect(() => {
		dispatch(bringPayload())
		setInterval(function () {		  
            socket.emit('heartbeat', { data: "ping" })
        }, 15000)
	}, [])

    useEffect(() => {
        const handleLoginRead = (data)=>{
            if(data){
                dispatch(changeUser(data))
            } else {
                let payload = {
                    open: true,
                    template: "error",
                    title: "error",
                    data: translate({lang: settings.lang, info: "error_login_password"}),
                    size: "sm",
                }
                dispatch(changePopup(payload))
            }
        }        
		socket.on('login_read', handleLoginRead)
		return () => {
            socket.off('login_read', handleLoginRead)
        }
    }, [socket])

    useEffect(() => {
		if (document.body) {
            document.body.classList.remove('light', 'dark')
            document.body.classList.add(settings.mode)
        }
	}, [settings.mode])

    return <>    
        {(() => {
			if(!isEmpty(user.uuid)){
				if(home && home.loaded){
                    return <Home {...props} home={home} user={user} settings={settings} />
                } else {
                    return <Loader />
                }
			} else {
				return <Login {...props} settings={settings} />
			}
		})()}
        <Popup {...props} home={home} settings={settings} page={page} />
    </>
}

export default Page
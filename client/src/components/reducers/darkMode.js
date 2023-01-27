const darkMode = (state = 'light', action) => {
	switch(action.type){
		case "dark_mode":						
			return action.info			
		default: 
			return state
	}
}
export default darkMode
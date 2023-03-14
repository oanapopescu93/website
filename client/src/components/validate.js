export const checkSubmit = function(input="", type){
    let regex = ''
    let pass_result = true
    switch(type){
        case "email":
            regex = '^[a-zA-Z0-9]+[@]+[a-zA-Z0-9]+[.]+[a-zA-Z]{2,4}$'
            //letters+numbers+"."+"_" + @ + letters+numbers+"."+"_" + letters(2-4 characters)
            let regex_exp = new RegExp(regex)			
            pass_result = regex_exp.test(input)
            //pass_result = true
            return pass_result
        case "title":
        case "message":
            if(typeof input === "undefined" || input === "null" || input === null || input === "" ){
                pass_result = false
            }
            return pass_result
    }		
    
}
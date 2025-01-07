export const validateInput = (input="", type)=>{
    let regex = ''
    switch(type){
      case "name":
        regex = '^[A-Z]?[a-zA-Z\\s\\-]{0,49}$';
        // ^[A-Z]?              - Optional uppercase letter at the start
        // [a-zA-Z\s\-]{0,49}$  - Followed by 0 to 49 characters that can be uppercase letters, lowercase letters, spaces, or hyphens
      break
      case "email":
        regex = '^[a-zA-Z0-9]+[@]+[a-zA-Z0-9]+[.]+[a-zA-Z]{2,4}$'
        //letters+numbers+"."+"_" + @ + letters+numbers+"."+"_" + letters(2-4 characters)
        break
      case "phone":
        regex = "^[0-9]{5,20}$"
        //checks if it is a number
        break
      case "pass":
        regex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        // At least one upper case English letter, (?=.*?[A-Z])
        // // At least one lower case English letter, (?=.*?[a-z])
        // // At least one digit, (?=.*?[0-9])
        // // At least one special character, (?=.*?[#?!@$%^&*-])
        // // Minimum eight in length .{8,}
        // break
      default:
        regex = ''
        break
    }
    let regex_exp = new RegExp(regex)
    let pass_result = regex_exp.test(input)
    // pass_result = true //to make any input valid
    return pass_result
}
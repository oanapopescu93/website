import { capitalizeFirstLetter } from '../pages/utils'
import { words } from './words'

export const translate = function (data){
    if(!data) return
    let lang = data.lang ? data.lang : "ENG"
    let info = data.info
    let capitalize_first_fetter = data.capitalize_first_fetter ? data.capitalize_first_fetter : false
    let word = words(lang, info)
    if(word){
        return word
    } else {
        if(capitalize_first_fetter){
            return capitalizeFirstLetter(info)
        } else {
            return info
        }
    }
}
import words from './words.json'
import { capitalizeFirstLetter } from '../utils'

export const translate = function (data){
    if(!data) return
    let lang = data.lang ? data.lang : "ENG"
    let info = data.info
    let capitalize_first_fetter = data.capitalize_first_fetter ? data.capitalize_first_fetter : false
    if(words[lang][info]){
        return words[lang][info]
    } else {
        if(capitalize_first_fetter){
            return capitalizeFirstLetter(info)
        } else {
            return info
        }
    }
}
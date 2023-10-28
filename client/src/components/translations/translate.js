import { capitalizeFirstLetter } from '../pages/utils'

import { wordsDe } from './de/words'
import { wordsEs } from './es/words'
import { wordsFr } from './fr/words'
import { wordsIt } from './it/words'
import { wordsRo } from './ro/words'
import { wordsEng } from './eng/words'

export const translate = function (data){
    if(!data) return
    let lang = data.lang ? data.lang : "ENG"
    let info = data.info
    let capitalize_first_fetter = data.capitalize_first_fetter ? data.capitalize_first_fetter : false
    let word = wordsEng(info)
    switch(lang){
        case "DE":
            word = wordsDe(info)
            break
        case "ES":
            word = wordsEs(info)
            break
        case "FR":
            word = wordsFr(info)
            break
        case "IT":
            word = wordsIt(info)
            break
        case "RO":
            word = wordsRo(info)
            break
        case "ENG":
        default:
            word = wordsEng(info)
            break
    }
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
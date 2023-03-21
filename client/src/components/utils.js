import $ from 'jquery'

export const capitalizeFirstLetter = function(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const scroll_anywhere = function(e){
    e.preventDefault()
    var link = $(e.target).attr('href')
    if(typeof link !== "undefined" && link !== "null" && link !== null && link !== ""){        
        var position = $(link).offset().top
        if(typeof position !== "undefined" && position !== "null" && position !== null && position !== ""){
            if ($(window).width() < 960) {	
                $("html, body").animate({ scrollTop: position}, 800)
            }	
            else {	
                $("html, body").animate({ scrollTop: position - 40}, 800)
            }
        } 
    }
}

export const setCookie = function (cname,cvalue,exdays=30) {
    let d = new Date()
    d.setTime(d.getTime() + (exdays*24*60*60*1000))
    let expires = "expires=" + d.toGMTString()
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
export const getCookie = function (cname) {
    let name = cname + "="
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';')
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return ""
}
import $ from 'jquery'; 

export const capitalizeFirstLetter = function(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const scroll_anywhere = function(e){
    e.preventDefault();	
    var link = $(e.target).attr('href');
    if(typeof link !== "undefined" && link !== "null" && link !== null && link !== ""){        
        var position = $(link).offset().top;
        if(typeof position !== "undefined" && position !== "null" && position !== null && position !== ""){
            if ($(window).width() < 960) {	
                $("html, body").animate({ scrollTop: position}, 800);	
            }	
            else {	
                $("html, body").animate({ scrollTop: position - 40}, 800);	
            }
        } 
    }
}
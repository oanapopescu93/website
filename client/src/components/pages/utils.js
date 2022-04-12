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

export const showResults = function(title="", message="", w=200, h="auto") {
    if($('.show_results_container').length>0){
      $('.show_results_container').show();
      $('.show_results').css('max-width', w);
      $('.show_results').css('height', h);
      if($('.show_results h1').length>0){
        $('.show_results h1').empty();
        $('.show_results h1').append(title);
      }  
      if($('.show_results p').length>0){
        $('.show_results p').empty();
        $('.show_results p').append(message);
      }    
      $( ".show_results_container" ).click(function() {
        $('.show_results_container').hide();
      });
    }	
  }
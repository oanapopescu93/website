import $ from 'jquery'; 

export const capitalizeFirstLetter = function(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const scroll_top = function(){
    var scrollTrigger = 500
	const backToTop = function () {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > scrollTrigger) {
			$('#top').addClass('show');
		} else {
			$('#top').removeClass('show');
		}
	};
	backToTop();
	$(window).on('scroll', function () {
		backToTop();
	});
}

export const scroll_anywhere = function(e){
    e.preventDefault();	
    var link = $(e.target).attr('href');
    var position = $(link).offset().top;

    console.log('scroll-button', e.target, $(e.target), link, position)	
    
    if ($(window).width() < 960) {	
        $("html, body").animate({ scrollTop: position}, 800);	
    }	
    else {	
        $("html, body").animate({ scrollTop: position - 40}, 800);	
    }
}
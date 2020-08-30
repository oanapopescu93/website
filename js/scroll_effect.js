function scroll_top(){
	$('body').append('<a href="#home" id="top" title="Back to top" class="text-uppercase scroll-button"><i class="fa fa-arrow-circle-up"></i></a>');
	
	var scrollTrigger = 500

	backToTop = function () {
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

function scroll_anywhere(){
	$('body').on('click', '.scroll-button', function (e) {
		e.preventDefault();	
		var link = $(this).attr('href');
		var position = $(link).offset().top;	
		if ($(window).width() < 960) {	
			$("html, body").animate({ scrollTop: position}, 800);	
		}	
		else {	
			$("html, body").animate({ scrollTop: position - 40}, 800);	
		}
		
		if($(this).parent().parent().hasClass('nav-left')){
			$('.navbar-box').removeClass('move-away');	
			$('.bar1').removeClass('change');
			$('.bar2').removeClass('change');
			$('.bar3').removeClass('change');
		}
	});
}

// paralax home scroll

var speed = 3;
function parallax() {
	var $home = document.getElementById("home");
	var yPos = window.pageYOffset / speed;
	yPos = -yPos;	
	var coords = '0% '+ yPos + 'px';
	
	$home.style.backgroundPosition = coords;
}

window.addEventListener("scroll", function(){
	parallax();	
});

	
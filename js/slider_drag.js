// dragable slider portofolio
let isClick = true;
$(document).ready(function(){
	const slider = document.querySelector('.items');
	const go_left = document.querySelector('#go_left');
	const go_right = document.querySelector('#go_right');
	
	
	let isDown = false;
	let startX;
	let scrollLeft;
	
	var walk = 0;
	

	slider.addEventListener('mousedown', (e) => {
		// console.warn('mousedown');
		isDown = true;
		slider.classList.add('active');
		startX = e.pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;
	});
	slider.addEventListener('touchstart', (e) => {
		// console.warn('touchstart');
		isDown = true;
		slider.classList.add('active');
		startX = e.touches[0].pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;
	});
	
	
	slider.addEventListener('mouseleave', () => {
		// console.warn('mouseleave');
		isDown = false;
		isClick = true;
		slider.classList.remove('active');
	});

	
	slider.addEventListener('mouseup', () => {
		// console.warn('mouseup', walk);
		isDown = false;	
		if(walk != 0){
			isClick = false;
		} else {
			isClick = true;
		}
		slider.classList.remove('active');
	});
	slider.addEventListener('touchend', () => {
		// console.warn('touchend', walk);
		isDown = false;	
		if(walk != 0){
			isClick = false;
		} else {
			isClick = true;
		}
		slider.classList.remove('active');
	});
	
	
	slider.addEventListener('mousemove', (e) => {
		// console.warn('mousemove');
		walk = 0;
		if(isDown){			
			e.preventDefault();	
			isClick = true;			
			const x = e.pageX - slider.offsetLeft;
			walk = (x - startX) * 1; //scroll-fast
			slider.scrollLeft = scrollLeft - walk;
			if(walk != 0){
				isClick = false;
			} else {
				isClick = true;
			}
			
		}		
	});
	slider.addEventListener('touchmove', (e) => {		
		walk = 0;
		if(isDown){			
			e.preventDefault();	
			
			isClick = true;			
			const x = e.touches[0].pageX - slider.offsetLeft;
			walk = (x - startX) * 1; //scroll-fast			
			slider.scrollLeft = scrollLeft - walk;
			// console.warn('touchmove', e, x, walk, scrollLeft, slider.scrollLeft);
			if(walk != 0){
				isClick = false;
			} else {
				isClick = true;
			}
			
		}		
	});
	
	
	slider.addEventListener('click', (e) => {
		if(!isClick) {
			e.preventDefault();	
		} 
	});
	
	go_left.addEventListener('click', (e) => {				
		var items = $('.grid-container').width();
		walk = items;	
		
		$('.items').animate({
            scrollLeft: slider.scrollLeft - walk
        }, 300);
	});
	
	go_right.addEventListener('click', (e) => {			
		var items = $('.grid-container').width();
		walk = items;	
		
		$('.items').animate({
            scrollLeft: slider.scrollLeft + walk
        }, 300);
	});
});


// declare namespace
var rf = rf || {};
rf.hpCarousel = function(){
	var timer = setInterval(showBlock, 5000);
	var carCounter = 0;
	var carouselLength = $('.carousel-item').length-1;
	/* Carousel auto */
	function showBlock(){
		carCounter == carouselLength? carCounter = 0 : carCounter++;
		$('.carousel-block div.carousel-item').fadeOut();
		$('#carousel'+carCounter).fadeIn(1000);
		$('.carousel-nav a').removeClass('on');
		var carLink = $('.carousel-nav a#carlink'+carCounter);
		$(carLink).addClass('on');
	};
	
	/* Carousel clickable nav */
	$('.carousel-nav a').click(function(e){
		e.preventDefault();
		clearInterval(timer);
		$('.carousel-nav a').removeClass('on');
		$(this).addClass('on');
		var currSlide = (this.id).charAt((this.id).length-1);
		$('.carousel-item').css('display','none');
		$('#carousel'+currSlide).css('display','block');	
	});	
};

$(document).ready(function(){
	rf.hpCarousel();
});

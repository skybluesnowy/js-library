// Js //
$(document).ready(function(){

	$(window).scroll(function () {
		//console.log($(window).scrollTop());
		if ($(window).scrollTop() >= 300) {
			$('#two').fadeIn('slow');
		}
		if ($(window).scrollTop() >= 580) {
			$('#two p.delayed').fadeIn('slow');
		}
		if ($(window).scrollTop() <= 550) {
			$('#two p.delayed').fadeOut('slow');
		}
		if ($(window).scrollTop() >= 1000) {
			$('#three').fadeIn('slow');
		}
		if ($(window).scrollTop() >= 1500) {
			$('#four').fadeIn('slow');
		}
	});
	
	$(window).resize(function(){
		$('#sidebar').height($(window).height());
	});	
	
	$('#sidebar').height($(window).height());

});
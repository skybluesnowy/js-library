// declare namespace
var rf = rf || {};
$(document).ready(function(){
	rf.topNavSlide();
});

// Top navigation hover/slide
rf.topNavSlide = function(){
	$('#nav li').hover(
		function () {
			$('ul', this).stop().slideDown(450);
		}, 
		function () {
			$('ul', this).stop().slideUp(100);			
		}
	);
};
// Cookie function
	function setCookie(){
		var myCookie = Cookie.write('is-it-set', 'yes');
	}
	
// function to style and render box when cookie is active	
	function cookieOn(){
		document.id('box').setStyles({'background': '#0f0', 'color': '#000'}).innerHTML='Cookie has been set';
	}
	
// function to style and render box when cookie is destroyed	
	function cookieOff(){
		document.id('box').setStyles({'background': '#f00', 'color': '#fff'}).innerHTML='Cookie not set or has been destroyed';
	}
	
	window.addEvent('domready', function(){
		var readit = Cookie.read('is-it-set');
		
// Set up page defaults		
		if (readit=='yes'){
			cookieOn();
		} else {
			cookieOff();
		};
		
// set cookie 
		document.id('link1').addEvent('click', function(event){
			event.stop();
			setCookie();
			cookieOn();
		});

// destroy cookie
		document.id('link2').addEvent('click',function(event){
			event.stop();
			Cookie.dispose('is-it-set');
			cookieOff();
		});
	});
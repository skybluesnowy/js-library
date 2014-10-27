var blindpig = {
	CONF : {
		dev : true,
		els : {}, // populated when document is ready
		preloadQueue : {},
		cookiesAccepted : false,
		mobilePositions : {
			portrait : {
				header : {
					height : 125
				},
				ageGate : {
					background : {
						width : 640,
						height : 1136
					},
					form : {
						day : {
							x : 140,
							y : 720,
							width : 75,
							height : 50
						},
						month : {
							x : 265,
							y : 720,
							width : 75,
							height : 50
						},
						year : {
							x : 393,
							y : 720,
							width : 75,
							height : 50
						},
						submit : {
							x : 255,
							y : 910,
							width : 100,
							height : 100
						}
					},
					pointers : {
						left : {
							x : 125,
							y : 920,
							width : 118,
							height : 61
						},
						right : {
							x : 365,
							y : 920,
							width : 118,
							height : 61
						}
					}
				},
				landingPage : {
					article : {
						x: 70,
						y : 200,
						width : 519,
						height : 734
					},
					arrow : {
						width : 55,
						height : 92
					},
					arrowTop : {
						width : 44,
						height : 102
					},
					background : {
						width : 640,
						height : 1136
					}
				},
				product1 : {
					image : {
						width : 640,
						height : 1136
					}
				},
				product2 : {
					image : {
						width : 640,
						height : 1136
					}
				},
				product3 : {
					image : {
						width : 640,
						height : 1136
					}
				}
			},
			landscape : {
				header : {
					height : 50
				},
				ageGate : {
					background : {
						width : 1136,
						height : 744
					},
					form : {
						day : {
							x : 438,
							y : 407,
							width : 75,
							height : 50
						},
						month : {
							x : 515,
							y : 407,
							width : 75,
							height : 50
						},
						year : {
							x : 597,
							y : 407,
							width : 75,
							height : 50
						},
						submit : {
							x : 525,
							y : 530,
							width : 100,
							height : 100
						}
					},
					pointers : {
						left : {
							x : 415,
							y : 540,
							width : 118,
							height : 61
						},
						right : {
							x : 610,
							y : 540,
							width : 118,
							height : 61
						}
					}
				},
				landingPage : {
					article : {
						x: 440,
						y : 40,
						width : 260,
						height : 367
					},
					arrow : {
						width : 55,
						height : 92
					},
					arrowTop : {
						width : 44,
						height : 102
					},
					background : {
						width : 1136,
						height : 640
					}
				},
				product1 : {
					image : {
						width : 1126,
						height : 686
					}
				},
				product2 : {
					image : {
						width : 1126,
						height : 686
					}
				},
				product3 : {
					image : {
						width : 1126,
						height : 686
					}
				}
			}
		},
		tabletPositions : {
			portrait : {
				header : {
					height : 70
				},
				ageGate : {
					background : {
						width : 1536,
						height : 2048
					},
					form : {
						day : {
							x : 480,
							y : 1180,
							width : 100,
							height : 100
						},
						month : {
							x : 720,
							y : 1180,
							width : 100,
							height : 100
						},
						year : {
							x : 935,
							y : 1180,
							width : 100,
							height : 100
						},
						submit : {
							x : 685,
							y : 1525,
							width : 170,
							height : 170
						}
					},
					pointers : {
						left : {
							x : 500,
							y : 1550,
							width : 177,
							height : 92
						},
						right : {
							x : 860,
							y : 1550,
							width : 177,
							height : 92
						}
					}
				},
				landingPage : {
					article : {
						x: 250,
						y : 310,
						width : 1038,
						height : 1468
					},
					arrow : {
						width : 110,
						height : 184
					},
					arrowTop : {
						width : 88,
						height : 204
					},
					background : {
						width : 1536,
						height : 2048
					}
				},
				product1 : {
					image : {
						width : 1400,
						height : 1820
					}
				},
				product2 : {
					image : {
						width : 1400,
						height : 1820
					}
				},
				product3 : {
					image : {
						width : 1400,
						height : 1820
					}
				}
			},
			landscape : {
				header : {
					height : 70
				},
				ageGate : {
					background : {
						width : 1680,
						height : 1100
					},
					form : {
						day : {
							x : 692,
							y : 614,
							width : 75,
							height : 50
						},
						month : {
							x : 810,
							y : 614,
							width : 75,
							height : 50
						},
						year : {
							x : 930,
							y : 614,
							width : 75,
							height : 50
						},
						submit : {
							x : 800,
							y : 790,
							width : 100,
							height : 100
						}
					},
					pointers : {
						left : {
							x : 685,
							y : 810,
							width : 118,
							height : 61
						},
						right : {
							x : 897,
							y : 810,
							width : 118,
							height : 61
						}
					}
				},
				landingPage : {
					article : {
						x: 295,
						y : 177,
						width : 1040,
						height : 728
					},
					arrow : {
						width : 55,
						height : 92
					},
					arrowTop : {
						width : 44,
						height : 102
					},
					background : {
						width : 1680,
						height : 1024
					}
				},
				product1 : {
					image : {
						width : 1680,
						height : 1024
					}
				},
				product2 : {
					image : {
						width : 1680,
						height : 1024
					}
				},
				product3 : {
					image : {
						width : 1680,
						height : 1024
					}
				}
			}
		},
		desktopPositions : {
			large : {
				landingPage : {
					article : {
						x: 295,
						y : 177,
						width : 1040,
						height : 728
					}
				}
			},
			small : {
				landingPage : {
					article : {
						x: 600,
						y : 177,
						width : 519,
						height : 697
					}
				}
			}
		}
	}
},
soundManagerReady = false;

(function( bp, $, WIN ){

	bp.detectUserEnv = function() {

		var imageAspect = {
			size : "",
			orientation : ""
		};

		if (isMobilePortrait()) {
			imageAspect.size = "small";
			imageAspect.orientation = "portrait";

			// images are diffent aspect ratio, so we need to reset floating positions
			resetFloatingPositions(bp.CONF.mobilePositions.portrait);

		} else if (isMobileLandscape()) {
			imageAspect.size = "small";
			imageAspect.orientation = "landscape";

			// images are diffent aspect ratio, so we need to reset floating positions
			resetFloatingPositions(bp.CONF.mobilePositions.landscape);

		} else if (isTabletPortrait()) {
			imageAspect.size = "medium";
			imageAspect.orientation = "portrait";

			// images are diffent aspect ratio, so we need to reset floating positions
			resetFloatingPositions(bp.CONF.tabletPositions.portrait);

		} else if (isTabletLandscape()) {
			imageAspect.size = "large";
			imageAspect.orientation = "landscape";

			// images are diffent aspect ratio, so we need to reset floating positions
			resetFloatingPositions(bp.CONF.tabletPositions.landscape);
		}
		else if (isDesktopSmall()) {
			imageAspect.size = "large";
			imageAspect.orientation = "landscape";

			// reset scroll sizes
			resetFloatingPositions(bp.CONF.desktopPositions.small, true);
		}
		else {
			imageAspect.size = "large";
			imageAspect.orientation = "landscape";

			// reset scroll sizes
			resetFloatingPositions(bp.CONF.desktopPositions.large, true);
		}

		return imageAspect;
	}

	bp.preload = function(imageAspect) {

		// create preloader
		bp.CONF.preloadQueue = new createjs.LoadQueue();
		bp.CONF.preloadQueue.on("complete", init, this);
		bp.CONF.preloadQueue.loadManifest([
			{id: "bgAgeGate", src:"img/bgAgeGate-" + imageAspect.size + "-" + imageAspect.orientation + ".jpg"},
	    	{id: "bgLanding", src:"img/bgLanding-" + imageAspect.size + "-" + imageAspect.orientation + ".jpg"},
	    	{id: "bgProduct1", src:"img/bgProduct1-" + imageAspect.size + "-" + imageAspect.orientation + ".jpg"},
	    	{id: "bgProduct2", src:"img/bgProduct2-" + imageAspect.size + "-" + imageAspect.orientation + ".jpg"},
	    	{id: "bgProduct3", src:"img/bgProduct3-" + imageAspect.size + "-" + imageAspect.orientation + ".jpg"},
	    	{id: "article", src:"img/article-" + imageAspect.size + "-" + imageAspect.orientation + ".png"},
	    	{id: "product1", src:"img/product1-" + imageAspect.size + "-" + imageAspect.orientation + ".png"},
	    	{id: "product1", src:"img/product2-" + imageAspect.size + "-" + imageAspect.orientation + ".png"},
	    	{id: "product3", src:"img/product3-" + imageAspect.size + "-" + imageAspect.orientation + ".png"}
		]);
	}

	// ===== Initialise ======
	function init() {
		storeDomElements();
		addAgeGate();
		reposFloatingElements();
		configureMuteButton();
		hidePreloader();

		// on window resize, repositon any floating elements
		bp.CONF.els.win.resize(function() {
			bp.detectUserEnv();
			reposFloatingElements();

			// Prevent scrolling on mobile devices when hiding URL-bar
			if (typeof window.onorientationchange === 'undefined') {
				// Find the first active section
				var currentSection = bp.CONF.els.container.find('.ss-active');

				// Scroll to it immediately
				bp.CONF.els.win.scrollTo(currentSection,{duration:0});
			}

		});

		// on scroll check whether footer is visible and hide nav if so
		bp.CONF.els.win.scroll(function() {
			toggleNavBar();
		});
	}

	// ===== Store DOM elements for quick access ======
	function storeDomElements()
	{
		bp.CONF.els = {
			win : $(WIN),
			body : $('body'),
			container : $('#container'),
			ageGate : $('#age-restricted'),
			header : $('header')
		};

		$.extend( bp.CONF.els, {
			sections : bp.CONF.els.container.find('section')
		});
	}

	// ===== Add's the age gate
	function addAgeGate()
	{
		// implement age gate plugin
		$('#age-restricted').agegate({
			age: 18,
			legal: function(onLoad){

				// Stop hand animation
				$(".pointer").stop(true).stopTime();

				// Hide preloader for transition
				$('#client-age-gate .fade img').hide();

				/**
				 *  If user has previously been approved (ie. cookie is found),
				 *	then onLoad will be true as it's executed on load. Otherwise
				 *  if they press the submit button, onLoad will be false
				 **/
				var animTime = (onLoad) ? 0 : 700;

				// Fade in black overlay
				$('#client-age-gate .fade').delay(animTime).fadeIn(animTime, function() {
					startUp();
				});

				if (!onLoad) {
					// Play music when ready
					if (soundManagerReady) {
						playKnockingSoundFX();
					} else {
						soundManager.onready(playKnockingSoundFX)
					}
				}
			},
			underage: function(){
				alert("Sorry, you must be at least " + this.age + " years old in order to continue.");
				window.open("http://www.drinkaware.co.uk");
			},
			invalidDate : function() {
				alert("Sorry, you must enter a valid date in order to continue.");
			},
			blindpigConfig : bp.CONF
		});

		function startUp() {

			// Remove age gate & cookies header
			$('#client-age-gate, header').remove();

			// Allow overflow in container
			bp.CONF.els.container.css("overflow", "visible");

			showMainContent();
			bindNavEvents();

			// Play music when ready
			if (soundManagerReady) {
				playBackgroundMusic(true);
			} else {
				soundManager.onready(function() {
					playBackgroundMusic(true)
				});
			}

			// Fade out black overlay
			$('#landing-page .fade').animate({"opacity": 0}, 700, function() {

				// Add auto scroller behaviour
				bp.CONF.els.container.snapscroll({'scrollOptions':{'axis':'y', 'onAfter': fadeInPage}, easing: 'easeOutCirc'});

				// Find the first active section
				var currentSection = bp.CONF.els.container.find('.ss-active');

				// Scroll to it
				bp.CONF.els.win.scrollTo(currentSection);
			});
		}

		$('#accept-cookies-btn').click(function() {
			bp.CONF.cookiesAccepted = true;
			bp.CONF.els.header.animate({"height" : 0}, 400, function() {
				$(this).remove();
			});
		});

		// Remove default values in form input fields on focus
		$("#age-gate :input").focus(function() {
			$(this).val('');
		});

		// On leaving the last input field, animate the hands pointers
		$("#agegate-year").keyup(function() {
			if ($(this).val().length == 2) {
				playHandAnim();
			}
		}).blur(playHandAnim);

		// on load show the cookie acceptance header
		bp.CONF.els.header.animate({"height" : bp.CONF.els.header.attr('data-height')});

		// ===== Animates the hand pointers =====
		function playHandAnim() {

			$(".pointer").everyTime(10, function() {
		    	$("#pointerLeft").animate({"left" : "-=20px"}, 400).animate({left:"+=20px"}, 400);
		    	$("#pointerRight").animate({"left" : "+=20px"}, 400).animate({left:"-=20px"}, 400);
		    });
		}
	}

	function hidePreloader() {
		$('#client-age-gate .fade').fadeOut();
	}

	// ===== Show main content =====
	function showMainContent() {

		// Show content sections
		$('#landing-page, #product-1, #product-2, #product-3, footer, nav').show();

		// slide in article graphic
		$('#article').delay(1000).animate({'top': 0}, 800, "easeOutCirc");
	}

	// ===== Bind navigation events =====
	function bindNavEvents() {
		bp.CONF.els.sections.find('.arrow img').click(function() {

			var currentSection = bp.CONF.els.container.find('.ss-active');
			var nextSection = currentSection.next();

			bp.CONF.els.win.scrollTo(nextSection, 500, {easing: 'easeOutCirc', 'axis':'y'});
		});

		bp.CONF.els.sections.find('.arrowTop img').click(function() {
			bp.CONF.els.win.scrollTo($('#landing-page'), 500, {easing: 'easeOutCirc', 'axis':'y'});
		});
	}

	// ====== Setup mute button behaviour =====
	function configureMuteButton() {

		// It's actually a play/pause button
		$('#mute-audio').click(function() {
			var paused = soundManager.getSoundById('music').paused;
			var soundState = soundManager.getSoundById('music').playState;

			if (paused || soundState == 0) {
				$(this).removeClass('mute-on').addClass('mute-off');
				playBackgroundMusic();
			} else {
				$(this).removeClass('mute-off').addClass('mute-on');
				soundManager.getSoundById('music').pause();
			}
		});

		// if iOS we can't autoplay, so we just default to mute on
		var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );

		if (iOS) {
			$('#mute-audio').removeClass('mute-off').addClass('mute-on');
		}
	}

	// ===== Pay BG Music =====
	function playBackgroundMusic(onLoad) {

		// onLoad defines whether the function is called on load
		onLoad = typeof onLoad !== 'undefined' ? onLoad : false;
		var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );

		// iOS seems to handle autoplay differently, so we just pause all
		if (onLoad && iOS) {
			soundManager.getSoundById('music').pause();
			return;
		}

		// loop sound continuously
		soundManager.getSoundById('music').play({
		    onfinish: function() {
		      playBackgroundMusic();
		    }
		});
	}

	// ===== Play knocking sound =====
	function playKnockingSoundFX() {
		soundManager.getSoundById('knocking').play();
	}

	// ===== Fades out black overlay for active section =====
	function fadeInPage() {
		bp.CONF.els.container.find('.ss-active').children('.fade').animate({"opacity": 0}, 350);
		bp.CONF.els.container.find(':not(.ss-active)').children('.fade').animate({"opacity": 0.7}, 350);
	}

	// ===== Checks position of footer to decide whether to hide nav =====
	function toggleNavBar() {
		if (($('footer').isOnScreen() == true) && $('nav:visible')) {
			$('nav').hide();
		}
		else if (($('footer').isOnScreen() == false) && $('nav:hidden')) {
			$('nav').show();
		}
	}

	// ===== Detect if mobile and portrait =====
	function isMobilePortrait() {
		var isIPhone = Modernizr.mq('all and (max-width : 320px)')
		var isGalaxy = Modernizr.mq('all and (min-width: 321px) and (max-width: 360px)')

		var isMobile = (isIPhone || isGalaxy) ? true : false;
		return isMobile;
	}

	// ===== Detect if mobile and landscape ======
	function isMobileLandscape() {
		return (Modernizr.mq('all and (min-width : 321px) and (max-device-width : 360px) and (orientation : landscape)'));
	}

	// ===== Detect if tablet and portrait ======
	function isTabletPortrait() {
		return (Modernizr.mq('all and (min-device-width : 361px) and (max-device-width : 1024px) and (orientation : portrait)'));
	}

	// ===== Detect if tablet and landscape ======
	function isTabletLandscape() {
		return (Modernizr.mq('all and (min-device-width : 361px) and (max-device-width : 1024px) and (orientation : landscape)'));
	}

	// ===== Detect if desktop small ======
	function isDesktopSmall() {
		return (Modernizr.mq('all and (max-width: 800px)'));
	}

	// ===== Resets floating positions when background image size changes =====
	function resetFloatingPositions(context, desktopOnly) {

		desktopOnly = typeof desktopOnly !== 'undefined' ? desktopOnly : false;

		if (desktopOnly) {
			$('#scroll')
				.attr('data-pos-x', context.landingPage.article.x)
				.attr('data-pos-y', context.landingPage.article.y)
				.attr('data-width', context.landingPage.article.width)
				.attr('data-height', context.landingPage.article.height)

			return;
		}

		// Set the age gate bg image
		$('#client-age-gate').attr('data-bg-width', context.ageGate.background.width);
		$('#client-age-gate').attr('data-bg-height', context.ageGate.background.height);

		// Set the landing page sizes
		$('#landing-page, #product-1, #product-2, #product-3').attr('data-bg-width', context.landingPage.background.width);
		$('#landing-page, #product-1, #product-2, #product-3').attr('data-bg-height', context.landingPage.background.height);

		// set the header height
		$('header').attr('data-height', context.header.height)

		// day
		$('#agegate-day')
			.attr('data-pos-x', context.ageGate.form.day.x)
			.attr('data-pos-y', context.ageGate.form.day.y)
			.attr('data-width', context.ageGate.form.day.width)
			.attr('data-height', context.ageGate.form.day.height);

		//month
		$('#agegate-month')
			.attr('data-pos-x', context.ageGate.form.month.x)
			.attr('data-pos-y', context.ageGate.form.month.y)
			.attr('data-width', context.ageGate.form.month.width)
			.attr('data-height', context.ageGate.form.month.height);

		//year
		$('#agegate-year')
			.attr('data-pos-x', context.ageGate.form.year.x)
			.attr('data-pos-y', context.ageGate.form.year.y)
			.attr('data-width', context.ageGate.form.year.width)
			.attr('data-height', context.ageGate.form.year.height);

		// verify button
		$('#verify')
			.attr('data-pos-x', context.ageGate.form.submit.x)
			.attr('data-pos-y', context.ageGate.form.submit.y)
			.attr('data-width', context.ageGate.form.submit.width)
			.attr('data-height', context.ageGate.form.submit.height);

		// pointer left
		$('#pointerLeft')
			.attr('data-pos-x', context.ageGate.pointers.left.x)
			.attr('data-pos-y', context.ageGate.pointers.left.y)
			.attr('data-width', context.ageGate.pointers.left.width)
			.attr('data-height', context.ageGate.pointers.left.height);

		// pointer right
		$('#pointerRight')
			.attr('data-pos-x', context.ageGate.pointers.right.x)
			.attr('data-pos-y', context.ageGate.pointers.right.y)
			.attr('data-width', context.ageGate.pointers.right.width)
			.attr('data-height', context.ageGate.pointers.right.height);

		$('#scroll')
			.attr('data-pos-x', context.landingPage.article.x)
			.attr('data-pos-y', context.landingPage.article.y)
			.attr('data-width', context.landingPage.article.width)
			.attr('data-height', context.landingPage.article.height)

		$('section .arrow img')
			.attr('data-width', context.landingPage.arrow.width)
			.attr('data-height', context.landingPage.arrow.height)

		$('section .arrowTop img')
			.attr('data-width', context.landingPage.arrowTop.width)
			.attr('data-height', context.landingPage.arrowTop.height)

		$('#product-1 .product-image')
			.attr('data-width', context.product1.image.width)
			.attr('data-height', context.product1.image.height)
			
		$('#product-2 .product-image')
			.attr('data-width', context.product2.image.width)
			.attr('data-height', context.product2.image.height)

		$('#product-3 .product-image')
			.attr('data-width', context.product3.image.width)
			.attr('data-height', context.product3.image.height)
	}

	/* ============== Reposition Floating Elements & Scale ===========
	 * Syncs elements position and scale based on the background image
	 * ===============================================================*/
	function reposFloatingElements() {
	    var windowWidth = bp.CONF.els.win.width(),
	    	windowHeight = bp.CONF.els.win.height();

	    // loop through all sections
	    bp.CONF.els.sections.each(function(){

	    	var imageWidth = $(this).attr('data-bg-width'),
	    		imageHeight = $(this).attr('data-bg-height');

	    	// Get largest dimension increase
		    var xScale = windowWidth / imageWidth,
		    	yScale = windowHeight / imageHeight,
		    	scale,
		    	yOffset = 0,
		    	xOffset = 0;

		    if (xScale > yScale) { // The image fits perfectly in x axis, stretched in y
		        scale = xScale;
		        yOffset = (windowHeight - (imageHeight * scale)) / 2;
		    } else { // The image fits perfectly in y axis, stretched in x
		        scale = yScale;
		        xOffset = (windowWidth - (imageWidth * scale)) / 2;
		    }

	    	// find objects with the floating flag
		    $(this).find("[data-floating]").each(function() {

		    	var $el = $(this),
		    		xPos = $el.attr('data-pos-x'),
		    		yPos = $el.attr('data-pos-y');
		    		width = $el.attr('data-width'),
		    		height = $el.attr('data-height'),
		    		align = $el.attr('data-v-align');

		    	// position and size html element
		    	if (align == 'bottom') {
					$el.css('bottom', yPos);
				} else {
					$el.css('top', (yPos) * scale + yOffset);
				}
				$el.css('left', (xPos) * scale + xOffset);
				$el.css('width', width * scale);
				$el.css('height', height * scale);
		    });
	    });
	}


	return bp;

}( blindpig = blindpig || {}, jQuery, window ));

jQuery( document ).ready(function() {

	var imageAspect = blindpig.detectUserEnv();
	blindpig.preload(imageAspect);

});


// Setup sound manager and load audio
soundManager.setup({ url: 'swf/', flashVersion: 9 });
soundManager.onready(function() {
	var bgMusic = soundManager.createSound({
		// optional id, for getSoundById() look-ups etc. If omitted, an id will be generated.
		id: 'music',
		url: 'audio/background-music.mp3',
		// optional sound parameters here, see Sound Properties for full list
		volume: 100,
		autoPlay: false
	});

	var knockingSoundFX = soundManager.createSound({
		// optional id, for getSoundById() look-ups etc. If omitted, an id will be generated.
		id: 'knocking',
		url: 'audio/knocking.mp3',
		// optional sound parameters here, see Sound Properties for full list
		volume: 100,
		autoPlay: false
	});

	soundManagerReady = true;
});

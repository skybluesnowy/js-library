// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/**
 * jQuery Age Gate v1.0.0
 *
 * Simple age verification, "age gate", plugin required by some content providers.
 * Supports Cookies when used with https://github.com/carhartl/jquery-cookie
 * https://github.com/hark/jquery-age-gate
 *
 * by Matthew Callis https://github.com/MatthewCallis
 *                   http://www.hark.com
 *
 * Useage:
 *   $('#age-restricted').agegate({
 *     age: 21,
 *     legal: function(){
 *       $('#age-restricted').empty().append('<iframe src="..."></iframe>');
 *     },
 *     underage: function(){
 *       alert("Sorry, you must be at least " + this.age + " years old in order to continue.");
 *       $('#age-restricted').empty();
 *     }
 *   });
 *
 * Released under the GPLv2 license, http://www.gnu.org/licenses/gpl-2.0.html
 */
(function($){
  $.fn.agegate = function(options){
    var cookie_js = (typeof $.cookie !== "undefined");
    return this.each(function(){
      var o = $.extend({}, $.fn.agegate.defaults, options);

      // If the age_gate cookie is set, use it.
      if(cookie_js && $.cookie('age_gate') !== null){
        if($.cookie('age_gate') === 'underage'){
          o.underage();
          return;
        }
        else if($.cookie('age_gate') === 'legal'){
          o.legal(true);
          return;
        }
        else{
          // Invalid Cookie, delete it.
          $.cookie('age_gate', null);
        }
      }
      
      function isInteger(x) {
        return x % 1 === 0;
	  }

      
      $('#verify').bind('click', function(){
        var birthday = new Date();
        
        var century = ( $('#agegate-year').val() < 14 ) ? '20' : 19;
        var year = century + $('#agegate-year').val();
        birthday.setFullYear(year, $('#agegate-month').val(), $('#agegate-day').val());
        
        var today = new Date();
        today.setFullYear(today.getFullYear() - o.age);
        
        if((today - birthday) < 0){
          o.underage();
          if(cookie_js && o.blindpigConfig.cookiesAccepted){
            $.cookie('age_gate', 'underage', { expires: 30 });
          }
        }
        else if ((isInteger($('#agegate-year').val()) == false) || 
        (isInteger($('#agegate-month').val()) == false) || 
        (isInteger($('#agegate-day').val()) == false) ||
        ($('#agegate-year').val() == '') || 
        ($('#agegate-month').val() == '') || 
        ($('#agegate-day').val() == '') ||
        ($('#agegate-day').val() == '0') ||
        ($('#agegate-month').val() == '0') ||
        ($('#agegate-year').val() == '0'))  {
	        o.invalidDate();
        }
        else {
          o.legal(false);
          if(cookie_js && o.blindpigConfig.cookiesAccepted){
            $.cookie('age_gate', 'legal', { expires: 30 });
          }
        }
      });
    });
  };

  $.fn.agegate.defaults = {
    age:            18,
    container_id:  'age-gate',
    verify_text:   'Verify',
    verify_class:  'submit',
    legal: function(){},
    underage: function(){}
  };
})(jQuery);


/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});



/*!
 * jQuery.ScrollTo
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 12/14/2012
 *
 * @projectDescription Easy element scrolling using jQuery.
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @author Ariel Flesler
 * @version 1.4.5 BETA
 *
 * @id jQuery.scrollTo
 * @id jQuery.fn.scrollTo
 * @param {String, Number, DOMElement, jQuery, Object} target Where to scroll the matched elements.
 *    The different options for target are:
 *    - A number position (will be applied to all axes).
 *    - A string position ('44', '100px', '+=90', etc ) will be applied to all axes
 *    - A jQuery/DOM element ( logically, child of the element to scroll )
 *    - A string selector, that will be relative to the element to scroll ( 'li:eq(2)', etc )
 *    - A hash { top:x, left:y }, x and y can be any kind of number/string like above.
 *    - A percentage of the container's dimension/s, for example: 50% to go to the middle.
 *    - The string 'max' for go-to-end.
 * @param {Number, Function} duration The OVERALL length of the animation, this argument can be the settings object instead.
 * @param {Object,Function} settings Optional set of settings or the onAfter callback.
 *   @option {String} axis Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
 *   @option {Number, Function} duration The OVERALL length of the animation.
 *   @option {String} easing The easing method for the animation.
 *   @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.
 *   @option {Object, Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.
 *   @option {Object, Number} over Add/deduct the height/width multiplied by 'over', can be { top:x, left:y } when using both axes.
 *   @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.
 *   @option {Function} onAfter Function to be called after the scrolling ends.
 *   @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @desc Scroll to a fixed position
 * @example $('div').scrollTo( 340 );
 *
 * @desc Scroll relatively to the actual position
 * @example $('div').scrollTo( '+=340px', { axis:'y' } );
 *
 * @desc Scroll using a selector (relative to the scrolled element)
 * @example $('div').scrollTo( 'p.paragraph:eq(2)', 500, { easing:'swing', queue:true, axis:'xy' } );
 *
 * @desc Scroll to a DOM element (same for jQuery object)
 * @example var second_child = document.getElementById('container').firstChild.nextSibling;
 *      $('#container').scrollTo( second_child, { duration:500, axis:'x', onAfter:function(){
 *        alert('scrolled!!');
 *      }});
 *
 * @desc Scroll on both axes, to different values
 * @example $('div').scrollTo( { top: 300, left:'+=200' }, { axis:'xy', offset:-20 } );
 */

;(function( $ ){

  var $scrollTo = $.scrollTo = function( target, duration, settings ){
    $(window).scrollTo( target, duration, settings );
  };

  $scrollTo.defaults = {
    axis:'xy',
    duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
    limit:true
  };

  // Returns the element that needs to be animated to scroll the window.
  // Kept for backwards compatibility (specially for localScroll & serialScroll)
  $scrollTo.window = function( scope ){
    return $(window)._scrollable();
  };

  // Hack, hack, hack :)
  // Returns the real elements to scroll (supports window/iframes, documents and regular nodes)
  $.fn._scrollable = function(){
    return this.map(function(){
      var elem = this,
        isWin = !elem.nodeName || $.inArray( elem.nodeName.toLowerCase(), ['iframe','#document','html','body'] ) != -1;

        if( !isWin )
          return elem;

      var doc = (elem.contentWindow || elem).document || elem.ownerDocument || elem;

      return /webkit/i.test(navigator.userAgent) || doc.compatMode == 'BackCompat' ?
        doc.body :
        doc.documentElement;
    });
  };

  $.fn.scrollTo = function( target, duration, settings ){
    if( typeof duration == 'object' ){
      settings = duration;
      duration = 0;
    }
    if( typeof settings == 'function' )
      settings = { onAfter:settings };

    if( target == 'max' )
      target = 9e9;

    settings = $.extend( {}, $scrollTo.defaults, settings );
    // Speed is still recognized for backwards compatibility
    duration = duration || settings.duration;
    // Make sure the settings are given right
    settings.queue = settings.queue && settings.axis.length > 1;

    if( settings.queue )
      // Let's keep the overall duration
      duration /= 2;
    settings.offset = both( settings.offset );
    settings.over = both( settings.over );

    return this._scrollable().each(function(){
      // Null target yields nothing, just like jQuery does
      if (target == null) return;

      var elem = this,
        $elem = $(elem),
        targ = target, toff, attr = {},
        win = $elem.is('html,body');

      switch( typeof targ ){
        // A number will pass the regex
        case 'number':
        case 'string':
          if( /^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ) ){
            targ = both( targ );
            // We are done
            break;
          }
          // Relative selector, no break!
          targ = $(targ,this);
          if (!targ.length) return;
        case 'object':
          // DOMElement / jQuery
          if( targ.is || targ.style )
            // Get the real position of the target
            toff = (targ = $(targ)).offset();
      }
      $.each( settings.axis.split(''), function( i, axis ){
        var Pos = axis == 'x' ? 'Left' : 'Top',
          pos = Pos.toLowerCase(),
          key = 'scroll' + Pos,
          old = elem[key],
          max = $scrollTo.max(elem, axis);

        if( toff ){// jQuery / DOMElement
          attr[key] = toff[pos] + ( win ? 0 : old - $elem.offset()[pos] );

          // If it's a dom element, reduce the margin
          if( settings.margin ){
            attr[key] -= parseInt(targ.css('margin'+Pos)) || 0;
            attr[key] -= parseInt(targ.css('border'+Pos+'Width')) || 0;
          }

          attr[key] += settings.offset[pos] || 0;

          if( settings.over[pos] )
            // Scroll to a fraction of its width/height
            attr[key] += targ[axis=='x'?'width':'height']() * settings.over[pos];
        }else{
          var val = targ[pos];
          // Handle percentage values
          attr[key] = val.slice && val.slice(-1) == '%' ?
            parseFloat(val) / 100 * max
            : val;
        }

        // Number or 'number'
        if( settings.limit && /^\d+$/.test(attr[key]) )
          // Check the limits
          attr[key] = attr[key] <= 0 ? 0 : Math.min( attr[key], max );

        // Queueing axes
        if( !i && settings.queue ){
          // Don't waste time animating, if there's no need.
          if( old != attr[key] )
            // Intermediate animation
            animate( settings.onAfterFirst );
          // Don't animate this axis again in the next iteration.
          delete attr[key];
        }
      });

      animate( settings.onAfter );

      function animate( callback ){
        $elem.animate( attr, duration, settings.easing, callback && function(){
          callback.call(this, target, settings);
        });
      };

    }).end();
  };

  // Max scrolling position, works on quirks mode
  // It only fails (not too badly) on IE, quirks mode.
  $scrollTo.max = function( elem, axis ){
    var Dim = axis == 'x' ? 'Width' : 'Height',
      scroll = 'scroll'+Dim;

    if( !$(elem).is('html,body') )
      return elem[scroll] - $(elem)[Dim.toLowerCase()]();

    var size = 'client' + Dim,
      html = elem.ownerDocument.documentElement,
      body = elem.ownerDocument.body;

    return Math.max( html[scroll], body[scroll] )
       - Math.min( html[size]  , body[size]   );
  };

  function both( val ){
    return typeof val == 'object' ? val : { top:val, left:val };
  };

})( jQuery );


// Generated by CoffeeScript 1.6.1
// usage: $('.container').snapscroll({'scrollOptions':{'axis':'y'}});
// for scrollOptions refer to https://github.com/flesler/jquery.scrollTo
(function($, window, document, undefined_) {
  var Plugin, defaults, pluginName;
  pluginName = "snapscroll";
  defaults = {
    botPadding: 200,
    topPadding: 200,
    scrollSpeed: 300,
    scrollEndSpeed: 150,
    scrollOptions: {'axis':'xy'}
  };
  Plugin = function(element, options) {
    this.container = $(element);
    this.options = $.extend({}, defaults, options);
    return this.init();
  };
  Plugin.prototype = {
    init: function() {
      return this.snapping();
    },
    snapping: function() {
      var $children, autoscrolling, prev_position, scroll_end_speed, scroll_speed, timer,
        _this = this;
      $children = this.container.children();
      scroll_speed = this.options.scrollSpeed;
      scroll_end_speed = this.options.scrollEndSpeed;
	  scroll_options = this.options.scrollOptions;
      prev_position = $(document).scrollTop();
      timer = null;
      autoscrolling = false;
      return $(window).off("scroll.snapscroll").on("scroll.snapscroll", function() {
        var $child, cur_position, direction;
        if (!autoscrolling) {
          cur_position = $(document).scrollTop();
          direction = _this.getDirection(prev_position, cur_position);
          $child = _this.getTargetChild($children, direction, cur_position);
          if ($child) {
            clearTimeout(timer);
            timer = setTimeout(function() {
              $(window).scrollTo($child, scroll_speed, scroll_options);
              $child.siblings(".ss-active").removeClass("ss-active");
              $child.addClass("ss-active");
              autoscrolling = true;
              return setTimeout(function() {
                prev_position = $(document).scrollTop();
                return autoscrolling = false;
              }, scroll_speed + 20);
            }, scroll_end_speed);
          }
          return prev_position = cur_position;
        }
      });
    },
    getDirection: function(a, b) {
      if (a > b) {
        return "up";
      } else {
        return "down";
      }
    },
    getTargetChild: function($children, direction, position) {
      var $target, bottom_position, fc_top, lc_bottom, options, window_height;
      options = this.options;
      window_height = $(window).height();
      bottom_position = position + window_height;
      fc_top = $children.first().offset().top;
      lc_bottom = $children.last().offset().top + window_height;
      $target = null;
      if (fc_top < position + options.topPadding) {
        $children.not(".ss-active").each(function(i) {
          var object_bot, object_top;
          object_top = $(this).offset().top;
          object_bot = object_top + $(this).height();
          if (direction === "down") {
            if (object_top < bottom_position && object_bot > position) {
              $target = $(this);
              return false;
            }
          } else {
            if (object_top < position && position < object_bot) {
              return $target = $(this);
            }
          }
        });
      }
      return $target;
    }
  };
  return $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, "plugin_" + pluginName)) {
        return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });
  };
})(jQuery, window, document);


/**
 * jQuery.timers - Timer abstractions for jQuery
 * Written by Blair Mitchelmore (blair DOT mitchelmore AT gmail DOT com)
 * Licensed under the WTFPL (http://sam.zoy.org/wtfpl/).
 * Date: 2009/02/08
 *
 * @author Blair Mitchelmore
 * @version 1.1.2
 *
 **/

jQuery.fn.extend({
	everyTime: function(interval, label, fn, times, belay) {
		return this.each(function() {
			jQuery.timer.add(this, interval, label, fn, times, belay);
		});
	},
	oneTime: function(interval, label, fn) {
		return this.each(function() {
			jQuery.timer.add(this, interval, label, fn, 1);
		});
	},
	stopTime: function(label, fn) {
		return this.each(function() {
			jQuery.timer.remove(this, label, fn);
		});
	}
});

jQuery.event.special

jQuery.extend({
	timer: {
		global: [],
		guid: 1,
		dataKey: "jQuery.timer",
		regex: /^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,
		powers: {
			// Yeah this is major overkill...
			'ms': 1,
			'cs': 10,
			'ds': 100,
			's': 1000,
			'das': 10000,
			'hs': 100000,
			'ks': 1000000
		},
		timeParse: function(value) {
			if (value == undefined || value == null)
				return null;
			var result = this.regex.exec(jQuery.trim(value.toString()));
			if (result[2]) {
				var num = parseFloat(result[1]);
				var mult = this.powers[result[2]] || 1;
				return num * mult;
			} else {
				return value;
			}
		},
		add: function(element, interval, label, fn, times, belay) {
			var counter = 0;
			
			if (jQuery.isFunction(label)) {
				if (!times) 
					times = fn;
				fn = label;
				label = interval;
			}
			
			interval = jQuery.timer.timeParse(interval);

			if (typeof interval != 'number' || isNaN(interval) || interval <= 0)
				return;

			if (times && times.constructor != Number) {
				belay = !!times;
				times = 0;
			}
			
			times = times || 0;
			belay = belay || false;
			
			var timers = jQuery.data(element, this.dataKey) || jQuery.data(element, this.dataKey, {});
			
			if (!timers[label])
				timers[label] = {};
			
			fn.timerID = fn.timerID || this.guid++;
			
			var handler = function() {
				if (belay && this.inProgress) 
					return;
				this.inProgress = true;
				if ((++counter > times && times !== 0) || fn.call(element, counter) === false)
					jQuery.timer.remove(element, label, fn);
				this.inProgress = false;
			};
			
			handler.timerID = fn.timerID;
			
			if (!timers[label][fn.timerID])
				timers[label][fn.timerID] = window.setInterval(handler,interval);
			
			this.global.push( element );
			
		},
		remove: function(element, label, fn) {
			var timers = jQuery.data(element, this.dataKey), ret;
			
			if ( timers ) {
				
				if (!label) {
					for ( label in timers )
						this.remove(element, label, fn);
				} else if ( timers[label] ) {
					if ( fn ) {
						if ( fn.timerID ) {
							window.clearInterval(timers[label][fn.timerID]);
							delete timers[label][fn.timerID];
						}
					} else {
						for ( var fn in timers[label] ) {
							window.clearInterval(timers[label][fn]);
							delete timers[label][fn];
						}
					}
					
					for ( ret in timers[label] ) break;
					if ( !ret ) {
						ret = null;
						delete timers[label];
					}
				}
				
				for ( ret in timers ) break;
				if ( !ret ) 
					jQuery.removeData(element, this.dataKey);
			}
		}
	}
});

jQuery(window).bind("unload", function() {
	jQuery.each(jQuery.timer.global, function(index, item) {
		jQuery.timer.remove(item);
	});
});

$.fn.isOnScreen = function(){
    var win = $(window);

    var viewport = {
        top : win.scrollTop()
    };
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!( viewport.bottom <= bounds.top));
};

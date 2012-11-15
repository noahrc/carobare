/*!
 * jQuery carobare Plugin v0.1.0
 * https://github.com/noahrc/carobare
 *
 * Copyright 2012, Noah Robison-Cox
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */

;(function($) {
	
	$.fn.carobare = function(options) { 

		// Default settings
		var settings = $.extend({
			'width' 	: 'auto',	// Width of the carousel container
			'height' 	: 'auto',	// Height of the carousel container
			'interval' 	: 4000,		// Time between image changes
			'slides'	: null,		// An array or space delimited string with the file names of images to load
			'urlPrefix'	: '',		// optional URL prefix to go before the names of images to load
			'clipping'	: false,	// If true, images will be cropped
			'border'	: true		// If true, adds a border around the images
		}, options);

		return this.each(function (i) {
			var $c = $(this)
				, carouselWidth = $c.attr('data-carobare-width') || settings.width
				, carouselHeight = $c.attr('data-carobare-height') || settings.height
				, carouselInterval = $c.attr('data-carobare-interval') || settings.interval
				, carouselSlides = $c.attr('data-carobare-slides') || settings.slides
				, urlPrefix = $c.attr('data-carobare-url') || settings.urlPrefix
				, carouselClipping = $c.attr('data-carobare-clipping') || settings.clipping
				, carouselBorder = $c.attr('data-carobare-border') || settings.border;
			var CAROUSEL = {};

			CAROUSEL.showNextSlide = function () {
				var $next = $c.find('img.active').removeClass('active').fadeOut(1000).next('img');
				$next[0] ? $next : $next = $($c.find('img')[0]);
				$next.addClass('active').fadeIn(1000);
			}
			
			if(typeof carouselSlides !== 'undefined' && carouselSlides !== null ) {
				$.each($.isArray(carouselSlides) ? carouselSlides : carouselSlides.split(' '),
					function(i, val) {
						var url = urlPrefix + this
							, $img = $c.find('img[src$="' + url + '"]')
							, $newImg;
							
						// If this image isn't on the page already, add it
						if(!$img[0]) {
							$newImg = $('<img alt="" src="' + url + '" />').appendTo($c).css(
							{
								'position'	: 'absolute', 
								'left'		: 0,
								'top'		: 0
							});

						};

						// Hide new images
						($newImg && i>0) && $newImg.hide();
						$img.css({
							'position'	: 'absolute', 
							'left'		: 0, 
							'top'		: 0
						});
					}
				);
			}

			$c.css(
			{
				'position'	: 'relative',
				'overflow'	: carouselClipping ? 'hidden' : 'visible',
				'width'		: carouselWidth,
				'height'	: carouselHeight
			});

			if(carouselBorder) {
				$c.find('img').css({
					'padding'	: '10px',
					'border'	: '1px solid #CCC'
				});
				$c.css({
					'width'		: '+=22',
					'height'	: '+=22'
				});
			};
			
			$c.showNextSlideInterval = function() {
				CAROUSEL.showNextSlide();
			}

			$c.carouseltimer = setInterval($c.showNextSlideInterval, carouselInterval);
		});
	}
})(jQuery);
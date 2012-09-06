
(function($) {
	
	$.fn.carobare = function() { 
		return this.each(function(){

			// Create and initialize the image carousels
			$(this).each(function (i) {
				var $c = $(this)
					, urlPrefix = $c.attr('data-carobare-url')
					, carouselWidth = $c.attr('data-carobare-width')
					, carouselHeight = $c.attr('data-carobare-height')
					, carouselInterval = $c.attr('data-carobare-interval')
					, defaultWidth = 340
					, defaultHeight = 280
					, defaultInterval = 4000;

				// An image carousel object
				var CAROUSEL = {};
				
				// Show the next slide in the carousel
				CAROUSEL.showNextSlide = function () {
					var $next = $c.find('img.active').removeClass('active').fadeOut(1000).next('img');
					$next[0] ? $next : $next = $($c.find('img')[0]);
					$next.addClass('active').fadeIn(1000);
				}

				
				
				$.each($c.attr('data-carobare-slides').split(' '),
					function(i, val) {
						var url = urlPrefix + this
							, $img = $c.find('img[src="' + url + '"]')
							, $newImg
							
						// If this image isn't on the page already, add it
						if(!$img[0]) {
							$newImg = $('<img alt="" src="' + url + '" />').appendTo($c).css({
								'position' : 'absolute', 
								'left' : 0, 
								'top' : 0})
							// If this is the first image, make it active
							i == 0 ? $newImg.addClass('active') : $newImg
						}
						// Hide the new images
						$newImg ? $newImg.hide() : $img.addClass('active');
						$img.css({
							'position' : 'absolute', 
							'left' : 0, 
							'top' : 0
						});
					}
				)
				$c.css({
					'position' : 'relative',
					'overflow' : 'hidden',
					'width': carouselWidth ? carouselWidth : defaultWidth,
					'height': carouselHeight ? carouselHeight : defaultHeight
					})
				
				$c.showNextSlideInterval = function() {
					CAROUSEL.showNextSlide();
				}
				$c.carouseltimer = setInterval(
					$c.showNextSlideInterval, defaultInterval 
				);
			})
		});
	}
})(jQuery);
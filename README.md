carobare
========

A barebones carousel jQuery plugin using data-attributes

## Examples

View examples here [nrcdesign.com/carobare](http://nrcdesign.com/carobare)

## Usage

Load jquery and then jquery.carobare.js

### Data attributes option

Specify options on a parent element around an image to make it a carousel, like this:
	
	<figure id="carousel-1" class="figure carousel" data-carobare-width="320" data-carobare-height="255" data-carobare-url="images/" data-carobare-slides="example1.jpg example2.jpg example3.jpg" data-carobare-interval="2000" >
				<img src="images/example1.jpg" alt="Sharing insights" />
			</figure>

Then initialize the plugin like this:

	$('#carousel-1').carobare();

### Javascript option

Specify options in the carobare function like this:
	
	$('#carousel-2').carobare(
	{
		'interval'	: 3000,
		'width'		: 320,
		'height'	: 255,
		'slides'	: 'example1.jpg example2.jpg example3.jpg',
		'urlPrefix'	: 'images/'
	});

View the source for more options.
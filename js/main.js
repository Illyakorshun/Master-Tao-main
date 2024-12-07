$(document).ready(function() {
	// Ініціалізація слайдера
	$('.first-slider .slider').slick({
	  infinite: true,
	  variableWidth: true,
	  dots: true,
	  arrows: true,
	  prevArrow: "<button type='button' class='slick-prev pull-left'><img src='assets/icons/sliders/first_slider/arrow-left.svg' alt='Previous'></button>",
	  nextArrow: "<button type='button' class='slick-next pull-right'><img src='assets/icons/sliders/first_slider/arrow-right.svg' alt='Next'></button>",
	  appendDots: $('.first-slider .dots'),
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  speed: 500,
	  draggable: false,
	  responsive: [{
		breakpoint: 768,
		settings: {
		  arrows: false,
		}
	  }]
	});
  });
  
  

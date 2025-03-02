jQuery(document).ready(function ($) {

	/* 
	
	1 Box 
	30 DAYS 44258980036758
	45 DAYS 44235850842262
	60 DAYS 44258980069526

	3 Box 
	30 DAYS 44235850875030
	45 DAYS 44258980233366
	60 DAYS 44258980266134

	5 Box 

	30 DAYS 44235850907798
	45 DAYS 44258980331670
	60 DAYS 44258980364438

	Live Variants

	Promo variants are :
	https://admin.shopify.com/store/aloft-home/products/8304104865942
	After first subcription period is end :
	https://admin.shopify.com/store/aloft-home/products/6892368035990

	*/
	
	let thumbsSwiper;
	let swiper;

	function initSlider() {
		thumbsSwiper = new Swiper('.swiper-thumbnails', {
			allowTouchMove: false,
			watchSlidesProgress: true
		});

		swiper = new Swiper('.swiper-main', {
			loop: true,
			speed: 500,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets'
			},

			// Navigation arrows
			navigation: {
				nextEl: '.right-arrow-inside',
				prevEl: '.left-arrow-inside',
			},

			breakpoints: {
				767: {
					pagination: false
				}
			},

			thumbs: {
				swiper: thumbsSwiper,
			}
		});
	}

	initSlider();

	$('.to-atc').click(function(e) {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#atc").offset().top
		}, 1200);
	});
	$('.to-atcr').click(function(e) {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#atc-r").offset().top - 70
		}, 1200);
	});

	if (window.innerWidth < 768) {
		swiper.on('slideChange', function(event) {
			if(event.activeIndex == 3 || event.activeIndex == 4 || event.activeIndex == 2) {
				document.querySelector(".sold-out").classList.add("opacity-0")
			} else {
				document.querySelector(".sold-out").classList.remove("opacity-0")
			}
		});
	}
})
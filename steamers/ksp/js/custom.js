jQuery(document).ready(function ($) {
	const observer = lozad();
	observer.observe();

	function setDate(element) {
		const date = new Date(Date.now() + 172800000)
		const day = date.toString().split(' ')[0]
		const dayNum = date.getDate()
		const month = date.toString().split(' ')[1]
		console.log(day)
		element.textContent = `${day}, ${month} ${dayNum}th`
	}
	const atcScDate = document.querySelector('#date-2')
	const dateSticky = document.querySelector('#date-1')
	setDate(dateSticky)
	setDate(atcScDate)
	$(document).ready(function () {
		$('select').niceSelect();
	});
	let isDesktop = window.matchMedia(`(min-width: 768px)`);

	const ctaButton = document.querySelector('.buy-now-button');
	const stickyBar = document.querySelector('.sticky-nav');

	let interactionOptions = {
		root: null,
		rootMargin: '0px',
		threshold: 1
	}

	const ctaObserver = new IntersectionObserver(handleIntersect, interactionOptions);
	ctaObserver.observe(ctaButton);

	console.log(ctaButton);

	function handleIntersect(entries, ctaObserver) {
		if (window.scrollY > ctaButton.getBoundingClientRect().top) {
			if (entries[0].isIntersecting) {
				stickyBar.classList.remove('scrolled');
			} else {
				stickyBar.classList.add('scrolled');
			}
		}
	}

	let faqElements = document.querySelectorAll(".faq-item");

	faqElements.forEach(function (element) {
		element.addEventListener('click', function (e) {
			element.classList.toggle('opened');
			let content = element.querySelector('.faq-content');
			if (content.style.maxHeight) {
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + 'px';
			}
		});
	});

	//Load More
	jQuery(function ($) {
		$lis = $('.reviews-list .review-item-2');
		min = 12;
		max = $lis.length;
		var visible = min;
		console.log(".review-item-2")

		function showUpToIndex(index) {
			$lis.hide();
			$lis.slice(0, index).show();
		}

		function disableButtons() {
			if (visible >= max) {
				visible = max;
				$('.load-more').hide();
			} else {
				$('.load-more').show();
			}
		}
		showUpToIndex(visible);
		disableButtons();
		$('.load-more').click(function (e) {
			e.preventDefault();
			visible = visible + 12;
			disableButtons();
			showUpToIndex(visible);
		});
	});

	let thumbsSwiper;
	let swiper;


	function initSlider() {
		thumbsSwiper = new Swiper('.swiper-thumbnails', {
			allowTouchMove: false,
			watchSlidesProgress: true
		});

		swiper = new Swiper('.swiper-main', {
			allowTouchMove: true,
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


	let colors = document.querySelectorAll('.color-choice');
	colors.forEach(function (color) {
		color.addEventListener('click', function (e) {
			let clickedIndex = color.getAttribute('data-slide');
			swiper.slideTo(clickedIndex);

			$('.color-choice').removeClass('current-color');
			color.classList.add('current-color');
		});
	});


	initSlider();

	swiper.on("slideChange", function (e) {
		setTimeout(function () {
			let activeSlideName = document.querySelector('.swiper-slide-active').getAttribute('data-slide');
			let colors = document.querySelectorAll('.color-choice');
			$('.color-name').html(activeSlideName);
			colors.forEach(function (color) {
				color.classList.remove('current-color');

				if (color.id === activeSlideName) {
					color.classList.add('current-color');
				}
			});
		}, 150)

	});


	$('.to-atc').click(function (e) {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#atc").offset().top - 68
		}, 1200);
	});
	$('.to-atcr').click(function (e) {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#atc-r").offset().top - 68
		}, 1200);
	});



	var variants = {
		variety: { variantId: 42108628762774 },
		clarity: { variantId: 42108614738070 },
		energize: { variantId: 42108614672534 },
		calm: { variantId: 42108614705302 },
	};

	/**
	* Implement UX color and size functionality(out of stock)
	*/
	// new window.MkMiracle.ColorSizeSelect(variants);


	function filterColorSwatches(size) {
		$(".color-choice").removeClass("sold");

		for (var i = 0; i < $(".color-choice").length; i++) {
			var ch = $(".color-choice").eq(i);
			var color = ch.attr("data-color");
			if (variants[color] == null) {
				ch.addClass("sold");
			}
		}
	}

	window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
	window.checkoutReadyCallbacks.push(() => {
		const zone = checkout.cart.shippingZone;
		if (zone === 'CA') {
			$(".ca-fast").html("Fast")
		}
		setTimeout(function () {
			$('.swiper-slide.swiper-slide-duplicate.swiper-slide-prev img').attr('src', $('.swiper-slide.swiper-slide-duplicate.swiper-slide-prev img').attr('data-src'));
		}, 1000);

		$(".color-choice").click(function (e) {
			let colorChoice = $(this).attr("data-color");

			$("option selected").addClass("current-size");

			$(".color-name.current-color").text(colorChoice);

			$(".current-size").trigger("click");

			var wrapper = $(this).parents(".colors-container");
			wrapper.find(".color-choice").removeClass("current-color");
			$(this).addClass("current-color");


			// updateSlider(colorChoice);
		});


		$(".buy-now-button").click(function (e) {
			e.preventDefault();

			////////// Clear Cart /////////////////

			const clearCart = async () => {
				const updateRec = {};
				checkout.cart.localCart.lineItems.forEach(x => {
					updateRec[x.variantId] = 0;
				});
				const newCart = await checkout.apiClient.setVariantQuantities(updateRec);
				checkout.setCart(newCart);
			}

			clearCart().then(x => {
				var color = $(".color-choice.current-color").attr("data-color");
				var data = {};

				data[variants[color]['variantId']] = 1;
				console.log("Add to Cart");
				console.log(data);

				var nextUrl = "/checkout_v9/secure.html";
				var urlSearchParams = new URLSearchParams(window.location.search);
				var params = Object.fromEntries(urlSearchParams.entries());

				window.checkout.apiClient.setVariantQuantities(data).then(x => {
					console.log("Variant Set.");
					window.checkout.setCart(x);
					window.checkout.drawCart(x);
					window.location.href = nextUrl;
				});
			});
		});
	});
});

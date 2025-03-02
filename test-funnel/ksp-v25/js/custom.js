jQuery(document).ready(function ($) {

	let thumbsSwiper;
	let swiper;

	const imageCount = {
		stone: 7,
		white: 7,
		sky_blue: 6,
		navy_blue: 5,
		sand: 5,
		sage: 6,
		charcoal: 6,
		terracotta:7,
		
	}

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

		$(`.swiper-slide[data-swiper-slide-index="${imageCount['stone'] - 1}"]`).addClass('last-thumb');
	}

	initSlider();

	$(`.swiper-slide[data-swiper-slide-index="${imageCount - 1}"]`).addClass('last-thumb');

	$('.to-atc').click(function(e) {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#atc").offset().top - 130
		}, 1200);
	});
	$('.to-atcr').click(function(e) {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#atc-r").offset().top - 130
		}, 1200);
	});

	$(".quantity-selector li.option").click(function (e) {
		let value = e.target.getAttribute('data-value');

		$(".quantity_input").val(value);
	});
	
	var variants = {
		signature: {
			twin: {
				stone: { variantId: 40509700112534, productTitle: 'Stone Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/3pc-stone.png' },
				 white: { variantId: 40509700145302, productTitle: 'White Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/3pc-white.png' },
				// sand: { variantId: 14441425010732, productTitle: 'Sand Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/sand-sheets.png' },
				//  sky_blue: { variantId: 40509700178070, productTitle: 'Sky Blue Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/3pc-sky.png' },
			},
			full: {
				stone: { variantId: 40509700210838, productTitle: 'Stone Sheet Set - Full', price: 119, regularPrice: 214, productSavings: 44, productReviews: 327, imgUrl: 'images/3pc-stone.png' },
				white: { variantId: 40509700243606, productTitle: 'White Sheet Set - Full', price: 119, regularPrice: 214, productSavings: 44, productReviews: 327, imgUrl: 'images/3pc-white.png' },
				// sand: { variantId: 14441425141804 Wrong VARIANT, productTitle: 'Sand Sheet Set - Full', price: 119, regularPrice: 214, productSavings: 44, productReviews: 327, imgUrl: 'images/sand-sheets.png' },
				sky_blue: { variantId: 40509700276374, productTitle: 'Sky Blue Sheet Set - Full', price: 119, regularPrice: 214, productSavings: 44, productReviews: 327, imgUrl: 'images/3pc-sky.png' },
			},
			queen: {
				stone: { variantId: 40509700014230, productTitle: 'Stone Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: 'images/3pc-stone.png' },
				white: { variantId: 40509700046998, productTitle: 'White Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: 'images/3pc-white.png' },
				sand: { variantId: 42077972758678, productTitle: 'Sand Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: 'images/sand-sheets.png' },
				sky_blue: { variantId: 40509700079766, productTitle: 'Sky Blue Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: 'images/3pc-sky.png' },
				navy_blue: { variantId: 42077966631062, productTitle: 'Navy Blue Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
				sage: { variantId: 42280970256534, productTitle: 'Sage Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
				charcoal: { variantId: 42280971206806, productTitle: 'Charcoal Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
				terracotta: { variantId: 42280971731094, productTitle: 'Terracotta Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
			},
			king: {
				stone: { variantId: 40509700309142, productTitle: 'Stone Sheet Set - King', price: 139, regularPrice: 235, productSavings: 41, productReviews: 234, imgUrl: 'images/3pc-stone.png' },
				white: { variantId: 40509700341910, productTitle: 'White Sheet Set - King', price: 139, regularPrice: 235, productSavings: 41, productReviews: 234, imgUrl: 'images/3pc-white.png' },
				sand: { variantId:  42077972889750, productTitle: 'Sand Sheet Set - King', price: 139, regularPrice: 235, productSavings: 41, productReviews: 234, imgUrl: 'images/sand-sheets.png' },
				sky_blue: { variantId: 40509700407446, productTitle: 'Sky Blue Sheet Set - King', price: 139, regularPrice: 235, productSavings: 41, productReviews: 234, imgUrl: 'images/3pc-sky.png' },
				navy_blue: { variantId: 42077966729366, productTitle: 'Navy Blue Sheet Set - King', price: 139, regularPrice: 235, productSavings: 41, productReviews: 234, imgUrl: '' },
				sage: { variantId: 42280964456598, productTitle: 'Sage Sheet Set - King', price: 139, regularPrice: 235, productSavings: 41, productReviews: 234, imgUrl: '' },
				charcoal: { variantId: 42280965275798, productTitle: 'Charcoal Sheet Set - King', price: 139, regularPrice: 235, productSavings: 41, productReviews: 234, imgUrl: '' },
				terracotta: { variantId: 42280965603478, productTitle: 'Terracotta Sheet Set - King', price: 139, regularPrice: 235, productSavings: 41, productReviews: 234, imgUrl: '' },
			},
			cali_king: {
				stone: { variantId: 40509700997270, productTitle: "Cali King \/ Stone \/ Signature (Percale)", price: 139, regularPrice: 235, productSavings: 41, productReviews: 234, imgUrl: 'images/3pc-stone.png' },
				sky_blue: { variantId: 42174579736726, productTitle: "Cali King \/ Sky Blue \/ Signature (Percale)", price: 139, regularPrice: 235, productSavings: 41, productReviews: 234, imgUrl: 'images/3pc-stone.png' }
			}
		},
		luxe: {
			queen: {
				stone: { variantId: 40509700440214, productTitle: 'Stone Extra Luxe Sheet Set - Queen', price: 179, regularPrice: 274, productSavings: 34, productReviews: 565, imgUrl: 'images/3pc-stone.png' },
				white: { variantId: 40509700472982, productTitle: 'White Extra Luxe Sheet Set - Queen', price: 179, regularPrice: 274, productSavings: 34, productReviews: 565, imgUrl: 'images/3pc-white.png' },
				sand: { variantId: 42077985538198, productTitle: 'Sand Extra Luxe Sheet Set - Queen', price: 179, regularPrice: 274, productSavings: 34, productReviews: 565, imgUrl: 'images/sand-sheets-luxe.png' },
				sky_blue: { variantId: 40509700505750, productTitle: 'Sky Blue Extra Luxe Sheet Set - Queen', price: 179, regularPrice: 274, productSavings: 34, productReviews: 565, imgUrl: 'images/3pc-sky.png' },
				navy_blue: { variantId: 42077978394774, productTitle: 'Navy Blue Extra Luxe Sheet Set - Queen', price: 179, regularPrice: 274, productSavings: 34, productReviews: 565, imgUrl: '' },
				sage: { variantId: 42280974319766, productTitle: 'Sage Extra Luxe Sheet Set - Queen', price: 179, regularPrice: 274, productSavings: 34, productReviews: 565, imgUrl: '' },
				charcoal: { variantId: 42280974909590, productTitle: 'Charcoal Extra Luxe Sheet Set - Queen', price: 179, regularPrice: 274, productSavings: 34, productReviews: 565, imgUrl: '' },
				terracotta: { variantId: 42280975073430, productTitle: 'Terracotta Extra Luxe Sheet Set - Queen', price: 179, regularPrice: 274, productSavings: 34, productReviews: 565, imgUrl: '' },
			},
			twin: {
				stone: { variantId: 40509700571286, productTitle: 'Stone Extra Luxe Sheet Set - Twin', price: 159, regularPrice: 254, productSavings: 37, productReviews: 432, imgUrl: 'images/3pc-stone.png' },
				white: { variantId: 40509700669590, productTitle: 'White Extra Luxe Sheet Set - Twin', price: 159, regularPrice: 254, productSavings: 37, productReviews: 432, imgUrl: 'images/3pc-white.png' },
				// sand: { variantId: 14516028571692, productTitle: 'Sand Extra Luxe Sheet Set - Twin', price: 159, regularPrice: 254, productSavings: 37, productReviews: 432, imgUrl: 'images/sand-sheets.png' },
				// sky_blue: { variantId: 40509700735126, productTitle: 'Sky Blue Extra Luxe Sheet Set - Twin', price: 159, regularPrice: 254, productSavings: 37, productReviews: 432, imgUrl: 'images/3pc-sky.png' },
			},
			full: {
				stone: { variantId: 40509700800662, productTitle: 'Stone Extra Luxe Sheet Set - Full', price: 169, regularPrice: 254, productSavings: 33, productReviews: 195, imgUrl: 'images/3pc-stone.png' },
				white: { variantId: 40509700833430, productTitle: 'White Extra Luxe Sheet Set - Full', price: 169, regularPrice: 254, productSavings: 33, productReviews: 195, imgUrl: 'images/3pc-white.png' },
				// sand: { variantId: 14516028899372, productTitle: 'Sand Extra Luxe Sheet Set - Full', price: 169, regularPrice: 254, productSavings: 33, productReviews: 195, imgUrl: 'images/sand-sheets.png' },
				sky_blue: { variantId: 40509700866198, productTitle: 'Sky Blue Extra Luxe Sheet Set - Full', price: 169, regularPrice: 254, productSavings: 33, productReviews: 195, imgUrl: 'images/3pc-sky.png' },
			},
			king: {
				stone: { variantId: 40509700898966, productTitle: 'Stone Extra Luxe Sheet Set - King', price: 189, regularPrice: 284, productSavings: 33, productReviews: 327, imgUrl: 'images/3pc-stone.png' },
				white: { variantId: 40509700931734, productTitle: 'White Extra Luxe Sheet Set - King', price: 189, regularPrice: 284, productSavings: 33, productReviews: 327, imgUrl: 'images/3pc-white.png' },
				sand: { variantId: 42078133551254, productTitle: 'Sand Extra Luxe Sheet Set - King', price: 189, regularPrice: 284, productSavings: 33, productReviews: 327, imgUrl: 'images/sand-sheets-luxe.png' },
				sky_blue: { variantId: 40509700964502, productTitle: 'Sky Blue Extra Luxe Sheet Set - King', price: 189, regularPrice: 284, productSavings: 33, productReviews: 327, imgUrl: 'images/3pc-sky.png' },
				navy_blue: { variantId: 42077978525846, productTitle: 'Navy Blue Extra Luxe Sheet Set - King', price: 189, regularPrice: 284, productSavings: 33, productReviews: 327, imgUrl: '' },
				sage: { variantId: 42280967012502, productTitle: 'Sage Extra Luxe Sheet Set - King', price: 189, regularPrice: 284, productSavings: 33, productReviews: 327, imgUrl: '' },
				charcoal: { variantId: 42280968585366, productTitle: 'Charcoal Extra Luxe Sheet Set - King', price: 189, regularPrice: 284, productSavings: 33, productReviews: 327, imgUrl: '' },
				terracotta: { variantId: 42280968913046, productTitle: 'Terracotta Extra Luxe Sheet Set - King', price: 189, regularPrice: 284, productSavings: 33, productReviews: 327, imgUrl: '' },
			},
			cali_king: {
				stone: { variantId: 40509701030038, productTitle: "Cali King \/ Stone \/ Extra Luxe (Sateen)", price: 189, regularPrice: 284, productSavings: 33, productReviews: 327, imgUrl: 'images/3pc-stone.png' },
				sky_blue: { variantId: 42186183049366, productTitle: "Cali King \/ Sky Blue \/ Extra Luxe (Sateen)", price: 189, regularPrice: 284, productSavings: 33, productReviews: 327, imgUrl: 'images/3pc-sky.png' }
			}
		}
	};

	/**
	* Implement UX color and size functionality(out of stock)
	*/
	new window.MkMiracle.ColorSizeSelect(variants);






	function selVariant() {
		var fabric = 'signature';
		var size = $('.current-size[data-value]').attr("data-value");
		var color = $("input[name='color']:checked").val().toLowerCase().replace(' ', '_');

		if (variants[fabric][size][color] == null) {
			var out_stock = true;
			console.log("out_of_stock")
		}

		var price = variants[fabric][size][color]['price'];


		console.log( variants[fabric][size][color] );

		$(".es_price").text(price);
		$(".es_saving_percent").text(variants[fabric][size][color]['productSavings']);
		$(".es_reg_price").text(variants[fabric][size][color]['regularPrice']);
		$(".total_savings").text(variants[fabric][size][color]['regularPrice'] - price);
	}



	function filterColorSwatches(size) {
		var fabric = 'signature';

		$(".color-choice").removeClass("sold");

		for (var i = 0; i < $(".color-choice").length; i++) {
			var ch = $(".color-choice").eq(i);
			var color = ch.attr("data-color").toLowerCase().replace(' ', '_');
			if (variants[fabric][size][color] == null) {
				ch.addClass("sold");
			}
		}
	}

	function filterSizeSwatches(color) {
		var fabric = 'signature';

		$("li.option").removeClass("sold");

		color = color.toLowerCase().replace(' ', '_');
		for (var i = 0; i < $(".size-sc li.option").length; i++) {
			var ch = $(".size-sc li.option").eq(i);
			var size = ch.attr("data-value");
			if (variants[fabric][size][color] == null) {
				ch.addClass("sold");
			}
		}
	}

	function updateSlider(color) {
		swiper.destroy();
		
		$('.swiper-main .swiper-wrapper').html('');
		$('.swiper-thumbnails .swiper-wrapper').html('');

		for (let i = 1; i < imageCount[color] + 1; i++) {
			let mainSlideTemplate = `<div class="swiper-slide"><img src="images/sliders/${color.toLowerCase().replace(' ', '-')}/m_${i}.webp" alt="" class="product-img"></div>`;
			let thumbnailsSlideTemplate = `<div class="swiper-slide product-icon-2"><img src="images/sliders/${color.toLowerCase().replace(' ', '-')}/m_${i}_thumb.webp" loading="lazy" alt="" class="img-fluid"></div>`;

			// console.log( document.querySelector('.swiper-main .swiper-wrapper'), mainSlideTemplate );
			$('.swiper-main .swiper-wrapper').append(mainSlideTemplate);
			$('.swiper-thumbnails .swiper-wrapper').append(thumbnailsSlideTemplate);

			if (i === imageCount[color]) {
				initSlider();

				$('.swiper-slide').removeClass('last-thumb');
				$(`.swiper-slide[data-swiper-slide-index="${imageCount[color] - 1}"]`).addClass('last-thumb');
			}
		}

		$('.swiper-main').removeClass('on-sky');

		if (color === 'white') {
			$('.swiper-main').removeClass('on-charcoal');
			$('.banner-product').attr('src', 'images/towels/towel_white.png');
		} else if(color === "stone"){
			$('.swiper-main').removeClass('on-charcoal');
			$('.banner-product').attr('src', 'images/towels/towel_gray.png');
		} else if(color === "charcoal"){
			$('.swiper-main').removeClass('on-thumb-eight');
			$('.banner-product').attr('src', 'images/towels/towel_gray.png');
			$('.swiper-main').addClass('on-charcoal');
		} else if(color === "sky_blue"){
			$('.swiper-main').removeClass('on-charcoal');
			$('.banner-product').attr('src', 'images/towels/towel_skyblue.png');
			$('.swiper-main').addClass('on-sky');
		}else if(color === "terracotta" || color === "sage"){
			$('.swiper-main').removeClass('on-charcoal');
			$('.swiper-main').removeClass('on-sky');
			$('.swiper-main').addClass('on-thumb-eight');
			$('.banner-product').attr('src', 'images/towels/towel_white.png');
		}else {
			$('.swiper-main').removeClass('on-charcoal');
			$('.swiper-main').removeClass('on-sky');
			$('.swiper-main').removeClass('on-thumb-eight');
			$('.banner-product').attr('src', 'images/towels/towel_white.png');
		}
	}

	window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
	window.checkoutReadyCallbacks.push(() => {
		setTimeout(function() {
			selVariant();

			$('.swiper-slide.swiper-slide-duplicate.swiper-slide-prev img').attr('src', $('.swiper-slide.swiper-slide-duplicate.swiper-slide-prev img').attr('data-src'));
		}, 1000);

		$(".size-sc li.option").click(function (e) {

			if ($(this).hasClass("sold")) {
				// return;
			}





			var wrapper = $(this).parents(".list");
			wrapper.find("li.option").removeClass("current-size");
			$(this).addClass("current-size");

			filterColorSwatches($(this).attr("data-value"));
			selVariant();

			if ( $(this).attr('data-value') === 'twin' ) {
				$('.twin-only').removeClass('hidden');
				$('.non-twin').addClass('hidden');
			} else {
				$('.twin-only').addClass('hidden');
				$('.non-twin').removeClass('hidden');
			}
		});		


		$(".color-choice").click(function (e) {
			let colorChoice = $(this).attr("data-color");

			$("option selected").addClass("current-size");

			$(".color-name.current-color").text(colorChoice.replace("_"," "));

			$(".current-size").trigger("click");

			var wrapper = $(this).parents(".colors-container");
			wrapper.find(".color-choice").removeClass("current-color");
			$(this).addClass("current-color");

			console.log( colorChoice );

			filterSizeSwatches(colorChoice);
			selVariant();
			updateSlider(colorChoice);
		});

		$(".buy-now-button").click(function (e) {
			e.preventDefault();

			////////// Clear Cart /////////////////

			const clearCart = async () => {
				const updateRec = {};
				checkout.cart.localCart.lineItems.forEach(x => {
					if (x.variantId != '34937177702550') {
						updateRec[x.variantId] = 0;
					}
				});
				const newCart = await checkout.apiClient.setVariantQuantities(updateRec);
				checkout.setCart(newCart);
			}

			clearCart().then(x => {
				var fabric = 'signature';
				var size = $("li.option.current-size.selected").attr("data-value");
				var color = $(".color-choice.current-color").attr("data-color");
				var data = {};
				// console.log( $(".quantity_input").val() );
				// return;
				data[variants[fabric][size][color]['variantId']] = $(".quantity_input").val();
				console.log("Add to Cart");
				console.log(data);

				window.checkout.apiClient.setVariantQuantities(data).then(x => {
					console.log("Variant Set.");
					window.checkout.setCart(x);
					window.checkout.drawCart(x);
					window.location.href = '/checkout_v11/secure.html';
				});
			});
		});
	});

	$(".quantity .btn-quantity_plus").click(function (e) {
		var qty = parseInt($(".quantity .quantity_input").val());
		$(".quantity .quantity_input").val(qty + 1);;
	});

	$(".quantity .btn-quantity_minus").click(function (e) {
		var qty = parseInt($(".quantity .quantity_input").val());
		if (qty <= 1) {
			return;
		}
		$(".quantity .quantity_input").val(qty - 1);;
	});

	if ($("#purchase .size-choice.current-size").length > 0) {
		filterColorSwatches($("#purchase .size-choice.current-size").attr("data-size"));
	}


	$('.option[data-value="queen"]').addClass("current-size");
});


var vis = (function () {
	var stateKey, eventKey, keys = {
		hidden: "visibilitychange",
		webkitHidden: "webkitvisibilitychange",
		mozHidden: "mozvisibilitychange",
		msHidden: "msvisibilitychange"
	};
	for (stateKey in keys) {
		if (stateKey in document) {
			eventKey = keys[stateKey];
			break;
		}
	}
	return function (c) {
		if (c) {
			document.addEventListener(eventKey, c);
			//document.addEventListener("blur", c);
			//document.addEventListener("focus", c);
		}
		return !document[stateKey];
	};
})();

var storeTitle = document.title,
	myAnimation;

let array = [
	"🥺 ",
	"Come ",
	" Back!",
	" 🥺"
];

function getLokTitle() {

	var title = '🥺';
		//let title = "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 🚄 ",
		i = 1;

	document.title = title;

	myAnimation = setTimeout(function () {
		setInterval(function () {
			document.title += array[i];
			i = (i + 1) % array.length;
			if (i === 1) {
				document.title = '🥺';
			}
			
			if (vis() === true) {
				clearTimeout(myAnimation);
				document.title = storeTitle;
				return storeTitle;
			}
		}, 250);
	}, 1000);

	return title;
}

function getStoreTitle() {

	if (typeof myAnimation !== "undefined") {
		clearTimeout(myAnimation);
	}
	return storeTitle;
}

vis(function () {
	document.title = vis() ? getStoreTitle() : getLokTitle();
	//console.log(new Date, 'visible ?', vis());
});

// to set the initial state
document.title = vis() ? getStoreTitle() : getLokTitle();
jQuery(document).ready(function ($) {

	const imageCount = {
		stone: 7,
		white: 7,
		sky_blue: 6,
		navy_blue: 5,
		sand: 5,
		sage: 6,
		charcoal: 6,
		terracotta:7,		
		slate_blue:6,		
		silver_grey:6,	
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

	$(".checkout-variant-quantity-selector li.option").click(function (e) {
		let value = e.target.getAttribute('data-value');
		console.log("Value : ", value)
		$(".quantity_input").val(value);

		selVariant()
	});
	
	var variants = {
		signature: {
			king: {
				stone: { variantId: 44144981377174, productTitle: 'Stone Sheet Set - King', price: 149, regularPrice: 435, productSavings: 67, productReviews: 234, imgUrl: 'images/3pc-stone.png' },
				white: { variantId: 44144981409942, productTitle: 'White Sheet Set - King', price: 149, regularPrice: 435, productSavings: 67, productReviews: 234, imgUrl: 'images/3pc-white.png' },
				sand: { variantId:  44144988291222, productTitle: 'Sand Sheet Set - King', price: 149, regularPrice: 435, productSavings: 67, productReviews: 234, imgUrl: 'images/sand-sheets.png' },
			},
			queen: {
				stone: { variantId: 44151805444246, productTitle: 'Stone Sheet Set - King', price: 139, regularPrice: 424, productSavings: 67, productReviews: 234, imgUrl: 'images/3pc-stone.png' },
				white: { variantId: 44151805477014, productTitle: 'White Sheet Set - King', price: 139, regularPrice: 424, productSavings: 67, productReviews: 234, imgUrl: 'images/3pc-white.png' },
				sand: { variantId:  44151805509782, productTitle: 'Sand Sheet Set - King', price: 139, regularPrice: 424, productSavings: 67, productReviews: 234, imgUrl: 'images/sand-sheets.png' },
			},
	}};

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
			console.log("out_of_stock");
		}		

		var price = variants[fabric][size][color]['price'];

		$(".es_price").text(price);
		$(".es_saving_percent").text(variants[fabric][size][color]['productSavings']);
		$(".es_reg_price").text(variants[fabric][size][color]['regularPrice']);
		$(".total_savings").text(variants[fabric][size][color]['regularPrice'] - price);
	}

	function setFreeTowelImage(color) {
		var size = $('.current-size[data-value]').attr("data-value");
		
		if(size === "king") {
			$(".free-product").attr("src", `images/${color}-free.png`)
		}else {
			$(".free-product").attr("src", `images/stone-free.png`)
		}
		
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
			console.log("color: ",color);
		}

		

		setFreeTowelImage(color)
	}

	function updateSlider(color) {	
		swiper.destroy();

		$('.swiper-main .swiper-wrapper').html('');
		$('.swiper-thumbnails .swiper-wrapper').html('');

		var size = $('.current-size[data-value]').attr("data-value");

		for (let i = 1; i < imageCount[color] + 1; i++) {
			let mainSlideTemplate;
			let thumbnailsSlideTemplate;
			if(size === "queen") {
				mainSlideTemplate = `<div class="swiper-slide"><img src="images/sliders/queen_${color.toLowerCase().replace(' ', '-')}/m_${i}.webp" alt="" class="product-img"></div>`;
				thumbnailsSlideTemplate = `<div class="swiper-slide product-icon-2"><img src="images/sliders/queen_${color.toLowerCase().replace(' ', '-')}/m_${i}_thumb.webp" loading="lazy" alt="" class="img-fluid"></div>`;
			}else {
				mainSlideTemplate = `<div class="swiper-slide"><img src="images/sliders/${color.toLowerCase().replace(' ', '-')}/m_${i}.webp" alt="" class="product-img"></div>`;
				thumbnailsSlideTemplate = `<div class="swiper-slide product-icon-2"><img src="images/sliders/${color.toLowerCase().replace(' ', '-')}/m_${i}_thumb.webp" loading="lazy" alt="" class="img-fluid"></div>`;
			}


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

			var color = $("input[name='color']:checked").val().toLowerCase().replace(' ', '_');

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

			setFreeTowelImage(color)

			updateSlider(color)
		});		


		$(".color-choice").click(function (e) {
			let colorChoice = $(this).attr("data-color");

			$("option selected").addClass("current-size");

			$(".color-name.current-color").text(colorChoice.replace("_"," "));

			$(".current-size").trigger("click");

			var wrapper = $(this).parents(".colors-container");
			wrapper.find(".color-choice").removeClass("current-color");
			$(this).addClass("current-color");


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
				data[42536178319510] = 1;
				console.log("Add to Cart");
				console.log(data);

				window.checkout.apiClient.setVariantQuantities(data).then(x => {
					console.log("Variant Set.");
					window.checkout.setCart(x);
					window.checkout.drawCart(x);
					window.location.href = '/checkout_bogo-v2/secure.html';
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

	$(".quantity_input").on("change",function(e) {
		console.log(this)
	})

	if ($("#purchase .size-choice.current-size").length > 0) {
		filterColorSwatches($("#purchase .size-choice.current-size").attr("data-size"));
	}


	$('.option[data-value="king"]').addClass("current-size");
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
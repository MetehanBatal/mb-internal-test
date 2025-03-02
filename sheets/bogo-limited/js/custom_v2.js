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
				"1" : {
					twinXL : {						
						//stone: { variantId: 44151095656598, productTitle: 'Stone Sheet Set - Twin', price: 145, regularPrice: 408, productSavings: 73, productReviews: 241, imgUrl: 'images/3pc-stone.png' },
						// white: { variantId: 44151095689366, productTitle: 'White Sheet Set - Twin', price: 145, regularPrice: 408, productSavings: 73, productReviews: 241, imgUrl: 'images/3pc-white.png' },
						// sand: { variantId: 14441425010732, productTitle: 'Sand Sheet Set - Twin', price: 109, regularPrice: 408, productSavings: 73, productReviews: 241, imgUrl: 'images/sand-sheets.png' },
						//  sky_blue: { variantId: 40509700178070, productTitle: 'Sky Blue Sheet Set - Twin', price: 109, regularPrice: 408, productSavings: 73, productReviews: 241, imgUrl: 'images/3pc-sky.png' },
					},
					twin: {
						stone: { variantId: 44151095066774, productTitle: 'Stone Sheet Set - Twin', price: 145, regularPrice: 408, productSavings: 73, productReviews: 241, imgUrl: 'images/3pc-stone.png' },
						white: { variantId: 44151095099542, productTitle: 'White Sheet Set - Twin', price: 145, regularPrice: 408, productSavings: 73, productReviews: 241, imgUrl: 'images/3pc-white.png' },
						// sand: { variantId: 14441425010732, productTitle: 'Sand Sheet Set - Twin', price: 109, regularPrice: 408, productSavings: 73, productReviews: 241, imgUrl: 'images/sand-sheets.png' },
						//  sky_blue: { variantId: 40509700178070, productTitle: 'Sky Blue Sheet Set - Twin', price: 109, regularPrice: 408, productSavings: 73, productReviews: 241, imgUrl: 'images/3pc-sky.png' },
					},
					full: {
						stone: { variantId: 44151095132310, productTitle: 'Stone Sheet Set - Full', price: 159, regularPrice: 428, productSavings: 72, productReviews: 327, imgUrl: 'images/3pc-stone.png' },
						white: { variantId: 44151095165078, productTitle: 'White Sheet Set - Full', price: 159, regularPrice: 428, productSavings: 72, productReviews: 327, imgUrl: 'images/3pc-white.png' },
						// sand: { variantId: 14441425141804 Wrong VARIANT, productTitle: 'Sand Sheet Set - Full', price: 159, regularPrice: 428, productSavings: 72, productReviews: 327, imgUrl: 'images/sand-sheets.png' },
						sky_blue: { variantId: 44151095197846, productTitle: 'Sky Blue Sheet Set - Full', price: 159, regularPrice: 428, productSavings: 72, productReviews: 327, imgUrl: 'images/3pc-sky.png' },
						charcoal: { variantId: 44151095230614, productTitle: 'Charcoal Sheet Set - Full', price: 159, regularPrice: 428, productSavings: 72, productReviews: 327, imgUrl: 'images/3pc-sky.png' },
					},
					queen: {
						stone: { variantId: 44151094739094, productTitle: 'Stone Sheet Set - Queen', price: 173, regularPrice: 448, productSavings: 71, productReviews: 439, imgUrl: 'images/3pc-stone.png' },
						white: { variantId: 44151094771862, productTitle: 'White Sheet Set - Queen', price: 173, regularPrice: 448, productSavings: 71, productReviews: 439, imgUrl: 'images/3pc-white.png' },
						sand: { variantId: 44151094902934, productTitle: 'Sand Sheet Set - Queen', price: 173, regularPrice: 448, productSavings: 71, productReviews: 439, imgUrl: 'images/sand-sheets.png' },
						//sky_blue: { variantId: 44151094804630, productTitle: 'Sky Blue Sheet Set - Queen', price: 173, regularPrice: 448, productSavings: 71, productReviews: 439, imgUrl: 'images/3pc-sky.png' },
						navy_blue: { variantId: 44151094870166, productTitle: 'Navy Blue Sheet Set - Queen', price: 173, regularPrice: 448, productSavings: 71, productReviews: 439, imgUrl: '' },
						sage: { variantId: 44151094968470, productTitle: 'Sage Sheet Set - Queen', price: 173, regularPrice: 518, productSavings: 71, productReviews: 439, imgUrl: '' },
						charcoal: { variantId: 44151094837398, productTitle: 'Charcoal Sheet Set - Queen', price: 173, regularPrice: 448, productSavings: 71, productReviews: 439, imgUrl: '' },
						terracotta: { variantId: 44151094935702, productTitle: 'Terracotta Sheet Set - Queen', price: 173, regularPrice: 468, productSavings: 71, productReviews: 439, imgUrl: '' },
						//slate_blue: { variantId: 44151095001238, productTitle: 'Slate Blue Sheet Set - Queen', price: 173, regularPrice: 448, productSavings: 71, productReviews: 439, imgUrl: '' },						
						silver_grey: { variantId: 44151095034006, productTitle: 'Silver Grey Sheet Set - Queen', price: 173, regularPrice: 448, productSavings: 71, productReviews: 439, imgUrl: '' },
					},
					king: {
						stone: { variantId: 44151095263382, productTitle: 'Stone Sheet Set - King', price: 188, regularPrice: 470, productSavings: 70, productReviews: 234, imgUrl: 'images/3pc-stone.png' },
						//white: { variantId: 44151095296150, productTitle: 'White Sheet Set - King', price: 188, regularPrice: 470, productSavings: 70, productReviews: 234, imgUrl: 'images/3pc-white.png' },
						sand: { variantId:  44151095427222, productTitle: 'Sand Sheet Set - King', price: 188, regularPrice: 470, productSavings: 70, productReviews: 234, imgUrl: 'images/sand-sheets.png' },
						//sky_blue: { variantId: 44151095328918, productTitle: 'Sky Blue Sheet Set - King', price: 188, regularPrice: 470, productSavings: 70, productReviews: 234, imgUrl: 'images/3pc-sky.png' },
						navy_blue: { variantId: 44151095394454, productTitle: 'Navy Blue Sheet Set - King', price: 188, regularPrice: 470, productSavings: 70, productReviews: 234, imgUrl: '' },
						sage: { variantId: 44151095492758, productTitle: 'Sage Sheet Set - King', price: 188, regularPrice: 505, productSavings: 70, productReviews: 234, imgUrl: '' },
						charcoal: { variantId: 44151095361686, productTitle: 'Charcoal Sheet Set - King', price: 188, regularPrice: 470, productSavings: 70, productReviews: 234, imgUrl: '' },
						terracotta: { variantId: 44151095459990, productTitle: 'Terracotta Sheet Set - King', price: 188, regularPrice: 490, productSavings: 70, productReviews: 234, imgUrl: '' },

						slate_blue: { variantId: 44151095525526, productTitle: 'Slate Blue Sheet Set - King', price: 188, regularPrice: 470, productSavings: 70, productReviews: 234, imgUrl: '' },
						silver_grey: { variantId: 44151095558294, productTitle: 'Silver Grey Sheet Set - King', price: 188, regularPrice: 470, productSavings: 70, productReviews: 234, imgUrl: '' },
					},
					cali_king: {
						stone: { variantId: 44151095591062, productTitle: "Cali King \/ Stone \/ Signature (Percale)", price: 188, regularPrice: 470, productSavings: 70, productReviews: 234, imgUrl: 'images/3pc-stone.png' },
						sky_blue: { variantId: 44151095623830, productTitle: "Cali King \/ Sky Blue \/ Signature (Percale)", price: 188, regularPrice: 470, productSavings: 70, productReviews: 234, imgUrl: 'images/3pc-stone.png' }
					},
					split_king: {
						stone: { variantId: 44151095722134, productTitle: "Split King \/ Stone \/ Signature (Percale)", price: 191, regularPrice: 500, productSavings: 71, productReviews: 234, imgUrl: 'images/3pc-stone.png' },
						white: { variantId: 44151095754902, productTitle: "Split King \/ White \/ Signature (Percale)", price: 191, regularPrice: 500, productSavings: 71, productReviews: 234, imgUrl: 'images/3pc-stone.png' }
					},
				},
				"2" : {
					twinXL : {
						//stone: { variantId: 44151097491606, productTitle: 'Stone Sheet Set - Twin', price: 290, regularPrice: 408, productSavings: 73, productReviews: 241, imgUrl: 'images/3pc-stone.png' },
						// white: { variantId: 44151097524374, productTitle: 'White Sheet Set - Twin', price: 290, regularPrice: 408, productSavings: 73, productReviews: 241, imgUrl: 'images/3pc-white.png' },
					},
					twin: {
						stone: { variantId: 44151096869014, productTitle: 'Stone Sheet Set - Twin', price: 290, regularPrice: 816, productSavings: 73, productReviews: 241, imgUrl: 'images/3pc-stone.png' },
						white: { variantId: 44151096901782, productTitle: 'White Sheet Set - Twin', price: 290, regularPrice: 816, productSavings: 73, productReviews: 241, imgUrl: 'images/3pc-white.png' },
					},
					full: {
						stone: { variantId: 44151096934550, productTitle: 'Stone Sheet Set - Full', price: 287, regularPrice: 856, productSavings: 73, productReviews: 327, imgUrl: 'images/3pc-stone.png' },
						white: { variantId: 44151096967318, productTitle: 'White Sheet Set - Full', price: 287, regularPrice: 856, productSavings: 73, productReviews: 327, imgUrl: 'images/3pc-white.png' },
						sky_blue: { variantId: 44151097000086, productTitle: 'Sky Blue Sheet Set - Full', price: 287, regularPrice: 856, productSavings: 73, productReviews: 327, imgUrl: 'images/3pc-sky.png' },
						charcoal: { variantId: 44151097032854, productTitle: 'Charcoal Sheet Set - Full', price: 287, regularPrice: 856, productSavings: 73, productReviews: 327, imgUrl: 'images/3pc-sky.png' },
					},
					queen: {
						stone: { variantId: 44151096541334, productTitle: 'Stone Sheet Set - Queen', price: 345, regularPrice: 896, productSavings: 71, productReviews: 439, imgUrl: 'images/3pc-stone.png' },
						white: { variantId: 44151096574102, productTitle: 'White Sheet Set - Queen', price: 345, regularPrice: 896, productSavings: 71, productReviews: 439, imgUrl: 'images/3pc-white.png' },
						sand: { variantId: 44151096705174, productTitle: 'Sand Sheet Set - Queen', price: 345, regularPrice: 896, productSavings: 71, productReviews: 439, imgUrl: 'images/sand-sheets.png' },
						//sky_blue: { variantId: 44151096606870, productTitle: 'Sky Blue Sheet Set - Queen', price: 345, regularPrice: 896, productSavings: 71, productReviews: 439, imgUrl: 'images/3pc-sky.png' },
						navy_blue: { variantId: 44151096672406, productTitle: 'Navy Blue Sheet Set - Queen', price: 345, regularPrice: 896, productSavings: 71, productReviews: 439, imgUrl: '' },
						sage: { variantId: 44151096770710, productTitle: 'Sage Sheet Set - Queen', price: 345, regularPrice: 966, productSavings: 71, productReviews: 439, imgUrl: '' },
						charcoal: { variantId: 44151096639638, productTitle: 'Charcoal Sheet Set - Queen', price: 345, regularPrice: 896, productSavings: 71, productReviews: 439, imgUrl: '' },
						terracotta: { variantId: 44151096737942, productTitle: 'Terracotta Sheet Set - Queen', price: 345, regularPrice: 936, productSavings: 71, productReviews: 439, imgUrl: '' },						
						//slate_blue: { variantId: 44151096803478, productTitle: 'Slate Blue Sheet Set - Queen', price: 345, regularPrice: 896, productSavings: 71, productReviews: 439, imgUrl: '' },
						silver_grey: { variantId: 44151096836246, productTitle: 'Slate Blue Sheet Set - Queen', price: 345, regularPrice: 896, productSavings: 71, productReviews: 439, imgUrl: '' },
					},
					king: {
						stone: { variantId: 44151097065622, productTitle: 'Stone Sheet Set - King', price: 376, regularPrice: 940, productSavings: 71, productReviews: 234, imgUrl: 'images/3pc-stone.png' },
						//white: { variantId: 44151097098390, productTitle: 'White Sheet Set - King', price: 376, regularPrice: 940, productSavings: 71, productReviews: 234, imgUrl: 'images/3pc-white.png' },
						sand: { variantId:  44151097229462, productTitle: 'Sand Sheet Set - King', price: 376, regularPrice: 940, productSavings: 71, productReviews: 234, imgUrl: 'images/sand-sheets.png' },
						//sky_blue: { variantId: 44151097131158, productTitle: 'Sky Blue Sheet Set - King', price: 376, regularPrice: 940, productSavings: 71, productReviews: 234, imgUrl: 'images/3pc-sky.png' },
						navy_blue: { variantId: 44151097196694, productTitle: 'Navy Blue Sheet Set - King', price: 376, regularPrice: 940, productSavings: 71, productReviews: 234, imgUrl: '' },
						sage: { variantId: 44151097294998, productTitle: 'Sage Sheet Set - King', price: 376, regularPrice: 1010, productSavings: 71, productReviews: 234, imgUrl: '' },
						charcoal: { variantId: 44151097163926, productTitle: 'Charcoal Sheet Set - King', price: 376, regularPrice: 940, productSavings: 71, productReviews: 234, imgUrl: '' },
						terracotta: { variantId: 44151097262230, productTitle: 'Terracotta Sheet Set - King', price: 376, regularPrice: 980, productSavings: 71, productReviews: 234, imgUrl: '' },
						slate_blue: { variantId: 44151097327766, productTitle: 'Slate Blue Sheet Set - King', price: 376, regularPrice: 940, productSavings: 71, productReviews: 234, imgUrl: '' },
						silver_grey: { variantId: 44151097360534, productTitle: 'Slate Blue Sheet Set - King', price: 376, regularPrice: 940, productSavings: 71, productReviews: 234, imgUrl: '' },
					},
					cali_king: {
						stone: { variantId: 44151097393302, productTitle: "Cali King \/ Stone \/ Signature (Percale)", price: 376, regularPrice: 940, productSavings: 71, productReviews: 234, imgUrl: 'images/3pc-stone.png' },
						sky_blue: { variantId: 44151097426070, productTitle: "Cali King \/ Sky Blue \/ Signature (Percale)", price: 376, regularPrice: 940, productSavings: 71, productReviews: 234, imgUrl: 'images/3pc-stone.png' },
						navy_blue: { variantId: 44151097458838, productTitle: "Cali King \/ Sky Blue \/ Signature (Percale)", price: 376, regularPrice: 940, productSavings: 71, productReviews: 234, imgUrl: 'images/3pc-stone.png' },
					},
					split_king: {
						stone: { variantId: 44151097557142, productTitle: "Cali King \/ Stone \/ Signature (Percale)", price: 382, regularPrice: 940, productSavings: 71, productReviews: 234, imgUrl: 'images/3pc-stone.png' },
						white: { variantId: 44151097589910, productTitle: "Cali King \/ White \/ Signature (Percale)", price: 382, regularPrice: 940, productSavings: 71, productReviews: 234, imgUrl: 'images/3pc-stone.png' }
					},
				},
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

		if (variants[fabric][$(".quantity_input").val().toString()][size][color] == null) {
			var out_stock = true;
			console.log("out_of_stock");
		}		

		var price = variants[fabric][$(".quantity_input").val().toString()][size][color]['price'];

		$(".es_price").text(price);
		$(".es_saving_percent").text(variants[fabric][$(".quantity_input").val().toString()][size][color]['productSavings']);
		$(".es_reg_price").text(variants[fabric][$(".quantity_input").val().toString()][size][color]['regularPrice']);
		$(".total_savings").text(variants[fabric][$(".quantity_input").val().toString()][size][color]['regularPrice'] - price);
	}

	function setFreeTowelImage(color) {
		$(".free-product").attr("src", `https://try.miraclebrand.co/sheets/bogo-limited/images/bogo/free-sheets/${color}-free.png`)
	}



	function filterColorSwatches(size) {
		var fabric = 'signature';

		$(".color-choice").removeClass("sold");

		for (var i = 0; i < $(".color-choice").length; i++) {
			var ch = $(".color-choice").eq(i);
			var color = ch.attr("data-color").toLowerCase().replace(' ', '_');
			if (variants[fabric][$(".quantity_input").val().toString()][size][color] == null) {
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
			if (variants[fabric][$(".quantity_input").val().toString()][size][color] == null) {
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

		for (let i = 1; i < imageCount[color] + 1; i++) {
			let mainSlideTemplate = `<div class="swiper-slide"><img src="https://try.miraclebrand.co/sheets/bogo-limited/images/sliders/${color.toLowerCase().replace(' ', '-')}/m_${i}.webp" alt="" class="product-img"></div>`;
			let thumbnailsSlideTemplate = `<div class="swiper-slide product-icon-2"><img src="https://try.miraclebrand.co/sheets/bogo-limited/images/sliders/${color.toLowerCase().replace(' ', '-')}/m_${i}_thumb.webp" loading="lazy" alt="" class="img-fluid"></div>`;

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
				data[variants[fabric][$(".quantity_input").val().toString()][size][color]['variantId']] = 1;
				data[42536178319510] = 1;
				console.log("Add to Cart");
				console.log(data);

				window.checkout.apiClient.setVariantQuantities(data).then(x => {
					console.log("Variant Set.");
					window.checkout.setCart(x);
					window.checkout.drawCart(x);
					window.location.href = '/sheets/checkout-bogo/';
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


	$('.option[data-value="queen"]').addClass("current-size");	
	$('.option[data-value="twinXL"]').addClass("sold");	
	$('.option[data-value="twinXL"]').addClass("non-selectable");	
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
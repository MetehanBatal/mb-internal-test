jQuery(document).ready(function($) {
	const variants = {
	     stone : {
			queen: { variantId: 42723134898326, productTitle: 'Miracle Comforter - Funnel - Full\/Queen \/ Stone', price: 169.99, regularPrice: 325, productSavings: 48, productDolarSavings: 155, productReviews: 327, imgUrl: 'images/comforter.png' },
			king: { variantId:  42723134963862, productTitle: 'Miracle Comforter - Funnel - King\/Cali King \/ Stone', price: 179.99, regularPrice: 345, productSavings: 48, productDolarSavings: 155, productReviews: 234, imgUrl: 'images/comforter.png' }
		 },
	     white : {
			queen: { variantId: 39544429248662, productTitle: 'Miracle Comforter - Funnel - Full\/Queen \/ White', price: 169.99, regularPrice: 325, productSavings: 48, productDolarSavings: 155, productReviews: 327, imgUrl: 'images/comforter.png' },
			king: { variantId:  39544429281430, productTitle: 'Miracle Comforter - Funnel - King\/Cali King \/ White', price: 179.99, regularPrice: 345, productSavings: 48, productDolarSavings: 155, productReviews: 234, imgUrl: 'images/comforter.png' }
		 }
	};

	function selVariant() {
		var color = $(".color-choice.active").attr("data-color");
		console.log(color);
		var size = $(".size-choice.active").attr("data-size");
		$(".selected-color").text(color)

		 //New function for multiple color selection
		$(".es_price").text(variants[color][size]['price']);
		$(".es_saving_percent").text(variants[color][size]['productSavings']);
		$(".es_saving_value").text(variants[color][size]['productDolarSavings']);
		$(".es_reg_price").text(variants[color][size]['regularPrice']);
		$(".es_ratings").text(variants[color][size]['productReviews']);
		$(".product-image img").attr("src", variants[color][size]['imgUrl']);

		if (color === 'stone') {
			$('.slide-item-inside-wrapper img').each(function() {
				$(this).removeAttr('srcset');
				$(this).attr( 'src', $(this).attr('src').replace('white', 'stone'));
			});
			$('.product-icon img').each(function() {
				$(this).removeAttr('srcset');
				$(this).attr( 'src', $(this).attr('src').replace('white', 'stone'));
			});
		} else {
			$('.slide-item-inside-wrapper img').each(function() {
				$(this).attr( 'src', $(this).attr('src').replace('stone', 'white') );
			});
			$('.product-icon img').each(function() {
				$(this).attr( 'src', $(this).attr('src').replace('stone', 'white') );
			});
		}
	}


	$('.to-atc').click(function() {
		console.log( $('#atc-section').offset().top );
		scroll({
			behavior: 'smooth',
			top: $('#atc-section').offset().top - 100
		})
	});


	window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
    window.checkoutReadyCallbacks.push(() => {
    	selVariant();

    	$(".size-choice").click(function(e) {
    		// var wrapper = $(this).parents(".size-container");
    		$(".size-choice").removeClass("active");
    		$(this).addClass("active");
    		selVariant();
    		let activeEl = $(this).attr('data-size');
    	});
		/* Color selection function. Active Class for colorful border */
    	$(".color-choice").click(function(e) {
    		// var wrapper = $(this).parents(".size-container");
    		$(".color-choice").removeClass("active");
    		$(this).addClass("active");
    		selVariant();
    		let activeEl = $(this).attr('data-size');
    	});


	    $(".submit-bbutton").click(function(e) {
	    	////////// Clear Cart /////////////////

	    	const clearCart = async () => {
				const updateRec = {};
				checkout.cart.localCart.lineItems.forEach(x => {
					console.log(x);
					if (x.variantId != '34937177702550') {
						updateRec[x.variantId] = 0;
					}
				});
				const newCart = await checkout.apiClient.setVariantQuantities(updateRec);
				checkout.setCart(newCart);
			}

			clearCart().then(x => {
				var nextUrl = "";
				
				if (window.location.href.indexOf("trymiracle-dev.outsmartly.app") > 0) {
					nextUrl = "https://trymiracle-dev.outsmartly.app/checkout_v2/c";
				}else {
					nextUrl = "https://try.miraclebrand.co/checkout_v2/c";
				}

				var urlSearchParamsS = new URLSearchParams(window.location.search);
				var paramsS = Object.fromEntries(urlSearchParamsS.entries());
				if (paramsS['utm_campaign'] && paramsS['utm_source'].length > 0 && paramsS['utm_campaign'].length > 0) {
					nextUrl = "https://try.miraclebrand.co/checkout_v2/c?w-promo=" + paramsS['utm_campaign'];
				}

				var size = $(".size-choice.active").attr("data-size");
				var color = $(".color-choice.active").attr("data-color");
		    	var data = {};
				var selectedQty = parseInt( $(".quantity-value").text() );
		    	data[variants[color][size]['variantId']] = parseInt( $(".quantity-value").text() );
		    	data[42508804751510] = parseInt( $(".quantity-value").text());
				/*
				mixpanel.track(
					"[Custom] Added To Cart", {
						"size": size,
						"product": "comforter",
						"funnelName": "mb-comforter-fn-ksp",
						"quantity": selectedQty
					}
				);
				*/
			    window.checkout.apiClient.setVariantQuantities(data).then(x => {
					console.log("Variant Set.");
					window.checkout.setCart(x);
		  			window.checkout.drawCart(x);
		    		window.location.href = nextUrl;
						console.log(size);
				});	
			});
	    });
    });

    $(window).scroll(function() {
    	if ($(window).width() < 768) {
    		var body_h = $("body").height();
    		var scroll_h = $(window).scrollTop();
    		var purchase_scrolltop = $("#purchase").position().top;
    		var purchase_scrollbottom = $("#purchase").position().top + $("#purchase").height();
    		// if (scroll_h > body_h * 0.3 && (scroll_h < purchase_scrolltop - $(window).height() + 150 || scroll_h > purchase_scrollbottom - 100)) {
    		// 	$("#sticky-footer").removeClass("es_hide");
    		// }
    		// else {
    		// 	$("#sticky-footer").addClass("es_hide");
    		// }
    		
    		if ( scroll_h > purchase_scrolltop * 1.5 ) {
    			$("#sticky-footer").removeClass("es_hide");
    		} else {
    			$("#sticky-footer").addClass("es_hide");
    		}
    	}
    });

    $(".size-guide-modal .size_chart-handle").click(function() {
		/*
		mixpanel.track("[Custom] Opened Size Guide");
		*/
    	var name = $(this).attr("name");
    	$(".size-guide-modal .size_chart-handle").removeClass("active");
    	$(this).addClass("active");
    	$(".size-guide-modal .size_table").hide();
    	$(".size-guide-modal .size_table[data-handle='" + name + "']").show();
    });

    $(".quantity .btn-quantity_plus").click(function(e) {
    	var qty = parseInt($(".quantity .quantity_input").val());
    	$(".quantity .quantity_input").val(qty + 1);;
    });

    $(".quantity .btn-quantity_minus").click(function(e) {
    	var qty = parseInt($(".quantity .quantity_input").val());
    	if (qty <= 1) {
    		return;
    	}
    	$(".quantity .quantity_input").val(qty - 1);;
    });


    const fabricRadiosWrapper = $('.fabric-select-wrapper')
    const fabricRadios = $('.fabric-select-wrapper input');
    console.log( 'Radios: ', fabricRadios );
    fabricRadios.bind('change', function(e) {
    	fabricRadiosWrapper.removeClass('active');
    	e.target.parentNode.classList.add('active');
    });
	
	// const fabricLabel = document.querySelectorAll('.fabric-label')
	// fabricRadios.forEach(el => {
	// 	el.addEventListener('change', e => {
	// 		console.log(e.target)
	// 		const item = e.target.parentElement
	// 		fabricRadiosWrapper.forEach(el => el.classList.remove('active'))
	// 		item.classList.add('active')
	// 	})
	// })
});
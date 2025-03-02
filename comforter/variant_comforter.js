jQuery(document).ready(function($) {
	const variants = {
	    full: {
	      white: { variantId: 39544429248662, productTitle: 'Miracle Comforter - Funnel - Full\/Queen \/ White', price: 189, regularPrice: 209, productSavings: 20, productReviews: 327, imgUrl: 'images/comforter.png' }
	    },
	    king: {
	      white: { variantId:  39544429281430, productTitle: 'Miracle Comforter - Funnel - King\/Cali King \/ White', price: 199, regularPrice: 219, productSavings: 20, productReviews: 234, imgUrl: 'images/comforter.png' }
	    }
	};

	function selVariant() {
		var size = $(".size-choice.current-size").attr("data-size");
		var color = $(".color-choice.current-color").attr("data-color");

		$(".es_price").text(variants[size][color]['price']);
		$(".es_saving_percent").text(variants[size][color]['productSavings']);
		$(".es_reg_price").text(variants[size][color]['regularPrice']);
		$(".es_ratings").text(variants[size][color]['productReviews']);
		$(".product-image img").attr("src", variants[size][color]['imgUrl']);
	}

	function filterColorSwatches(size) {
		$(".color-choice").removeClass("sold");

		for( var i = 0; i < $(".color-choice").length; i ++ ) {
			var ch = $(".color-choice").eq(i);
			var color = ch.attr("data-color");
			if (variants[size][color] == null) {
				ch.addClass("sold");
			}
		}
	}

	function filterSizeSwatches(color) {
		$(".size-choice").removeClass("sold");

		for( var i = 0; i < $(".size-choice").length; i ++ ) {
			var ch = $(".size-choice").eq(i);
			var size = ch.attr("data-size");
			if (variants[size][color] == null) {
				ch.addClass("sold");
			}
		}
	}

	window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
    window.checkoutReadyCallbacks.push(() => {
    	selVariant();

    	$(".size-choice").click(function(e) {
    		if ($(this).hasClass("sold")) {
    			return;
    		}
    		var wrapper = $(this).parents(".size-container");
    		wrapper.find(".size-choice").removeClass("current-size");
    		$(this).addClass("current-size");

    		filterColorSwatches($(this).attr("data-size"));
    		selVariant();
    	});

    	$(".color-choice").click(function(e) {
    		if ($(this).hasClass("sold")) {
    			return;
    		}
    		var wrapper = $(this).parents(".colors-container");
    		wrapper.find(".color-choice").removeClass("current-color");
    		$(this).addClass("current-color");

    		$(".color-name.current-color").text($(this).attr("data-color"));
    		filterSizeSwatches($(this).attr("data-color"));
    		selVariant();
    	});

	    $(".buy-now-button").click(function(e) {
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
				var size = $(".size-choice.current-size").attr("data-size");
				var color = $(".color-choice.current-color").attr("data-color");
		    	var data = {};
		    	data[variants[size][color]['variantId']] = $(".quantity_input").val();
			    window.checkout.apiClient.setVariantQuantities(data).then(x => {
					console.log("Variant Set.");
					window.checkout.setCart(x);
		  			window.checkout.drawCart(x);
		    		window.location.href = "https://try.miraclebrand.co/checkout/s2";
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

    		if (scroll_h > body_h * 0.3 && (scroll_h < purchase_scrolltop - $(window).height() + 150 || scroll_h > purchase_scrollbottom - 100)) {
    			$("#sticky-footer").removeClass("es_hide");
    		}
    		else {
    			$("#sticky-footer").addClass("es_hide");
    		}
    	}
    });

    $(".size-guide-modal .size_chart-handle").click(function() {
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

});
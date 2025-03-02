jQuery(document).ready(function($) {
	const variants = {
	  signature: {
	    queen: {
	      stone: { variantId: 39878721110166, productTitle: 'Stone Sheet Set - Queen', price: 139, regularPrice: 234, productSavings: 42, productReviews: 439, imgUrl: 'images/gift-stone.png' },
	      white: { variantId: 39878721142934, productTitle: 'White Sheet Set - Queen', price: 139, regularPrice: 234, productSavings: 42, productReviews: 439, imgUrl: 'images/gift-white.png' },
	      // sand: { variantId: 14441424846892, productTitle: 'Sand Sheet Set - Queen', price: 139, regularPrice: 234, productSavings: 42, productReviews: 439, imgUrl: 'images/sand-sheets.png' },
	      // sky: { variantId: 39878721175702, productTitle: 'Sky Blue Sheet Set - Queen', price: 139, regularPrice: 234, productSavings: 42, productReviews: 439, imgUrl: 'images/gift-sky.png' },
	    },
	    twin: {
	      // stone: { variantId: 39878721241238, productTitle: 'Stone Sheet Set - Twin', price: 119, regularPrice: 214, productSavings: 46, productReviews: 241, imgUrl: 'images/gift-stone.png' },
	      // white: { variantId: 39878721274006, productTitle: 'White Sheet Set - Twin', price: 119, regularPrice: 214, productSavings: 46, productReviews: 241, imgUrl: 'images/gift-white.png' },
	      // sand: { variantId: 14441425010732, productTitle: 'Sand Sheet Set - Twin', price: 119, regularPrice: 214, productSavings: 46, productReviews: 241, imgUrl: 'images/sand-sheets.png' },
	      // sky: { variantId: 39878721306774, productTitle: 'Sky Blue Sheet Set - Twin', price: 119, regularPrice: 214, productSavings: 46, productReviews: 241, imgUrl: 'images/gift-sky.png' },
	    },
	    full: {
	      stone: { variantId: 39878721339542, productTitle: 'Stone Sheet Set - Full', price: 129, regularPrice: 224, productSavings: 44, productReviews: 327, imgUrl: 'images/gift-stone.png' },
	      white: { variantId: 39878721372310, productTitle: 'White Sheet Set - Full', price: 129, regularPrice: 224, productSavings: 44, productReviews: 327, imgUrl: 'images/gift-white.png' },
	      // sand: { variantId: 14441425141804, productTitle: 'Sand Sheet Set - Full', price: 129, regularPrice: 224, productSavings: 44, productReviews: 327, imgUrl: 'images/sand-sheets.png' },
	      // sky: { variantId: 39878721405078, productTitle: 'Sky Blue Sheet Set - Full', price: 129, regularPrice: 224, productSavings: 44, productReviews: 327, imgUrl: 'images/gift-sky.png' },
	    },
	    king: {
	      stone: { variantId:  39878721437846, productTitle: 'Stone Sheet Set - King', price: 149, regularPrice: 234, productSavings: 37, productReviews: 234, imgUrl: 'images/gift-stone.png' },
	      white: { variantId:  39878721470614, productTitle: 'White Sheet Set - King', price: 149, regularPrice: 234, productSavings: 37, productReviews: 234, imgUrl: 'images/gift-white.png' },
	      // sand: { variantId:  14441425272876, productTitle: 'Sand Sheet Set - King', price: 149, regularPrice: 234, productSavings: 37, productReviews: 234, imgUrl: 'images/sand-sheets.png' },
	     // sky: { variantId: 39878721536150, productTitle: 'Sky Blue Sheet Set - King', price: 149, regularPrice: 234, productSavings: 37, productReviews: 234, imgUrl: 'images/gift-sky.png' },
	    },
	    cali_king: {
    	  stone: { variantId: 39878721962134, productTitle:"Cali King \/ Stone \/ Signature (Percale)", price:149, regularPrice: 234, productSavings: 37, productReviews: 234, imgUrl: 'images/gift-stone.png' }
	    }
	  },
	  luxe: {
	    queen: {
	      stone: { variantId: 39878721568918, productTitle: 'Stone Extra Luxe Sheet Set - Queen', price: 189, regularPrice: 284, productSavings: 34, productReviews: 565, imgUrl: 'images/gift-stone.png' },
	      white: { variantId: 39878721601686, productTitle: 'White Extra Luxe Sheet Set - Queen', price: 189, regularPrice: 284, productSavings: 34, productReviews: 565, imgUrl: 'images/gift-white.png' },
	      // sand: { variantId: 14516028440620, productTitle: 'Sand Extra Luxe Sheet Set - Queen', price: 189, regularPrice: 284, productSavings: 34, productReviews: 565, imgUrl: 'images/sand-sheets-luxe.png' },
	      // sky: { variantId: 39878721634454, productTitle: 'Sky Blue Extra Luxe Sheet Set - Queen', price: 189, regularPrice: 284, productSavings: 34, productReviews: 565, imgUrl: 'images/gift-sky.png' },
	    },
	    twin: {
	      // stone: { variantId: 39878721667222, productTitle: 'Stone Extra Luxe Sheet Set - Twin', price: 169, regularPrice: 264, productSavings: 37, productReviews: 432, imgUrl: 'images/gift-stone.png' },
	      // white: { variantId: 39878721699990, productTitle: 'White Extra Luxe Sheet Set - Twin', price: 169, regularPrice: 264, productSavings: 37, productReviews: 432, imgUrl: 'images/gift-white.png' },
	      // sand: { variantId: 14516028571692, productTitle: 'Sand Extra Luxe Sheet Set - Twin', price: 169, regularPrice: 264, productSavings: 37, productReviews: 432, imgUrl: 'images/sand-sheets.png' },
	      // sky: { variantId: 39878721732758, productTitle: 'Sky Blue Extra Luxe Sheet Set - Twin', price: 169, regularPrice: 264, productSavings: 37, productReviews: 432, imgUrl: 'images/gift-sky.png' },
	    },
	    full: {
	      stone: { variantId: 39878721765526, productTitle: 'Stone Extra Luxe Sheet Set - Full', price: 179, regularPrice: 264, productSavings: 33, productReviews: 195, imgUrl: 'images/gift-stone.png' },
	      white: { variantId: 39878721798294, productTitle: 'White Extra Luxe Sheet Set - Full', price: 179, regularPrice: 264, productSavings: 33, productReviews: 195, imgUrl: 'images/gift-white.png' },
	      // sand: { variantId: 14516028899372, productTitle: 'Sand Extra Luxe Sheet Set - Full', price: 179, regularPrice: 264, productSavings: 33, productReviews: 195, imgUrl: 'images/sand-sheets.png' },
	      // sky: { variantId: 39878721831062, productTitle: 'Sky Blue Extra Luxe Sheet Set - Full', price: 179, regularPrice: 264, productSavings: 33, productReviews: 195, imgUrl: 'images/gift-sky.png' },
	    },
	    king: {
	      stone: { variantId: 39878721863830, productTitle: 'Stone Extra Luxe Sheet Set - King', price: 199, regularPrice: 294, productSavings: 33, productReviews: 327, imgUrl: 'images/gift-stone.png' },
	      white: { variantId: 39878721896598, productTitle: 'White Extra Luxe Sheet Set - King', price: 199, regularPrice: 294, productSavings: 33, productReviews: 327, imgUrl: 'images/gift-white.png' },
	      // sand: { variantId: 14516029390892, productTitle: 'Sand Extra Luxe Sheet Set - King', price: 199, regularPrice: 294, productSavings: 33, productReviews: 327, imgUrl: 'images/sand-sheets-luxe.png' },
	     // sky: { variantId: 39878721929366, productTitle: 'Sky Blue Extra Luxe Sheet Set - King', price: 199, regularPrice: 294, productSavings: 33, productReviews: 327, imgUrl: 'images/gift-sky.png' },
	    },
	    cali_king: {
    	  stone: { variantId: 39878721994902, productTitle:"Cali King \/ Stone \/ Extra Luxe (Sateen)", price:199, regularPrice: 294, productSavings: 33, productReviews: 327, imgUrl: 'images/gift-stone.png' }
	    }
	  }
	};

	function selVariant() {
		var fabric = $("input[name='fabric_type']:checked").val();
		var size = $(".size-choice.current-size").attr("data-size");
		var color = $(".color-choice.current-color").attr("data-color");

		$(".es_price").text(variants[fabric][size][color]['price']);
		$(".es_saving_percent").text(variants[fabric][size][color]['productSavings']);
		$(".es_reg_price").text(variants[fabric][size][color]['regularPrice']);
		$(".es_ratings").text(variants[fabric][size][color]['productReviews']);
		$(".product-image img").attr("src", variants[fabric][size][color]['imgUrl']);
	}

	function filterColorSwatches(size) {
		var fabric = $("input[name='fabric_type']:checked").val();

		$(".color-choice").removeClass("sold");

		for( var i = 0; i < $(".color-choice").length; i ++ ) {
			var ch = $(".color-choice").eq(i);
			var color = ch.attr("data-color");
			if (variants[fabric][size][color] == null) {
				ch.addClass("sold");
			}
		}
	}

	function filterSizeSwatches(color) {
		var fabric = $("input[name='fabric_type']:checked").val();

		$(".size-choice").removeClass("sold");

		for( var i = 0; i < $(".size-choice").length; i ++ ) {
			var ch = $(".size-choice").eq(i);
			var size = ch.attr("data-size");
			if (variants[fabric][size][color] == null) {
				ch.addClass("sold");
			}
		}
	}

	window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
    window.checkoutReadyCallbacks.push(() => {
    	selVariant();

    	$("input[name='fabric_type']").change(function(e) {
    		selVariant();
    	});

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
				var fabric = $("input[name='fabric_type']:checked").val();
				var size = $(".size-choice.current-size").attr("data-size");
				var color = $(".color-choice.current-color").attr("data-color");
		    	var data = {};
		    	data[variants[fabric][size][color]['variantId']] = $(".quantity_input").val();
		    	console.log("Add to Cart");
		    	console.log(data);
			    window.checkout.apiClient.setVariantQuantities(data).then(x => {
					console.log("Variant Set.");
					window.checkout.setCart(x);
		  			window.checkout.drawCart(x);
		    		window.location.href = "https://try.miraclebrand.co/checkout/s3";
				});	
			});
	    });
    });

    $("input[name='fabric_type']").change(function() {
    	if ($(this).val() == "signature") {
    		$(".fabric-description").removeClass("current-fabric-type");
    		$(".fabric-description.signature").addClass("current-fabric-type");
    	}
    	else {
    		$(".fabric-description").removeClass("current-fabric-type");
    		$(".fabric-description.luxe").addClass("current-fabric-type");
    	}
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

    if($("#purchase .size-choice.current-size").length > 0) {
      filterColorSwatches($("#purchase .size-choice.current-size").attr("data-size"));
    }

});
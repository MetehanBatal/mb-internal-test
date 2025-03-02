jQuery(document).ready(function($) {
	const variants = {
	  signature: {
	    queen: {
	      stone: { variantId: 39366653444246, productTitle: 'Stone Sheet Set - Queen', price: 159.95, regularPrice: 219.95, productSavings: 27, productReviews: 439, imgUrl: 'images/stone.png' },
	      white: { variantId: 39366653542550, productTitle: 'White Sheet Set - Queen', price: 159.95, regularPrice: 219.95, productSavings: 27, productReviews: 439, imgUrl: 'images/white.png' },
	      // sand: { variantId: 14441424846892, productTitle: 'Sand Sheet Set - Queen', price: 159.95, regularPrice: 219.95, productSavings: 27, productReviews: 439, imgUrl: 'images/sheets/sand-sheets.png' },
	     sky: { variantId: 39366653608086, productTitle: 'Sky Blue Sheet Set - Queen', price: 159.95, regularPrice: 219.95, productSavings: 27, productReviews: 439, imgUrl: 'images/sheets/skye-blue-sheets.png' },
	    },
	    twin: {
	      // stone: { variantId: 39366653706390, productTitle: 'Stone Sheet Set - Twin', price: 134.95, regularPrice: 199.95, productSavings: 32, productReviews: 241, imgUrl: 'images/stone.png' },
	      // white: { variantId: 39366653804694, productTitle: 'White Sheet Set - Twin', price: 134.95, regularPrice: 199.95, productSavings: 32, productReviews: 241, imgUrl: 'images/sheets/white-sheets.png' },
	      // sand: { variantId: 14441425010732, productTitle: 'Sand Sheet Set - Twin', price: 134.95, regularPrice: 199.95, productSavings: 32, productReviews: 241, imgUrl: 'images/sheets/sand-sheets.png' },
	      // sky: { variantId: 39366653902998, productTitle: 'Sky Blue Sheet Set - Twin', price: 134.95, regularPrice: 199.95, productSavings: 32, productReviews: 241, imgUrl: 'images/sheets/skye-blue-sheets.png' },
	    },
	    full: {
	      stone: { variantId: 39366653968534, productTitle: 'Stone Sheet Set - Full', price: 149.95, regularPrice: 214.95, productSavings: 30, productReviews: 327, imgUrl: 'images/stone.png' },
	      white: { variantId: 39366654001302, productTitle: 'White Sheet Set - Full', price: 149.95, regularPrice: 214.95, productSavings: 30, productReviews: 327, imgUrl: 'images/white.png' },
	      // sand: { variantId: 14441425141804, productTitle: 'Sand Sheet Set - Full', price: 149.95, regularPrice: 214.95, productSavings: 30, productReviews: 327, imgUrl: 'images/sheets/sand-sheets.png' },
	      // sky: { variantId: 39366654034070, productTitle: 'Sky Blue Sheet Set - Full', price: 149.95, regularPrice: 214.95, productSavings: 30, productReviews: 327, imgUrl: 'images/sheets/skye-blue-sheets.png' },
	    },
	    king: {
	      stone: { variantId:  39366654066838, productTitle: 'Stone Sheet Set - King', price: 169.95, regularPrice: 234.95, productSavings: 27, productReviews: 234, imgUrl: 'images/stone.png' },
	      white: { variantId:  39366654099606, productTitle: 'White Sheet Set - King', price: 169.95, regularPrice: 234.95, productSavings: 27, productReviews: 234, imgUrl: 'images/white.png' },
	      // sand: { variantId:  14441425272876, productTitle: 'Sand Sheet Set - King', price: 169.95, regularPrice: 234.95, productSavings: 27, productReviews: 234, imgUrl: 'images/sheets/sand-sheets.png' },
	     sky: { variantId: 39366654132374, productTitle: 'Sky Blue Sheet Set - King', price: 169.95, regularPrice: 234.95, productSavings: 27, productReviews: 234, imgUrl: 'images/sheets/skye-blue-sheets.png' },
	    },
	    cali_king: {
    	  stone: { variantId: 39366654066838, productTitle:"Cali King \/ Stone \/ Signature (Percale)", price:169.95, regularPrice: 234.95, productSavings: 27, productReviews: 234, imgUrl: 'images/stone.png' }
	    }
	  },
	  luxe: {
	    queen: {
	      stone: { variantId: 39366654165142, productTitle: 'Stone Extra Luxe Sheet Set - Queen', price: 219.95, regularPrice: 284.95, productSavings: 22, productReviews: 565, imgUrl: 'images/stone.png' },
	      white: { variantId: 39366654197910, productTitle: 'White Extra Luxe Sheet Set - Queen', price: 219.95, regularPrice: 284.95, productSavings: 22, productReviews: 565, imgUrl: 'images/white.png' },
	      // sand: { variantId: 14516028440620, productTitle: 'Sand Extra Luxe Sheet Set - Queen', price: 219.95, regularPrice: 284.95, productSavings: 22, productReviews: 565, imgUrl: 'images/sheets/sand-sheets-luxe.png' },
	     sky: { variantId: 39366654230678, productTitle: 'Sky Blue Extra Luxe Sheet Set - Queen', price: 219.95, regularPrice: 284.95, productSavings: 22, productReviews: 565, imgUrl: 'images/sheets/skye-blue-sheets-luxe.png' },
	    },
	    twin: {
	      // stone: { variantId: 39366654263446, productTitle: 'Stone Extra Luxe Sheet Set - Twin', price: 199.95, regularPrice: 264.95, productSavings: 24, productReviews: 432, imgUrl: 'images/stone.png' },
	      // white: { variantId: 39366654296214, productTitle: 'White Extra Luxe Sheet Set - Twin', price: 199.95, regularPrice: 264.95, productSavings: 24, productReviews: 432, imgUrl: 'images/sheets/white-sheets-luxe.png' },
	      // sand: { variantId: 14516028571692, productTitle: 'Sand Extra Luxe Sheet Set - Twin', price: 199.95, regularPrice: 264.95, productSavings: 24, productReviews: 432, imgUrl: 'images/sheets/sand-sheets-luxe.png' },
	      // sky: { variantId: 39366654328982, productTitle: 'Sky Blue Extra Luxe Sheet Set - Twin', price: 199.95, regularPrice: 264.95, productSavings: 24, productReviews: 432, imgUrl: 'images/sheets/skye-blue-sheets-luxe.png' },
	    },
	    full: {
	      stone: { variantId: 39366654361750, productTitle: 'Stone Extra Luxe Sheet Set - Full', price: 209.95, regularPrice: 274.95, productSavings: 23, productReviews: 195, imgUrl: 'images/stone.png' },
	      white: { variantId: 39366654394518, productTitle: 'White Extra Luxe Sheet Set - Full', price: 209.95, regularPrice: 274.95, productSavings: 23, productReviews: 195, imgUrl: 'images/white.png' },
	      // sand: { variantId: 14516028899372, productTitle: 'Sand Extra Luxe Sheet Set - Full', price: 209.95, regularPrice: 274.95, productSavings: 23, productReviews: 195, imgUrl: 'images/sheets/sand-sheets-luxe.png' },
	      // sky: { variantId: 39366654427286, productTitle: 'Sky Blue Extra Luxe Sheet Set - Full', price: 209.95, regularPrice: 274.95, productSavings: 23, productReviews: 195, imgUrl: 'images/sheets/skye-blue-sheets-luxe.png' },
	    },
	    king: {
	      stone: { variantId: 39366654460054, productTitle: 'Stone Extra Luxe Sheet Set - King', price: 229.95, regularPrice: 294.95, productSavings: 22, productReviews: 327, imgUrl: 'images/stone.png' },
	      white: { variantId: 39366654492822, productTitle: 'White Extra Luxe Sheet Set - King', price: 229.95, regularPrice: 294.95, productSavings: 22, productReviews: 327, imgUrl: 'images/white.png' },
	      // sand: { variantId: 14516029390892, productTitle: 'Sand Extra Luxe Sheet Set - King', price: 229.95, regularPrice: 294.95, productSavings: 22, productReviews: 327, imgUrl: 'images/sheets/sand-sheets-luxe.png' },
	     sky: { variantId: 39366654525590, productTitle: 'Sky Blue Extra Luxe Sheet Set - King', price: 229.95, regularPrice: 294.95, productSavings: 22, productReviews: 327, imgUrl: 'images/sheets/skye-blue-sheets-luxe.png' },
	    },
	    cali_king: {
    	  stone: { variantId: 39366654460054, productTitle:"Cali King \/ Stone \/ Extra Luxe (Sateen)", price:229.95, regularPrice: 294.95, productSavings: 22, productReviews: 327, imgUrl: 'images/stone.png' }
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

	    window.checkout.apiClient.setCurrentVariant(variants[fabric][size][color]['variantId']).then(x => {
			console.log("Variant Set.");
			window.checkout.setCart(x);
  			window.checkout.drawCart();
		});	
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
    });

    $(".buy-now-button").click(function(e) {
    	window.location.href = "https://try.miraclebrand.co/checkout/s2";
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
});
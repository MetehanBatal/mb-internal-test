jQuery(document).ready(function($) {
	const variants = {
	  signature: {
	    queen: {
	      stone: { variantId: 14441424781356, productTitle: 'Stone Sheet Set - Queen', price: 129, regularPrice: 159, productSavings: 20, productReviews: 439, imgUrl: 'images/stone-sheets.png' },
	      white: { variantId: 14441424814124, productTitle: 'White Sheet Set - Queen', price: 129, regularPrice: 159, productSavings: 20, productReviews: 439, imgUrl: 'images/white-sheets.png' },
	      // sand: { variantId: 14441424846892, productTitle: 'Sand Sheet Set - Queen', price: 129, regularPrice: 159, productSavings: 20, productReviews: 439, imgUrl: 'images/sheets/sand-sheets.png' },
	     sky: { variantId: 36614284247190, productTitle: 'Sky Blue Sheet Set - Queen', price: 129, regularPrice: 159, productSavings: 20, productReviews: 439, imgUrl: 'images/sky-blue-sheets.png' },
	    },
	    twin: {
	      stone: { variantId: 14441424945196, productTitle: 'Stone Sheet Set - Twin', price: 109, regularPrice: 139, productSavings: 20, productReviews: 241, imgUrl: 'images/stone-sheets.png' },
	      // white: { variantId: 14441424977964, productTitle: 'White Sheet Set - Twin', price: 109, regularPrice: 139, productSavings: 20, productReviews: 241, imgUrl: 'images/sheets/white-sheets.png' },
	      // sand: { variantId: 14441425010732, productTitle: 'Sand Sheet Set - Twin', price: 109, regularPrice: 139, productSavings: 20, productReviews: 241, imgUrl: 'images/sheets/sand-sheets.png' },
	      // sky: { variantId: 36728253317270, productTitle: 'Sky Blue Sheet Set - Twin', price: 109, regularPrice: 139, productSavings: 20, productReviews: 241, imgUrl: 'images/sheets/skye-blue-sheets.png' },
	    },
	    full: {
	      stone: { variantId: 14441425076268, productTitle: 'Stone Sheet Set - Full', price: 119, regularPrice: 149, productSavings: 20, productReviews: 327, imgUrl: 'images/stone-sheets.png' },
	      white: { variantId: 14441425109036, productTitle: 'White Sheet Set - Full', price: 119, regularPrice: 149, productSavings: 20, productReviews: 327, imgUrl: 'images/white-sheets.png' },
	      // sand: { variantId: 14441425141804, productTitle: 'Sand Sheet Set - Full', price: 119, regularPrice: 149, productSavings: 20, productReviews: 327, imgUrl: 'images/sheets/sand-sheets.png' },
	      // sky: { variantId: 36728253382806, productTitle: 'Sky Blue Sheet Set - Full', price: 119, regularPrice: 149, productSavings: 20, productReviews: 327, imgUrl: 'images/sheets/skye-blue-sheets.png' },
	    },
	    king: {
	      stone: { variantId:  14441425207340, productTitle: 'Stone Sheet Set - King', price: 139, regularPrice: 159, productSavings: 20, productReviews: 234, imgUrl: 'images/stone-sheets.png' },
	      white: { variantId:  14441425240108, productTitle: 'White Sheet Set - King', price: 139, regularPrice: 159, productSavings: 20, productReviews: 234, imgUrl: 'images/white-sheets.png' },
	      // sand: { variantId:  14441425272876, productTitle: 'Sand Sheet Set - King', price: 139, regularPrice: 159, productSavings: 20, productReviews: 234, imgUrl: 'images/sheets/sand-sheets.png' },
	     sky: { variantId: 36614293880982, productTitle: 'Sky Blue Sheet Set - King', price: 139, regularPrice: 159, productSavings: 20, productReviews: 234, imgUrl: 'images/sky-blue-sheets.png' },
	    },
	    cali_king: {
    	  stone: { variantId: 36913708728470, productTitle:"Cali King \/ Stone \/ Signature (Percale)", price:139, regularPrice: 159, productSavings: 20, productReviews: 234, imgUrl: 'images/stone-sheets.png' }
	    }
	  },
	  luxe: {
	    queen: {
	      stone: { variantId: 14516028276780, productTitle: 'Stone Extra Luxe Sheet Set - Queen', price: 179, regularPrice: 209, productSavings: 20, productReviews: 565, imgUrl: 'images/stone-sheets.png' },
	      white: { variantId: 14516028309548, productTitle: 'White Extra Luxe Sheet Set - Queen', price: 179, regularPrice: 209, productSavings: 20, productReviews: 565, imgUrl: 'images/white-sheets.png' },
	      // sand: { variantId: 14516028440620, productTitle: 'Sand Extra Luxe Sheet Set - Queen', price: 179, regularPrice: 209, productSavings: 20, productReviews: 565, imgUrl: 'images/sheets/sand-sheets-luxe.png' },
	     sky: { variantId: 36614299123862, productTitle: 'Sky Blue Extra Luxe Sheet Set - Queen', price: 179, regularPrice: 209, productSavings: 20, productReviews: 565, imgUrl: 'images/sky-blue-sheets.png' },
	    },
	    twin: {
	      stone: { variantId: 14516028506156, productTitle: 'Stone Extra Luxe Sheet Set - Twin', price: 159, regularPrice: 189, productSavings: 20, productReviews: 432, imgUrl: 'images/stone-sheets.png' },
	      // white: { variantId: 14516028538924, productTitle: 'White Extra Luxe Sheet Set - Twin', price: 159, regularPrice: 189, productSavings: 20, productReviews: 432, imgUrl: 'images/sheets/white-sheets-luxe.png' },
	      // sand: { variantId: 14516028571692, productTitle: 'Sand Extra Luxe Sheet Set - Twin', price: 159, regularPrice: 189, productSavings: 20, productReviews: 432, imgUrl: 'images/sheets/sand-sheets-luxe.png' },
	      // sky: { variantId: 36728253350038, productTitle: 'Sky Blue Extra Luxe Sheet Set - Twin', price: 159, regularPrice: 189, productSavings: 20, productReviews: 432, imgUrl: 'images/sheets/skye-blue-sheets-luxe.png' },
	    },
	    full: {
	      stone: { variantId: 14516028833836, productTitle: 'Stone Extra Luxe Sheet Set - Full', price: 169, regularPrice: 189, productSavings: 20, productReviews: 195, imgUrl: 'images/stone-sheets.png' },
	      white: { variantId: 14516028866604, productTitle: 'White Extra Luxe Sheet Set - Full', price: 169, regularPrice: 189, productSavings: 20, productReviews: 195, imgUrl: 'images/white-sheets.png' },
	      // sand: { variantId: 4516028899372, productTitle: 'Sand Extra Luxe Sheet Set - Full', price: 169, regularPrice: 189, productSavings: 20, productReviews: 195, imgUrl: 'images/sheets/sand-sheets-luxe.png' },
	      // sky: { variantId: 36728253415574, productTitle: 'Sky Blue Extra Luxe Sheet Set - Full', price: 169, regularPrice: 189, productSavings: 20, productReviews: 195, imgUrl: 'images/sheets/skye-blue-sheets-luxe.png' },
	    },
	    king: {
	      stone: { variantId: 14516029095980, productTitle: 'Stone Extra Luxe Sheet Set - King', price: 189, regularPrice: 219, productSavings: 20, productReviews: 327, imgUrl: 'images/stone-sheets.png' },
	      white: { variantId: 14516029358124, productTitle: 'White Extra Luxe Sheet Set - King', price: 189, regularPrice: 219, productSavings: 20, productReviews: 327, imgUrl: 'images/white-sheets.png' },
	      // sand: { variantId: 14516029390892, productTitle: 'Sand Extra Luxe Sheet Set - King', price: 189, regularPrice: 219, productSavings: 20, productReviews: 327, imgUrl: 'images/sheets/sand-sheets-luxe.png' },
	     sky: { variantId: 36614303842454, productTitle: 'Sky Blue Extra Luxe Sheet Set - King', price: 189, regularPrice: 219, productSavings: 20, productReviews: 327, imgUrl: 'images/sky-blue-sheets.png' },
	    },
	    cali_king: {
    	  stone: { variantId: 36913708794006, productTitle:"Cali King \/ Stone \/ Extra Luxe (Sateen)", price:189, regularPrice: 219, productSavings: 20, productReviews: 327, imgUrl: 'images/stone-sheets.png' }	
				
			}
	  }
	};


	const variants_upsell = {
	  signature: {
	    queen: {
	      stone: { variantId: 33709277249672, productTitle: 'Stone Sheet Set - Queen', price: 92, regularPrice: 159, productSavings: 43, productReviews: 439, imgUrl: 'images/stone-sheets.png' },
	      white: { variantId: 33709277282440, productTitle: 'White Sheet Set - Queen', price: 92, regularPrice: 159, productSavings: 43, productReviews: 439, imgUrl: 'images/white-sheets.png' },
	      // sand: { variantId: 14441424846892, productTitle: 'Sand Sheet Set - Queen', price: 92, regularPrice: 159, productSavings: 43, productReviews: 439, imgUrl: 'images/sheets/sand-sheets.png' },
	     sky: { variantId: 33709277380744, productTitle: 'Sky Blue Sheet Set - Queen', price: 92, regularPrice: 159, productSavings: 43, productReviews: 439, imgUrl: 'images/sky-blue-sheets.png' },
	    },
	    twin: {
	      // stone: { variantId: 33709277413512, productTitle: 'Stone Sheet Set - Twin', price: 72, regularPrice: 139, productSavings: 49, productReviews: 241, imgUrl: 'images/stone-sheets.png' },
	      // white: { variantId: 14441424977964, productTitle: 'White Sheet Set - Twin', price: 72, regularPrice: 139, productSavings: 49, productReviews: 241, imgUrl: 'images/sheets/white-sheets.png' },
	      // sand: { variantId: 14441425010732, productTitle: 'Sand Sheet Set - Twin', price: 72, regularPrice: 139, productSavings: 49, productReviews: 241, imgUrl: 'images/sheets/sand-sheets.png' },
	      // sky: { variantId: 36728253317270, productTitle: 'Sky Blue Sheet Set - Twin', price: 72, regularPrice: 139, productSavings: 49, productReviews: 241, imgUrl: 'images/sheets/skye-blue-sheets.png' },
	    },
	    full: {
	      stone: { variantId: 33709277544584, productTitle: 'Stone Sheet Set - Full', price: 82, regularPrice: 149, productSavings: 45, productReviews: 327, imgUrl: 'images/stone-sheets.png' },
	      white: { variantId: 33709277577352, productTitle: 'White Sheet Set - Full', price: 82, regularPrice: 149, productSavings: 45, productReviews: 327, imgUrl: 'images/white-sheets.png' },
	      // sand: { variantId: 14441425141804, productTitle: 'Sand Sheet Set - Full', price: 82, regularPrice: 149, productSavings: 45, productReviews: 327, imgUrl: 'images/sheets/sand-sheets.png' },
	      // sky: { variantId: 36728253382806, productTitle: 'Sky Blue Sheet Set - Full', price: 82, regularPrice: 149, productSavings: 45, productReviews: 327, imgUrl: 'images/sheets/skye-blue-sheets.png' },
	    },
	    king: {
	      stone: { variantId:  33709277708424, productTitle: 'Stone Sheet Set - King', price: 102, regularPrice: 159, productSavings: 36, productReviews: 234, imgUrl: 'images/stone-sheets.png' },
	      white: { variantId:  33709277741192, productTitle: 'White Sheet Set - King', price: 102, regularPrice: 159, productSavings: 36, productReviews: 234, imgUrl: 'images/white-sheets.png' },
	      // sand: { variantId:  14441425272876, productTitle: 'Sand Sheet Set - King', price: 102, regularPrice: 159, productSavings: 36, productReviews: 234, imgUrl: 'images/sheets/sand-sheets.png' },
	     sky: { variantId: 33709277806728, productTitle: 'Sky Blue Sheet Set - King', price: 102, regularPrice: 159, productSavings: 36, productReviews: 234, imgUrl: 'images/sky-blue-sheets.png' },
	    },
	    cali_king: {
    	  stone: { variantId: 36914057347222, productTitle:"Cali King \/ Stone \/ Signature (Percale)", price: 102, regularPrice: 159, productSavings: 36, productReviews: 234, imgUrl: 'images/stone-sheets.png' }
	    }
	  },
	  luxe: {
	    queen: {
	      stone: { variantId: 33709275512968, productTitle: 'Stone Extra Luxe Sheet Set - Queen', price: 109, regularPrice: 209, productSavings: 48, productReviews: 565, imgUrl: 'images/stone-sheets.png' },
	      white: { variantId: 33709275545736, productTitle: 'White Extra Luxe Sheet Set - Queen', price: 109, regularPrice: 209, productSavings: 48, productReviews: 565, imgUrl: 'images/white-sheets.png' },
	      // sand: { variantId: 14516028440620, productTitle: 'Sand Extra Luxe Sheet Set - Queen', price: 109, regularPrice: 209, productSavings: 48, productReviews: 565, imgUrl: 'images/sheets/sand-sheets-luxe.png' },
	     sky: { variantId: 33709275611272, productTitle: 'Sky Blue Extra Luxe Sheet Set - Queen', price: 109, regularPrice: 209, productSavings: 48, productReviews: 565, imgUrl: 'images/sky-blue-sheets.png' },
	    },
	    twin: {
	      // stone: { variantId: 33709275676808, productTitle: 'Stone Extra Luxe Sheet Set - Twin', price: 89, regularPrice: 189, productSavings: 53, productReviews: 432, imgUrl: 'images/stone-sheets.png' },
	      // white: { variantId: 14516028538924, productTitle: 'White Extra Luxe Sheet Set - Twin', price: 89, regularPrice: 189, productSavings: 53, productReviews: 432, imgUrl: 'images/sheets/white-sheets-luxe.png' },
	      // sand: { variantId: 14516028571692, productTitle: 'Sand Extra Luxe Sheet Set - Twin', price: 89, regularPrice: 189, productSavings: 53, productReviews: 432, imgUrl: 'images/sheets/sand-sheets-luxe.png' },
	      // sky: { variantId: 36728253350038, productTitle: 'Sky Blue Extra Luxe Sheet Set - Twin', price: 89, regularPrice: 189, productSavings: 53, productReviews: 432, imgUrl: 'images/sheets/skye-blue-sheets-luxe.png' },
	    },
	    full: {
	      stone: { variantId: 33709275840648, productTitle: 'Stone Extra Luxe Sheet Set - Full', price: 99, regularPrice: 189, productSavings: 48, productReviews: 195, imgUrl: 'images/stone-sheets.png' },
	      white: { variantId: 33709275873416, productTitle: 'White Extra Luxe Sheet Set - Full', price: 99, regularPrice: 189, productSavings: 48, productReviews: 195, imgUrl: 'images/white-sheets.png' },
	      // sand: { variantId: 4516028899372, productTitle: 'Sand Extra Luxe Sheet Set - Full', price: 99, regularPrice: 189, productSavings: 48, productReviews: 195, imgUrl: 'images/sheets/sand-sheets-luxe.png' },
	      // sky: { variantId: 36728253415574, productTitle: 'Sky Blue Extra Luxe Sheet Set - Full', price: 99, regularPrice: 189, productSavings: 48, productReviews: 195, imgUrl: 'images/sheets/skye-blue-sheets-luxe.png' },
	    },
	    king: {
	      stone: { variantId: 33709275971720, productTitle: 'Stone Extra Luxe Sheet Set - King', price: 119, regularPrice: 219, productSavings: 46, productReviews: 327, imgUrl: 'images/stone-sheets.png' },
	      white: { variantId: 33709276004488, productTitle: 'White Extra Luxe Sheet Set - King', price: 119, regularPrice: 219, productSavings: 46, productReviews: 327, imgUrl: 'images/white-sheets.png' },
	      // sand: { variantId: 14516029390892, productTitle: 'Sand Extra Luxe Sheet Set - King', price: 119, regularPrice: 219, productSavings: 46, productReviews: 327, imgUrl: 'images/sheets/sand-sheets-luxe.png' },
	     sky: { variantId: 33709276037256, productTitle: 'Sky Blue Extra Luxe Sheet Set - King', price: 119, regularPrice: 219, productSavings: 46, productReviews: 327, imgUrl: 'images/sky-blue-sheets.png' },
	    },
	    cali_king: {
    	  stone: { variantId: 36914055479446, productTitle:"Cali King \/ Stone \/ Extra Luxe (Sateen)", price:119, regularPrice: 219, productSavings: 46, productReviews: 327, imgUrl: 'images/stone-sheets.png' }
	    }
	  }
	};

	function selVariant() {
		console.log("selVariant");
		var fabric = $("input[name='fabric_type']:checked").val();
		var size = $(".size-choice.current-size").attr("data-size");
		var color = $(".color-choice.current-color").attr("data-color");

		if (fabric == null || size == null || color == null) {
			return;
		}
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

    	/* Open Popup and Remove Addon Product */
    	// const params = new URLSearchParams(window.location.search);
    	// console.log(window.location.search);
    	// console.log(params);
    	if(window.location.href.split("?").length >= 2) {
	    	var url_tag = window.location.href.split("?")[1].split("&");
	    	for( var i = 0; i < url_tag.length; i ++ ) {
	    		if (url_tag[i].split("=")[0] == 'addonid') {
	    			if (url_tag[i].split("=")[1] != '0') {
	    				window.checkout.apiClient.toggleAddon(url_tag[i].split("=")[1]).then(x => {
				    		var refresh = window.location.protocol + "//" + window.location.host + window.location.pathname;    
							window.history.pushState({ path: refresh }, '', refresh);
				    	});
	    			}
	    			else {
	    				var refresh = window.location.protocol + "//" + window.location.host + window.location.pathname;    
						window.history.pushState({ path: refresh }, '', refresh);
	    			}
    				$(".upsell_popup-wrapper").removeClass("es_hide");

    				$(".upsell_popup .btn-close").addClass("just_close");

	    			break;
	    		}
	    	}
	    }
    	/*-------------------------------------*/
    });

    $(".buy-now-button").click(function(e) {
    	$(".upsell_popup-wrapper").removeClass("es_hide");
    	$("#sticky-footer").addClass("es_hide");

		$(".upsell_popup .btn-close").removeClass("just_close");
		quantitytimer();
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

    $(".upsell_popup-wrapper").scroll(function(e) {
    	e.preventDefault();
    	e.stopPropagation();
    });

    $(window).scroll(function() {
    	if ($(window).width() < 768) {
    		var body_h = $("body").height();
    		var scroll_h = $(window).scrollTop();
    		var purchase_scrolltop = $("#purchase").position().top;
    		var purchase_scrollbottom = $("#purchase").position().top + $("#purchase").height();

    		if (scroll_h > body_h * 0.3 && (scroll_h < purchase_scrolltop - $(window).height() + 150 || scroll_h > purchase_scrollbottom - 100) && $(".upsell_popup-wrapper").hasClass("es_hide")) {
    			$("#sticky-footer").removeClass("es_hide");
    		}
    		else {
    			$("#sticky-footer").addClass("es_hide");
    		}
    	}
    });

    // Upsell popup script ///////////////////////////////
    function upsell_selVariant() {
    	console.log("Upsell selVariant");
		var fabric = $("input[name='upsell-fabric_type']:checked").val();
		var size = $(".upsell_popup .size-dropdown select").val();
		var color = $(".upsell-color-choice.current-color").attr("data-color");

		console.log(fabric);
		console.log(size);
		console.log(color);
		if (fabric == null || size == null || color == null) {
			return;
		}

		$(".upsell_sale_price").text(variants_upsell[fabric][size][color]['price']);
		$(".upsell_popup .saving_percent_badge").text(variants_upsell[fabric][size][color]['productSavings'] + "%");
		$(".upsell_reg_price").text(variants_upsell[fabric][size][color]['regularPrice']);
		$(".upsell_saving_amount").text(variants_upsell[fabric][size][color]['regularPrice'] - variants_upsell[fabric][size][color]['price']);
		$(".upsell_produc-img").attr("src", variants_upsell[fabric][size][color]['imgUrl']);
    }

	upsell_selVariant();

	function upsell_filterColorSwatches(size) {
		var fabric = $("input[name='upsell-fabric_type']:checked").val();

		$(".upsell-color-choice").removeClass("sold");

		for( var i = 0; i < $(".upsell-color-choice").length; i ++ ) {
			var ch = $(".upsell-color-choice").eq(i);
			var color = ch.attr("data-color");
			if (variants_upsell[fabric][size][color] == null) {
				ch.addClass("sold");
			}
		}
	}

	$(".upsell-color-choice").click(function(e) {
		if ($(this).hasClass("sold")) {
			return;
		}
		var wrapper = $(this).parents(".colors-container");
		wrapper.find(".upsell-color-choice").removeClass("current-color");
		$(this).addClass("current-color");

		$(".upsell_popup .color-name.current-color").text($(this).attr("data-color"));

		upsell_selVariant();
	});

	$("input[name='upsell-fabric_type']").change(function(e) {
		upsell_selVariant();
	});

	$(".upsell_popup .size-dropdown select").change(function(e) {
		upsell_filterColorSwatches($(this).val())
		upsell_selVariant();
	});

	function quantity_progress() {
		var length = $(".upsell_popup .quantity_bar").width();
		var filled = $(".upsell_popup .quantity_bar .quantity_bar_filled").width();
		var percent = Math.round(filled * 100 / length);
		percent = Math.round(percent + (Math.random() % 2 + 1));
		$(".upsell_popup .quantity_bar .quantity_bar_filled").css("width", percent + "%");
		$(".quantity_left").text(100 - percent);
	}

	function quantitytimer() {
		var interval = parseInt(Math.random() * 100 % 10 * 1000);
		console.log(interval);
		if($(".upsell_popup .quantity_bar .quantity_bar_filled").width() < $(".upsell_popup .quantity_bar").width()) {
			setTimeout(function() {
				quantity_progress();
				quantitytimer();
			}, interval);			
		}
	}

	$(".upsell_popup .btn-checkout").click(function(e) {
		window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
	    window.checkoutReadyCallbacks.push(() => {
			var fabric = $("input[name='upsell-fabric_type']:checked").val();
			var size = $(".upsell_popup .size-dropdown select").val();
			var color = $(".upsell-color-choice.current-color").attr("data-color");

	    	window.checkout.apiClient.toggleAddon(variants_upsell[fabric][size][color]['variantId']).then(x => {
	    		var refresh = window.location.protocol + "//" + window.location.host + window.location.pathname + '?addonid=' + variants_upsell[fabric][size][color]['variantId'];    
				window.history.pushState({ path: refresh }, '', refresh);
	    		window.location.href = "https://try.miraclebrand.co/checkout/s2";
	    	});
	    });
	});

	$(".upsell_popup .btn-nothanks").click(function(e) {
		var refresh = window.location.protocol + "//" + window.location.host + window.location.pathname + '?addonid=0';    
		window.history.pushState({ path: refresh }, '', refresh);
    	window.location.href = "https://try.miraclebrand.co/checkout/s2";
	});

	$(".upsell_popup .btn-close").click(function(e) {
		if ($(".upsell_popup .btn-close").hasClass("just_close")) {
			$(".upsell_popup-wrapper").addClass("es_hide");
		}
		else {
			var refresh = window.location.protocol + "//" + window.location.host + window.location.pathname + '?addonid=0';    
			window.history.pushState({ path: refresh }, '', refresh);
	    	window.location.href = "https://try.miraclebrand.co/checkout/s2";	
		}
	});
    //////////////////////////////////////////////////////
});
jQuery(document).ready(function($) {
	const variants = {
			    miracle_towel_set: {
			      stone: { variantId: 37063641202838, productTitle: 'Stone Sheet Set - Queen', price: 35, regularPrice: 40, productSavings: 20, productReviews: 439, imgUrl: 'images/stone-towel-1.png' },
			      white: { variantId: 37063641235606, productTitle: 'White Sheet Set - Queen', price: 35, regularPrice: 40, productSavings: 20, productReviews: 439, imgUrl: 'images/white-towel-1.png' },
			    },
			    _2_miracle_towel: {
			      stone: { variantId: 37063641333910, productTitle: 'Stone Sheet Set - Twin', price: 65, regularPrice: 80, productSavings: 20, productReviews: 241, imgUrl: 'images/stone-towel-2.png' },
			      white: { variantId: 37063641366678, productTitle: 'White Sheet Set - Twin', price: 65, regularPrice: 80, productSavings: 20, productReviews: 241, imgUrl: 'images/white-towel-2.png' },
			    },
			    miracle_towel: {
			      stone: { variantId: 37063641432214, productTitle: 'Stone Sheet Set - Full', price: 99, regularPrice: 152, productSavings: 20, productReviews: 327, imgUrl: 'images/stone-towel-3.png' },
			      white: { variantId: 37063641464982, productTitle: 'White Sheet Set - Full', price: 99, regularPrice: 152, productSavings: 20, productReviews: 327, imgUrl: 'images/white-towel-3.png' },
			    }
			};

	function selVariant() {
		var size = $(".es_swatch_row[data-type='size'] .es_swatch-btn_container .es_swatch.es_active").attr("data-value");
		var color = $(".es_swatch_row[data-type='color'] .es_swatch-btn_container .es_swatch.es_active").attr("data-value");

		var checkout_url = "https://try.miraclebrand.co/checkout/s?forceVariantId=" + variants[size][color]['variantId'];

		console.log(variants[size][color]['variantId']);

		$(".es_reg_price").text(variants[size][color]['regularPrice']);
		$(".es_sale_price").text(variants[size][color]['price']);
		$(".es_reviews_cnt").text(variants[size][color]['productReviews']);
		$(".header-img img").attr("src", variants[size][color]['imgUrl']);
		$(".es_discount_value").text("$" + (variants[size][color]['regularPrice'] - variants[size][color]['price']) + " (" + variants[size][color]['productSavings'] + "% OFF)");

		window.checkout.apiClient.setCurrentVariant(variants[size][color]['variantId']).then(x => {
			window.checkout.setCart(x);
  			window.checkout.drawCart();
		});		
	}

	// function escapeRegExp(string){
	//     return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	// }

	// function changeImage(images, old_color, color) {
	// 	if (images.length <= 0) {
	// 		return;
	// 	}

	// 	for( var i = 0; i < images.length; i ++ ) {
	// 		var img = images.eq(i);
	// 		var img_url = img.attr("src");
	// 		var replaceword1 = "/" + old_color + "/";
	// 		var replaceword2 = "/" + color + "/";
	// 		var img_url1 = img_url.replace(replaceword1, replaceword2);
	// 		img.attr("src", img_url1);



	// 	}
	// }

	// function filter_productImages(color) {
	// 	var mainImgs = $(".w-slide img");
	// 	var thumbImgs = $(".slider-thumb-wrap-2 img");
	// 	var stickyImgs = $(".sticky-container img");
	// 	var old_color = $(".left-ger").attr("data-productcolor");

	// 	changeImage(mainImgs, old_color, color);
	// 	changeImage(thumbImgs, old_color, color);
	// 	changeImage(stickyImgs, old_color, color);

	// 	$(".left-ger").attr("data-productcolor", color);
	// }

	$(".es_swatch").click(function(e) {
		if ($(this).hasClass("es_active") || $(this).hasClass("es_disabled")) {
			return;
		}

		if ($(this).parents(".es_swatch_row").attr("data-type") == "size") {
			var size = $(this).attr("data-value");
			var images = $(".es_product .es_product-content .es_swatch_row .es_swatch-btn_container .es_swatch.es_swatch_img");
			for( var i = 0; i < images.length; i ++ ) {
				images.eq(i).attr("data-image", size);
			}
		}

		$(this).parent().find(".es_swatch").removeClass("es_active");
		$(this).addClass("es_active");

		$(this).parents(".es_swatch_row").find(".es_swatch-value").text($(this).attr("data-title"));

		selVariant();
		filterSwatches($(this));
	});

	window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
    window.checkoutReadyCallbacks.push(() => {
    	selVariant();
    });	
		
		$(".checkout-credit-card").click(function(e) {
    	$(".checkout-combo-form").slideDown(400);
    	$("body,html").animate(
	      {
	        scrollTop: $(".checkout-combo-form").offset().top - 50
	      },
	      400 //speed
	    );
		});
		
});
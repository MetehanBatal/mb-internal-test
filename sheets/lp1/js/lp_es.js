jQuery(document).ready(function($) {
	const variants = {
			  signature: {
			    queen: {
			      stone: { variantId: 14441424781356, productTitle: 'Stone Sheet Set - Queen', price: 129, regularPrice: 159, productSavings: 20, productReviews: 439, imgUrl: 'images/stone.png' },
			      white: { variantId: 14441424814124, productTitle: 'White Sheet Set - Queen', price: 129, regularPrice: 159, productSavings: 20, productReviews: 439, imgUrl: 'images/white.png' },
			      // sand: { variantId: 14441424846892, productTitle: 'Sand Sheet Set - Queen', price: 129, regularPrice: 159, productSavings: 20, productReviews: 439, imgUrl: 'images/sheets/sand-sheets.png' },
			     sky: { variantId: 36614284247190, productTitle: 'Sky Blue Sheet Set - Queen', price: 129, regularPrice: 159, productSavings: 20, productReviews: 439, imgUrl: 'images/sheets/skye-blue-sheets.png' },
			    },
			    twin: {
			      stone: { variantId: 14441424945196, productTitle: 'Stone Sheet Set - Twin', price: 109, regularPrice: 139, productSavings: 20, productReviews: 241, imgUrl: 'images/stone.png' },
			      // white: { variantId: 14441424977964, productTitle: 'White Sheet Set - Twin', price: 109, regularPrice: 139, productSavings: 20, productReviews: 241, imgUrl: 'images/sheets/white-sheets.png' },
			      // sand: { variantId: 14441425010732, productTitle: 'Sand Sheet Set - Twin', price: 109, regularPrice: 139, productSavings: 20, productReviews: 241, imgUrl: 'images/sheets/sand-sheets.png' },
			      // sky: { variantId: 36728253317270, productTitle: 'Sky Blue Sheet Set - Twin', price: 109, regularPrice: 139, productSavings: 20, productReviews: 241, imgUrl: 'images/sheets/skye-blue-sheets.png' },
			    },
			    full: {
			      stone: { variantId: 14441425076268, productTitle: 'Stone Sheet Set - Full', price: 119, regularPrice: 149, productSavings: 20, productReviews: 327, imgUrl: 'images/stone.png' },
			      white: { variantId: 14441425109036, productTitle: 'White Sheet Set - Full', price: 119, regularPrice: 149, productSavings: 20, productReviews: 327, imgUrl: 'images/white.png' },
			      // sand: { variantId: 14441425141804, productTitle: 'Sand Sheet Set - Full', price: 119, regularPrice: 149, productSavings: 20, productReviews: 327, imgUrl: 'images/sheets/sand-sheets.png' },
			      // sky: { variantId: 36728253382806, productTitle: 'Sky Blue Sheet Set - Full', price: 119, regularPrice: 149, productSavings: 20, productReviews: 327, imgUrl: 'images/sheets/skye-blue-sheets.png' },
			    },
			    king: {
			      stone: { variantId:  14441425207340, productTitle: 'Stone Sheet Set - King', price: 139, regularPrice: 159, productSavings: 20, productReviews: 234, imgUrl: 'images/stone.png' },
			      white: { variantId:  14441425240108, productTitle: 'White Sheet Set - King', price: 139, regularPrice: 159, productSavings: 20, productReviews: 234, imgUrl: 'images/white.png' },
			      // sand: { variantId:  14441425272876, productTitle: 'Sand Sheet Set - King', price: 139, regularPrice: 159, productSavings: 20, productReviews: 234, imgUrl: 'images/sheets/sand-sheets.png' },
			     sky: { variantId: 36614293880982, productTitle: 'Sky Blue Sheet Set - King', price: 139, regularPrice: 159, productSavings: 20, productReviews: 234, imgUrl: 'images/sheets/skye-blue-sheets.png' },
			    }
			  },
			  luxe: {
			    queen: {
			      stone: { variantId: 14516028276780, productTitle: 'Stone Extra Luxe Sheet Set - Queen', price: 179, regularPrice: 209, productSavings: 20, productReviews: 565, imgUrl: 'images/stone.png' },
			      white: { variantId: 14516028309548, productTitle: 'White Extra Luxe Sheet Set - Queen', price: 179, regularPrice: 209, productSavings: 20, productReviews: 565, imgUrl: 'images/white.png' },
			      // sand: { variantId: 14516028440620, productTitle: 'Sand Extra Luxe Sheet Set - Queen', price: 179, regularPrice: 209, productSavings: 20, productReviews: 565, imgUrl: 'images/sheets/sand-sheets-luxe.png' },
			     sky: { variantId: 36614299123862, productTitle: 'Sky Blue Extra Luxe Sheet Set - Queen', price: 179, regularPrice: 209, productSavings: 20, productReviews: 565, imgUrl: 'images/sheets/skye-blue-sheets-luxe.png' },
			    },
			    twin: {
			      stone: { variantId: 14516028506156, productTitle: 'Stone Extra Luxe Sheet Set - Twin', price: 159, regularPrice: 189, productSavings: 20, productReviews: 432, imgUrl: 'images/stone.png' },
			      // white: { variantId: 14516028538924, productTitle: 'White Extra Luxe Sheet Set - Twin', price: 159, regularPrice: 189, productSavings: 20, productReviews: 432, imgUrl: 'images/sheets/white-sheets-luxe.png' },
			      // sand: { variantId: 14516028571692, productTitle: 'Sand Extra Luxe Sheet Set - Twin', price: 159, regularPrice: 189, productSavings: 20, productReviews: 432, imgUrl: 'images/sheets/sand-sheets-luxe.png' },
			      // sky: { variantId: 36728253350038, productTitle: 'Sky Blue Extra Luxe Sheet Set - Twin', price: 159, regularPrice: 189, productSavings: 20, productReviews: 432, imgUrl: 'images/sheets/skye-blue-sheets-luxe.png' },
			    },
			    full: {
			      stone: { variantId: 14516028833836, productTitle: 'Stone Extra Luxe Sheet Set - Full', price: 169, regularPrice: 189, productSavings: 20, productReviews: 195, imgUrl: 'images/stone.png' },
			      white: { variantId: 14516028866604, productTitle: 'White Extra Luxe Sheet Set - Full', price: 169, regularPrice: 189, productSavings: 20, productReviews: 195, imgUrl: 'images/white.png' },
			      // sand: { variantId: 4516028899372, productTitle: 'Sand Extra Luxe Sheet Set - Full', price: 169, regularPrice: 189, productSavings: 20, productReviews: 195, imgUrl: 'images/sheets/sand-sheets-luxe.png' },
			      // sky: { variantId: 36728253415574, productTitle: 'Sky Blue Extra Luxe Sheet Set - Full', price: 169, regularPrice: 189, productSavings: 20, productReviews: 195, imgUrl: 'images/sheets/skye-blue-sheets-luxe.png' },
			    },
			    king: {
			      stone: { variantId: 14516029095980, productTitle: 'Stone Extra Luxe Sheet Set - King', price: 189, regularPrice: 219, productSavings: 20, productReviews: 327, imgUrl: 'images/stone.png' },
			      white: { variantId: 14516029358124, productTitle: 'White Extra Luxe Sheet Set - King', price: 189, regularPrice: 219, productSavings: 20, productReviews: 327, imgUrl: 'images/white.png' },
			      // sand: { variantId: 14516029390892, productTitle: 'Sand Extra Luxe Sheet Set - King', price: 189, regularPrice: 219, productSavings: 20, productReviews: 327, imgUrl: 'images/sheets/sand-sheets-luxe.png' },
			     sky: { variantId: 36614303842454, productTitle: 'Sky Blue Extra Luxe Sheet Set - King', price: 189, regularPrice: 219, productSavings: 20, productReviews: 327, imgUrl: 'images/sheets/skye-blue-sheets-luxe.png' },
			    }
			  }
			};

    function filterSwatches(obj) {
      	var size = $(".es_swatch_row[data-type='size'] .es_swatch-btn_container .es_swatch.es_active").attr("data-value");
		var color = $(".es_swatch_row[data-type='color'] .es_swatch-btn_container .es_swatch.es_active").attr("data-value");
		var fabric = $(".es_swatch_row[data-type='fabric'] .es_swatch-btn_container .es_swatch.es_active").attr("data-value");

      if (obj.parents(".es_swatch_row[data-type='color']").length > 0) {
        $(".es_swatch_row[data-type='size'] .es_swatch").removeClass("es_disabled");

        for(var i = 0; i < $(".es_swatch_row[data-type='size'] .es_swatch").length; i ++) {
          var size1 = $(".es_swatch_row[data-type='size'] .es_swatch").eq(i).attr("data-value");
          if (variants[fabric][size1][color] == null) {
            $(".es_swatch_row[data-type='size'] .es_swatch").eq(i).addClass("es_disabled");
          }
        }
      }
      else if (obj.parents(".es_swatch_row[data-type='size']").length > 0) {
        $(".es_swatch_row[data-type='color'] .es_swatch").removeClass("es_disabled");

        for(var i = 0; i < $(".es_swatch_row[data-type='color'] .es_swatch").length; i ++) {
          var color1 = $(".es_swatch_row[data-type='color'] .es_swatch").eq(i).attr("data-value");
          if (variants[fabric][size][color1] == null) {
            $(".es_swatch_row[data-type='color'] .es_swatch").eq(i).addClass("es_disabled");
          }
        }
      }   
    }

    function init() {
    	var url = window.location.href;
    	if (url.indexOf("fabric=luxe") > 0) {
    		console.log("fabric=luxe");

    		$(".es_swatch[data-value='luxe']").trigger("click");
    		$(".es_swatch_row[data-type='fabric']").addClass("es_hide");
    		console.log($(".es_swatch[data-value='luxe']"));
    	}
    	else if (url.indexOf("fabric=sig") > 0) {
    		console.log("fabric=sig");

    		$(".es_swatch[data-value='signature']").trigger("click");
    		$(".es_swatch_row[data-type='fabric']").addClass("es_hide");
    		console.log($(".es_swatch[data-value='signature']"));
    	}
    	else {}
    }

	function selVariant() {
		var size = $(".es_swatch_row[data-type='size'] .es_swatch-btn_container .es_swatch.es_active").attr("data-value");
		var color = $(".es_swatch_row[data-type='color'] .es_swatch-btn_container .es_swatch.es_active").attr("data-value");
		var fabric = $(".es_swatch_row[data-type='fabric'] .es_swatch-btn_container .es_swatch.es_active").attr("data-value");

		var checkout_url = "https://try.miraclebrand.co/checkout/s?forceVariantId=" + variants[fabric][size][color]['variantId'];

		console.log(variants[fabric][size][color]['variantId']);

		$(".es_reg_price").text(variants[fabric][size][color]['regularPrice']);
		$(".es_sale_price").text(variants[fabric][size][color]['price']);
		$(".es_reviews_cnt").text(variants[fabric][size][color]['productReviews']);
		$(".header-img img").attr("src", variants[fabric][size][color]['imgUrl']);
		$(".es_discount_value").text("$" + (variants[fabric][size][color]['regularPrice'] - variants[fabric][size][color]['price']) + " (" + variants[fabric][size][color]['productSavings'] + "% OFF)");
		$(".es_variant_title").text(variants[fabric][size][color]['productTitle']);
		$(".es_btn-addtocart").attr("href", checkout_url);

		if (fabric == "signature") {
			$(".es_swatch_description").addClass("es_hide");
			$(".es_swatch_description[data-handle='signature']").removeClass("es_hide");
		}
		else if (fabric == "luxe") {
			$(".es_swatch_description").addClass("es_hide");
			$(".es_swatch_description[data-handle='luxe']").removeClass("es_hide");
		}

		window.checkout.apiClient.setCurrentVariant(variants[fabric][size][color]['variantId']).then(x => {
			window.checkout.setCart(x);
  			window.checkout.drawCart();
		});		
	}

	function escapeRegExp(string){
	    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}

	function changeImage(images, old_color, color) {
		if (images.length <= 0) {
			return;
		}

		for( var i = 0; i < images.length; i ++ ) {
			var img = images.eq(i);
			var img_url = img.attr("src");
			var replaceword1 = "/" + old_color + "/";
			var replaceword2 = "/" + color + "/";
			var img_url1 = img_url.replace(replaceword1, replaceword2);
			img.attr("src", img_url1);



		}
	}

	function filter_productImages(color) {
		var mainImgs = $(".w-slide img");
		var thumbImgs = $(".slider-thumb-wrap-2 img");
		var stickyImgs = $(".sticky-container img");
		var old_color = $(".left-ger").attr("data-productcolor");

		changeImage(mainImgs, old_color, color);
		changeImage(thumbImgs, old_color, color);
		changeImage(stickyImgs, old_color, color);

		$(".left-ger").attr("data-productcolor", color);
	}

	$(".es_swatch").click(function(e) {
		if ($(this).hasClass("es_active") || $(this).hasClass("es_disabled")) {
			return;
		}

		if ($(this).parents(".es_swatch_row").attr("data-type") == "color") {
			filter_productImages($(this).attr("data-value"));
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

	$(".es_btn-size_guide").click(function() {
        $(".backdrop").addClass('active');
        $(".size-guide-modal.bedding").addClass('active');
    });

    $(".size-guide-modal .btn-close").click(function() {
        $(".backdrop").removeClass('active');
        $(".size-guide-modal.bedding").removeClass('active');
    });

    $(".size-guide-modal .size_chart-handle").click(function() {
    	var name = $(this).attr("name");
    	$(".size-guide-modal .size_chart-handle").removeClass("active");
    	$(this).addClass("active");
    	$(".size-guide-modal .size_table").hide();
    	$(".size-guide-modal .size_table[data-handle='" + name + "']").show();
    });

		init();
		
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
jQuery(document).ready(function($) {
	const variants = {
    stone: { variantId: 37064720973974, name: 'Black Friday - Towel Bundle - 1 Towel Bundle / Stone', productTitle: '1 Towel Bundle / Stone', price: 45, regularPrice: 90, productSavings: 20, productReviews: 565, imgUrl: 'images/MIR-Towel-Stone-BOGO-', mobimgUrl: 'images/MIR-Towel-Stone-BOGO-', sku:"bf-bundle-stone-1" },
    white: { variantId: 37064721006742, name: 'Black Friday - Towel Bundle - 1 Towel Bundle / White', productTitle: '1 Towel Bundle / White', price: 45, regularPrice: 90, productSavings: 20, productReviews: 565, imgUrl: 'images/MIR-Towel-White-BOGO-', mobimgUrl: 'images/MIR-Towel-White-BOGO-', sku:"bf-bundle-white-1"  },
    // bundle_2: {
    //   stone: { variantId: 37064723562646, name: 'Black Friday - Towel Bundle - 2 Towel Bundles / Stone', productTitle: '1 Towel Bundles / Stone', price: 130, regularPrice: 130, productSavings: 20, productReviews: 566, imgUrl: 'images/Towel_Bundle_Desktop_Stone_v02.png', sku:"bf-bundle-stone-2" },
    //   white: { variantId: 37064723595414, name: 'Black Friday - Towel Bundle - 2 Towel Bundles / White', productTitle: '1 Towel Bundles / White', price: 130, regularPrice:130, productSavings: 20, productReviews: 566, imgUrl: 'images/Towel_Bundle_Desktop_White_v02.png', sku:"bf-bundle-white-2"  },
    //   sky: { variantId: 37064723628182, name: 'Black Friday - Towel Bundle - 2 Towel Bundles / Sky Blue', productTitle: '1 Towel Bundles / Sky Blue', price: 130, regularPrice:130, productSavings: 20, productReviews: 566, imgUrl: 'images/Towel_Bundle_Desktop_Blue_v02.png', sku:"bf-bundle-sky-2"  }
    // },
    // bundle_3: {
    //   stone: { variantId: 37064723660950, name: 'Black Friday - Towel Bundle - 3 Towel Bundles / Stone', productTitle: '1 Towel Bundles / Stone', price: 195, regularPrice: 195, productSavings: 20, productReviews: 567, imgUrl: 'images/Towel_Bundle_Desktop_Stone_v02.png', sku:"bf-bundle-stone-3" },
    //   white: { variantId: 37064723693718, name: 'Black Friday - Towel Bundle - 3 Towel Bundles / White', productTitle: '1 Towel Bundles / White', price: 195, regularPrice:195, productSavings: 20, productReviews: 567, imgUrl: 'images/Towel_Bundle_Desktop_White_v02.png', sku:"bf-bundle-white-3"  },
    //   sky: { variantId: 37064723726486, name: 'Black Friday - Towel Bundle - 3 Towel Bundles / Sky Blue', productTitle: '1 Towel Bundles / Sky Blue', price: 195, regularPrice:195, productSavings: 20, productReviews: 567, imgUrl: 'images/Towel_Bundle_Desktop_Blue_v02.png', sku:"bf-bundle-sky-3"  }
    // },
    // bundle_4: {
    //   stone: { variantId: 37064723759254, name: 'Black Friday - Towel Bundle - 4 Towel Bundles / Stone', productTitle: '1 Towel Bundles / Stone', price: 260, regularPrice: 260, productSavings: 20, productReviews: 568, imgUrl: 'images/Towel_Bundle_Desktop_Stone_v02.png', sku:"bf-bundle-stone-4" },
    //   white: { variantId: 37064723792022, name: 'Black Friday - Towel Bundle - 4 Towel Bundles / White', productTitle: '1 Towel Bundles / White', price: 260, regularPrice:260, productSavings: 20, productReviews: 568, imgUrl: 'images/Towel_Bundle_Desktop_White_v02.png', sku:"bf-bundle-white-4"  },
    //   sky: { variantId: 37064723824790, name: 'Black Friday - Towel Bundle - 4 Towel Bundles / Sky Blue', productTitle: '1 Towel Bundles / Sky Blue', price: 260, regularPrice:260, productSavings: 20, productReviews: 568, imgUrl: 'images/Towel_Bundle_Desktop_Blue_v02.png', sku:"bf-bundle-sky-4"  }
    // },
	  checkouturl : "/checkout/t_b_n-v2-test.html"
	};

	function init_color_swatches() {
		var color_swatches = $(".es_variants-row.es_color_swatch .es_variant");

		for(var i = 0; i < color_swatches.length; i ++) {
			color_swatches.eq(i).css("background-color", color_swatches.eq(i).attr("data-color"));
		}
	}

    function selVariant() {
    	var color = $(".es_variants-row[data-value='color'] .es_variant.active").attr("data-value");
        var qty = parseInt($(".selected_quantity").attr("data-qty"));
    	$(".es_reviews_cnt").text(variants[color]['productReviews']);
    	$(".es_product-price").text(variants[color]['price'] * qty);
    	$(".es_product-regprice").text(variants[color]['regularPrice'] * qty);
        $(".es_product-savingprice").text(parseInt(variants[color]['regularPrice'] - variants[color]['price']) * qty);
    	$(".es_btn-purchase").attr("href", variants['checkouturl']);
        $(".es_variants-row").attr("data-variant-id", variants[color]['variantId']);
        $(".es_product-image").attr("src", variants[color]['imgUrl'] + qty + ".jpg");
        $(".es_product-image_mob").attr("src", variants[color]['mobimgUrl']+ qty + ".jpg");
        $(".bundle_cnt").text(qty);
    }

    function init() {
		  init_color_swatches();
	    selVariant();
    }

    init();

	$(".es_variant").click(function(e) {
		if ($(this).hasClass("es_disabled")) {
			return;
		}
		$(this).parents(".es_variants-row").find(".es_variant").removeClass("active");
		$(this).addClass("active");
    	selVariant();

    	if ($(this).parents(".es_variants-row").attr("data-value") == "color") {
    		$(".es_color").text($(this).attr("data-value"));
    	}
	});

  $(".selected_quantity").click(function(e) {
    if($(".quantity_dropdown").css("display") == "none") {
      $(".quantity_dropdown").slideDown(200);
    }
    else {
      $(".quantity_dropdown").slideUp(200); 
    }
  });

  $(".quantity_dropdown .dropdown-item").click(function(e) {
    $(".quantity_dropdown").slideUp(200); 
    $(".selected_quantity").attr("data-qty", $(this).attr("data-qty"));
    $(".selected_quantity").text($(this).text());
    selVariant();
  });

  $(".es_btn-purchase").click(function(e) {
    e.preventDefault();

    var qty = $(".selected_quantity").attr("data-qty");
    var variantid = $(".es_variants-row").attr("data-variant-id");
    console.log(variantid);
    console.log(qty);
    var param = {};
    param[variantid] = qty;
    window.checkout.apiClient.setVariantQuantities(param).then(x => { 
      console.log("its done"); 

      var link = $(this).attr("href");
      window.location.href = link;
    });
  });

	//////////////////////////////// Size Chart ////////////////////////////////////
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
    /////////////////////////////////////////////////////////////////////////////////
});
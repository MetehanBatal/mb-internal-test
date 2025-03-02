jQuery(document).ready(function ($) {
	var variants = {
		signature: {
			twin: {
				stone: { variantId: 42636035358870, productTitle: 'Stone Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/3pc-stone.png' },
				//  white: { variantId: 40509700145302, productTitle: 'White Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/3pc-white.png' },
				// sand: { variantId: 14441425010732, productTitle: 'Sand Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/sand-sheets.png' },
				//  "Sky Blue": { variantId: 40509700178070, productTitle: 'Sky Blue Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/3pc-sky.png' },
			},
			full: {
				stone: { variantId: 40509700210838, productTitle: 'Stone Sheet Set - Full', price: 119, regularPrice: 214, productSavings: 44, productReviews: 327, imgUrl: 'images/3pc-stone.png' },
				white: { variantId: 40509700243606, productTitle: 'White Sheet Set - Full', price: 119, regularPrice: 214, productSavings: 44, productReviews: 327, imgUrl: 'images/3pc-white.png' },
				// sand: { variantId: 14441425141804, productTitle: 'Sand Sheet Set - Full', price: 119, regularPrice: 214, productSavings: 44, productReviews: 327, imgUrl: 'images/sand-sheets.png' },
				// "Sky Blue": { variantId: 40509700276374, productTitle: 'Sky Blue Sheet Set - Full', price: 119, regularPrice: 214, productSavings: 44, productReviews: 327, imgUrl: 'images/3pc-sky.png' },
			},
			queen: {
				stone: { variantId: 40509700014230, productTitle: 'Stone Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: 'images/3pc-stone.png' },
				white: { variantId: 40509700046998, productTitle: 'White Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: 'images/3pc-white.png' },
				// sand: { variantId: 14441424846892, productTitle: 'Sand Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: 'images/sand-sheets.png' },
				"Sky Blue": { variantId: 40509700079766, productTitle: 'Sky Blue Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: 'images/3pc-sky.png' },
			},
			king: {
				stone: { variantId: 40509700309142, productTitle: 'Stone Sheet Set - King', price: 139, regularPrice: 235, productSavings: 41, productReviews: 234, imgUrl: 'images/3pc-stone.png' },
				white: { variantId: 40509700341910, productTitle: 'White Sheet Set - King', price: 139, regularPrice: 235, productSavings: 41, productReviews: 234, imgUrl: 'images/3pc-white.png' },
				// sand: { variantId:  14441425272876, productTitle: 'Sand Sheet Set - King', price: 139, regularPrice: 224, productSavings: 37, productReviews: 234, imgUrl: 'images/sand-sheets.png' },
				// "Sky Blue": { variantId: 40509700407446, productTitle: 'Sky Blue Sheet Set - King', price: 139, regularPrice: 224, productSavings: 37, productReviews: 234, imgUrl: 'images/3pc-sky.png' },
			},
			cali_king: {
				stone: { variantId: 40509700997270, productTitle: "Cali King \/ Stone \/ Signature (Percale)", price: 139, regularPrice: 235, productSavings: 41, productReviews: 234, imgUrl: 'images/3pc-stone.png' }
			}
		},
		luxe: {
			queen: {
				stone: { variantId: 40509700440214, productTitle: 'Stone Extra Luxe Sheet Set - Queen', price: 179, regularPrice: 274, productSavings: 34, productReviews: 565, imgUrl: 'images/3pc-stone.png' },
				white: { variantId: 40509700472982, productTitle: 'White Extra Luxe Sheet Set - Queen', price: 179, regularPrice: 274, productSavings: 34, productReviews: 565, imgUrl: 'images/3pc-white.png' },
				// sand: { variantId: 14516028440620, productTitle: 'Sand Extra Luxe Sheet Set - Queen', price: 179, regularPrice: 274, productSavings: 34, productReviews: 565, imgUrl: 'images/sand-sheets-luxe.png' },
				"Sky Blue": { variantId: 40509700505750, productTitle: 'Sky Blue Extra Luxe Sheet Set - Queen', price: 179, regularPrice: 274, productSavings: 34, productReviews: 565, imgUrl: 'images/3pc-sky.png' },
			},
			twin: {
				stone: { variantId: 40509700571286, productTitle: 'Stone Extra Luxe Sheet Set - Twin', price: 159, regularPrice: 254, productSavings: 37, productReviews: 432, imgUrl: 'images/3pc-stone.png' },
				// white: { variantId: 40509700669590, productTitle: 'White Extra Luxe Sheet Set - Twin', price: 159, regularPrice: 254, productSavings: 37, productReviews: 432, imgUrl: 'images/3pc-white.png' },
				// sand: { variantId: 14516028571692, productTitle: 'Sand Extra Luxe Sheet Set - Twin', price: 159, regularPrice: 254, productSavings: 37, productReviews: 432, imgUrl: 'images/sand-sheets.png' },
				// "Sky Blue": { variantId: 40509700735126, productTitle: 'Sky Blue Extra Luxe Sheet Set - Twin', price: 159, regularPrice: 254, productSavings: 37, productReviews: 432, imgUrl: 'images/3pc-sky.png' },
			},
			full: {
				stone: { variantId: 40509700800662, productTitle: 'Stone Extra Luxe Sheet Set - Full', price: 169, regularPrice: 254, productSavings: 33, productReviews: 195, imgUrl: 'images/3pc-stone.png' },
				white: { variantId: 40509700833430, productTitle: 'White Extra Luxe Sheet Set - Full', price: 169, regularPrice: 254, productSavings: 33, productReviews: 195, imgUrl: 'images/3pc-white.png' },
				// sand: { variantId: 14516028899372, productTitle: 'Sand Extra Luxe Sheet Set - Full', price: 169, regularPrice: 254, productSavings: 33, productReviews: 195, imgUrl: 'images/sand-sheets.png' },
				// "Sky Blue": { variantId: 40509700866198, productTitle: 'Sky Blue Extra Luxe Sheet Set - Full', price: 169, regularPrice: 254, productSavings: 33, productReviews: 195, imgUrl: 'images/3pc-sky.png' },
			},
			king: {
				stone: { variantId: 40509700898966, productTitle: 'Stone Extra Luxe Sheet Set - King', price: 189, regularPrice: 284, productSavings: 33, productReviews: 327, imgUrl: 'images/3pc-stone.png' },
				white: { variantId: 40509700931734, productTitle: 'White Extra Luxe Sheet Set - King', price: 189, regularPrice: 284, productSavings: 33, productReviews: 327, imgUrl: 'images/3pc-white.png' },
				// sand: { variantId: 14516029390892, productTitle: 'Sand Extra Luxe Sheet Set - King', price: 189, regularPrice: 284, productSavings: 33, productReviews: 327, imgUrl: 'images/sand-sheets-luxe.png' },
				// "Sky Blue": { variantId: 40509700964502, productTitle: 'Sky Blue Extra Luxe Sheet Set - King', price: 189, regularPrice: 284, productSavings: 33, productReviews: 327, imgUrl: 'images/3pc-sky.png' },
			},
			cali_king: {
				stone: { variantId: 40509701030038, productTitle: "Cali King \/ Stone \/ Extra Luxe (Sateen)", price: 189, regularPrice: 284, productSavings: 33, productReviews: 327, imgUrl: 'images/3pc-stone.png' }
			}
		}
	};

	/**
	* Implement UX color and size functionality(out of stock)
	*/
	new window.MkMiracle.ColorSizeSelect(variants);





	function selVariant() {

		var fabric = $("input[name='fabric_type']:checked").val();
		console.log(fabric);
		var size = $('.current-size[data-value]').attr("data-value");
		console.log(size);
		let color = $("input[name='color']:checked").val();
		console.log(color);

		if (variants[fabric][size][color] == null) {
			var out_stock = true;
			console.log("out_of_stock")

			return;
		}





		var price = variants[fabric][size][color]['price'];




		$(".es_price").text(price);
		$(".es_saving_percent").text(variants[fabric][size][color]['productSavings']);
		$(".es_reg_price").text(variants[fabric][size][color]['regularPrice']);
		$(".total_savings").text(variants[fabric][size][color]['regularPrice'] - price);
	}



	function filterColorSwatches(size) {
		var fabric = $("input[name='fabric_type']:checked").val();

		$(".color-choice").removeClass("sold");

		for (var i = 0; i < $(".color-choice").length; i++) {
			var ch = $(".color-choice").eq(i);
			var color = ch.attr("data-color");
			if (variants[fabric][size][color] == null) {
				ch.addClass("sold");
			}
		}
	}

	function filterSizeSwatches(color) {
		var fabric = $("input[name='fabric_type']:checked").val();

		$("li.option").removeClass("sold");

		for (var i = 0; i < $("li.option").length; i++) {
			var ch = $("li.option").eq(i);
			var size = ch.attr("data-value");

			if (variants[fabric][size][color] == null) {
				ch.addClass("sold");
			}
		}
	}

	window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
	window.checkoutReadyCallbacks.push(() => {
		setTimeout(function() {
			selVariant();
		}, 1000);
		$("input[name='fabric_type']").change(function (e) {
		});




		$("li.option").click(function (e) {

			// if ($(this).hasClass("sold")) {
			// 	return;
			// }



			var wrapper = $(this).parents(".list");
			wrapper.find("li.option").removeClass("current-size");
			$(this).addClass("current-size");

			filterColorSwatches($(this).attr("data-value"));
			selVariant();
		});









		//$('.option[data-value="queen"]').trigger("click");
		//$("input#stone-2").trigger("click");
		//$('.option[data-value="cali_king"]').trigger("click");










		$(".color-choice").click(function (e) {
			$("option selected").addClass("current-size");




			// if ($(this).hasClass("sold")) {


			// 	return;

			// }



			$(".color-name.current-color").text($(this).attr("data-color"));

			$(".current-size").trigger("click");

			var wrapper = $(this).parents(".colors-container");
			wrapper.find(".color-choice").removeClass("current-color");
			$(this).addClass("current-color");

			filterSizeSwatches($(this).attr("data-color"));
			selVariant();


		});

		$(".buy-now-button").click(function (e) {

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
				var size = $("li.option.current-size.selected").attr("data-value");
				var color = $(".color-choice.current-color").attr("data-color");
				var data = {};
				data[variants[fabric][size][color]['variantId']] = $(".quantity_input").val();
				console.log("Add to Cart");
				console.log(data);
				window.checkout.apiClient.setVariantQuantities(data).then(x => {
					console.log("Variant Set.");
					window.checkout.setCart(x);
					window.checkout.drawCart(x);
					window.location.href = "/checkout_v70/secure.html";
				});
			});
		});
	});

	$("input[name='fabric_type']").change(function () {
		if ($(this).val() == "signature") {
			$(".fabric-description").removeClass("current-fabric-type");
			$(".fabric-description.signature").addClass("current-fabric-type");
		}
		else {
			$(".fabric-description").removeClass("current-fabric-type");
			$(".fabric-description.luxe").addClass("current-fabric-type");
		}
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

	if ($("#purchase .size-choice.current-size").length > 0) {
		filterColorSwatches($("#purchase .size-choice.current-size").attr("data-size"));
	}


	$('.option[data-value="queen"]').addClass("current-size");





});






$("input[name='fabric_type']").change(function () {
	if ($(this).val() == "signature") {
		$(".fabric-description").removeClass("current-fabric-type");
		$(".fabric-description.signature").addClass("current-fabric-type");
	}
	else {
		$(".fabric-description").removeClass("current-fabric-type");
		$(".fabric-description.luxe").addClass("current-fabric-type");
	}




});

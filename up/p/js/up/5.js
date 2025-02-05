jQuery(document).ready(function ($) {
	const variants = {
		signature: {
			standard: {
				stone: { 
					oneSet: { variantId: 41403111374998, productTitle: 'Miracle Set of 1', price: 69.95, regularPrice: 100, productSavings: 30 },
					twoSet: { variantId: 41403111473302, productTitle: 'Miracle Set of 2', price: 119.92, regularPrice: 200, productSavings: 80 },
					fourSet: { variantId: 41403111571606, productTitle: 'Miracle Set of 4', price: 179.88, regularPrice: 400, productSavings: 220 }
				},
				white: { 
					oneSet: { variantId: 41403111309462, productTitle: 'Miracle Set of 1', price: 69.95, regularPrice: 100, productSavings: 30 },
					twoSet: { variantId: 41403111407766, productTitle: 'Miracle Set of 2', price: 119.92, regularPrice: 200, productSavings: 80 },
					fourSet: { variantId: 41403111506070, productTitle: 'Miracle Set of 4', price: 179.88, regularPrice: 400, productSavings: 220 }
				},
				oneSet: { variantId: 41403111342230, productTitle: 'Miracle Set of 1', price: 69.95, regularPrice: 100, productSavings: 30 },
				twoSet: { variantId: 41403111440534, productTitle: 'Miracle Set of 2', price: 119.92, regularPrice: 200, productSavings: 80 },
				fourSet: { variantId: 41403111538838, productTitle: 'Miracle Set of 4', price: 179.88, regularPrice: 400, productSavings: 220 }
			},
			king: {
				oneSet: { variantId: 41403111669910, productTitle: 'Miracle Set of 1', price: 74.99, regularPrice: 110, productSavings: 35 },
				twoSet: { variantId: 41403111768214, productTitle: 'Miracle Set of 2', price: 129.98, regularPrice: 220, productSavings: 90 },
				fourSet: { variantId: 41403111866518, productTitle: 'Miracle Set of 4', price: 199.88, regularPrice: 440, productSavings: 240 }
			},
		}
	};

	function selVariant() {

		var fabric = 'signature';
		console.log(fabric);
		var size = $('.current-size[data-value]')[0].getAttribute("data-value");
		console.log(size);
		let color = $("input[name='color']:checked").val();
		console.log(color);
		let option = $("input[name='option']:checked").val();

		if (variants[fabric][size][color][option] == null) {
			var out_stock = true;
			console.log("out_of_stock")

			const bannerImgs = document.querySelectorAll('.banner-product');
			const bannerImgsWhite = document.querySelectorAll('.banner-product-white');
			const $select = $('.w-select').siblings('.nice-select');
			const $colorChoice = $(".color-choice:not(.sold)");
			const $colorChoiceDefault = $colorChoice[$colorChoice.length - 1];
			const COLOR_DEFAULT = $($colorChoiceDefault).data('color');

			if ($colorChoice.length === 1) {
				bannerImgs.forEach(el => el.style.display = "block")
				bannerImgsWhite.forEach(el => el.style.display = "none");
			} else if ($colorChoice.length === 2) {
				bannerImgs.forEach(el => el.style.display = "none")
				bannerImgsWhite.forEach(el => el.style.display = "block");
			} else if ($colorChoice.length === 3) {
				bannerImgs.forEach(el => el.style.display = "block")
				bannerImgsWhite.forEach(el => el.style.display = "none");
			}

			document.querySelector(`.nav-lg .w-slider-dot:nth-child(${$colorChoice.length})`).click();

			$colorChoiceDefault.click();
			$select.click();

			color = COLOR_DEFAULT;
		}

		var price = variants[fabric][size][color][option]['price'];

		$(".es_price").text(price);
		$(".es_saving_percent").text(variants[fabric][size][color][option]['productSavings']);
		$(".es_reg_price").text(variants[fabric][size][color][option]['regularPrice']);
		$(".total_savings").text(variants[fabric][size][color][option]['regularPrice'] - price);
	}

	function filterColorSwatches(size) {
		var fabric = $("input[name='fabric_type']:checked").val();

		$(".color-choice").removeClass("sold");

		for (var i = 0; i < $(".color-choice").length; i++) {
			var ch = $(".color-choice").eq(i);
			var color = ch.attr("data-color");
			if (variants[fabric][size][color][option] == null) {
				ch.addClass("sold");
			}
		}
	}

	function filterSizeSwatches(color) {
		var fabric = $("input[name='fabric_type']:checked").val();
		const isSoldColor = $(`[data-color="${color}"]`).hasClass('sold');

		$("li.option").removeClass("sold");

		const enabledOptions = [];


		for (var i = 0; i < $("li.option").length; i++) {
			var ch = $("li.option").eq(i);
			var size = ch.attr("data-value");

			if (variants[fabric][size][color][option] == null) {
				ch.addClass("sold");
			} else {
				enabledOptions.push(ch);
			}
		}

		if (variants[fabric][size][color][option] == null && isSoldColor) {
			enabledOptions[1].click();
		}
	}

	window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
	window.checkoutReadyCallbacks.push(() => {
		selVariant();

		$("li.option").click(function (e) {
			var wrapper = $(this).parents(".list");
			wrapper.find("li.option").removeClass("current-size");
			$(this).addClass("current-size");
			let selectedSize = $(this).attr("data-value");
			$('.grid---header-option-feat').addClass('hidden');
			$('[data-option-id='+ selectedSize +']').removeClass('hidden');

			filterColorSwatches(selectedSize);
			selVariant();
		});

		$(".color-choice").click(function (e) {
			$("option selected").addClass("current-size");

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
				var fabric = 'signature';
				var size = $("li.option.current-size.selected").attr("data-value");
				let color = $("input[name='color']:checked").val();
				let option = $("input[name='option']:checked").val();
				var data = {};
				data[variants[fabric][size][color][option]['variantId']] = parseInt($(".quantity-value").html());
				console.log("Add to Cart");
				console.log(data);
				window.checkout.apiClient.setVariantQuantities(data).then(x => {
					console.log("Variant Set.");
					window.checkout.setCart(x);
					window.checkout.drawCart(x);
					console.log( 'Checkout object: ', window.checkout );
					window.location.href = "/checkout_v3/secure.html";
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

	console.log( 'options: ', $('.option') );

	$('.option[data-value="standard"]').addClass("current-size");
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
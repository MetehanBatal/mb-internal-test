jQuery(document).ready(function($) {
	$('.summry-toggle-mob').click(function() {
		if ($("#toggle-mob-cart").hasClass("closed")) {
			$("#toggle-mob-cart").slideDown(200, function() {
				$("#toggle-mob-cart").removeClass("closed");
			});
		} else {
			$("#toggle-mob-cart").slideUp(200, function() {
				$("#toggle-mob-cart").addClass("closed");
			});
		}

			$('.sm-txt').toggle();
	});
});


window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
window.checkoutReadyCallbacks.push(() => {
	window.checkout.apiClient.getCart().then(data => {
		let products = [
			"42056201109654",
			"42056201142422",
			"42056201207958",
			"42056201240726",
			"42056201273494",
			"42056201011350",
			"42056201044118",
			"42232958746774",
			"42056201076886",
			"42232958058646",
			"42056201306262",
			"42056201339030",
			"42232960057494",
			"42056201371798",
			"42232960942230",
			"42056201797782",
			"42232961892502",
		];

		let discountAmount = 0;
		let cartItems = data.cart.localCart.lineItems;
		let totalAmount = data.cart.localCart.total;
		products.forEach(function(product) {
			cartItems.some(function(item) {
				if (parseInt(item.variantId) === parseInt(product)) {
					discountAmount += Math.ceil(item.price * 0.38) * item.quantity;

					// Discount tweak for the King variants
					// 
					if (product === '42056201306262' || product === '42056201339030' || product === '42056201371798' || product === '42232960942230' || product === '42232960057494' || product === "42056201797782" || product === "42232961892502") {
						discountAmount += 1 * item.quantity;
					}
				}
			});
		});

		// let discountAmount = cartTotal * 0.2;
		$('.price-count').html(discountAmount.toFixed(2));
		let remainingAmount = totalAmount - discountAmount;
		$('.remaining-count').html(remainingAmount.toFixed(2))
	});
});
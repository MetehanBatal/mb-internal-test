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
	$('.total-line td:first-child').text("Total");

	window.checkout.apiClient.getCart().then(data => {
		let products = [
			"42056195047574",
			"42056195080342",
			"42056195145878",
			"42056195178646",
			"42056195211414",
			"42056194949270",
			"42056194982038",
			"42232929288342",
			"42056195014806",
			"42232930566294",
			"42056195244182",
			"42056195276950",
			"42232937513110",
			"42056195309718",
			"42232936595606",
			"42056195735702",
			"42232939446422",
		];

		let discountAmount = 0;
		let cartItems = data.cart.localCart.lineItems;
		let totalAmount = data.cart.localCart.total;
		products.forEach(function(product) {
			cartItems.some(function(item) {
				if (parseInt(item.variantId) === parseInt(product)) {
					discountAmount += Math.ceil(item.price * 0.3) * item.quantity;

					// Discount tweak for the queen variants
					// 
					if (product === '42056194949270' || product === '42056194982038' || product === '42056195014806' || product === '42232929288342' || product === '42232930566294') {
						discountAmount += 1 * item.quantity;
					}
				}
			});
		});

		if (cartItems.some(function(item) {return item.variantId === 42372683956374})) {
			discountAmount = 10;
		}

		// let discountAmount = cartTotal * 0.2;
		$('.price-count').html(discountAmount.toFixed(2));
		let remainingAmount = totalAmount - discountAmount;
		$('.remaining-count').html(remainingAmount.toFixed(2))
	});
});
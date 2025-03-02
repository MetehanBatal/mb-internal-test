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
			"41794025750678",
			"41794025848982",
			"41794025881750",
			"41794025652374",
			"41794025685142",
			"41794025717910",
			"41794025947286",
			"41794025980054",
			"41794026537110",
			"41794026012822"
		];

		let cartTotal = 0;
		let cartItems = data.cart.localCart.lineItems;
		let totalAmount = data.cart.localCart.total;
		products.forEach(function(product) {
			cartItems.some(function(item) {
				if (parseInt(item.variantId) === parseInt(product)) {
					cartTotal += item.price * item.quantity;
				}
			});
		});
		

		// let discountAmount = cartTotal - 100;
		let remainingAmount = totalAmount - 100;
		$('.remaining-count').html(remainingAmount.toFixed(2))
	});
});
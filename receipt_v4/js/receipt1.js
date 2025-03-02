jQuery(document).ready(function($) {
    $('.summry-toggle-mob').click(function() {
    	if ($("#toggle-mob-cart").hasClass("closed")) {
    		$("#toggle-mob-cart").removeClass("closed");
    		$("#toggle-mob-cart").slideDown(200);
    	}
    	else {
    		$("#toggle-mob-cart").addClass("closed");
    		$("#toggle-mob-cart").slideUp(200);
    	}
  
      	$('.sm-txt').toggle();
    });
});

window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
window.checkoutReadyCallbacks.push(() => {
	window.checkout.apiClient.getCart().then(data => {
		let products = [
			"41843025969302",
			"41843026067606",
			"41843026100374",
			"41843025870998",
			"41843025903766",
			"41843025936534",
			"41843026165910",
			"41843026198678",
			"41843026231446",
			"41843026657430"
		];

		let discountAmount = 0;
		let cartItems = data.cart.localCart.lineItems;
		let totalAmount = data.cart.localCart.total;
		products.forEach(function(product) {
			cartItems.some(function(item) {
				if (parseInt(item.variantId) === parseInt(product)) {
					discountAmount += Math.floor(item.price * 0.2) * item.quantity;
				}
			});
		});

		// let discountAmount = cartTotal * 0.2;
		$('.price-count').html(discountAmount.toFixed(2));
		let remainingAmount = totalAmount - discountAmount;
		$('.remaining-count').html(remainingAmount.toFixed(2))
	});
});
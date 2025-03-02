
$('.summry-toggle-mob').click(function() {
			$("#toggle-mob-cart").toggleClass("closed");
			$("#toggle-mob-cart").slideToggle("fast");
			$('.sm-txt').toggle();
});
$(window).on('beforeunload', function(){ // Just in case, We using popup icon seperately from survey. If scroll down and reload page close popup disappear. Fixes that.
  $(window).scrollTop(0);  
});

// if($(".enquire__survey")) {
// 	$("body").css("overflow","hidden");
// }

$(".close-icon-popup").click(function() {
			$(".enquire__survey").css("display","none");
			$(".close-icon-popup").css("display","none");
			$("body").css("overflow","auto")		
			$(".review-outer-box").css("display","none")
})

if($(".input-radio").checked === true) {
	$(".btn--subdued").css("background", "#00A2F2")
	$(".btn--subdued").css("color", "#000")
}




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
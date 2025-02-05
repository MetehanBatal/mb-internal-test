///////// Phone Intl ////////////////
window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
window.checkoutReadyCallbacks.push(() => {
	$(".skeleton-load").fadeOut();
	const shipInput = document.getElementById("ship_field_intl");
	const billInput = document.getElementById("billing_field_intl");
	const shipPhoneField = window.intlTelInput(shipInput, {
		utilsScript: "js/utils.js",
		initialCountry: window.checkout.cart.shippingZone
	});
	const billPhoneField = window.intlTelInput(billInput, {
		utilsScript: "/js/utils.js",
		initialCountry: window.checkout.cart.shippingZone
	});
	shipInput.addEventListener("change", (e) => {
		console.log("Setting shipping phone");
		document.getElementById("shipping_phone").value = shipPhoneField.getNumber();
	});
	billInput.addEventListener("change", (e) => {
		console.log("Setting billing phone");
		document.getElementById("billing_phone").value = billPhoneField.getNumber();
	});
	
	if (checkoutData.cart.shippingZone === "CA") {
		$(".checkout-note").removeClass('hidden');
	}

	$('#shipping_country').change(function(e) {
		if ($(this).val() != 'CA') {
			$(".checkout-note").addClass('hidden');
		} else {
			$(".checkout-note").removeClass('hidden');
		}
	});
	// window.checkout.apiClient.toggleAddon(40272108421270).then(x => {
	// 	window.checkout.setCart(x);
	// 	window.checkout.drawCart();
 // 	});
});


 

let checkoutHench = {
	initCustomSelect() {
		let selects = document.querySelectorAll('.select-box');

		selects.forEach(function(select) {
			const choices = new Choices(select, {
				searchEnabled: false,
				itemSelectText: ''
			});
		});
	},

	initTimer: function() {
		const self = this;

		let timers = document.querySelectorAll('.timer');
		if (timers.length > 0) {
			timers.forEach(function(timer) {
				let duration = timer.getAttribute('data-timer-duration');

				self.startTimer(duration, timer);
			});
		}
	},

	checkSafari: function() {
		const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

		// To remove the outline on radio buttons
		// as they are not getting rounded
		// ..like every other browser..
		if (isSafari) {
			document.body.classList.add('is-safari');
		}
	},

	startTimer: function(duration, element) {
		const timer = setInterval(function() {
			let minutes = Math.floor(duration / 60);
			let seconds = duration - (minutes * 60);
			if (minutes < 10) {
				minutes = `0${minutes}`;
			}
			if (seconds < 10) {
				seconds = `0${seconds}`;
			}

			element.innerHTML = `${minutes}:${seconds}`;

			if (duration < 1) {
				clearInterval(timer);
				return;
			} else {
				duration--;
			}
		}, 1000);
	},

	removeExtraPixels: function() {
		let extraImages = document.querySelectorAll('img[height="1"]');
		extraImages.forEach(function(image) {
			image.style.position = 'absolute';
		});
	},

	toggleOrderSummary: function() {
		const trigger = document.querySelector('.mobile-order-summary-box');
		trigger.addEventListener('click', function(e) {
			trigger.classList.toggle('revealed');
		});
	},

	listenSelection: function() {
		let selects = document.querySelectorAll('.select-box');
		selects.forEach(function(select) {
			select.addEventListener('change', function(e) {
				select.classList.add('selected');
			});
		})
	},

	handleSubmit: function() {
		const button = document.querySelector('.checkout-submit-combo');
		let topScrollValue = document.querySelector('.form-box').getBoundingClientRect().top;

		button.addEventListener('click', function(e) {
			console.log( $(".checkout-combo-form .checkout-invalid-field").length );

			setTimeout(function() {
				if ($(".checkout-combo-form .checkout-invalid-field").length > 0) {
					var new_position = $(".checkout-combo-form .checkout-invalid-field").offset().top - 80;
					window.scroll({
						top: new_position,
						behavior: 'smooth'
					});
				} else {
					// $(".checkout-submit-combo").addClass("submitting");

					// $(document).on("checkout_failed", (e)=> {
					// 	$(".checkout-submit-combo").removeClass("submitting");
					// 	$("#overlay").css("opacity",1);
					// });
				}
			}, 200);
		});
	}
}

document.addEventListener('DOMContentLoaded', function(e) {
	checkoutHench.initTimer();
	checkoutHench.toggleOrderSummary();
	checkoutHench.listenSelection();
	checkoutHench.handleSubmit();

	setTimeout(function() {
		checkoutHench.removeExtraPixels();
	}, 2400);

	window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
	window.checkoutReadyCallbacks.push(() => {
		// checkoutHench.initCustomSelect();
		// 
		if (checkout.cart.localCart.hasVariant('34937177702550')) {
			let currentBag = RTC.getVariantQuantities();
			delete currentBag['34937177702550'];

			const clearCart = async () => {
				const updateRec = {};
				checkout.cart.localCart.lineItems.forEach(x => {
					updateRec[x.variantId] = 0;
				});
				const newCart = await checkout.apiClient.setVariantQuantities(updateRec);
				checkout.setCart(newCart);
			}

			clearCart().then(x => {
				window.checkout.apiClient.setVariantQuantities(currentBag).then(x => {
					console.log("Variant Set.");
					window.checkout.setCart(x);
					window.checkout.drawCart(x);
				});
			});
		}
	});

	checkoutHench.checkSafari();
});


document.querySelector('.checkout-discount-value').addEventListener('DOMSubtreeModified', function(){
	if (checkoutData.cart.localCart.state.discountTotal > 0) {
		document.querySelector(".discount-success").classList.remove("hidden");
		document.querySelector('form[name="coupon_form_desktop"]').classList.add('hidden');
	} else {
		document.querySelector(".discount-success").classList.add("hidden");
		document.querySelector('form[name="coupon_form_desktop"]').classList.remove('hidden');
	}
});
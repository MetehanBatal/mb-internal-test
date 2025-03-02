///////// Phone Intl ////////////////////
window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
window.checkoutReadyCallbacks.push(() => {
	window.checkout.apiClient.toggleAddon(42700865831062).then(x => {
		window.checkout.setCart(x);
		window.checkout.drawCart();
	});
	const shipInput = document.getElementById("ship_field_intl");
	const billInput = document.getElementById("billing_field_intl");
	const shipPhoneField = window.intlTelInput(shipInput, {
		utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
		initialCountry: window.checkout.cart.shippingZone
	});
	const billPhoneField = window.intlTelInput(billInput, {
		utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
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

});


///////// Javasurance ////////////////
 


////////// E-Mail Pristine ////////////////
document.querySelectorAll("input[type='email']").forEach(input => {
    input.addEventListener('keypress', function(e) {
        console.log("keypress");
        this.closest(".form-group").querySelector(".pristine-error").classList.add("hide");
    });

    input.addEventListener('focusout', function(e) {
        console.log("focusout");
        this.closest(".form-group").querySelector(".pristine-error").classList.remove("hide");
    });
});

document.querySelector(".checkout-submit-combo").addEventListener('click', function(e) {
    setTimeout(function() {
        let invalidFields = document.querySelectorAll(".checkout-combo-form .checkout-invalid-field");
        console.log(invalidFields.length);
        if (invalidFields.length > 0) {
            let new_position = invalidFields[0].getBoundingClientRect();
            window.scrollTo({
                top: window.scrollY + new_position.top - 130,
                behavior: 'smooth'
            });
        } else {
            document.querySelector(".checkout-submit-combo").classList.add("submitting");
            document.getElementById("overlay").style.opacity = 0.50;
            document.addEventListener("checkout_failed", function(e) {
                document.querySelector(".checkout-submit-combo").classList.remove("submitting");
                document.getElementById("overlay").style.opacity = 1;
            }, { once: true });
        }
    }, 100);
});

document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth >= 768) {
        document.querySelectorAll(".discount-mobile").forEach(el => el.remove());
    } else {
        document.querySelectorAll(".discount-desktop").forEach(el => el.remove());
    }

    const discountValueElement = document.querySelector('.checkout-discount-value');
    const observer = new MutationObserver(function(mutations) {
        if (checkoutData.cart.localCart.state.discountTotal > 0) {
            document.querySelectorAll(".discount-success").forEach(el => el.classList.remove("es_hide"));
            document.querySelectorAll(".discount-code-holder").forEach(el => el.classList.add("es_hide"));
            document.querySelectorAll(".bar-discount-icon").forEach(el => el.classList.add("es_hide"));
        } else {
            document.querySelectorAll(".discount-success").forEach(el => el.classList.add("es_hide"));
        }
    });

    observer.observe(discountValueElement, {
        childList: true,
        subtree: true
    });
});
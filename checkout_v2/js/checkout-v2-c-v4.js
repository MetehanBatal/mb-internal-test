// Phone International
window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
window.checkoutReadyCallbacks.push(() => {
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

    if (!checkout.cart.localCart.hasVariant('42536178319510')) {
        console.log('No warranty');
        window.checkout.apiClient.toggleAddon(42536178319510).then(x => {
            window.checkout.setCart(x);
            window.checkout.drawCart();

            let pagePath = window.location.pathname;
            if (pagePath.includes('checkout_v6/') || pagePath.includes('checkout_v7/')) {
                window.checkout.apiClient.getCart().then(data => {
                    console.log('Data: ', data);
                    cashbackHench.calculateCashbackPrices(data);
                });
            }
        });
    }
});

// Email Pristine Validation
document.querySelectorAll("input[type='email']").forEach(input => {
    input.addEventListener("keypress", function(e) {
        console.log("keypress");
        this.closest(".form-group").querySelector(".pristine-error").classList.add("hide");
    });

    input.addEventListener("focusout", function(e) {
        console.log("focusout");
        this.closest(".form-group").querySelector(".pristine-error").classList.remove("hide");
    });
});

// Checkout Submit Handler
document.querySelector(".checkout-submit-combo").addEventListener("click", function(e) {
    setTimeout(function() {
        const invalidFields = document.querySelectorAll(".checkout-combo-form .checkout-invalid-field");
        console.log(invalidFields.length);
        
        if (invalidFields.length > 0) {
            const new_position = invalidFields[0].getBoundingClientRect();
            window.scrollTo({
                top: window.pageYOffset + new_position.top - 130,
                behavior: 'smooth'
            });
        } else {
            document.querySelector(".checkout-submit-combo").classList.add("submitting");
            document.getElementById("overlay").style.opacity = "0.50";
            
            document.addEventListener("checkout_failed", () => {
                document.querySelector(".checkout-submit-combo").classList.remove("submitting");
                document.getElementById("overlay").style.opacity = "1";
            });
        }
    }, 100);
});

// Discount and Mobile/Desktop Handler
document.addEventListener('DOMContentLoaded', function() {
    // Mobile/Desktop elements handling
    if (window.innerWidth >= 768) {
        const mobileElement = document.querySelector(".discount-mobile");
        if (mobileElement) mobileElement.remove();
    } else {
        const desktopElement = document.querySelector(".discount-desktop");
        if (desktopElement) desktopElement.remove();
    }

    // Discount observer
    const discountValueElement = document.querySelector('.checkout-discount-value');
    if (discountValueElement) {
        const observer = new MutationObserver(function(mutations) {
            if (checkoutData.cart.localCart.state.discountTotal > 0) {
                document.querySelector(".discount-success").classList.remove("es_hide");
                document.querySelector(".discount-code-holder").classList.add("es_hide");
                document.querySelector(".bar-discount-icon").classList.add("es_hide");
            } else {
                document.querySelector(".discount-success").classList.add("es_hide");
            }
        });

        observer.observe(discountValueElement, { 
            childList: true, 
            characterData: true, 
            subtree: true 
        });
    }
});

// Countdown Timer
document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        let counter = parseInt(countdownElement.innerHTML.split(':')[0]) * 60;

        const timer = setInterval(function() {
            counter--;

            if (counter >= 0) {
                const mins = Math.floor(counter / 60) % 60;
                const secs = counter % 60;
                countdownElement.innerHTML = 
                    ('0' + mins).slice(-2) + ':' + ('0' + secs).slice(-2);
            } else {
                countdownElement.innerHTML = '00:00';
                countdownElement.parentElement.parentElement.style.display = 'none';
                clearInterval(timer);
            }
        }, 1000);
    }
});
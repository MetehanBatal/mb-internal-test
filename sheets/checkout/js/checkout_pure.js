// Phone Intl
window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
window.checkoutReadyCallbacks.push(() => {
    document.querySelector(".skeleton-load").style.display = 'none';
    
    const shipInput = document.getElementById("ship_field_intl");
    const billInput = document.getElementById("billing_field_intl");
    
    const shipPhoneField = window.intlTelInput(shipInput, {
        utilsScript: "https://miracle-rebuild.netlify.app/toolkit/scripts/utils.js",
        initialCountry: window.checkout.cart.shippingZone
    });
    
    const billPhoneField = window.intlTelInput(billInput, {
        utilsScript: "https://miracle-rebuild.netlify.app/toolkit/scripts/utils.js",
        initialCountry: window.checkout.cart.shippingZone
    });

    shipInput.addEventListener("change", () => {
        document.getElementById("shipping_phone").value = shipPhoneField.getNumber();
    });

    billInput.addEventListener("change", () => {
        document.getElementById("billing_phone").value = billPhoneField.getNumber();
    });

    if (checkoutData.cart.shippingZone === "CA") {
        document.querySelector(".checkout-note")?.classList.remove('hidden');
    }

    document.getElementById('shipping_country')?.addEventListener('change', function() {
        const checkoutNote = document.querySelector(".checkout-note");
        if (this.value !== 'CA') {
            checkoutNote?.classList.add('hidden');
        } else {
            checkoutNote?.classList.remove('hidden');
        }
    });
});

const checkoutHench = {
    initCustomSelect() {
        const selects = document.querySelectorAll('.select-box');
        selects.forEach(select => {
            new Choices(select, {
                searchEnabled: false,
                itemSelectText: ''
            });
        });
    },

    initTimer() {
        const timers = document.querySelectorAll('.timer');
        if (timers.length > 0) {
            timers.forEach(timer => {
                const duration = timer.getAttribute('data-timer-duration');
                this.startTimer(duration, timer);
            });
        }
    },

    checkSafari() {
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (isSafari) {
            document.body.classList.add('is-safari');
        }
    },

    startTimer(duration, element) {
        const timer = setInterval(() => {
            let minutes = Math.floor(duration / 60);
            let seconds = duration - (minutes * 60);
            
            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = seconds < 10 ? `0${seconds}` : seconds;

            element.innerHTML = `${minutes}:${seconds}`;

            if (duration < 1) {
                clearInterval(timer);
                return;
            }
            duration--;
        }, 1000);
    },

    removeExtraPixels() {
        document.querySelectorAll('img[height="1"]')
            .forEach(image => image.style.position = 'absolute');
    },

    toggleOrderSummary() {
        const trigger = document.querySelector('#mobile-summary-heading');
        const valueTrigger = document.querySelector('.checkout-total-value');
        const mobileSummaryBox = document.querySelector(".mobile-order-summary-box");

        [trigger, valueTrigger].forEach(element => {
            element?.addEventListener('click', () => {
                mobileSummaryBox?.classList.toggle('revealed');
            });
        });
    },

    listenSelection() {
        document.querySelectorAll('.select-box').forEach(select => {
            select.addEventListener('change', () => {
                select.classList.add('selected');
            });
        });
    },

    handleSubmit() {
        const button = document.querySelector('.checkout-submit-combo');
        const formBox = document.querySelector('.form-box');
        const topScrollValue = formBox?.getBoundingClientRect().top;

        button?.addEventListener('click', () => {
            setTimeout(() => {
                const invalidFields = document.querySelectorAll(".checkout-combo-form .checkout-invalid-field");
                if (invalidFields.length > 0) {
                    const new_position = invalidFields[0].getBoundingClientRect().top + window.scrollY - 80;
                    window.scroll({
                        top: new_position,
                        behavior: 'smooth'
                    });
                }
            }, 200);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    checkoutHench.initTimer();
    checkoutHench.toggleOrderSummary();
    checkoutHench.listenSelection();
    checkoutHench.handleSubmit();

    setTimeout(() => {
        checkoutHench.removeExtraPixels();
    }, 2400);

    checkoutHench.checkSafari();
});

const discountObserver = new MutationObserver(() => {
    const hasDiscount = checkoutData.cart.localCart.state.discountTotal > 0;
    const discountSuccess = document.querySelector(".discount-success");
    const couponForm = document.querySelector('form[name="coupon_form_desktop"]');
    
    if (hasDiscount) {
        discountSuccess?.classList.remove("hidden");
        couponForm?.classList.add('hidden');
    } else {
        discountSuccess?.classList.add("hidden");
        couponForm?.classList.remove('hidden');
    }
});

const discountElement = document.querySelector('.checkout-discount-value');
if (discountElement) {
    discountObserver.observe(discountElement, { 
        childList: true,
        subtree: true 
    });
}
window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
window.checkoutReadyCallbacks.push(() => {
    if (checkoutData.cart.shippingZone !== "US") {
        document.querySelectorAll('.total-line .checkout-money').forEach(element => {
            element.innerHTML = `<span class='non-usa'>USD </span>${element.innerHTML}`;
        });
        document.querySelectorAll('.checkout-total-value').forEach(element => {
            element.innerHTML = `<span class='non-usa'>USD </span>${element.innerHTML}`;
        });
    }

    function insertQuantityInput() {
        let findWarranty = checkoutData.cart.localCart.state.lineItems.find(variant =>
            variant.variantId === 42700865831062
        );

        let removeWarranty = `
      <a href="#" class="checkout-remove-item checkout-remove-warranty">
          <span class="remove-text">Remove</span>
          <img src="/checkout/images/remove-icon.svg" alt="remove icon" class="remove-icon" />
      </a>
  `;

        if (findWarranty) {
            // Find the cell containing the warranty title and its parent row
            const cells = document.querySelectorAll('td');
            for (let cell of cells) {
                if (cell.textContent.includes(findWarranty.title)) {
                    const parentRow = cell.parentElement;
                    parentRow.insertAdjacentHTML('beforeend', removeWarranty);
                    parentRow.classList.add('warranty-container');
                    break;
                }
            }
        }

        console.log('Warranty added');
    }

    function updateCart(newVariant, quantity) {
        const data = {};
        data[newVariant] = quantity;
        RTC.setVariantQuantities(data).then(x => {
            insertQuantityInput(quantity);
        });
    }

    setTimeout(() => {
        insertQuantityInput();
    }, 1800);

    // Event delegation for warranty removal
    document.addEventListener('click', function (event) {
        if (event.target.closest('.checkout-remove-warranty')) {
            event.preventDefault();
            const checkoutToggle = document.getElementById('checkout-addon-toggle');
            checkoutToggle.checked = false;
            updateCart(42700865831062, 0);
        }
    });

    // Checkout addon toggle change event
    const checkoutAddonToggle = document.getElementById('checkout-addon-toggle');
    if (checkoutAddonToggle) {
        checkoutAddonToggle.addEventListener('change', function () {
            setTimeout(function () {
                insertQuantityInput();
            }, 2000);
        });
    }

    // Check warranty swap condition
    if (checkout.cart.localCart.state.lineItems[0].variantId === 42700865831062) {
        console.log('Warranty swap');
        const data = {};
        data[checkout.cart.localCart.state.lineItems[1].variantId] =
            parseInt(checkout.cart.localCart.state.lineItems[1].quantity);
        data["42700865831062"] = 0;

        window.checkout.apiClient.setVariantQuantities(data)
            .then(x => {
                window.checkout.setCart(x);
                window.checkout.drawCart(x);
                return RTC.setVariantQuantities({ 42700865831062: 1 });
            })
            .then(() => {
                insertQuantityInput();
            });
    }
});
document.querySelectorAll('[data-action="gateway"]').forEach(element => {  
  element.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove errors
      document.querySelectorAll('.error').forEach(el => el.remove());
      document.querySelectorAll('.error-data').forEach(el => {
          el.classList.remove('error-data');
      });

      // Set form gateway value
      document.getElementById('form-gateway').value = this.dataset.gateway;

      // Hide all gateways
      document.querySelectorAll('.gateway').forEach(el => {
          el.style.display = 'none';
      });

      const gateway = this.dataset.gateway;
      const gatewayElement = document.querySelector('.gateway-' + gateway);
      
      // Show selected gateway with animation
      gatewayElement.style.display = 'block';
      
      // Scroll to gateway
      window.scrollTo({
          top: gatewayElement.offsetTop,
          behavior: 'smooth'
      });
  });
});

// Countdown timer
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
                  String(mins).padStart(2, '0') + ':' + 
                  String(secs).padStart(2, '0');
          } else {
              countdownElement.innerHTML = '00:00';
              clearInterval(timer);
          }
      }, 1000);
  }
});

// Checkout callbacks
window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
window.checkoutReadyCallbacks.push(() => {
  const preloader = document.querySelector(".ch-preloader");
  if (preloader) {
      preloader.style.opacity = '0';
      setTimeout(() => preloader.style.display = 'none', 400);
  }

  if (checkoutData.cart.shippingZone != "CA") {
      const checkoutNote = document.querySelector(".checkout-note");
      if (checkoutNote) checkoutNote.style.display = 'none';
  }
});

// Billing and form handlers
document.addEventListener('DOMContentLoaded', function() {
  // Billing checkbox handlers
  const billingFalse = document.getElementById("billing_use_shipping_false");
  const billingTrue = document.getElementById("billing_use_shipping_true");
  const billingFields = document.querySelector(".checkout-billing-fields");

  if (billingFalse) {
      billingFalse.addEventListener('click', () => {
          billingFields.style.display = 'block';
      });
  }

  if (billingTrue) {
      billingTrue.addEventListener('click', () => {
          billingFields.style.display = 'none';
      });
  }

  // Form field focus handlers
  document.querySelectorAll(".checkout-combo-form .frm-flds input").forEach(input => {
      input.addEventListener('focusin', function() {
          this.parentElement.classList.add("filled");
      });

      input.addEventListener('focusout', function() {
          if (this.value.trim().length <= 0) {
              this.parentElement.classList.remove("filled");
          }
      });
  });

  // Credit card number input handler
  const ccNumber = document.getElementById("cc_number");
  if (ccNumber) {
      ccNumber.addEventListener('keypress', function(e) {
          if (e.key < '0' || e.key > '9') {
              e.preventDefault();
          }
      });
  }

  // Submit button handler
  document.querySelector(".checkout-submit-combo")?.addEventListener('click', function() {
      const btn = this;
      setTimeout(function() {
          const invalidFields = document.querySelectorAll(".checkout-combo-form .checkout-invalid-field");
          if (invalidFields.length > 0) {
              const new_position = invalidFields[0].getBoundingClientRect().top + window.scrollY;
              window.scrollTo({
                  top: new_position - 15,
                  behavior: 'smooth'
              });
          } else {
              btn.classList.add("submitting");
              setTimeout(() => btn.classList.remove("submitting"), 7000);
          }
      }, 300);
  });

  // Discount handling
  const discountValue = document.querySelector('.checkout-discount-value');
  if (discountValue) {
      const observer = new MutationObserver(() => {
          const discountApplied = document.querySelector(".discount-applied");
          if (checkoutData.cart.localCart.state.discountTotal > 0) {
              discountApplied?.classList.remove("es_hide");
          } else {
              discountApplied?.classList.add("es_hide");
          }
      });

      observer.observe(discountValue, { 
          subtree: true, 
          characterData: true, 
          childList: true 
      });
  }

  // Billing action handler
  document.querySelectorAll('[data-action="billing"]').forEach(element => {
      element.addEventListener('click', function() {
          const payFldToggle = document.getElementById('payFldToggle');
          if (this.dataset.slide) {
              payFldToggle.style.display = 'block';
          } else {
              payFldToggle.style.display = 'none';
          }
          this.querySelector('input').checked = true;
      });
  });

  // Mobile summary toggle
  document.querySelector('.summry-toggle-mob')?.addEventListener('click', function() {
      document.getElementById('toggle-mob-cart')?.classList.toggle('isopened');
      document.querySelectorAll('.sm-txt').forEach(el => {
          el.style.display = el.style.display === 'none' ? 'block' : 'none';
      });
  });

  // Responsive coupon handling
  if (window.innerWidth >= 768) {
      document.querySelectorAll(".mobile_coupon").forEach(el => el.remove());
  } else {
      document.querySelectorAll(".desktop_coupon").forEach(el => el.remove());
  }
});
document.addEventListener("DOMContentLoaded", () => {
    const variants = {
        queen: {
            /*
            stone : {
                variantId: 42789291557014, 
                productTitle: 'Miracle Comforter - Funnel - Full/Queen / Stone', 
                price: 149.99, 
                regularPrice: 325, 
                productSavings: 53, 
                productDolarSavings: 175, 
                productReviews: 327, 
                imgUrl: 'images/comforter.png' 
            }, 
            */
            /*
             white : {
                 variantId: 42789291491478, 
                 productTitle: 'Miracle Comforter - Funnel - Full/Queen / White', 
                 price: 149.99, 
                 regularPrice: 325, 
                 productSavings: 53, 
                 productDolarSavings: 175, 
                 productReviews: 327, 
                 imgUrl: 'images/comforter.png' 
             }
             */
        },
        king: {
            stone: {
                variantId: 42789291589782,
                productTitle: 'Miracle Comforter - Funnel - King/Cali King / Stone',
                price: 159.99,
                regularPrice: 335,
                productSavings: 52,
                productDolarSavings: 175,
                productReviews: 234,
                imgUrl: 'images/comforter.png'
            },
            white: {
                variantId: 42789291524246,
                productTitle: 'Miracle Comforter - Funnel - King/Cali King / White',
                price: 159.99,
                regularPrice: 335,
                productSavings: 52,
                productDolarSavings: 175,
                productReviews: 234,
                imgUrl: 'images/comforter.png'
            }

        }
    };
    const noTowelsVariant = {
        queen: {
            /*
            stone : {
                variantId: 42790126059670, 
                productTitle: 'Miracle Comforter - Funnel - Full/Queen / Stone', 
                price: 149.99, 
                regularPrice: 325, 
                productSavings: 48, 
                productDolarSavings: 155, 
                productReviews: 327, 
                imgUrl: 'images/comforter.png' 
            }, 
            */
            /*
             white : {
                 variantId: 42790125994134, 
                 productTitle: 'Miracle Comforter - Funnel - Full/Queen / White', 
                 price: 149.99, 
                 regularPrice: 325, 
                 productSavings: 48, 
                 productDolarSavings: 155, 
                 productReviews: 327, 
                 imgUrl: 'images/comforter.png' 
             }
                 */
        },
        king: {
            stone: {
                variantId: 42790126092438,
                productTitle: 'Miracle Comforter - Funnel - King/Cali King / Stone',
                price: 159.99,
                regularPrice: 335,
                productSavings: 48,
                productDolarSavings: 155,
                productReviews: 234,
                imgUrl: 'images/comforter.png'
            },
            white: {
                variantId: 42790126026902,
                productTitle: 'Miracle Comforter - Funnel - King/Cali King / White',
                price: 159.99,
                regularPrice: 335,
                productSavings: 48,
                productDolarSavings: 155,
                productReviews: 234,
                imgUrl: 'images/comforter.png'
            }

        }
    };

    class SmartSelector {
        constructor(variants) {
            this.variants = variants;
            this.currentColor = 'white';
            this.currentSize = 'king';

            this.initializeStockStatus();
        }

        initializeStockStatus() {
            const colors = ['white', 'stone'];
            const sizes = ['king'];

            colors.forEach(color => {
                const hasAnySize = sizes.some(size => this.isVariantAvailable(size, color));
                if (!hasAnySize) {
                    document.querySelector(`.color-choice[data-color='${color}']`).classList.add('sold');
                }
            });

            sizes.forEach(size => {
                const hasAnyColor = colors.some(color => this.isVariantAvailable(size, color));
                if (!hasAnyColor) {
                    document.querySelector(`.size-choice[data-size='${size}']`).classList.add('sold-size');
                }
            });
        }

        isVariantAvailable(size, color) {
            return this.variants[size]?.[color] !== undefined;
        }

        findAvailableSize(color) {
            return Object.keys(this.variants).find(size =>
                this.isVariantAvailable(size, color)
            );
        }

        findAvailableColor(size) {
            return Object.keys(this.variants[size] || {}).find(color =>
                this.isVariantAvailable(size, color)
            );
        }

        updateStockUI(selectedSize, selectedColor) {
            document.querySelectorAll('.size-choice').forEach(sizeChoice => {
                const size = sizeChoice.getAttribute('data-size');
                const hasAvailableColor = Object.keys(this.variants[size] || {}).length > 0;
                sizeChoice.classList.toggle('sold-size', !hasAvailableColor);
            });

            document.querySelectorAll('.color-choice').forEach(colorChoice => {
                const color = colorChoice.getAttribute('data-color');
                const isAvailable = this.variants[selectedSize]?.[color] !== undefined;
                colorChoice.classList.toggle('sold', !isAvailable);
            });
        }

        handleColorSelection(selectedColor) {
            if (!this.isVariantAvailable(this.currentSize, selectedColor)) {
                const availableSize = this.findAvailableSize(selectedColor);
                if (availableSize) {
                    document.querySelectorAll('.size-choice.active .w-radio-input').forEach(input => {
                        input.classList.remove('w--redirected-checked');
                    });
                    document.querySelectorAll('.size-choice').forEach(sizeChoice => {
                        sizeChoice.classList.remove('active');
                    });
                    const newSizeChoice = document.querySelector(`[data-size='${availableSize}']`);
                    newSizeChoice.classList.add('active');
                    newSizeChoice.querySelector('.w-radio-input').classList.add('w--redirected-checked');
                    this.currentSize = availableSize;
                } else {
                    return false;
                }
            }

            this.currentColor = selectedColor;
            this.updateStockUI(this.currentSize, selectedColor);
            return true;
        }

        handleSizeSelection(selectedSize) {
            if (!this.isVariantAvailable(selectedSize, this.currentColor)) {
                const availableColor = this.findAvailableColor(selectedSize);
                if (availableColor) {
                    document.querySelectorAll('.color-choice').forEach(colorChoice => {
                        colorChoice.classList.remove('active');
                    });
                    document.querySelector(`.color-choice[data-color='${availableColor}']`).classList.add('active');
                    this.currentColor = availableColor;
                } else {
                    return false;
                }
            }

            this.currentSize = selectedSize;
            this.updateStockUI(selectedSize, this.currentColor);
            return true;
        }
    }

    const smartSelector = new SmartSelector(variants);

    function selVariant() {
        var colorElement = document.querySelector(".color-choice.active");
        var sizeElement = document.querySelector(".size-choice.active");

        console.log("Color Element:", colorElement)
        console.log("sizeElement:", sizeElement)
        var color = colorElement ? colorElement.getAttribute("data-color") : "";
        var size = sizeElement ? sizeElement.getAttribute("data-size") : "";

        var selectedColor = document.querySelector(".selected-color");
        if (selectedColor) selectedColor.textContent = color;

        if (variants[size] && variants[size][color]) {
            document.querySelector(".es_price").textContent = variants[size][color]['price'];
            document.querySelector(".es_saving_value").textContent = variants[size][color]['productDolarSavings'];
            document.querySelector(".es_reg_price").textContent = variants[size][color]['regularPrice'];
        }
        
        var slideImages = document.querySelectorAll(".slide-item-inside-wrapper img");
        var iconImages = document.querySelectorAll(".product-icon img");

        if (color === 'stone') {
            slideImages.forEach(img => {
                img.removeAttribute('srcset');
                img.setAttribute('src', img.getAttribute('src').replace('white', 'stone'));
            });
            iconImages.forEach(img => {
                img.removeAttribute('srcset');
                img.setAttribute('src', img.getAttribute('src').replace('white', 'stone'));
            });
        } else {
            slideImages.forEach(img => {
                img.setAttribute('src', img.getAttribute('src').replace('stone', 'white'));
            });
            iconImages.forEach(img => {
                img.setAttribute('src', img.getAttribute('src').replace('stone', 'white'));
            });
        }
    }

    window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
    window.checkoutReadyCallbacks.push(() => {
        selVariant();

        document.querySelectorAll(".size-choice").forEach(sizeChoice => {
            sizeChoice.addEventListener("click", function () {
                const selectedSize = this.getAttribute('data-size');
                if (smartSelector.handleSizeSelection(selectedSize)) {
                    document.querySelectorAll(".size-choice.active .w-radio-input").forEach(el => el.classList.remove("w--redirected-checked"));
                    document.querySelectorAll(".size-choice").forEach(el => el.classList.remove("active"));
                    this.classList.add("active");
                    document.querySelector(".size-choice.active .w-radio-input").classList.add("w--redirected-checked");
                    selVariant();
                }
            });
        });

        document.querySelectorAll(".color-choice").forEach(colorChoice => {
            colorChoice.addEventListener("click", function () {
                const selectedColor = this.getAttribute('data-color');
                if (smartSelector.handleColorSelection(selectedColor)) {
                    document.querySelectorAll(".color-choice").forEach(el => el.classList.remove("active"));
                    this.classList.add("active");
                    selVariant();
                }
            });
        });

        function handleBuyNowClick(event, quantitySelector) {
            event.preventDefault();
            const clearCart = async () => {
                const updateRec = {};
                checkout.cart.localCart.lineItems.forEach(x => {
                    if (x.variantId !== '34937177702550') {
                        updateRec[x.variantId] = 0;
                    }
                });
                const newCart = await checkout.apiClient.setVariantQuantities(updateRec);
                checkout.setCart(newCart);
            };

            clearCart().then(() => {
                var size = document.querySelector(".size-choice.active")?.getAttribute("data-size");
                var color = document.querySelector(".color-choice.active")?.getAttribute("data-color");
                var selectedQty = parseInt(document.querySelector(quantitySelector).textContent);
                var data = {};

                if (document.querySelector("#free-gift-check-desktop")?.checked) {
                    data[variants[size][color]['variantId']] = selectedQty;
                    data[42508804751510] = selectedQty;
                } else {
                    data[noTowelsVariant[size][color]['variantId']] = selectedQty;
                }

                window.checkout.apiClient.setVariantQuantities(data).then(x => {
                    console.log("Variant Set.");
                    window.checkout.setCart(x);
                    window.checkout.drawCart(x);
                    sessionStorage.setItem("ksp","true")
                    window.location.href = "/comforter/checkout/";
                });
            });
        }

        document.querySelector(".buy-now-button").addEventListener("click", function (e) {
            handleBuyNowClick(e, ".quantity-value");
        });

        document.querySelector(".mobile-buy-now-button").addEventListener("click", function (e) {
            handleBuyNowClick(e, ".mobile-quantity-value");
        });
    });
})
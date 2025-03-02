jQuery(document).ready(function($) {

    const variants = {
        queen : {
            stone : {
                variantId: 43882022469782, 
                productTitle: 'Miracle Comforter - Funnel - Full/Queen / Stone', 
                price: 129, 
                regularPrice: 215, 
                productSavings: 40, 
                productDolarSavings: 86, 
                productReviews: 327, 
                imgUrl: 'images/comforter.png' 
            }, 
            white : {
                variantId: 43882022404246, 
                productTitle: 'Miracle Comforter - Funnel - Full/Queen / White', 
                price: 129, 
                regularPrice: 215, 
                productSavings: 40, 
                productDolarSavings: 86, 
                productReviews: 327, 
                imgUrl: 'images/comforter.png' 
            }
        },
        king : {
            stone : {
                variantId: 43882022502550, 
                productTitle: 'Miracle Comforter - Funnel - King/Cali King / Stone', 
                price: 139, 
                regularPrice: 231, 
                productSavings: 39, 
                productDolarSavings: 92, 
                productReviews: 234, 
                imgUrl: 'images/comforter.png' 
            },
            white : {
                variantId: 43882022437014, 
                productTitle: 'Miracle Comforter - Funnel - King/Cali King / White', 
                price: 139, 
                regularPrice: 231, 
                productSavings: 39, 
                productDolarSavings: 92, 
                productReviews: 234, 
                imgUrl: 'images/comforter.png' 
            }

        }
    };
    const noTowelsVariant = {
        queen : {
            stone : {
                variantId: 43864804819094, 
                productTitle: 'Miracle Comforter - Funnel - Full/Queen / Stone', 
                price: 129, 
                regularPrice: 215, 
                productSavings: 40, 
                productDolarSavings: 86, 
                productReviews: 327, 
                imgUrl: 'images/comforter.png' 
            }, 
            white : {
                variantId: 43864804753558, 
                productTitle: 'Miracle Comforter - Funnel - Full/Queen / White', 
                price: 129, 
                regularPrice: 215, 
                productSavings: 40, 
                productDolarSavings: 86, 
                productReviews: 327, 
                imgUrl: 'images/comforter.png' 
            }
        },
        king : {
            stone : {
                variantId: 43864804851862, 
                productTitle: 'Miracle Comforter - Funnel - King/Cali King / Stone', 
                price: 139, 
                regularPrice: 231, 
                productSavings: 39, 
                productDolarSavings: 92, 
                productReviews: 234, 
                imgUrl: 'images/comforter.png' 
            },
            white : {
                variantId: 43864804786326, 
                productTitle: 'Miracle Comforter - Funnel - King/Cali King / White', 
                price: 139, 
                regularPrice: 231, 
                productSavings: 39, 
                productDolarSavings: 92, 
                productReviews: 234, 
                imgUrl: 'images/comforter.png' 
            }

        }
    };

    class SmartSelector {
        constructor(variants) {
            this.variants = variants;
            this.currentColor = 'white';
            this.currentSize = 'queen';
                        
            this.initializeStockStatus();
        }

        initializeStockStatus() {
            
            const colors = ['white', 'stone'];
            const sizes = ['queen', 'king'];
                            
            colors.forEach(color => {
                const hasAnySize = sizes.some(size => this.isVariantAvailable(size, color));
                if (!hasAnySize) {
                    $(`.color-choice[data-color='${color}']`).addClass('sold');
                }
            });

            
            sizes.forEach(size => {
                const hasAnyColor = colors.some(color => this.isVariantAvailable(size, color));
                if (!hasAnyColor) {
                    $(`.size-choice[data-size='${size}']`).addClass('sold-size');
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
            $('.size-choice').each(function() {
                const size = $(this).attr('data-size');
                const hasAvailableColor = Object.keys(variants[size] || {}).length > 0;
                $(this).toggleClass('sold-size', !hasAvailableColor);
            });
            
            $('.color-choice').each(function() {
                const color = $(this).attr('data-color');                
                const isAvailable = variants[selectedSize]?.[color] !== undefined;
                $(this).toggleClass('sold', !isAvailable);
            });
        }

        handleColorSelection(selectedColor) {
            if (!this.isVariantAvailable(this.currentSize, selectedColor)) {
                const availableSize = this.findAvailableSize(selectedColor);
                if (availableSize) {                    
                    $(".size-choice.active .w-radio-input").removeClass("w--redirected-checked");
                    $(".size-choice").removeClass("active");
                    $(`[data-size='${availableSize}']`).addClass("active");
                    $(`[data-size='${availableSize}'] .w-radio-input`).addClass("w--redirected-checked");
                    this.currentSize = availableSize;
                } else {
                    return false;
                }
            }
            
            this.currentColor = selectedColor;
            setFreeTowelImage(selectedColor);
            this.updateStockUI(this.currentSize, selectedColor);
            return true;
        }

        handleSizeSelection(selectedSize) {
            if (!this.isVariantAvailable(selectedSize, this.currentColor)) {
                const availableColor = this.findAvailableColor(selectedSize);
                if (availableColor) {
                    // Color UI güncellemesi
                    $(".color-choice").removeClass("active");
                    $(`.color-choice[data-color='${availableColor}']`).addClass("active");
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

	function setFreeTowelImage(color) {
		$(".free-image").attr("src", `/comforter/cooling-comforter/assets/${color}_towel.webp`)
	}

    const smartSelector = new SmartSelector(variants);

    function selVariant() {
        var color = $(".color-choice.active").attr("data-color");
        var size = $(".size-choice.active").attr("data-size");
        $(".selected-color").text(color);

        if (variants[size]?.[color]) {
            $(".es_price").text(variants[size][color]['price']);
            $(".es_saving_percent").text(variants[size][color]['productSavings']);
            $(".es_saving_value").text(variants[size][color]['productDolarSavings']);
            $(".es_reg_price").text(variants[size][color]['regularPrice']);
            $(".es_ratings").text(variants[size][color]['productReviews']);
            $(".product-image img").attr("src", variants[size][color]['imgUrl']);
        }

        // Renk bağlı image değişimleri
        if (color === 'stone') {
            $('.slide-item-inside-wrapper img').each(function() {
                $(this).removeAttr('srcset');
                $(this).attr('src', $(this).attr('src').replace('white', 'stone'));
            });
            $('.product-icon img').each(function() {
                $(this).removeAttr('srcset');
                $(this).attr('src', $(this).attr('src').replace('white', 'stone'));
            });
        } else {
            $('.slide-item-inside-wrapper img').each(function() {
                $(this).attr('src', $(this).attr('src').replace('stone', 'white'));
            });
            $('.product-icon img').each(function() {
                $(this).attr('src', $(this).attr('src').replace('stone', 'white'));
            });
        }
    }

    $('.to-atc').click(function() {
        scroll({
            behavior: 'smooth',
            top: $('#atc-section').offset().top - 100
        });
    });

    window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
    window.checkoutReadyCallbacks.push(() => {
        selVariant();        

        $(".size-choice").click(function(e) {
            const selectedSize = $(this).attr('data-size');
            if (smartSelector.handleSizeSelection(selectedSize)) {
                $(".size-choice.active .w-radio-input").removeClass("w--redirected-checked")
                $(".size-choice").removeClass("active");
                $(this).addClass("active");
                $(".size-choice.active .w-radio-input").addClass("w--redirected-checked")
                selVariant();
            }
        });

        $(".color-choice").click(function(e) {
            const selectedColor = $(this).attr('data-color');
            
            if (smartSelector.handleColorSelection(selectedColor)) {
                $(".color-choice").removeClass("active");
                $(this).addClass("active");
                selVariant();
            }
        });
        $(".buy-now-button").click(function(e) {
            const clearCart = async () => {
                const updateRec = {};
                checkout.cart.localCart.lineItems.forEach(x => {
                    if (x.variantId != '34937177702550') {
                        updateRec[x.variantId] = 0;
                    }
                });
                const newCart = await checkout.apiClient.setVariantQuantities(updateRec);
                checkout.setCart(newCart);
            }

            clearCart().then(x => {

                var size = $(".size-choice.active").attr("data-size");
                var color = $(".color-choice.active").attr("data-color");
                var selectedQty = parseInt($(".quantity-value").text());
                var data = {}; 

                // Check if free gift checkbox is checked
                if ($("#free-gift-check-desktop").prop("checked")) {
                    // Add variant with towels
                    data[variants[size][color]['variantId']] = selectedQty;
                    if(color === "white") {
                        data[43954293932182] = selectedQty; 
                    }
                    if(color === "stone") {
                        data[43954293899414] = selectedQty; 
                    }
                    
                } else {
                    // Add variant without towels
                    data[noTowelsVariant[size][color]['variantId']] = selectedQty;
                }

                window.checkout.apiClient.setVariantQuantities(data).then(x => {
                    console.log("Variant Set.");
                    window.checkout.setCart(x);
                    window.checkout.drawCart(x);
                    window.location.href = "/checkout_v2/c-v6.html";
                });
            });
        });
        $(".mobile-buy-now-button").click(function(e) {
            e.preventDefault();
            const clearCart = async () => {
                const updateRec = {};
                checkout.cart.localCart.lineItems.forEach(x => {
                    if (x.variantId != '34937177702550') {
                        updateRec[x.variantId] = 0;
                    }
                });
                const newCart = await checkout.apiClient.setVariantQuantities(updateRec);
                checkout.setCart(newCart);
            }

            clearCart().then(x => {

                var size = $(".size-choice.active").attr("data-size");
                var color = $(".color-choice.active").attr("data-color");
                var selectedQty = parseInt($(".mobile-quantity-value").text());
                var data = {}; 

                // Check if free gift checkbox is checked
                if ($("#free-gift-check-desktop").prop("checked")) {
                    // Add variant with towels
                    data[variants[size][color]['variantId']] = selectedQty;
                    if(color === "white") {
                        data[43954293932182] = selectedQty; 
                    }
                    if(color === "stone") {
                        data[43954293899414] = selectedQty; 
                    }
                } else {
                    // Add variant without towels
                    data[noTowelsVariant[size][color]['variantId']] = selectedQty;
                }

                window.checkout.apiClient.setVariantQuantities(data).then(x => {
                    console.log("Variant Set.");
                    window.checkout.setCart(x);
                    window.checkout.drawCart(x);
                    window.location.href = "/checkout_v2/c-v4.html";
                });
            });
        });
    });

    $(window).scroll(function() {
        if ($(window).width() < 768) {
            var scroll_h = $(window).scrollTop();
            var purchase_scrolltop = $("#purchase").position().top;
            
            if (scroll_h > purchase_scrolltop * 1.5) {
                $("#sticky-footer").removeClass("es_hide");
            } else {
                $("#sticky-footer").addClass("es_hide");
            }
        }
    });

    $(".size-guide-modal .size_chart-handle").click(function() {
        var name = $(this).attr("name");
        $(".size-guide-modal .size_chart-handle").removeClass("active");
        $(this).addClass("active");
        $(".size-guide-modal .size_table").hide();
        $(".size-guide-modal .size_table[data-handle='" + name + "']").show();
    });

    const fabricRadiosWrapper = $('.fabric-select-wrapper');
    const fabricRadios = $('.fabric-select-wrapper input');
    fabricRadios.bind('change', function(e) {
        fabricRadiosWrapper.removeClass('active');
        e.target.parentNode.classList.add('active');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const variants = {
        //stone: { variantId: 37064720973974, name: 'Black Friday - Towel Bundle - 1 Towel Bundle / Stone', productTitle: '1 Towel Bundle / Stone', price: 45, regularPrice: 80, productSavings: 20, productReviews: 565, imgUrl: 'images/Towel_Bogo_Desktop_Stone--', mobimgUrl: 'images/Towel_Bogo_Desktop_Stone--', sku:"bf-bundle-stone-1" },
        white: { variantId: 37064721006742, name: 'Black Friday - Towel Bundle - 1 Towel Bundle / White', productTitle: '1 Towel Bundle / White', price: 45, regularPrice: 90, productSavings: 20, productReviews: 565, imgUrl: 'images/Towel_Bogo_Desktop_White--', mobimgUrl: 'images/Towel_Bogo_Desktop_White--', sku: "bf-bundle-white-1" },
        // bundle_2: {
        //   stone: { variantId: 37064723562646, name: 'Black Friday - Towel Bundle - 2 Towel Bundles / Stone', productTitle: '1 Towel Bundles / Stone', price: 130, regularPrice: 130, productSavings: 20, productReviews: 566, imgUrl: 'images/Towel_Bundle_Desktop_Stone_v02.png', sku:"bf-bundle-stone-2" },
        //   white: { variantId: 37064723595414, name: 'Black Friday - Towel Bundle - 2 Towel Bundles / White', productTitle: '1 Towel Bundles / White', price: 130, regularPrice:130, productSavings: 20, productReviews: 566, imgUrl: 'images/Towel_Bundle_Desktop_White_v02.png', sku:"bf-bundle-white-2"  },
        //   sky: { variantId: 37064723628182, name: 'Black Friday - Towel Bundle - 2 Towel Bundles / Sky Blue', productTitle: '1 Towel Bundles / Sky Blue', price: 130, regularPrice:130, productSavings: 20, productReviews: 566, imgUrl: 'images/Towel_Bundle_Desktop_Blue_v02.png', sku:"bf-bundle-sky-2"  }
        // },
        // bundle_3: {
        //   stone: { variantId: 37064723660950, name: 'Black Friday - Towel Bundle - 3 Towel Bundles / Stone', productTitle: '1 Towel Bundles / Stone', price: 195, regularPrice: 195, productSavings: 20, productReviews: 567, imgUrl: 'images/Towel_Bundle_Desktop_Stone_v02.png', sku:"bf-bundle-stone-3" },
        //   white: { variantId: 37064723693718, name: 'Black Friday - Towel Bundle - 3 Towel Bundles / White', productTitle: '1 Towel Bundles / White', price: 195, regularPrice:195, productSavings: 20, productReviews: 567, imgUrl: 'images/Towel_Bundle_Desktop_White_v02.png', sku:"bf-bundle-white-3"  },
        //   sky: { variantId: 37064723726486, name: 'Black Friday - Towel Bundle - 3 Towel Bundles / Sky Blue', productTitle: '1 Towel Bundles / Sky Blue', price: 195, regularPrice:195, productSavings: 20, productReviews: 567, imgUrl: 'images/Towel_Bundle_Desktop_Blue_v02.png', sku:"bf-bundle-sky-3"  }
        // },
        // bundle_4: {
        //   stone: { variantId: 37064723759254, name: 'Black Friday - Towel Bundle - 4 Towel Bundles / Stone', productTitle: '1 Towel Bundles / Stone', price: 260, regularPrice: 260, productSavings: 20, productReviews: 568, imgUrl: 'images/Towel_Bundle_Desktop_Stone_v02.png', sku:"bf-bundle-stone-4" },
        //   white: { variantId: 37064723792022, name: 'Black Friday - Towel Bundle - 4 Towel Bundles / White', productTitle: '1 Towel Bundles / White', price: 260, regularPrice:260, productSavings: 20, productReviews: 568, imgUrl: 'images/Towel_Bundle_Desktop_White_v02.png', sku:"bf-bundle-white-4"  },
        //   sky: { variantId: 37064723824790, name: 'Black Friday - Towel Bundle - 4 Towel Bundles / Sky Blue', productTitle: '1 Towel Bundles / Sky Blue', price: 260, regularPrice:260, productSavings: 20, productReviews: 568, imgUrl: 'images/Towel_Bundle_Desktop_Blue_v02.png', sku:"bf-bundle-sky-4"  }
        // },
        checkouturl: "/checkout/t_b_n.html"
    };

    function init_color_swatches() {
        const color_swatches = document.querySelectorAll(".es_variants-row.es_color_swatch .es_variant");
        color_swatches.forEach(swatch => {
            swatch.style.backgroundColor = swatch.getAttribute("data-color");
        });
    }

    function selVariant() {
        const activeColor = document.querySelector(".es_variants-row[data-value='color'] .es_variant.active");
        const color = activeColor ? activeColor.getAttribute("data-value") : '';
        const qtyElement = document.querySelector(".selected_quantity");
        const qty = parseInt(qtyElement.getAttribute("data-qty"));

        document.querySelector(".es_reviews_cnt").textContent = variants[color]['productReviews'];
        document.querySelector(".es_product-price").textContent = variants[color]['price'] * qty;
        document.querySelector(".es_product-regprice").textContent = variants[color]['regularPrice'] * qty;
        document.querySelector(".es_product-savingprice").textContent = parseInt(variants[color]['regularPrice'] - variants[color]['price']) * qty;

        document.querySelector(".es_btn-purchase").href = variants['checkouturl'];
        document.querySelector(".es_variants-row").setAttribute("data-variant-id", variants[color]['variantId']);
        document.querySelector(".es_product-image").src = variants[color]['imgUrl'] + qty + ".jpg";
        document.querySelectorAll(".bundle_cnt").forEach(function(count) {count.textContent = qty;})
    }

    function init() {
        init_color_swatches();
        selVariant();
    }

    init();

    // Event Listeners
    document.querySelectorAll(".es_variant").forEach(variant => {
        variant.addEventListener('click', function (e) {
            if (this.classList.contains("es_disabled")) {
                return;
            }

            const parent = this.closest(".es_variants-row");
            parent.querySelectorAll(".es_variant").forEach(v => v.classList.remove("active"));
            this.classList.add("active");
            selVariant();

            if (parent.getAttribute("data-value") === "color") {
                document.querySelector(".es_color").textContent = this.getAttribute("data-value");
            }
        });
    });

    const selectedQuantity = document.querySelector(".selected_quantity");
    const quantityDropdown = document.querySelector(".quantity_dropdown");

    selectedQuantity.addEventListener('click', function (e) {
        if (quantityDropdown.style.display === "none" || !quantityDropdown.style.display) {
            quantityDropdown.style.display = "block";
            quantityDropdown.style.animation = "slideDown 200ms";
        } else {
            quantityDropdown.style.display = "none";
        }
    });

    document.querySelectorAll(".quantity_dropdown .dropdown-item").forEach(item => {
        item.addEventListener('click', function (e) {
            quantityDropdown.style.display = "none";
            selectedQuantity.setAttribute("data-qty", this.getAttribute("data-qty"));
            selectedQuantity.textContent = this.textContent;
            selVariant();
        });
    });

    document.querySelector(".es_btn-purchase").addEventListener('click', function (e) {
        e.preventDefault();

        const qty = document.querySelector(".selected_quantity").getAttribute("data-qty");
        const variantid = document.querySelector(".es_variants-row").getAttribute("data-variant-id");
        console.log(variantid);
        console.log(qty);

        const param = {};
        param[variantid] = qty;

        window.checkout.apiClient.setVariantQuantities(param).then(x => {
            console.log("its done");
            window.location.href = this.getAttribute("href");
        });
    });

    // Size Chart
    document.querySelector(".es_btn-size_guide").addEventListener('click', function () {
        document.querySelector(".backdrop").classList.add('active');
        document.querySelector(".size-guide-modal.bedding").classList.add('active');
    });

    document.querySelector(".size-guide-modal .btn-close").addEventListener('click', function () {
        document.querySelector(".backdrop").classList.remove('active');
        document.querySelector(".size-guide-modal.bedding").classList.remove('active');
    });

    document.querySelectorAll(".size-guide-modal .size_chart-handle").forEach(handle => {
        handle.addEventListener('click', function () {
            const name = this.getAttribute("name");
            document.querySelectorAll(".size-guide-modal .size_chart-handle").forEach(h => h.classList.remove("active"));
            this.classList.add("active");
            document.querySelectorAll(".size-guide-modal .size_table").forEach(table => table.style.display = "none");
            document.querySelector(`.size-guide-modal .size_table[data-handle='${name}']`).style.display = "block";
        });
    });
});
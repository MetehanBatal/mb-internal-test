document.addEventListener('DOMContentLoaded', function() {
	const imageCount = {
		stone: 7,
		white: 7,
		sky_blue: 6,
		navy_blue: 5,
		sand: 5,
		sage: 6,
		charcoal: 6,
		terracotta: 7,
		slate_blue: 7,
		silver_grey: 7,
		rosewood : 7,
	}

	let selectedColor = "stone";
	let selectedSize = "full";
	let slider;
	let currentActiveThumb = 0;

	function initSlider() {
		var innerSlider = new KeenSlider("#hero-slider", { loop: true });
		slider = innerSlider;
		slider.on("slideChanged", function() {
            currentActiveThumb = slider.track.details.rel;
			
			updateSliderIndicators();
        })
	};

	initSlider();

	function handleThumbnailClick(el, goto) {
		document.querySelectorAll('.thumbnail').forEach((thumbnail) => thumbnail.classList.remove('active'));
		el.target.classList.add('active');
		slider.moveToIdx(goto);

		// setTimeout(() => {
		// 	slider.update();
		// }, 300);
	};

	function attachListeners() {
		document.querySelectorAll('.slider-thumbnail').forEach(function(thumbnail, index) {
			thumbnail.addEventListener('click', function(e) {
				handleThumbnailClick(e, index);
			});
		})
	};
	attachListeners();

	function updateSliderIndicators() {
		const isDesktop = window.matchMedia('(min-width: 768px)');
		let thumbnailIndicators = document.querySelectorAll(`.${isDesktop.matches ? 'mobile': 'desktop'}-hidden .thumbnails ${isDesktop.matches ? 'img' : 'div'}`);
		thumbnailIndicators.forEach((t) => t.classList.remove('active'));
		thumbnailIndicators[currentActiveThumb].classList.add('active');
	};

	document.querySelector('.slider-button.prev-button').addEventListener('click', function() {
		slider.prev();
	});
	document.querySelector('.slider-button.next-button').addEventListener('click', function() {
		slider.next();
	});


	function smoothScrollTo(element, offset = 130) {
        const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    document.querySelector('.to-atc').addEventListener('click', () => {
        const atcElement = document.getElementById('atc');
        smoothScrollTo(atcElement);
    });
    document.querySelector('.to-atcr').addEventListener('click', () => {
        const atcrElement = document.getElementById('atc-r');
        smoothScrollTo(atcrElement);
    });
	
	var variants = {
		signature: {
			twin: {
				stone: { remaining : 17, variantId: 42636035621014, productTitle: 'Stone Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/3pc-stone.png' },
				white: { variantId: 42636035752086, productTitle: 'White Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/3pc-white.png' },
				// sand: { variantId: 14441425010732, productTitle: 'Sand Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/sand-sheets.png' },
				//  sky_blue: { variantId: 40509700178070, productTitle: 'Sky Blue Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/3pc-sky.png' },
			},
			twinxl: {
				//stone: { variantId: 43965127753878, productTitle: 'Stone Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/3pc-stone.png' },
				//white: { variantId: 43965116612758, productTitle: 'White Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/3pc-white.png' },
				// sand: { variantId: 14441425010732, productTitle: 'Sand Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/sand-sheets.png' },
				//  sky_blue: { variantId: 40509700178070, productTitle: 'Sky Blue Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/3pc-sky.png' },
			},
			full: {
				stone: { variantId: 42636035784854, productTitle: 'Stone Sheet Set - Full', price: 119, regularPrice: 214, productSavings: 44, productReviews: 327, imgUrl: 'images/3pc-stone.png' },
				white: {remaining : 13, variantId: 42636035915926, productTitle: 'White Sheet Set - Full', price: 119, regularPrice: 214, productSavings: 44, productReviews: 327, imgUrl: 'images/3pc-white.png' },
				// sand: { variantId: 14441425141804 Wrong VARIANT, productTitle: 'Sand Sheet Set - Full', price: 119, regularPrice: 214, productSavings: 44, productReviews: 327, imgUrl: 'images/sand-sheets.png' },
				sky_blue: { variantId: 42636035850390, productTitle: 'Sky Blue Sheet Set - Full', price: 119, regularPrice: 214, productSavings: 44, productReviews: 327, imgUrl: 'images/3pc-sky.png' },
				charcoal: { variantId: 44077809860758, productTitle: 'Charcoal Sheet Set - Full', price: 119, regularPrice: 214, productSavings: 44, productReviews: 327, imgUrl: 'images/3pc-sky.png' },
			},
			queen: {
				stone: { variantId: 42636035260566, productTitle: 'Stone Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: 'images/3pc-stone.png' },
				white: { remaining : 9, variantId: 42636035391638, productTitle: 'White Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: 'images/3pc-white.png' },
				sand: { variantId: 42636035358870, productTitle: 'Sand Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: 'images/sand-sheets.png' },
				//sky_blue: { remaining : 3, variantId: 42636035326102, productTitle: 'Sky Blue Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: 'images/3pc-sky.png' },
				navy_blue: { variantId: 42636035293334, productTitle: 'Navy Blue Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
				sage: { limitedEdition: true, variantId: 42636035489942, productTitle: 'Sage Sheet Set - Queen', price: 164, regularPrice: 259, productSavings: 36, productReviews: 439, imgUrl: '' },
				charcoal: { variantId: 42636035522710, productTitle: 'Charcoal Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
				terracotta: { limitedEdition: true, variantId: 42636035588246, productTitle: 'Terracotta Sheet Set - Queen', price: 139, regularPrice: 234, productSavings: 40, productReviews: 439, imgUrl: '' },
				//slate_blue: { variantId: 43623967719574, productTitle: 'Slate Blue Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
				silver_grey: { variantId: 43623998488726, productTitle: 'Silver Grey Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
				//rosewood: { variantId: 44247335829654, productTitle: 'Rosewood Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },				
			},
			king: {
				stone: { remaining : 8, variantId: 42636035948694, productTitle: 'Stone Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: 'images/3pc-stone.png' },
				//white: { remaining : 2, variantId: 42636036079766, productTitle: 'White Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: 'images/3pc-white.png' },
				sand: { variantId: 42636036046998, productTitle: 'Sand Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: 'images/sand-sheets.png' },
				//sky_blue: { remaining : 13, variantId: 42636036014230, productTitle: 'Sky Blue Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: 'images/3pc-sky.png' },
				navy_blue: { variantId: 42636035981462, productTitle: 'Navy Blue Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: '' },
				sage: { limitedEdition: true, variantId: 42636036210838, productTitle: 'Sage Sheet Set - King', price: 174, regularPrice: 270, productSavings: 35, productReviews: 234, imgUrl: '' },
				charcoal: { variantId: 42636036145302, productTitle: 'Charcoal Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: '' },
				terracotta: {limitedEdition: true, variantId: 42636036276374, productTitle: 'Terracotta Sheet Set - King', price: 149, regularPrice: 245, productSavings: 39, productReviews: 234, imgUrl: '' },
				slate_blue: { variantId: 43624013463702, productTitle: 'Charcoal Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: '' },
				silver_grey: { variantId: 43624015265942, productTitle: 'Terracotta Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: '' },
				rosewood: { variantId: 44247335862422, productTitle: 'Rosewood Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: '' },
			},
			cali: {
				stone: { variantId: 42636036309142, productTitle: "Cali King \/ Stone \/ Signature (Percale)", price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: 'images/3pc-stone.png' },
				sky_blue: { variantId: 42636036407446, productTitle: "Cali King \/ Sky Blue \/ Signature (Percale)", price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: 'images/3pc-stone.png' }
			},
			split: {
				stone: { remaining : 18, variantId: 43965130702998, productTitle: "Split King \/ Stone \/ Signature (Percale)", price: 149, regularPrice: 250, productSavings: 40, productReviews: 234, imgUrl: 'images/3pc-stone.png' },
				white: {remaining : 8, variantId: 43965133127830, productTitle: "Split King \/ Sky Blue \/ Signature (Percale)", price: 149, regularPrice: 250, productSavings: 40, productReviews: 234, imgUrl: 'images/3pc-stone.png' }
			}
		},
	};
	
	var withOutTowelVariants = {
		signature: {
			twin: {
				stone: { remaining : 17, variantId: 42558763303062, productTitle: 'Stone Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/3pc-stone.png' },
				white: { variantId: 42558763466902, productTitle: 'White Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/3pc-white.png' },
				//  sky_blue: { variantId: 42558763499670, productTitle: 'Sky Blue Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/3pc-sky.png' },
			},
			twinxl: {
				//stone: { variantId: 43965143613590, productTitle: 'Stone Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/3pc-stone.png' },
				//white: { variantId: 43965147611286, productTitle: 'White Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/3pc-white.png' },
				// sand: { variantId: 14441425010732, productTitle: 'Sand Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/sand-sheets.png' },
				//  sky_blue: { variantId: 40509700178070, productTitle: 'Sky Blue Sheet Set - Twin', price: 109, regularPrice: 204, productSavings: 46, productReviews: 241, imgUrl: 'images/3pc-sky.png' },
			},
			full: {
				stone: { variantId: 42558763532438, productTitle: 'Stone Sheet Set - Full', price: 119, regularPrice: 214, productSavings: 44, productReviews: 327, imgUrl: 'images/3pc-stone.png' },
				white: {remaining : 13, variantId: 42558763696278, productTitle: 'White Sheet Set - Full', price: 119, regularPrice: 214, productSavings: 44, productReviews: 327, imgUrl: 'images/3pc-white.png' },
				// sand: { variantId: 14441425141804 Wrong VARIANT, productTitle: 'Sand Sheet Set - Full', price: 119, regularPrice: 214, productSavings: 44, productReviews: 327, imgUrl: 'images/sand-sheets.png' },
				sky_blue: { variantId: 42558763729046, productTitle: 'Sky Blue Sheet Set - Full', price: 119, regularPrice: 214, productSavings: 44, productReviews: 327, imgUrl: 'images/3pc-sky.png' },
				charcoal: { variantId: 44082956238998, productTitle: 'Charcoal Sheet Set - Full', price: 119, regularPrice: 214, productSavings: 44, productReviews: 327, imgUrl: 'images/3pc-sky.png' },
			},
			queen: {
				stone: { variantId: 42558763073686, productTitle: 'Stone Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: 'images/3pc-stone.png' },
				white: { remaining : 9, variantId: 42558763237526, productTitle: 'White Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: 'images/3pc-white.png' },
				sand: { variantId: 42558763139222, productTitle: 'Sand Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: 'images/sand-sheets.png' },
				//sky_blue: { remaining : 3, variantId: 42558763270294, productTitle: 'Sky Blue Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: 'images/3pc-sky.png' },
				navy_blue: { variantId: 42558763106454, productTitle: 'Navy Blue Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
				sage: { variantId: 42558765236374, productTitle: 'Sage Sheet Set - Queen', price: 164, regularPrice: 259, productSavings: 36, productReviews: 439, imgUrl: '' },
				charcoal: {limitedEdition: true, variantId: 42558764875926, productTitle: 'Charcoal Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
				terracotta: {limitedEdition: true, variantId: 42558765170838, productTitle: 'Terracotta Sheet Set - Queen', price: 139, regularPrice: 234, productSavings: 42, productReviews: 439, imgUrl: '' },
				//slate_blue: { variantId: 43624117403798, productTitle: 'Slate Blue Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
				silver_grey: { variantId: 43624144437398, productTitle: 'Silver Grey Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
				//rosewood: { variantId: 44247342743702, productTitle: 'Silver Grey Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
			},
			king: {
				stone: { remaining : 8, variantId: 42558763761814, productTitle: 'Stone Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: 'images/3pc-stone.png' },
				//white: { remaining : 2, variantId: 42558763925654, productTitle: 'White Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: 'images/3pc-white.png' },
				sand: { variantId: 42558763827350, productTitle: 'Sand Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: 'images/sand-sheets.png' },
				//sky_blue: { remaining : 13, variantId: 42558763958422, productTitle: 'Sky Blue Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: 'images/3pc-sky.png' },
				navy_blue: { variantId: 42558763794582, productTitle: 'Navy Blue Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: '' },
				sage: { variantId: 42558765301910, productTitle: 'Sage Sheet Set - King', price: 174, regularPrice: 270, productSavings: 35, productReviews: 234, imgUrl: '' },
				charcoal: {limitedEdition: true, variantId: 42558764679318, productTitle: 'Charcoal Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: '' },
				terracotta: {limitedEdition: true, variantId: 42558764712086, productTitle: 'Terracotta Sheet Set - King', price: 149, regularPrice: 245, productSavings: 39, productReviews: 234, imgUrl: '' },
				slate_blue: { variantId: 43624154497174, productTitle: 'Charcoal Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: '' },
				silver_grey: { variantId: 43624165015702, productTitle: 'Terracotta Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: '' },
				rosewood: { variantId: 44247342776470, productTitle: 'Rosewood Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: '' },
			},			
			cali: {
				stone: { remaining : 18, variantId: 42558764384406, productTitle: "Cali King \/ Stone \/ Signature (Percale)", price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: 'images/3pc-stone.png' },
				sky_blue: {remaining : 8, variantId: 42558764581014, productTitle: "Cali King \/ Sky Blue \/ Signature (Percale)", price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: 'images/3pc-stone.png' }
			},
			split: {				
				stone: { variantId: 43965152723094, productTitle: "Split King \/ Stone \/ Signature (Percale)", price: 149, regularPrice: 250, productSavings: 40, productReviews: 234, imgUrl: 'images/3pc-stone.png' },
				white: { variantId: 43965154721942, productTitle: "Split King \/ Sky Blue \/ Signature (Percale)", price: 149, regularPrice: 250, productSavings: 40, productReviews: 234, imgUrl: 'images/3pc-stone.png' }
			}
		},
	};

	/**
	* Implement UX color and size functionality(out of stock)
	*/
	function saveSelections() {
        const isMobile = window.innerWidth <= 479;
        const selections = {
            size: isMobile 
                ? document.querySelector(".mobile-size-selector .mobile-size-item.current-size")?.getAttribute("value")
                : document.querySelector(".size-sc .list li.option.current-size")?.getAttribute("data-value"),
            color: isMobile
                ? document.querySelector(".mobile-colors-container .color-choice.current-color")?.getAttribute("data-color")
                : document.querySelector(".desktop-colors-container .color-choice.current-color")?.getAttribute("data-color"),
            quantity: isMobile
                ? document.querySelector(".mobile_quantity_input").value
                : document.querySelector(".quantity_input").value
        };
        
        localStorage.setItem('lastSelections', JSON.stringify(selections));
    }

    function loadSelections() {
        const savedSelectionsStr = localStorage.getItem('lastSelections');
        if (!savedSelectionsStr) return null;
    
        try {
            return JSON.parse(savedSelectionsStr);
        } catch (e) {
            console.error('Error parsing saved selections:', e);
            return null;
        }
    }

	function selVariant() {
		console.log('selVariant called');
		const isMobile = window.matchMedia('(max-width: 480px)');

		const fabric = 'signature';
		
		// Get size and color based on media type
		const size = isMobile.matches
			? document.querySelector(".mobile-size-selector .mobile-size-item.current-size")?.getAttribute("value")
			: document.querySelector('.size-sc .list .current-size[data-value]')?.getAttribute("data-value");
		
		const color = document.querySelector(`.${isMobile.matches ? 'mobile' : 'desktop'}-colors-container .color-choice.current-color`)?.getAttribute("data-color").replace("_", " ");
		console.log(size, color);

		if (!variants?.[fabric]?.[size]?.[color]) return;
		
		let selectedVariant = variants[fabric][size][color];
		let price = selectedVariant['price'];
	
		// Update prices
		document.querySelectorAll(".es_price")
			.forEach(el => el.textContent = price);
		
		document.querySelectorAll(".es_saving_percent")
			.forEach(el => el.textContent = selectedVariant['productSavings']);
		
		document.querySelectorAll(".es_reg_price")
			.forEach(el => el.textContent = selectedVariant['regularPrice']);
		
		document.querySelectorAll(".total_savings")
			.forEach(el => el.textContent = selectedVariant['regularPrice'] - price);
		
		console.log(selectedVariant);
		// Handle limited edition marking
		const limitedEditionMarks = document.querySelectorAll(".limited-edition-mark");
		if (selectedVariant.limitedEdition) {
			limitedEditionMarks.forEach(function(mark) { mark?.classList.remove("hidden") });
		} else {
			limitedEditionMarks.forEach(function(mark) { mark?.classList.add("hidden") });
		}

		console.log('CURRENT COLOR: ', color);
	
		document.querySelectorAll(".color-name.current-color").forEach(el => el.textContent = color);
	
		// Update mobile size name
		document.querySelectorAll(".mobile-size-name")
			.forEach(el => el.textContent = size.replace("_", " "));
	
		scrollToSelectedElements();
	
		// Update size elements stock status
		document.querySelectorAll(".mobile-size-selector .mobile-size-item")
			.forEach(element => {
				const currentSize = element.getAttribute("value");
				const remaining = withOutTowelVariants?.signature?.[currentSize]?.[color]?.remaining;
				const inStockEl = element.querySelector(".in-stock");
				const notStockEl = element.querySelector(".not-stock");
				const promoPriceEl = element.querySelector(".promo-price");
	
				if (element.classList.contains("sold")) {
					if (inStockEl) inStockEl.style.display = "none";
					if (notStockEl) notStockEl.style.display = "block";
					if (promoPriceEl) promoPriceEl.style.display = "none";
				} else {
					if (notStockEl) notStockEl.style.display = "none";
					if (promoPriceEl) promoPriceEl.style.display = "block";
					if (inStockEl) {
						inStockEl.style.display = "block";
	
						if (remaining) {
							inStockEl.classList.add("limited");
							inStockEl.textContent = `${remaining} Sets Left`;
						} else {
							inStockEl.classList.remove("limited");
							inStockEl.textContent = "In stock";
						}
					}
				}
			});
	}

	function scrollToSelectedElements() {
		const currentSizeElement = document.querySelector('.mobile-size-item.current-size');
		const currentSize = currentSizeElement.getAttribute("value");

		if (currentSizeElement && selectedSize !== currentSize) {
			const parentContainer = document.querySelectorAll('.mobile-size-selector')[0];
			parentContainer.scroll({
				left: currentSizeElement.offsetLeft - (parentContainer.clientWidth / 2) + (currentSizeElement.clientWidth / 2),
				behavior: 'smooth'
			});

			selectedSize = currentSize;
		}

		const currentColorElement = document.querySelector('.mobile-colors-container .color-choice.current-color');
		const currentColor = currentColorElement.getAttribute("data-color");
		if (currentColorElement && selectedColor !== currentColor) {
			const parentContainer = document.querySelectorAll('.mobile-colors-container')[0];
			parentContainer.scroll({
				left: currentColorElement.offsetLeft - (parentContainer.clientWidth / 2) + (currentColorElement.clientWidth / 2),
				behavior: 'smooth'
			});
		}
	}

	function setFreeTowelImage(color) {
		const freeImage = document.querySelectorAll(".free-image");
		freeImage.forEach((el) => {
			if (freeImage) {
				el.src = `/sheets/ksp-lp/images/towels/towel_${color}.png`;
			}
		})
	}

	function checkStock(fabric, size, color) {
		try {
			size = size?.toLowerCase();
			color = color?.toLowerCase().replace(/\s+/g, '_');

			const variant = variants?.[fabric]?.[size]?.[color];
			return !!variant?.variantId;
		} catch (error) {
			console.error('Error on stock check:', error);
			return false;
		}
	}

	function filterColorSwatches(size, autoSelect = false) {
		console.log('Filter colors called');
		const isMobile = window.matchMedia('(max-width: 480px)');

		const fabric = 'signature';
	
		// Select the appropriate container
		const colorContainer = document.querySelector(isMobile.matches 
			? ".mobile-colors-container" 
			: ".desktop-colors-container");
		if (!colorContainer) return;
	
		// Get the current selected color
		const currentColorElement = colorContainer.querySelector(".color-choice.current-color");
		const currentColor = currentColorElement
			? currentColorElement.getAttribute("data-color")?.toLowerCase().replace(/\s+/g, '_')
			: null;
	
		// Check all colors in the container
		colorContainer.querySelectorAll(".color-choice").forEach(colorElement => {
			const color = colorElement.getAttribute("data-color").toLowerCase().replace(/\s+/g, '_');
			const inStock = checkStock(fabric, size, color);
	
			if (!inStock) {
				colorElement.classList.add("sold");
			} else {
				colorElement.classList.remove("sold");
				
				// Check remaining count for this variant
				const currentSize = isMobile.matches 
					? document.querySelector(".mobile-size-selector .mobile-size-item.current-size")?.getAttribute("value")
					: document.querySelector(".size-sc .list li.option.current-size")?.getAttribute("data-value");
				
				const remaining = withOutTowelVariants?.signature?.[currentSize]?.[color]?.remaining;
				
				if (remaining) {
					// Find the corresponding size item and update stock status
					const sizeItem = document.querySelector(`.mobile-size-item[value="${currentSize}"]`);
					const inStockElement = sizeItem?.querySelector(".in-stock");
					
					if (inStockElement) {
						inStockElement.classList.add("limited");
						inStockElement.textContent = `Only ${remaining} left`;
					}
				}
			}
		});
	
		// Handle out of stock current color
		if (currentColor && !checkStock(fabric, size, currentColor)) {
			// Find first available color
			const firstAvailableColor = colorContainer.querySelector(".color-choice:not(.sold)");
	
			if (firstAvailableColor && !autoSelect) {
				// Trigger click event on first available color
				firstAvailableColor.click();
				document.querySelector(".amazon-warning-text.hidden")?.classList.remove("hidden");
			}
		} else {
			document.querySelector(".amazon-warning-text")?.classList.add("hidden");
		}
	}

	function filterSizeSwatches(color, autoSelect = false) {
		const fabric = 'signature';
		const isMobile = window.innerWidth <= 479;
	 
		// Clear all sold marks first
		if (isMobile) {
			document.querySelectorAll(".mobile-size-selector .mobile-size-item")
				.forEach(el => el.classList.remove("sold"));

			console.log('Mobile size swatches added');
		} else {
			document.querySelectorAll(".size-sc .list li.option")
				.forEach(el => el.classList.remove("sold")); 
				console.log('Desktop size swatches added');
		}
	 
		// Select container
		const containers = isMobile
			? document.querySelectorAll(".mobile-size-selector .mobile-size-item")
			: document.querySelectorAll(".size-sc .list li.option");
		
		console.log(`Containers for ${isMobile}: `, containers);
	 
		// Get current selected size
		const currentSize = isMobile
			? document.querySelector(".mobile-size-selector .mobile-size-item.current-size")?.getAttribute("value")
			: document.querySelector(".size-sc .list li.option.current-size")?.getAttribute("data-value");
		console.log(`Sizes for ${isMobile}: `, currentSize);
	 
		let hasCurrentSizeInStock = false;
		let firstAvailableSize = null;
	 
		// Check each size option
		containers.forEach(sizeElement => {
			const size = isMobile 
				? sizeElement.getAttribute("value") 
				: sizeElement.getAttribute("data-value");
	 
			// Stock check
			if (!checkStock(fabric, size, color)) {
				sizeElement.classList.add("sold");
				console.log('Add sold for: ', fabric, size, color);
			} else {
				if (!firstAvailableSize) {
					firstAvailableSize = size;
					console.log('Else else: ', firstAvailableSize);
				}
				if (size === currentSize) {
					hasCurrentSizeInStock = true;
					console.log('Else if: ');
				}
			}
		});

		console.log('END: ', hasCurrentSizeInStock, autoSelect, firstAvailableSize);
	 
		// If current size is out of stock and automatic selection is requested
		if (!hasCurrentSizeInStock && !autoSelect && firstAvailableSize) {
			selectSize(firstAvailableSize, isMobile);
			filterColorSwatches(firstAvailableSize, true);
			console.log('Select size and everything?');
		}
	}

	document.querySelectorAll(".list li.option, .mobile-size-selector .mobile-size-item").forEach(el => {
		el.addEventListener('click', function(e) {
			const isMobile = this.closest('.mobile-size-selector') !== null;
			const wrapper = isMobile 
				? this.closest('.mobile-size-selector')
				: this.closest('.size-sc .list');
			const sizeValue = isMobile 
				? this.getAttribute("value") 
				: this.getAttribute("data-value");

			// Call filterColorSwatches first
			filterColorSwatches(sizeValue, false);

			// Update size selection
			if (wrapper) {
				wrapper.querySelectorAll(isMobile ? '.mobile-size-item' : 'li.option')
					.forEach(item => item.classList.remove("current-size"));
			}
			this.classList.add("current-size");

			document.querySelector('.nice-select span.current').textContent = e.target.innerHTML;

			// Update mobile size name display
			document.querySelectorAll(".mobile-size-name")
				.forEach(el => el.textContent = sizeValue.replace("_", " "));

			scrollToSelectedElements();
			selVariant();

			// Handle twin size special case
			if (this.getAttribute('data-value') === 'twin' || this.getAttribute('value') === 'twin') {
				document.querySelectorAll('.twin-only')
					.forEach(el => el.classList.remove("hidden"));
				document.querySelectorAll('.non-twin')
					.forEach(el => el.classList.add("hidden"));
			} else {
				document.querySelectorAll('.twin-only')
					.forEach(el => el.classList.add("hidden"));
				document.querySelectorAll('.non-twin')
					.forEach(el => el.classList.remove("hidden"));
			}

			saveSelections();
		});
	});

	document.querySelectorAll(".color-choice").forEach(colorEl => {
		colorEl.addEventListener('click', function(e) {
			e.stopPropagation();
			if (!e.target.classList.contains('color-choice')) return;

			const isMobile = window.matchMedia('(max-width: 480px)');
			const color = this.getAttribute("data-color");
			const fabric = 'signature';

			console.log('Color choice clicked');
	 
			// Handle out of stock colors
			if (this.classList.contains("sold")) {
				console.log('Has sold class');
				// Get all size elements and check stock
				const sizeElements = isMobile.matches
					? document.querySelectorAll(".mobile-size-selector .mobile-size-item")
					: document.querySelectorAll(".size-sc .list li.option");
	 
				let availableSizes = [];
	 
				// Check stock for each size
				sizeElements.forEach(sizeEl => {
					const size = isMobile.matches
						? sizeEl.getAttribute("value") 
						: sizeEl.getAttribute("data-value");
	 
					// Check if this color-size combination is in stock
					if (variants?.[fabric]?.[size]?.[color]?.variantId) {
						availableSizes.push({
							element: sizeEl,
							size: size
						});
					}
				});
	 
				// If we found an available size
				if (availableSizes.length > 0) {
					const firstAvailableSize = availableSizes[0];
	 
					sizeElements.forEach(sizeEl => {
						const size = isMobile.matches
							? sizeEl.getAttribute("value") 
							: sizeEl.getAttribute("data-value");
	 
						if (!variants?.[fabric]?.[size]?.[color]?.variantId) {
							sizeEl.classList.add("sold");
						} else {
							sizeEl.classList.remove("sold");
						}
					});
	 
					// Update size selection
					sizeElements.forEach(el => {
						el.classList.remove("current-size", "selected");
					});
					firstAvailableSize.element.click();
					firstAvailableSize.element.click();
					
					document.querySelector(".amazon-warning-text.hidden")?.classList.remove("hidden");
	 
					// Update color selection
					const colorContainer = document.querySelector(isMobile.matches
						? ".mobile-colors-container"
						: ".desktop-colors-container");
	 
					colorContainer.querySelectorAll(".color-choice").forEach(el => {
						el.classList.remove("current-color", "selected");
					});
					this.classList.add("current-color", "selected");
	 
					// Update UI
					document.querySelectorAll(".color-name.current-color")
						.forEach(el => el.textContent = color.replace(/_/g, " "));
					
					updateSlider(color);
					setFreeTowelImage(color);
					updateMobileSizePrices();
					selVariant();
	 
				} else {
					console.warn("No available sizes found for this color:", color);
					return;
				}
			} else {
				console.log('Proceed w/normal');
				// Normal color selection
				const colorContainer = document.querySelector(isMobile.matches
					? ".mobile-colors-container"
					: ".desktop-colors-container");

				console.log('Color cont: ', colorContainer);
	 
				colorContainer.querySelectorAll(".color-choice").forEach(el => {
					el.classList.remove("current-color", "selected");
				});
				this.classList.add("current-color", "selected");
				console.log('Class names added');
	 
				filterSizeSwatches(color, false);
				console.log('Sizes filtered');
	 
				// Update UI
				document.querySelectorAll(".color-name.current-color")
					.forEach(el => el.textContent = color.replace(/_/g, " "));
				console.log('Active color name altered');
				
				document.querySelector(".amazon-warning-text")?.classList.add("hidden");
				updateSlider(color);
				setFreeTowelImage(color);
				selVariant();
				console.log('Slider updated?');
	 
				updateMobileSizePrices();
				scrollToSelectedElements();
				saveSelections();
				console.log('Selections saved; exit.');
			}			
		});

		colorEl.addEventListener('mouseenter', function() {
			const color = this.getAttribute("data-color");

			if (colorEl.getAttribute('data-images-loaded') && colorEl.getAttribute('data-images-loaded') === 'true') {
				console.warn('Images already loaded');
				return; }
			
			preloadImages(color)
				.then(() => {
					console.log(`Preloaded images for ${color}`);
					colorEl.setAttribute('data-images-loaded', 'true');
				})
				.catch(error => {
					console.warn(`Error preloading images for ${color}:`, error);
				});
		});
	});

	function selectSize(size, isMobile) {
		console.log('Size selection w/:', size, isMobile);
		if (isMobile) {
			document.querySelectorAll(".mobile-size-selector .mobile-size-item").forEach(function(item) {
				item.classList.remove("current-size")
			});

			document.querySelector(`.mobile-size-selector .mobile-size-item[value="${size}"]`)
				.classList.add("current-size")

			let sizeName = size.replace(/_/g, ' ');
			sizeName = sizeName.charAt(0).toUpperCase() + sizeName.slice(1);
			
			console.log('Yes mobile');
		} else {
			document.querySelectorAll(".size-sc .list li.option").forEach(function(item) {
				item.classList.remove("current-size")
			});

			document.querySelector(`.size-sc .list li.option[data-value="${size}"]`)
				.classList.add("current-size")
			
			console.log('Not mobile');
		}

		// Renkleri filtrele ve UI'ı güncelle
		filterColorSwatches(size, false);
		console.log('After filter');
		selVariant();
		console.log('after selVariant');
	}

	function updateMobileSizePrices() {
		const fabric = 'signature';
		const color = document.querySelector('.mobile-colors-container .color-choice.current-color')?.getAttribute('data-color') || 'stone'; // default color
	 
		document.querySelectorAll('.mobile-size-selector .mobile-size-item').forEach(sizeItem => {
			const size = sizeItem.getAttribute('value');
	 
			// Check if variant exists for this combination
			if (variants?.[fabric]?.[size]?.[color]) {
				const variant = variants[fabric][size][color];
	 
				// Update prices
				const promoPriceElement = sizeItem.querySelector('.promo-price');
				if (promoPriceElement) {
					promoPriceElement.innerHTML = `<span class="strikethrough-price">$${variant.regularPrice}</span> $${variant.price}`;
				}
	 
				sizeItem.classList.remove('sold');
			} else {
				sizeItem.classList.add('sold');
			}
		});
	}

	function updateSlider(color) {
		console.log('UPDATE SLIDER');
		const BASE_PATH = '/sheets/ksp-lp/images/sliders';
		const sliderContainer = document.querySelector('.slider-box');
		const thumbnailContainer = document.querySelector('.mobile-hidden .thumbnails');
		const reqSliderCount = imageCount[color];
	
		const sliderFragment = document.createDocumentFragment();
		const thumbnailFragment = document.createDocumentFragment();
		const imageLoadPromises = [];
	
		for (let i = 1; i <= reqSliderCount; i++) {
			const slideDiv = document.createElement('div');
			slideDiv.className = 'slide keen-slider__slide';
			
			const slideImg = document.createElement('img');
			slideImg.src = `${BASE_PATH}/${color}/m_${i}.webp`;
			slideImg.className = 'product-img';
			slideImg.alt = 'Miracle Made Sheets';
			
			// Add image load promise
			imageLoadPromises.push(
				new Promise((resolve) => {
					slideImg.onload = resolve;
					slideImg.onerror = resolve; // Handle load errors gracefully
				})
			);
			
			slideDiv.appendChild(slideImg);
			sliderFragment.appendChild(slideDiv);
	
			const thumbImg = document.createElement('img');
			thumbImg.width = 50;
			thumbImg.height = 50;
			thumbImg.className = 'slider-thumbnail';
			thumbImg.src = `${BASE_PATH}/${color}/m_${i}_thumb.webp`;
			thumbImg.alt = 'Miracle Made - Sheets';
			
			// Add thumbnail load promise
			imageLoadPromises.push(
				new Promise((resolve) => {
					thumbImg.onload = resolve;
					thumbImg.onerror = resolve;
				})
			);
			
			thumbnailFragment.appendChild(thumbImg);
		}

		if (slider) {
			slider.destroy();
		}
	
		sliderContainer.innerHTML = '';
		thumbnailContainer.innerHTML = '';
	
		sliderContainer.appendChild(sliderFragment);
		thumbnailContainer.appendChild(thumbnailFragment);

		initSlider();
		attachListeners();

		currentActiveThumb = 0;
		updateSliderIndicators();

		selectedColor = color;
	
		// Promise.all(imageLoadPromises)
		// 	.then(() => {
		// 		setTimeout(() => {
		// 			console.log('Slider update called');
		// 			slider.update();
		// 			slider.moveToIdx(0);
					
		// 		}, 2000);
		// 	});
	}

	function preloadImages(color) {
		const BASE_PATH = '/sheets/ksp-lp/images/sliders';
		const reqSliderCount = imageCount[color];
		const imagePromises = [];
		const imageObjects = [];
	
		for (let i = 1; i <= reqSliderCount; i++) {
			const mainImagePromise = new Promise((resolve, reject) => {
				const img = new Image();
				img.onload = resolve;
				img.onerror = reject;
				img.src = `${BASE_PATH}/${color}/m_${i}.webp`;
				imageObjects.push(img);
			});
	
			// const thumbnailPromise = new Promise((resolve, reject) => {
			// 	const img = new Image();
			// 	img.onload = resolve;
			// 	img.onerror = reject;
			// 	img.src = `${BASE_PATH}/${color}/m_${i}_thumb.webp`;
			// 	imageObjects.push(img);
			// });
	
			imagePromises.push(mainImagePromise);
		}
	
		return Promise.all(imagePromises);
	}

	document.querySelector(".mobile_quantity_input")?.addEventListener("change", () => {
		updateMobileSizePrices();
	});

	window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
	window.checkoutReadyCallbacks.push(() => {
		const savedSelections = loadSelections();
	  	const defaultSelections = {
			size: 'full',
			color: 'stone'
	  	}
	  
		if (savedSelections) {
			const isMobile = window.innerWidth <= 479;
			
			// Size selection
			if (savedSelections.size && savedSelections.size !== defaultSelections.size) {
				if (isMobile) {
					document.querySelector(`.mobile-size-selector .mobile-size-item[value="${savedSelections.size}"]`)
						?.classList.add("current-size");
				} else {
					document.querySelector(`.size-sc .list li.option[data-value="${savedSelections.size}"]`)
						?.click();
				}
			} else {
				// Fallback to default full size
				if (isMobile) {
					document.querySelector('.mobile-size-selector .mobile-size-item[value="full"]')
						?.classList.add("current-size");
				} else {
					document.querySelector('.list li[data-value="full"]')?.click();
				}
			}
			
			// Color selection
			if (savedSelections.color && savedSelections.color !== defaultSelections.color) {
				const colorSelector = isMobile 
					? `.mobile-colors-container .color-choice[data-color="${savedSelections.color}"]`
					: `.desktop-colors-container .color-choice[data-color="${savedSelections.color}"]`;
			
				document.querySelector(colorSelector)?.click();
			}
			
			// Quantity selection
			if (savedSelections.quantity) {
				if (isMobile) {
					const mobileQuantityInput = document.querySelector(".mobile_quantity_input");
					if (mobileQuantityInput) mobileQuantityInput.value = savedSelections.quantity;
				} else {
					const quantityInput = document.querySelector(".quantity_input");
					if (quantityInput) quantityInput.value = savedSelections.quantity;
				}
			}
		} else {
			// If no saved selections, default to full size
			const isMobile = window.innerWidth <= 479;
			if (isMobile) {
				document.querySelector('.mobile-size-selector .mobile-size-item[value="full"]')
					?.classList.add("current-size");
			} else {
				document.querySelector('.list li[data-value="full"]')?.click();
			}
		}
		 
		selVariant();
		updateMobileSizePrices();
		 
		// Update image source
		const prevSlideImg = document.querySelector('.swiper-slide.swiper-slide-duplicate.swiper-slide-prev img');
		if (prevSlideImg) {
			prevSlideImg.src = prevSlideImg.getAttribute('data-src') || '';
		}
	});

	document.querySelectorAll(".buy-now-button").forEach(function (atcButton) {
		atcButton.addEventListener('click', function (e) {
			e.preventDefault();

			////////// Clear Cart /////////////////
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
				var fabric = 'signature';
				var size;
				var color;
				var data;
				let isMobile = window.innerWidth <= 479;
				
				if (isMobile) {
					size = document.querySelector(".mobile-size-selector .mobile-size-item.current-size")?.getAttribute("value");
					color = document.querySelector(".mobile-colors-container .color-choice.current-color")?.getAttribute("data-color");
					data = {};
					quantity = document.querySelector(".mobile_quantity_input")?.value.toString();
				 
					const isFreeGiftChecked = 
						document.querySelector("#free-gift-check-desktop")?.checked || 
						document.querySelector("#free-gift-check-mobile")?.checked;
				 
					if (isFreeGiftChecked) {
						data[variants[fabric][size][color]['variantId']] = quantity;
						const whiteColors = ["white", "sage", "terracotta", "silver_grey", "rosewood"];
						const stoneColors = ["stone", "charcoal", "sand"];
						const skyblueColors = ["navy_blue", "sky_blue", "slate_blue"];
				 
						let variantId;
				 
						if (whiteColors.includes(color)) {
							variantId = 42508804784278; // White variant ID
						} else if (stoneColors.includes(color)) {
							variantId = 42508804751510; // Stone variant ID
						} else if (skyblueColors.includes(color)) {
							variantId = 42508804817046;
						}
				 
						if (variantId) {
							data[variantId] = quantity;
						}
					} else {
						data[withOutTowelVariants[fabric][size][color]['variantId']] = quantity;
					}
					data[42536178319510] = 1;
				} else {
					size = document.querySelector("li.option.current-size")?.getAttribute("data-value");
					color = document.querySelector(".color-choice.current-color")?.getAttribute("data-color");
					data = {};
					quantity = document.querySelector(".quantity_input")?.value.toString();
				 
					if (document.querySelector("#free-gift-check-desktop")?.checked) {
						data[variants[fabric][size][color]['variantId']] = quantity;
						const whiteColors = ["white", "sage", "terracotta", "silver_grey", "rosewood"];
						const stoneColors = ["stone", "charcoal", "sand"];
						const skyblueColors = ["navy_blue", "sky_blue", "slate_blue"];
				 
						let variantId;
				 
						if (whiteColors.includes(color)) {
							variantId = 42508804784278; // White variant ID
						} else if (stoneColors.includes(color)) {
							variantId = 42508804751510; // Stone variant ID
						} else if (skyblueColors.includes(color)) {
							variantId = 42508804817046;
						}
				 
						if (variantId) {
							data[variantId] = quantity;
						}
					} else {
						console.log(fabric, size, color);
						data[withOutTowelVariants[fabric][size][color]['variantId']] = quantity;
					}
					data[42536178319510] = 1;
				}


				window.checkout.apiClient.setVariantQuantities(data).then(x => {
					window.checkout.setCart(x);
					window.checkout.drawCart(x);
					const targetVariants = [
						"42636035489942",
						"42558765236374",
						"42636035948694",
						"42558763761814",
						"43965130702998",
						"43965152723094",
						"43623998488726",
						"43624144437398"
					];	
					
					const hasAnyTargetVariant = targetVariants.some(variantId => variantId in data);				
				
					if (hasAnyTargetVariant) {
						window.location.href = '/sheets/checkout/?uf=red';
					} else {
						window.location.href = '/sheets/checkout/?uf=green';
					}
				});
			});
		});
	});
});

// Quantity input change handlers
document.querySelectorAll(".quantity_input, .mobile_quantity_input").forEach(input => {
	input.addEventListener('change', () => {
		saveSelections();
	});
 });
 
 // Plus button click handler
 document.querySelectorAll(".quantity .btn-quantity_plus").forEach(btn => {
	btn.addEventListener('click', e => {
		const qty = parseInt(document.querySelector(".quantity .quantity_input")?.value || "0");
		
		document.querySelectorAll(".quantity .quantity_input").forEach(input => {
			input.value = qty + 1;
		});
		
		document.querySelectorAll(".quantity .mobile_quantity_input").forEach(input => {
			input.value = qty + 1;
		});
	});
 });
 
 // Minus button click handler  
 document.querySelectorAll(".quantity .btn-quantity_minus").forEach(btn => {
	btn.addEventListener('click', e => {
		const qty = parseInt(document.querySelector(".quantity .quantity_input")?.value || "0");
		
		if (qty <= 1) {
			return;
		}
		
		document.querySelectorAll(".quantity .quantity_input").forEach(input => {
			input.value = qty - 1;
		});
		
		document.querySelectorAll(".quantity .mobile_quantity_input").forEach(input => {
			input.value = qty - 1;
		});
	});
 });
 
// Initial color swatch filtering if size is selected
const currentSizeElement = document.querySelector("#purchase .size-choice.current-size");
if (currentSizeElement) {
	filterColorSwatches(currentSizeElement.getAttribute("data-size"));
}


var vis = (function () {
	var stateKey, eventKey, keys = {
		hidden: "visibilitychange",
		webkitHidden: "webkitvisibilitychange",
		mozHidden: "mozvisibilitychange",
		msHidden: "msvisibilitychange"
	};
	for (stateKey in keys) {
		if (stateKey in document) {
			eventKey = keys[stateKey];
			break;
		}
	}
	return function (c) {
		if (c) {
			document.addEventListener(eventKey, c);
			//document.addEventListener("blur", c);
			//document.addEventListener("focus", c);
		}
		return !document[stateKey];
	};
})();

var storeTitle = document.title,
	myAnimation;

let array = [
	"🥺 ",
	"Come ",
	" Back!",
	" 🥺"
];

function getLokTitle() {

	var title = '🥺';
	//let title = "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 🚄 ",
	i = 1;

	document.title = title;

	myAnimation = setTimeout(function () {
		setInterval(function () {
			document.title += array[i];
			i = (i + 1) % array.length;
			if (i === 1) {
				document.title = '🥺';
			}

			if (vis() === true) {
				clearTimeout(myAnimation);
				document.title = storeTitle;
				return storeTitle;
			}
		}, 250);
	}, 1000);

	return title;
}

function getStoreTitle() {

	if (typeof myAnimation !== "undefined") {
		clearTimeout(myAnimation);
	}
	return storeTitle;
}

vis(function () {
	document.title = vis() ? getStoreTitle() : getLokTitle();
});

// to set the initial state
document.title = vis() ? getStoreTitle() : getLokTitle();

function toggleArrows(container, leftArrow, rightArrow) {
	const scrollIsAtBeggining = container.scrollLeft <= 0;
	const scrollIsAtEnd =
		container.scrollLeft + container.clientWidth >= container.scrollWidth;

	if (scrollIsAtBeggining) {
		hideArrow(leftArrow);
	} else if (scrollIsAtEnd) {
		hideArrow(rightArrow);
	} else {
		showArrow(leftArrow);
		showArrow(rightArrow);
	}
}

function scrollRight(container, elementWidth) {
	container.scrollLeft += elementWidth * 2;
}

function scrollLeft(container, elementWidth) {
	container.scrollLeft -= elementWidth * 2;
}

function showArrow(arrow) {
	arrow.classList.remove("not-visible");
}

function hideArrow(arrow) {
	arrow.classList.add("not-visible");
}


function setupArrowsForColors() {
	const amazonColors = document.querySelector(".mobile-form-element .color-sc");
	const colorsScroll = amazonColors.querySelector(".mobile-colors-container");

	// Get the first element to know its width
	const amazonColor = amazonColors.querySelector(".amazon-color");

	const colorLeftArrow = amazonColors.querySelector(".color-sc .accordion-arrow-left");
	const colorRightArrow = amazonColors.querySelector(".color-sc .accordion-arrow-right");

	const styles = getComputedStyle(colorsScroll);
	const gap = parseInt(styles.getPropertyValue("gap"));

	colorRightArrow?.addEventListener("click", () =>
		scrollRight(colorsScroll, amazonColor.clientWidth + gap)
	);
	colorLeftArrow?.addEventListener("click", () =>
		scrollLeft(colorsScroll, amazonColor.clientWidth + gap)
	);

	colorsScroll?.addEventListener("scroll", () => {
		toggleArrows(colorsScroll, colorLeftArrow, colorRightArrow);
	});
}

function setupArrowsForSizes() {
	const amazonSizes = document.querySelector(".mobile-form-element .size-sc");
	const sizesScroll = amazonSizes.querySelector(".mobile-size-selector");

	// Get the first element to know its width
	const amazonSize = amazonSizes.querySelector(".mobile-form-element .mobile-size-item.amazon-size");

	const sizeLeftArrow = amazonSizes.querySelector(".size-sc .accordion-arrow-left");
	const sizeRightArrow = amazonSizes.querySelector(".size-sc .accordion-arrow-right");

	sizeRightArrow?.addEventListener("click", () =>
		scrollRight(sizesScroll, amazonSize.clientWidth)
	);
	sizeLeftArrow?.addEventListener("click", () =>
		scrollLeft(sizesScroll, amazonSize.clientWidth)
	);

	sizesScroll?.addEventListener("scroll", () => {
		toggleArrows(sizesScroll, sizeLeftArrow, sizeRightArrow);
	});
}

setupArrowsForColors();
setupArrowsForSizes();
scrollRight(document.querySelector(".mobile-size-selector"), "75")
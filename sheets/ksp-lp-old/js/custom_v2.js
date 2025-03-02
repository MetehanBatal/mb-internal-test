jQuery(document).ready(function ($) {

	const imageCount = {
		stone: 7,
		white: 7,
		sky_blue: 6,
		navy_blue: 5,
		sand: 5,
		sage: 6,
		charcoal: 6,
		terracotta: 7,
		slate_blue: 6,
		silver_grey: 6,
		rosewood : 7,
	}

	let isMobile;
	let selectedColor = "stone";
	let selectedSize = "full";

	function initSlider() {
		thumbsSwiper = new Swiper('.swiper-thumbnails', {
			allowTouchMove: false,
			watchSlidesProgress: true
		});

		swiper = new Swiper('.swiper-main', {
			loop: true,
			speed: 500,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets'
			},

			// Navigation arrows
			navigation: {
				nextEl: '.right-arrow-inside',
				prevEl: '.left-arrow-inside',
			},

			breakpoints: {
				767: {
					pagination: false
				}
			},

			thumbs: {
				swiper: thumbsSwiper,
			}
		});

		$(`.swiper-slide[data-swiper-slide-index="${imageCount['stone'] - 1}"]`).addClass('last-thumb');
	}

	initSlider();

	$(`.swiper-slide[data-swiper-slide-index="${imageCount - 1}"]`).addClass('last-thumb');


	$('.to-atc').click(function (e) {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#atc").offset().top - 130
		}, 1200);
	});
	$('.to-atcr').click(function (e) {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#atc-r").offset().top - 130
		}, 1200);
	});

	$(".checkout-variant-quantity-selector li.option").click(function (e) {
		let value = e.target.getAttribute('data-value');
		console.log("Value : ", value)
		$(".quantity_input").val(value);
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
				sky_blue: { remaining : 3, variantId: 42636035326102, productTitle: 'Sky Blue Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: 'images/3pc-sky.png' },
				navy_blue: { variantId: 42636035293334, productTitle: 'Navy Blue Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
				sage: { limitedEdition: true, variantId: 42636035489942, productTitle: 'Sage Sheet Set - Queen', price: 164, regularPrice: 259, productSavings: 36, productReviews: 439, imgUrl: '' },
				charcoal: { variantId: 42636035522710, productTitle: 'Charcoal Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
				terracotta: { limitedEdition: true, variantId: 42636035588246, productTitle: 'Terracotta Sheet Set - Queen', price: 139, regularPrice: 234, productSavings: 40, productReviews: 439, imgUrl: '' },
				slate_blue: { variantId: 43623967719574, productTitle: 'Slate Blue Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
				silver_grey: { variantId: 43623998488726, productTitle: 'Silver Grey Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
				rosewood: { variantId: 44247335829654, productTitle: 'Rosewood Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },				
			},
			king: {
				stone: { remaining : 8, variantId: 42636035948694, productTitle: 'Stone Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: 'images/3pc-stone.png' },
				white: { remaining : 2, variantId: 42636036079766, productTitle: 'White Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: 'images/3pc-white.png' },
				sand: { variantId: 42636036046998, productTitle: 'Sand Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: 'images/sand-sheets.png' },
				sky_blue: { remaining : 13, variantId: 42636036014230, productTitle: 'Sky Blue Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: 'images/3pc-sky.png' },
				navy_blue: { variantId: 42636035981462, productTitle: 'Navy Blue Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: '' },
				sage: { limitedEdition: true, variantId: 42636036210838, productTitle: 'Sage Sheet Set - King', price: 174, regularPrice: 270, productSavings: 35, productReviews: 234, imgUrl: '' },
				charcoal: { variantId: 42636036145302, productTitle: 'Charcoal Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: '' },
				terracotta: {limitedEdition: true, variantId: 42636036276374, productTitle: 'Terracotta Sheet Set - King', price: 149, regularPrice: 245, productSavings: 39, productReviews: 234, imgUrl: '' },
				//slate_blue: { variantId: 43624013463702, productTitle: 'Charcoal Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: '' },
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
				sky_blue: { remaining : 3, variantId: 42558763270294, productTitle: 'Sky Blue Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: 'images/3pc-sky.png' },
				navy_blue: { variantId: 42558763106454, productTitle: 'Navy Blue Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
				sage: { variantId: 42558764843158, productTitle: 'Sage Sheet Set - Queen', price: 164, regularPrice: 259, productSavings: 36, productReviews: 439, imgUrl: '' },
				charcoal: {limitedEdition: true, variantId: 42558764875926, productTitle: 'Charcoal Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
				terracotta: {limitedEdition: true, variantId: 42558764908694, productTitle: 'Terracotta Sheet Set - Queen', price: 139, regularPrice: 234, productSavings: 42, productReviews: 439, imgUrl: '' },
				slate_blue: { variantId: 43624117403798, productTitle: 'Slate Blue Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
				silver_grey: { variantId: 43624144437398, productTitle: 'Silver Grey Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
				rosewood: { variantId: 44247342743702, productTitle: 'Silver Grey Sheet Set - Queen', price: 129, regularPrice: 224, productSavings: 42, productReviews: 439, imgUrl: '' },
			},
			king: {
				stone: { remaining : 8, variantId: 42558763761814, productTitle: 'Stone Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: 'images/3pc-stone.png' },
				white: { remaining : 2, variantId: 42558763925654, productTitle: 'White Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: 'images/3pc-white.png' },
				sand: { variantId: 42558763827350, productTitle: 'Sand Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: 'images/sand-sheets.png' },
				sky_blue: { remaining : 13, variantId: 42558763958422, productTitle: 'Sky Blue Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: 'images/3pc-sky.png' },
				navy_blue: { variantId: 42558763794582, productTitle: 'Navy Blue Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: '' },
				sage: { variantId: 42558764646550, productTitle: 'Sage Sheet Set - King', price: 174, regularPrice: 270, productSavings: 35, productReviews: 234, imgUrl: '' },
				charcoal: {limitedEdition: true, variantId: 42558764679318, productTitle: 'Charcoal Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: '' },
				terracotta: {limitedEdition: true, variantId: 42558764712086, productTitle: 'Terracotta Sheet Set - King', price: 149, regularPrice: 245, productSavings: 39, productReviews: 234, imgUrl: '' },
				//slate_blue: { variantId: 43624154497174, productTitle: 'Charcoal Sheet Set - King', price: 139, regularPrice: 235, productSavings: 40, productReviews: 234, imgUrl: '' },
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
			? $(".mobile-size-selector .mobile-size-item.current-size").attr("value")
			: $(".size-sc .list li.option.current-size").attr("data-value"),
		  color: isMobile
			? $(".mobile-colors-container .color-choice.current-color").attr("data-color")
			: $(".desktop-colors-container .color-choice.current-color").attr("data-color"),
		  quantity: isMobile
			? $(".mobile_quantity_input").val()
			: $(".quantity_input").val()
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
		var fabric = 'signature';
		let media = window.innerWidth > 479 ? "desktop" : "mobile";
		var size;
		var color;
		var price;
		var quantity;

		size = media === "desktop" ? $('.size-sc .list .current-size[data-value]').attr("data-value") : $(".mobile-size-selector .mobile-size-item.current-size").attr("value");
		color = media === "desktop" ? $("input[name='color']:checked").val().toLowerCase().replace(' ', '_') : $('.mobile-colors-container .color-choice.current-color').attr("data-color");

		console.log("Color : Sel Variant", color)
		console.log("Size : Sel Variant", size)

		quantity = media === "desktop" ? $(".quantity_input").val().toString() : $(".mobile_quantity_input").val().toString();

		console.log("size")
		price = variants[fabric][size][color]['price'];

		console.log("Price : ", price)

		$(".es_price").text(price);
		$(".es_saving_percent").text(variants[fabric][size][color]['productSavings']);
		$(".es_reg_price").text(variants[fabric][size][color]['regularPrice']);
		$(".total_savings").text(variants[fabric][size][color]['regularPrice'] - price);
		if(variants[fabric][size][color].limitedEdition) {
			$(".limited-edition-mark").removeClass("hidden")
		}else {
			$(".limited-edition-mark").addClass("hidden")
		}		

		
		const currentColorElement = media === "mobile"
			? $(".mobile-colors-container .color-choice.current-color")
			: $(".desktop-colors-container .color-choice.current-color");

		$(".color-name.current-color").text(
			currentColorElement.attr("data-color").replace("_", " ")
		);

		$(".mobile-size-name").text(size.replace("_", " "))
		scrollToSelectedElements();

		let sizeElements = document.querySelectorAll(".mobile-size-selector .mobile-size-item");
		sizeElements.forEach(element => {
			const currentSize = element.getAttribute("value");
			// Get remaining value for current size and color combination
			const remaining = withOutTowelVariants?.signature?.[currentSize]?.[color]?.remaining;
			const inStockEl = element.querySelector(".in-stock");
			const notStockEl = element.querySelector(".not-stock");
			const promoPriceEl = element.querySelector(".promo-price");

			if (element.classList.contains("sold")) {
				inStockEl.style.display = "none";
				notStockEl.style.display = "block";
				promoPriceEl.style.display = "none";
			} else {
				notStockEl.style.display = "none";
				promoPriceEl.style.display = "block";
				inStockEl.style.display = "block";

				if (remaining) {
					inStockEl.classList.add("limited");
					inStockEl.textContent = `${remaining} Sets Left`;
				} else {
					inStockEl.classList.remove("limited");
					inStockEl.textContent = "In stock";
				}
			}
		});
	}

	function scrollToSelectedElements() {
		const currentSizeElement = $('.mobile-size-item.current-size')[0];
		console.log($(currentSizeElement).attr("value"))
		if (currentSizeElement && selectedSize !== $(currentSizeElement).attr("value")) {
			const parentContainer = $('.mobile-size-selector')[0];
			parentContainer.scroll({
				left: currentSizeElement.offsetLeft - (parentContainer.clientWidth / 2) + (currentSizeElement.clientWidth / 2),
				behavior: 'smooth'
			});

			$(currentSizeElement.parentElement)
				.css({
					'transition': 'background-color 500ms',
					'background-color': '#d9ecd9'
				});

			setTimeout(() => {
				$(currentSizeElement.parentElement).css({
					'background-color': ''
				});
				selectedSize = $(currentSizeElement).attr("value")
			}, 1000);
		}

		const currentColorElement = $('.mobile-colors-container .color-choice.current-color')[0];
		console.log("Current Color : ", currentColorElement)

		if (currentColorElement && selectedColor !== $(currentColorElement).attr("data-color")) {
			const parentContainer = $('.mobile-colors-container')[0];
			parentContainer.scroll({
				left: currentColorElement.offsetLeft - (parentContainer.clientWidth / 2) + (currentColorElement.clientWidth / 2),
				behavior: 'smooth'
			});

			$(currentColorElement.parentElement)
				.css({
					'transition': 'background-color 500ms',
					'background-color': '#d9ecd9'
				});

			setTimeout(() => {
				$(currentColorElement.parentElement).css({
					'background-color': ''
				});
				selectedColor = $(currentColorElement).attr("data-color")
			}, 1000);
		}
	}





	function setFreeTowelImage(color) {
		$(".free-image").attr("src", `/sheets/ksp-lp/images/towels/towel_${color}.png`)
	}

	// Checking Stock Status
	// Combination Control, quantity, size, color
	function checkStock(fabric, quantity, size, color) {
		try {
			// Parametreleri normalize edelim
			size = size?.toLowerCase();
			color = color?.toLowerCase().replace(/\s+/g, '_');

			// Varyant kontrolü
			const variant = variants?.[fabric]?.[size]?.[color];
			return !!variant?.variantId;
		} catch (error) {
			console.error('Stock Issue :', error);
			return false;
		}
	}

	function filterColorSwatches(size, autoSelect = false) {
		const fabric = 'signature';
		const isMobile = window.innerWidth <= 479;
		const quantity = isMobile ? $(".mobile_quantity_input").val().toString() : $(".quantity_input").val().toString();

		// Container Selection 
		const colorContainer = isMobile
			? $(".mobile-colors-container")
			: $(".desktop-colors-container");

		// Selected Color 
		const currentColorElement = colorContainer.find(".color-choice.current-color");
		const currentColor = currentColorElement.length
			? currentColorElement.attr("data-color")?.toLowerCase().replace(/\s+/g, '_')
			: null;

		colorContainer.find(".color-choice").each(function () {
			const colorElement = $(this);
			const color = colorElement.attr("data-color").toLowerCase().replace(/\s+/g, '_');

			const inStock = checkStock(fabric, quantity, size, color);
			console.log(`Color ${color} stock status:`, inStock);

			if (!inStock) {
				colorElement.addClass("sold");
			} else {
				colorElement.removeClass("sold");
				// Check if there's a remaining count for this variant
				const size = isMobile 
					? $(".mobile-size-selector .mobile-size-item.current-size").attr("value")
					: $(".size-sc .list li.option.current-size").attr("data-value");
				
				const remaining = withOutTowelVariants?.signature?.[size]?.[color]?.remaining;
				
				if (remaining) {
					// Find the corresponding size item
					const sizeItem = $(`.mobile-size-item[value="${size}"]`);
					const inStockElement = sizeItem.find(".in-stock");
					
					inStockElement.addClass("limited");
					inStockElement.text(`Only ${remaining} left`);
				}
			}
		});

		// If selected color is OOS
		if (currentColor && !checkStock(fabric, quantity, size, currentColor)) {
			// Finding first color which in stock 
			const firstAvailableColor = colorContainer.find(".color-choice").not(".sold").first();
			console.log("First Available Color:", firstAvailableColor);

			if (firstAvailableColor.length && !autoSelect) {
				// This is for closing size element
				firstAvailableColor.click();
				$(".amazon-warning-text.hidden").removeClass("hidden");
			}
		}else {
			$(".amazon-warning-text").addClass("hidden");
		}
	}

	function filterSizeSwatches(color, autoSelect = false) {
		const fabric = 'signature';
		const isMobile = window.innerWidth <= 479;
		const quantity = isMobile ? $(".mobile_quantity_input").val().toString() : $(".quantity_input").val().toString();

		// Clear all sold classes
		if (isMobile) {
			$(".mobile-size-selector .mobile-size-item").removeClass("sold");
		} else {
			$(".size-sc .list li.option").removeClass("sold");
		}

		// Container selection
		const container = isMobile
			? $(".mobile-size-selector .mobile-size-item")
			: $(".size-sc .list li.option");

		// Get selected Size
		const currentSize = isMobile
			? $(".mobile-size-selector .mobile-size-item.current-size").attr("value")
			: $(".size-sc .list li.option.current-size").attr("data-value");

		let hasCurrentSizeInStock = false;
		let firstAvailableSize = null;

		// Check every sizes
		container.each(function () {
			const sizeElement = $(this);
			const size = isMobile ? sizeElement.attr("value") : sizeElement.attr("data-value");

			// Stok kontrolü
			if (!checkStock(fabric, quantity, size, color)) {
				sizeElement.addClass("sold");
			} else {
				if (!firstAvailableSize) {
					firstAvailableSize = size;
				}
				if (size === currentSize) {
					hasCurrentSizeInStock = true;
				}
			}
		});

		// If Size is OOS 
		if (!hasCurrentSizeInStock && !autoSelect && firstAvailableSize) {
			selectSize(firstAvailableSize, isMobile);
			filterColorSwatches(firstAvailableSize, true);
		}
	}

	// Size Selection handler
	$(".size-sc li.option, .mobile-size-selector .mobile-size-item").click(function (e) {
		const isMobile = $(this).closest('.mobile-size-selector').length > 0;
		const wrapper = isMobile ? $(this).closest('.mobile-size-selector') : $(this).closest('.size-sc .list');
		const sizeValue = isMobile ? $(this).attr("value") : $(this).attr("data-value");

		filterColorSwatches(sizeValue, false);

		wrapper.find(isMobile ? '.mobile-size-item' : 'li.option').removeClass("current-size");
		$(this).addClass("current-size");
		$(".mobile-size-name").text(sizeValue.replace("_", " "));
		scrollToSelectedElements();
		selVariant()

		if ($(this).attr('data-value') === 'twin' || $(this).attr('value') === 'twin') {
			console.log("Its Worked")
			$('.twin-only').each(function () {
				$(this).removeClass("hidden");
			});
			$('.non-twin').each(function () {
				$(this).addClass("hidden");
			});
		} else {
			$('.twin-only').addClass('hidden');
			$('.non-twin').removeClass('hidden');
		}

		saveSelections()
	});


	// Color Choice Event Handler
	$(".color-choice").click(function (e) {
		const colorElement = $(this);
		const isMobile = window.innerWidth <= 479;
		const color = colorElement.attr("data-color");
		const fabric = 'signature';
		const quantity = isMobile ? $(".mobile_quantity_input").val().toString() : $(".quantity_input").val().toString();
		// If color is OOS, find a size
		if (colorElement.hasClass("sold")) {
			console.log("Checking Color:", color);

			// Check all sizes
			const sizeElements = isMobile
				? $(".mobile-size-selector .mobile-size-item")
				: $(".size-sc .list li.option");

			let availableSizes = [];

			// Check stock for every size
			sizeElements.each(function () {
				const sizeElement = $(this);
				const size = isMobile ? sizeElement.attr("value") : sizeElement.attr("data-value");
				
				if (variants?.[fabric]?.[size]?.[color]?.variantId) {
					availableSizes.push({
						element: sizeElement,
						size: size
					});
				}
			});

			// If in stock variant founded
			if (availableSizes.length > 0) {
				console.log("Stokta olan bedenler bulundu:", availableSizes.map(s => s.size));

				// Select first variant
				const firstAvailableSize = availableSizes[0];

				// Update sold classes
				sizeElements.each(function () {
					const sizeElement = $(this);
					const size = isMobile ? sizeElement.attr("value") : sizeElement.attr("data-value");

					if (!variants?.[fabric]?.[size]?.[color]?.variantId) {
						sizeElement.addClass("sold");
					} else {
						sizeElement.removeClass("sold");
					}
				});

				// Update Size selection
				sizeElements.removeClass("current-size selected");
				firstAvailableSize.element[0].click();
				$(".amazon-warning-text.hidden").removeClass("hidden");
				

				// Update Color selection
				const colorContainer = isMobile
					? $(".mobile-colors-container")
					: $(".desktop-colors-container");

				colorContainer.find(".color-choice").removeClass("current-color selected");
				colorElement.addClass("current-color selected");

				// UI Updates
				$(".color-name.current-color").text(color.replace(/_/g, " "));
				updateSlider(color);
				setFreeTowelImage(color);
				updateMobileSizePrices();
				selVariant();
			} else {
				console.warn("Bu renk için stokta hiç beden bulunamadı:", color);
				return;
			}
		} else {
			const colorContainer = isMobile
				? $(".mobile-colors-container")
				: $(".desktop-colors-container");

			colorContainer.find(".color-choice").removeClass("current-color selected");
			colorElement.addClass("current-color selected");

			const currentSize = isMobile
				? $(".mobile-size-selector .mobile-size-item.current-size").attr("value")
				: $(".size-sc .list li.option.current-size").attr("data-value");

			filterSizeSwatches(color, false);

			$(".color-name.current-color").text(color.replace(/_/g, " "));
			$(".amazon-warning-text").addClass("hidden");
			updateSlider(color);
			setFreeTowelImage(color);
			selVariant();

			updateMobileSizePrices();
			scrollToSelectedElements();
			saveSelections()
		}
	});

	function selectSize(size, isMobile) {
		if (isMobile) {
			$(".mobile-size-selector .mobile-size-item")
				.removeClass("current-size")

			$(`.mobile-size-selector .mobile-size-item[value="${size}"]`)
				.addClass("current-size")

			let sizeName = size.replace(/_/g, ' ');
			sizeName = sizeName.charAt(0).toUpperCase() + sizeName.slice(1);
			console.log("Size Name :", sizeName)
		} else {
			$(".size-sc .list li.option")
				.removeClass("current-size")

			$(`.size-sc .list li.option[data-value="${size}"]`)
				.addClass("current-size")
		}
		filterColorSwatches(size, false);
		selVariant();
	}
	function selectColor(color, isMobile) {
		const container = isMobile
			? $(".mobile-colors-container")
			: $(".desktop-colors-container");

		container.find(".color-choice")
			.removeClass("current-color")

		container.find(`[data-color="${color}"]`)
			.addClass("current-color")

		$(".color-name.current-color").text(color.replace(/_/g, " "));
		selVariant();
	}

	function updateMobileSizePrices() {
		var fabric = 'signature';
		var color = $('.mobile-colors-container .color-choice.current-color').attr('data-color') || 'stone';

		$('.mobile-size-selector .mobile-size-item').each(function () {
			var size = $(this).attr('value');

			// Check is there any in stock variant
			if (variants[fabric][size] && variants[fabric][size][color]) {
				var variant = variants[fabric][size][color];

				$(this).find('.promo-price').html(
					`<span class="strikethrough-price">$${variant.regularPrice}</span> $${variant.price}`
				);

				$(this).removeClass('sold');
			} else {
				$(this).addClass('sold');
			}
		});
	}


	function updateSlider(color) {	
		swiper.destroy();

		$('.swiper-main .swiper-wrapper').html('');
		$('.swiper-thumbnails .swiper-wrapper').html('');

		for (let i = 1; i < imageCount[color] + 1; i++) {
			let mainSlideTemplate = `<div class="swiper-slide"><img src="/sheets/ksp-lp/images/sliders/${color.toLowerCase().replace(' ', '-')}/m_${i}.webp" alt="" class="product-img"></div>`;
			let thumbnailsSlideTemplate = `<div class="swiper-slide product-icon-2"><img src="/sheets/ksp-lp/images/sliders/${color.toLowerCase().replace(' ', '-')}/m_${i}_thumb.webp" loading="lazy" alt="" class="img-fluid"></div>`;

			// console.log( document.querySelector('.swiper-main .swiper-wrapper'), mainSlideTemplate );
			$('.swiper-main .swiper-wrapper').append(mainSlideTemplate);
			$('.swiper-thumbnails .swiper-wrapper').append(thumbnailsSlideTemplate);

			if (i === imageCount[color]) {
				initSlider();

				$('.swiper-slide').removeClass('last-thumb');
				$(`.swiper-slide[data-swiper-slide-index="${imageCount[color] - 1}"]`).addClass('last-thumb');
			}
		}

	}

	$(".mobile_quantity_input").on("change", function () {
		updateMobileSizePrices();
	});

	window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
	window.checkoutReadyCallbacks.push(() => {
	  const savedSelections = loadSelections();
	  
	  if (savedSelections) {
		const isMobile = window.innerWidth <= 479;
		
		// Size selection
		if (savedSelections.size) {
		  if (isMobile) {
			$(`.mobile-size-selector .mobile-size-item[value="${savedSelections.size}"]`).addClass("current-size");
		  } else {
			$(`.size-sc .list li.option[data-value="${savedSelections.size}"]`).click();
		  }
		} else {
		  // Fallback to default full size
		  if (isMobile) {
			$('.mobile-size-selector .mobile-size-item[value="full"]').addClass("current-size");
		  } else {
			$('.list li[data-value="full"]').click();
		  }
		}
		
		// Color selection
		if (savedSelections.color) {
		  const colorSelector = isMobile 
			? `.mobile-colors-container .color-choice[data-color="${savedSelections.color}"]`
			: `.desktop-colors-container .color-choice[data-color="${savedSelections.color}"]`;
		  $(colorSelector).click();
		}
		
		// Quantity selection
		if (savedSelections.quantity) {
		  if (isMobile) {
			$(".mobile_quantity_input").val(savedSelections.quantity);
		  } else {
			$(".quantity_input").val(savedSelections.quantity);
		  }
		}
	  } else {
		// Make default Full Size
		const isMobile = window.innerWidth <= 479;
		if (isMobile) {
		  $('.mobile-size-selector .mobile-size-item[value="full"]').addClass("current-size");
		} else {
		  $('.list li[data-value="full"]').click();
		}
	  }
	  
	  selVariant();
	  updateMobileSizePrices();
	  
	  $('.swiper-slide.swiper-slide-duplicate.swiper-slide-prev img').attr('src', 
		$('.swiper-slide.swiper-slide-duplicate.swiper-slide-prev img').attr('data-src')
	  );
	});

	$(".buy-now-button").click(function (e) {
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
				size = $(".mobile-size-selector .mobile-size-item.current-size").attr("value");
				color = $(".mobile-colors-container .color-choice.current-color").attr("data-color");
				data = {};
				quantity = $(".mobile_quantity_input").val().toString();

				if ($("#free-gift-check-desktop").prop("checked") || $("#free-gift-check-mobile").prop("checked")) {
					data[variants[fabric][size][color]['variantId']] = quantity;
					whiteColors = ["white", "sage", "terracotta", "silver_grey","rosewood"];
					stoneColors = ["stone", "charcoal", "sand", ];
					skyblueColors = ["navy_blue","sky_blue","slate_blue"]
	
					let variantId;
	
					if (whiteColors.includes(color)) {
						variantId = 42508804784278; // White variant ID
					} else if (stoneColors.includes(color)) {
						variantId = 42508804751510; // Stone variant ID
					}else if(skyblueColors.includes(color)){
						variantId = 42508804817046;
					}
	
					if (variantId) {
						data[variantId] = quantity
					}
				} else {
					console.log("Without Towel",withOutTowelVariants)
					console.log("fabric",fabric)
					console.log("size",size)
					console.log("color",color)
					data[withOutTowelVariants[fabric][size][color]['variantId']] = quantity;
				}
				data[42536178319510] = 1;
				console.log("Add to Cart");
				console.log(data);
			} else {
				size = $("li.option.current-size.selected").attr("data-value");
				color = $(".color-choice.current-color").attr("data-color");
				data = {};
				quantity = $(".quantity_input").val().toString();

				if ($("#free-gift-check-desktop").prop("checked")) {
					data[variants[fabric][size][color]['variantId']] = quantity;
					whiteColors = ["white", "sage", "terracotta", "silver_grey","rosewood"];
					stoneColors = ["stone", "charcoal", "sand", ];
					skyblueColors = ["navy_blue","sky_blue","slate_blue"]
	
					let variantId;
	
					if (whiteColors.includes(color)) {
						variantId = 42508804784278; // White variant ID
					} else if (stoneColors.includes(color)) {
						variantId = 42508804751510; // Stone variant ID
					}else if(skyblueColors.includes(color)){
						variantId = 42508804817046;
					}
	
					if (variantId) {
						data[variantId] = quantity
					}
				} else {
					console.log("Without Towel",withOutTowelVariants)
					console.log("fabric",fabric)
					console.log("size",size)
					console.log("color",color)
					data[withOutTowelVariants[fabric][size][color]['variantId']] = quantity;
				}
				data[42536178319510] = 1;
				console.log("Add to Cart");
				console.log(data);
			}


			window.checkout.apiClient.setVariantQuantities(data).then(x => {
				console.log("Variant Set.");
				window.checkout.setCart(x);
				window.checkout.drawCart(x);
				const targetVariants = [
					"43965127753878", // TWIN XL STONE
					"43965143613590", // TWIN XL STONE WITHOUT TOWEL
					"44247335829654", // ROSEWOOD QUEEN
					"44247335862422", // ROSEWOOD KING
					"44247342743702", // ROSEWOOD QUEEN WITHOUT TOWEL
					"44247342776470", // ROSEWOOD KING WITHOUT TOWEL
					"43623998488726", // SILVER GREY WITH TOWEL
					"43624144437398", // SILVER GREY WITHOUT TOWEL
					"42636035260566", // STONE QUEEN
					"42558763073686", // STONE QUEEN WITHOUT TOWEL
					"43623967719574", // SLATE BLUE QUEEN 
					"43624117403798", // SLATE BLUE QUEEN WITHOUT TOWEL
					"43965130702998", // SPLIT KING STONE
					"43965152723094", // SPLIT KING STONE WITHOUT TOWEL
				];		
				
				const hasAnyTargetVariant = targetVariants.some(variantId => variantId in data);				
			
				if (hasAnyTargetVariant) {
					window.location.href = '/checkout_v91/secure.html?uf=red';
				} else {
					window.location.href = '/checkout_v91/secure.html?uf=green';
				}
			});
		});
	});
});

$(".quantity_input, .mobile_quantity_input").change(function() {
	saveSelections();
});

$(".quantity .btn-quantity_plus").click(function (e) {
	var qty = parseInt($(".quantity .quantity_input").val());
	$(".quantity .quantity_input").val(qty + 1);;
	$(".quantity .mobile_quantity_input").val(qty + 1);;
});

$(".quantity .btn-quantity_minus").click(function (e) {
	var qty = parseInt($(".quantity .quantity_input").val());
	if (qty <= 1) {
		return;
	}
	$(".quantity .quantity_input").val(qty - 1);;
	$(".quantity .mobile_quantity_input").val(qty - 1);;
});

$(".quantity_input").on("change", function (e) {
	console.log(this)
})

if ($("#purchase .size-choice.current-size").length > 0) {
	filterColorSwatches($("#purchase .size-choice.current-size").attr("data-size"));
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
	//console.log(new Date, 'visible ?', vis());
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

setupArrowsForColors()
setupArrowsForSizes()
scrollRight(document.querySelector(".mobile-size-selector"), "75")
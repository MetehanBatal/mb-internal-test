window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
window.checkoutReadyCallbacks.push(() => {
	if (checkoutData.cart.shippingZone !== "US") {
		document.querySelectorAll(".non-usa").forEach(function(usaOnly) { usaOnly.innerHTML = "USD "});
	}
});

/* DYNAMIC COLOR CHANGE VARIANTS*/
const whiteProducts = [
    "42636035752086",  // variants - Twin
    "42636035915926",  // variants - Full
    "42636035391638",  // variants - Queen
    "42636036079766",  // variants - King
    "43965133127830",  // variants - Split King
    "42558763466902",  // withOutTowel - Twin
    "42558763696278",  // withOutTowel - Full
    "42558763237526",  // withOutTowel - Queen
    "42558763925654",  // withOutTowel - King
    "43965154721942"   // withOutTowel - Split King
];

const stoneProducts = [
    "42636035621014",  // variants - Twin
    "42636035784854",  // variants - Full
    "42636035260566",  // variants - Queen
    "42636035948694",  // variants - King
    "42636036309142",  // variants - Cali King
    "42558763303062",  // withOutTowel - Twin
    "42558763532438",  // withOutTowel - Full
    "42558763073686",  // withOutTowel - Queen
    "42558763761814",  // withOutTowel - King
    "42558764384406"   // withOutTowel - Cali King
];

const skyBlueProducts = [
    "42636035850390",  // variants - Full
    "42636035326102",  // variants - Queen
    "42636036014230",  // variants - King
    "42636036407446",  // variants - Cali King
    "42558763729046",  // withOutTowel - Full
    "42558763270294",  // withOutTowel - Queen
    "42558763958422",  // withOutTowel - King
    "42558764581014"   // withOutTowel - Cali King
];

const sandProducts = [
    "42636035358870",  // variants - Queen
    "42636036046998",  // variants - King
    "42558763139222",  // withOutTowel - Queen
    "42558763827350"   // withOutTowel - King
];

const navyBlueProducts = [
    "42636035293334",  // variants - Queen
    "42636035981462",  // variants - King
    "42558763106454",  // withOutTowel - Queen
    "42558763794582"   // withOutTowel - King
];

const sageProducts = [
    "42636035489942",  // variants - Queen (Limited Edition)
    "42636036210838",  // variants - King (Limited Edition)
    "42558764843158",  // withOutTowel - Queen
    "42558764646550"   // withOutTowel - King
];

const charcoalProducts = [
    "44077809860758",  // variants - Full
    "42636035522710",  // variants - Queen
    "42636036145302",  // variants - King
    "44082956238998",  // withOutTowel - Full
    "42558764875926",  // withOutTowel - Queen (Limited Edition)
    "42558764679318"   // withOutTowel - King (Limited Edition)
];

const terracottaProducts = [
    "42636035588246",  // variants - Queen (Limited Edition)
    "42636036276374",  // variants - King (Limited Edition)
    "42558764908694",  // withOutTowel - Queen (Limited Edition)
    "42558764712086"   // withOutTowel - King (Limited Edition)
];

const pathsWithNextAvailableColor = ["5b", "5b-cooling"];
const pathsWithNextAvailableSize = ["5b-cooling"]

let upsellHench = {
	choices: "",

	fabric: pagePath === "2d" ? "luxe" : "signature",

	size: pagePath === "6b" || pagePath === "5b" || pagePath === "5b-cooling" || pagePath === "4b" || pagePath === "2c" ? "queen" : "full",

	color: pathsWithNextAvailableColor.includes(pagePath)
		? nextAvailableColor
		: "stone",

	quantity: "1",

	swiper: "",

	thumbsSwiper: "",

	initSwiper: function () {
		const self = this;

		if (hasSlider) {
			self.thumbsSwiper = new Swiper('.swiper-thumbnails', {
				slidesPerView: 5,
				spaceBetween: 8,
				watchSlidesProgress: true
			});

			self.swiper = new Swiper('.swiper-main', {
				loop: true,

				// Navigation arrows
				navigation: {
					nextEl: '.slider-pagination-button.next',
					prevEl: '.slider-pagination-button.prev',
				},

				thumbs: {
					swiper: self.thumbsSwiper,
				}
			});
		}
	},

	getSizeData: function () {
		const self = this;
		const sizeVariants = variants[self.quantity][self.fabric][self.size];
		const matchingVariant = sizeVariants[self.color];
		return { sizeVariants, matchingVariant };
	},

    initVariantSelection: function () {
		const self = this;
  
		if (hasSelector) {
		  const element = document.querySelector(".variants");
  
		  self.choices = new Choices(element, {
			searchEnabled: false,
			itemSelectText: "",
		  });
  
		  self.choices.passedElement.element.addEventListener(
			"choice",
			function (event) {
			  if (pagePath === "5b" || pagePath === "5b-cooling") {
				const optionLabel = event.detail.label;
				const isQueen = optionLabel.toLowerCase().includes("queen");
				self.quantity = isQueen ? 2 : 1;
  
				const { sizeVariants, matchingVariant } = self.getSizeData();
  
				if (!matchingVariant && Object.keys(sizeVariants).length > 0) {
				  self.updateVariant("size");
				} else {
				  self.updateVariant();
				}
				self.filterOutOfStockProducts("color");
			  } else {
				self.quantity = event.detail.id;
				self.updateVariant();
			  }
			},
			false
		  );
  
		  if (pagePath === "5b" || pagePath === "5b-cooling") {
			// Selected Size Coming From Here
			self.quantity = nextAvailableSize === "queen" ? 1 : 2; 
		  } else {
			let shouldDefaultToOne = false;
  
			if (typeof useOneSheetSet !== "undefined") {
			  const sheetsUpsellPaths = ["2c", "2d"];
			  if (useOneSheetSet && sheetsUpsellPaths.includes(pagePath)) {
				shouldDefaultToOne = true;
			  }
			}
  
			self.quantity = shouldDefaultToOne ? 1 : 1;
		  }
  
  
		  if (hasColorSelection) {
			self.filterOutOfStockProducts("color");
		  }
  
		  self.usdPrefix();
  
		  if (
			pagePath === "2c" ||
			pagePath === "2d" ||
			pagePath === "5b" || pagePath === "5b-cooling"
		  ) {
			self.updateQuantities();
		  }
		}
	  },


	usdPrefix: function () {
		const self = this;

		window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
		window.checkoutReadyCallbacks.push(() => {
			if (checkoutData.cart.shippingZone !== "US") {

			}
		});
	},

	listenVariantChange: function () {
		const self = this;

		if (hasFabricSelection) {
			let fabricSelectors = document.querySelectorAll(
				'input[type=radio][name="fabric"]'
			);
			fabricSelectors.forEach(function (selector) {
				const fabricParentElement = selector.parentNode;
				const fabricValue = selector.getAttribute("value");
				const fabricHasProducts = checkIfFabricHasProducts(
					self.quantity,
					fabricValue
				);

				selector.addEventListener("change", function () {
					self.fabric = this.value;

					if (hasSizeSelection) {
						// If necessary, hide the sizes selectors here

						const size = document.querySelector(
							'input[type=radio][name="size"]:checked'
						).value;

						let sizeVariants;

						if(pagePath === "6b") {
							sizeVariants = variants[self.fabric][self.size];
						}else {
							sizeVariants = variants[self.quantity][self.fabric][self.size];
						}

						if (Object.keys(sizeVariants).length > 0) {
							self.size = size;
						}
					}

					if (hasColorSelection) {
						const colorSelectors = document.querySelectorAll(
							'input[type=radio][name="color"]'
						);

						colorSelectors.forEach(function (colorSelector) {
							const value = colorSelector.getAttribute("value");
							const isAvailable = self.checkIfColorIsAvailable(value);

						});

						const colorValue = document.querySelector(
							'input[type=radio][name="color"]:checked'
						).value;

						self.color = self.getNewColorValue(colorValue);
					}

					const { sizeVariants, matchingVariant } = self.getSizeData();

					// If the default selected variant doesn't exist, select a new one
					if (!matchingVariant) {
						// If the selected size has colors available, select a new color
						if (Object.keys(selectedSizeVariants).length > 0) {
							self.updateVariant("size");
						} else {
							// Otherwise, select a new size
							self.updateVariant("color");
						}
					} else {
						self.updateVariant();
					}

					self.filterOutOfStockProducts("color");
				});
			});
		}

		if (hasSizeSelection) {
			let sizeSelectors = document.querySelectorAll(
			  'input[type=radio][name="size"]'
			);
			sizeSelectors.forEach(function (selector) {
			  const sizeValue = selector.getAttribute("value");
			  const sizeHasColors = checkIfSizeHasColors(
				sizeValue,
				self.quantity,
				self.fabric
			  );
	
			  selector.addEventListener("change", function () {
				if (!sizeHasColors) return;
	
				self.size = this.value;
	
				self.updateVariant("size");
				self.filterOutOfStockProducts("color");
				self.updateSizeName();
				if (hasSelector) {
				  self.updateQuantities();
	
				  let choices = document.querySelectorAll(".choices__item--choice");
				  choices.forEach(function (choice) {
					choice.classList.remove("is-highlighted");
					if (
					  parseInt(choice.getAttribute("data-value")) === self.quantity
					) {
					  choice.classList.add("is-selected");
					}
				  });
				}
			  });
			});
		  }

		if (hasColorSelection) {
			let colorSelectors = document.querySelectorAll(
				'input[type=radio][name="color"]'
			);
			colorSelectors.forEach(function (selector) {
				const value = selector.getAttribute("value");
				const isAvailable = self.checkIfColorIsAvailable(value)

				selector.addEventListener("change", function () {
					self.color = self.getNewColorValue(this.value);
					console.log(self.color)
					if (pagePath === "5b") {
						const { matchingVariant } = self.getSizeData();

						if (!matchingVariant) {
							// Change the quantity (how size is controlled in 5b) if
							// the selected color is not available in the current size.
							self.quantity = self.quantity == 2 ? 1 : 2;
							self.updateVariant("size");
						} else {
							self.updateVariant("color");
						}

						self.filterOutOfStockProducts("color");
						self.updateColorName();
						self.updateSliderImages();
						self.updateQuantities();
					} else {
						self.updateVariant("color");
						self.filterOutOfStockProducts("size");
						self.updateColorName();
						self.updateSliderImages();
					}
				});
			});
		}		
	},

	updateQuantities: function () {
		this.choices.clearStore()
		const self = this;
		let usPrefix = "";
		window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
		window.checkoutReadyCallbacks.push(() => {
			if (checkoutData.cart.shippingZone !== "US") {
				usPrefix = " USD";
			}
		});

		let items = [];
		Object.keys(variants).forEach(function (quantity, index) {
			const sizeVariants = variants[quantity][self.fabric][self.size];
			const variant = sizeVariants[self.color];
			console.log(sizeVariants);
			let label;

			// Assign the label for the dropdown
			if (pagePath === "5b" || pagePath === "5b-cooling") {
				const hasColors = Object.keys(sizeVariants).length > 0;
				if (!hasColors) return;

				label = `${self.color} - ${self.size} - ${usPrefix} $${variant ? variant["price"] : "132"
					}* `;
				if (index === 0) {
					label = `${self.color} - King/Cali King - ${usPrefix} $${variant ? variant["price"]?.toFixed(2) : "139.30"
						}* `;
				}
			} else if (pagePath === "4b") {
				label = `${sizeVariants[self.color].type} - (${sizeVariants[self.color].loads} Loads) - ${usPrefix} ${sizeVariants[self.color].price} `;
			} else  {
				label = `Add ${quantity} ${quantity == 1 ? "Sheet Set" : "Sheets Sets"
					} for${usPrefix} $${variant ? (variant["sale_price"] / quantity).toFixed(2) : 0
					}* each (${discounts[index]}  OFF)`;
			}

			let selected = false;
			if (index + 1 === parseInt(self.quantity)) {
				selected = true;
				if (
					pagePath === "2c" ||
					pagePath === "2d" ||
					pagePath === "5b" || pagePath === "5b-cooling"
				) {
					const ctaPrice = document.querySelector(".cta-price");
					if (ctaPrice && variant) {
						let price = self.addDecimalsIfNeeded(
							variant?.price || variant?.sale_price
						);
						ctaPrice.textContent = price;
					}
				}
			}
			const variantData = {
				value: quantity,
				label: label,
				selected: selected,
			};
			items.push(variantData);
		});
		self.choices.setChoices(items, "value", "label", true);
	},

	updateVariant: function (from) {
		const self = this;
		if (
			pagePath === "2c" ||
			pagePath === "2d" ||
			pagePath === "4b" ||
			pagePath === "5b" || pagePath === "5b-cooling"
		) {
			self.updateQuantities();
		}

		let variantInput = document.getElementById("upsell-param-1");

		if (hasFabricSelection) {
			self.fabric = document.querySelector(
				'input[type=radio][name="fabric"]:checked'
			).value;
		}
		if (hasSizeSelection) {
			const size = document.querySelector(
				'input[type=radio][name="size"]:checked'
			).value;

			let sizeVariants;

			if(pagePath === "6b") {
				sizeVariants = variants[self.fabric][self.size];
			}else {
				sizeVariants = variants[self.quantity][self.fabric][size];
			}

			if (Object.keys(sizeVariants).length > 0) {
				self.size = size;
			}
		}
		if (hasColorSelection) {
			self.color = document.querySelector('input[type=radio][name="color"]:checked').value;
		}

		let matchingVariant;
		if(pagePath === "6b") {
			matchingVariant = variants[self.fabric][self.size][self.color];
		}else {
			matchingVariant = variants[self.quantity][self.fabric][self.size][self.color];
		}

		if (matchingVariant === undefined || matchingVariant === null) {
			if (from === "color") {
				let avaliableVariants;
				if(pagePath === "6b") {
					availableVariants = variants[self.fabric];
				}else {
					availableVariants = variants[self.quantity][self.fabric];
				}				
				let key;
				let firstAvailableVariant = Object.values(availableVariants).find(
					function (variant, index) {
						key = Object.keys(availableVariants)[index];
						if (variant[self.color]) {
							return variant[self.color].variantId.toString().length > 0;
						}
					}
				);
				// let firstAvailableVariant = Object.keys(availableVariants)[0];
				let matchingSizeSelection = document.querySelector(
					`input[name="size"][value=${key}]`
				);
				matchingSizeSelection.click();

				return;
			} else if (from === "size") {
				let avaliableVariants;

				if(pagePath === "6b") {
					availableVariants = variants[self.fabric][self.size];
				}else {
					availableVariants = variants[self.quantity][self.fabric][self.size];
				}
				
				let firstAvailableVariant = Object.keys(availableVariants)[0];
				let matchingColorSelection = document.querySelector(
					`input[name="color"][value=${firstAvailableVariant}]`
				);
				matchingColorSelection?.click();

				return;
			}
		} else {
			variantInput.value = matchingVariant["variantId"];

			const currency = document.querySelector(".price .non-usa");
			const regularPrice = document.querySelector(".prices .dashed-price");
			const salePrice = document.querySelector(".prices .price");
			const discount = document.querySelector(".prices .highlighted-price");
			
			if(regularPrice) {
				regularPrice.innerHTML = `$${matchingVariant["reg_price"]}`;
			}

			if(salePrice) {
				salePrice.innerHTML = `$${matchingVariant["sale_price"]}*`;
			}					
		}

		window.checkoutReadyCallbacks.push(() => {
			const nonUSA = document.querySelector(".non-usa");
			const priceElement = document.querySelector(".price");
			const price = self.addDecimalsIfNeeded(matchingVariant["price"]);

			if (pagePath === "3b") {
				const ctaPrice = document.querySelector(".cta-price");
				if (ctaPrice) {
					ctaPrice.textContent = price;
				}
			}

			const shouldUpdatePrice =
				pagePath === "3b" || pagePath === "3b-v1" || pagePath === "5b" || pagePath === "5b-cooling";

			if (checkoutData.cart.shippingZone !== "US") {
				if (shouldUpdatePrice && priceElement) {
					priceElement.innerHTML = `<span class="non-usa">USD</span> $${price}*`;
				}

				if (nonUSA) nonUSA.innerHTML = "USD ";
			} else {
				if (shouldUpdatePrice && priceElement) {
					priceElement.innerHTML = `$${price}*`;
				}

				if (nonUSA) nonUSA.innerHTML = nonUSA.innerHTML;
			}
		});
	},

	updateSliderImages: function () {
		const self = this;
		if (!hasSlider) {
			return; }
		self.swiper.destroy();
		self.thumbsSwiper.destroy();

		let images = document.querySelectorAll('.swiper-slide');
		let index = 1;

		images.forEach(function (image) {
			if (index > images.length / 2) {
				index = 1;
			}
			let imagePath;
			if(pagePath === "2d") {
				imagePath = `./images/sliders/${pagePath}/new/${self.color}/0${index}.webp`;

				if (image.querySelector("img").classList.contains("thumb-img")) {
					imagePath = `./images/sliders/${pagePath}/new/${self.color}/0${index}.webp`;
				}
	
			}else {
				imagePath = `./images/sliders/${pagePath}/${self.color}/0${index}.webp`;

				if (image.querySelector("img").classList.contains("thumb-img")) {
					imagePath = `./images/sliders/${pagePath}/${self.color}/0${index}_thumb.webp`;
				}
	
			}

			image.querySelector("img").src = imagePath;
			if (pagePath !== "1b") {
				image.querySelector("img").setAttribute("data-src", imagePath);
			}

			index++;
		});

		self.initSwiper();
	},

	updateSize: function (event) {
		console.log('Called');

	},

	getNewColorValue: function (newValue) {
		const self = this;

		const hasColors = self.checkIfColorIsAvailable(newValue);

		if (hasColors) {
			return newValue;
		} else {
			return self.color;
		}
	},

	checkIfColorIsAvailable: function (color) {
		const self = this;
		let hasColor = false;

		for (const quantityKey in variants) {
			const fabrics = variants[quantityKey];

			for (const fabric in fabrics) {
				let sizes;

				// As the fabric doesn't get automatically updated
				// when selecting an OOS item, we need to check only
				// the currently selected one
				if (hasFabricSelection && pagePath === "3b") {
					sizes = fabrics[self.fabric];
				} else {
					sizes = fabrics[fabric];
				}

				for (const size in sizes) {
					const colors = sizes[size];

					if (colors.hasOwnProperty(color)) {
						hasColor = true;
						break;
					}
				}
			}
		}

		return hasColor;
	},

	updateColorName: function () {
		const self = this;

		let colorName = self.color;
		colorName = colorName.replace('_', ' ');
		document.getElementById('color-name').innerHTML = colorName.toUpperCase();
	},

	updateSizeName: function () {
		const self = this;
		let sizeName = self.size;
		sizeName = sizeName.replace("_", " ");
		const sizeNameElements = document.querySelectorAll(".size-name");
		sizeNameElements.forEach((element) => {
			element.innerHTML = sizeName.toUpperCase();
		});
	},

	addDecimalsIfNeeded: function (number) {
		if (typeof number !== "number") return number;

		if (Number.isInteger(number)) {
			return number.toString();
		} else {
			return number.toFixed(2);
		}
	},

	filterOutOfStockProducts: function (from) {
		const self = this;

		if (from === 'color') {
			let colors = document.querySelectorAll('input[name="color"]');
			let isMatching;
			colors.forEach(function (color) {
				if (pagePath === "6b") {
					isMatching = variants[self.fabric][self.size][color.value];
					if (isMatching === undefined || isMatching === null) {
						color.parentNode.classList.add('out-of-stock');
					} else {
						color.parentNode.classList.remove('out-of-stock');
					}
				} else if (pagePath === "5b" || pagePath === "5b-cooling") { 
					isMatching = variants[self.quantity][self.fabric][self.size][color.value]
					if (isMatching === undefined || isMatching === null) {
						color.parentNode.classList.add('out-of-stock');
					} else {
						color.parentNode.classList.remove('out-of-stock');
					}
				} else if(pagePath === "8b") {
					isMatching = variants["1"][self.fabric][self.size]["white"];
					if (isMatching === undefined || isMatching === null) {
						color.parentNode.classList.add('out-of-stock');
					} else {
						color.parentNode.classList.remove('out-of-stock');
					}
				}else {
					isMatching = variants[self.quantity][self.fabric][self.size][color.value];
					if (isMatching === undefined || isMatching === null) {
						color.parentNode.classList.add('out-of-stock');
					} else {
						color.parentNode.classList.remove('out-of-stock');
					}
				}


			});
		}

		if (from === 'size') {
			let sizes = document.querySelectorAll('input[name="size"]');
			let isMatching;
			sizes.forEach(function (size) {
				if (pagePath === "6b" || pagePath === "8b") {
					isMatching = variants[self.fabric][size.value][self.color];
					if (isMatching === undefined || isMatching === null) {
						size.parentNode.classList.add('out-of-stock');
					} else {
						size.parentNode.classList.remove('out-of-stock');
					}
				} else if (pagePath === "5b" || pagePath === "5b-cooling") {
					isMatching = variants[self.quantity][self.fabric][self.size][self.color]
					if (isMatching === undefined || isMatching === null) {
						color.parentNode.classList.add('out-of-stock');
					} else {
						color.parentNode.classList.remove('out-of-stock');
					}
				} else {
					isMatching = variants[self.quantity][self.fabric][size.value][self.color];
					if (isMatching === undefined || isMatching === null) {
						size.parentNode.classList.add('out-of-stock');
					} else {
						size.parentNode.classList.remove('out-of-stock');
					}
				}


			});
		}
	},

	toggleActiveClass: function () {
		if (hasToggleButtons) {
			let labels = document.querySelectorAll('label');

			labels.forEach(function (label) {
				label.addEventListener('click', function (e) {
					let currentSelection = label.parentNode.querySelector('.selected');
					currentSelection.classList.remove('selected');
					label.classList.add('selected');
				});
			});
		}
	},


	// Runs only on 1a and 1b
	swapVariantColors: function () {
		const self = this;

		if (hasDynamicColorChange) {

			const cart = Object.keys(RTC.getVariantQuantities());

			const hasStoneColor = stoneProducts.some(variant => cart.includes(variant));

			const hasSkyBlueColor = skyBlueProducts.some(variant => cart.includes(variant));

			const hasWhiteColor = whiteProducts.some(variant => cart.includes(variant));

			const hasNavyBlueColor = navyBlueProducts.some(variant => cart.includes(variant));

			const hasSandColor = sandProducts.some(variant => cart.includes(variant));

			const hasTerracottaColor = terracottaProducts.some(variant => cart.includes(variant));

			const hasCharcoalColor = charcoalProducts.some(variant => cart.includes(variant));

			const hasSageColor = sageProducts.some(variant => cart.includes(variant));

			if (hasStoneColor) { self.color = 'stone' };
			if (hasSkyBlueColor) { self.color = 'sky_blue' };
			if (hasWhiteColor) { self.color = 'white' };
			if (hasNavyBlueColor) { self.color = 'navy' };
			if (hasSandColor) { self.color = 'sand' };
			if (hasTerracottaColor) { self.color = "terracotta" };
			if (hasCharcoalColor) { self.color = "charcoal" };
			if (hasSageColor) { self.color = "sage" };

			console.log(stoneProducts)

			self.updateSliderImages();
		}
	},

	limitedVariantColors: function () {
		const self = this;

		if (hasDynamicColorChange) {
			const cart = Object.keys(RTC.getVariantQuantities());

			const hasStoneColor = stoneProducts.some(variant => cart.includes(variant));

			if (hasStoneColor) {
				self.color = 'stone';
				self.updateSliderImages();
				document.querySelectorAll(".color").forEach((item) => {
					item.classList.remove("selected")
				})
				document.querySelector(".color.stone").classList.add("selected");
				document.querySelector(".color.stone").click();
			}


		}
	},

	findOutOfStock: function () {

	},

	initTimer: function () {
		const self = this;

		let timers = document.querySelectorAll('.timer');
		if (timers.length > 0) {
			timers.forEach(function (timer) {
				let duration = timer.getAttribute('data-timer-duration');

				self.startTimer(duration, timer);
			});
		}
	},

	startTimer: function (duration, element) {
		const timer = setInterval(function () {
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

	toggleConfirmationBanner: function () {
		let urlSearchParams = new URLSearchParams(window.location.search);
		let params = Object.fromEntries(urlSearchParams.entries());

		if (params['upsell'] === 'true' || params['upsell']) {
			document.querySelector('.confirmation-box').classList.remove('hidden');
		}

		if (params['first'] === 'true' || params['first']) {
			document.getElementById('first-upsell').classList.remove('hidden');
		}
	}
}

document.addEventListener('DOMContentLoaded', function (e) {
	upsellHench.initSwiper();
	upsellHench.initVariantSelection();
	upsellHench.toggleActiveClass();
	upsellHench.listenVariantChange();
	upsellHench.initTimer();
	// upsellHench.toggleConfirmationBanner();
	window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
	window.checkoutReadyCallbacks.push(() => {
		upsellHench.swapVariantColors();
	  });
});

function checkIfFabricHasProducts(quantity, fabric) {
	if (pagePath !== "3b") return true;

	const fabricProducts = variants[quantity][fabric];

	for (const size in fabricProducts) {
		const colors = Object.keys(fabricProducts[size]);
		const noColorsAvailable = colors.length === 0;

		if (noColorsAvailable) return false;
	}

	return true;
}

function checkIfSizeHasColors(size, quantity, fabric) {
	// Only run this on the "2c" and "2d" upsells, otherwise return "true"
	if (pagePath !== "2d" && pagePath !== "2c") return true;

	const colors = Object.keys(variants[quantity][fabric][size]);
	const hasColorsAvailable = colors.length > 0;

	return hasColorsAvailable;
}

function setupNewColorAndSize() {
	const colorSelectors = document.querySelectorAll(
		'input[type=radio][name="color"]'
	);
	const sizeSelectors = document.querySelectorAll(
		'input[type=radio][name="size"]'
	);

	const nextAvailableSelector = Array.from(colorSelectors).find(
		(selector) => {
			return selector.getAttribute("value") === nextAvailableColor;
		}
	);

	const selectedSize = Array.from(sizeSelectors).find((selector) => {
		return selector.parentNode.classList.contains("selected");
	});

	selectedSize?.dispatchEvent(new Event("change"));
	nextAvailableSelector?.dispatchEvent(new Event("change"));
}

function removeHighlightClass() {
    if (document.querySelector(".is-highlighted")) {
      document
        .querySelector(".is-highlighted")
        .classList.remove("is-highlighted");
    }
  }
window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || []; 
window.checkoutReadyCallbacks.push(() => {
	if (checkoutData.cart.shippingZone !== "US") {
		$(".non-usa").html("USD ");
	}
});

/* DYNAMIC COLOR CHANGE VARIANTS*/ 
const stoneProducts = [
	"40509700112534",
	"40509700210838",
	"40509700014230",
	"40509700309142",
	"40509700997270"
];

const skyBlueProducts = [
	"40509700079766",
	"40509700407446",
	"40509700276374",
	"42174579736726"
];

const whiteProducts = [
	"40509700243606",
	"40509700046998",
	"40509700341910",
	"40509700145302"
];



const navyBlueProducts = [
	"42077966631062",
	"42077966729366"
];

const sandProducts = [
	"42077972758678",
	"42077972889750"
];

const sageProducts = [
	"42280970256534",
	"42280964456598",
	"42462509236374",
	"42484788035734"
];

const terracottaProducts = [
	"42280971731094",
	"42280965603478",
	"42462525620374"
];

const charcoalProducts = [
	"42280971206806",
	"42280965275798"
];
/* VARIANTS END */

let upsellHench = {
	choices: '',

	fabric: 'signature',

	size: 'queen',

	color: 'stone',

	quantity: '1',

	swiper: '',

	thumbsSwiper: '',

	initSwiper: function() {
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

	initVariantSelection: function() {
		const self = this;

		if (hasSelector) {
			const element = document.querySelector('.variants');
		
			self.choices = new Choices(element, {
				searchEnabled: false,
				itemSelectText: ''
			});

			self.choices.passedElement.element.addEventListener( 'choice', function(event) {
				self.quantity = event.detail.choice.id;

				self.updateVariant();
			}, false );

			self.quantity = 2;

			if (document.querySelector('.is-highlighted')) {
				document.querySelector('.is-highlighted').classList.remove('is-highlighted')	
			}

			self.usdPrefix();
		}
	},


	usdPrefix: function() {
		const self = this;

		window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
		window.checkoutReadyCallbacks.push(() => {
			if (checkoutData.cart.shippingZone !== "US") {
				let currentChoices = this.choices.config.choices;
				console.log(currentChoices);
				let newChoices = [];
				currentChoices.forEach((choice) => {
					let variantData = {
						value: choice.value,
						label: choice.label.replace("$", "USD $"),
					}
					newChoices.push(variantData);
				})
				this.choices.clearStore();
				this.choices.setValue(newChoices);
				console.log(newChoices)
				if(pagePath === "2c" || pagePath === "2d" || pagePath === "4b") {
					this.choices.setChoiceByValue("2")
				}else {	
					this.choices.setChoiceByValue("1")
				}
			}
		});
	},

	listenVariantChange: function() {
		const self = this;
		
		if (hasFabricSelection) {
			let fabricSelectors = document.querySelectorAll('input[type=radio][name="fabric"]');
			fabricSelectors.forEach(function(selector) {
				selector.addEventListener('change', function() {
				self.fabric = this.value;

					self.updateVariant();
				})
			});
		}

		if (hasSizeSelection) {
			let sizeSelectors = document.querySelectorAll('input[type=radio][name="size"]');
			sizeSelectors.forEach(function(selector) {
				selector.addEventListener('change', function() {
					self.size = this.value;

					self.updateVariant('size');
					self.filterOutOfStockProducts('color');
					if (hasSelector) {
						self.updateQuantities();

						let choices = document.querySelectorAll('.choices__item--choice');
						choices.forEach(function(choice) {
							choice.classList.remove('is-highlighted');
							if (parseInt(choice.getAttribute('data-value')) === self.quantity ) {
								choice.classList.add('is-selected');
							}
						});
					}
				});
			});
		}

		if (hasColorSelection) {
			let colorSelectors = document.querySelectorAll('input[type=radio][name="color"]');
			colorSelectors.forEach(function(selector) {
				selector.addEventListener('change', function() {
					self.color = this.value;

					self.updateVariant('color');
					self.filterOutOfStockProducts('size');
					self.updateColorName();
					self.updateSliderImages();
				});
			});
		} 

		if(hasColorSelection && pagePath === "5b" ) {
			let colorSelectors = document.querySelectorAll('input[type=radio][name="color"]');
			colorSelectors.forEach(function(selector) {
				selector.addEventListener('change', function() {
					self.color = this.value;

					self.updateVariant('color');
					self.filterOutOfStockProducts('size');
					self.updateColorName();
					self.updateSliderImages();
					self.updateQuantities()
				});
			});
		}
	},

	updateQuantities: function() {
		const self = this;
		let usPrefix = "";
		window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
		window.checkoutReadyCallbacks.push(() => {
			if (checkoutData.cart.shippingZone !== "US") {
				usPrefix = " USD"
			}
		});

		let items = [];
		Object.keys(variants).forEach(function(quantity, index) {
			let label = "";
				if(pagePath === "5b") {
					label = `${self.color} - ${self.size} - ${usPrefix} $${(variants[quantity][self.fabric][self.size][self.color]['sale_price']).toFixed(2)}* `;
				let selected = false;
				if (index === 0) {
					label = `${self.color} - King/Cali King - ${usPrefix} $${(variants[quantity][self.fabric][self.size][self.color]['sale_price']).toFixed(2)}* `;
				}
				if (index + 1 === parseInt(self.quantity)) {
					selected = true;
				}
				let variantData = {
					value: quantity,
					label: label,
					selected: selected
				}
				items.push(variantData);
			}else {
				label = `Add ${quantity} Sheets Sets for${usPrefix} $${(variants[quantity][self.fabric][self.size][self.color]['sale_price']  / quantity ).toFixed(2)}* each (${discounts[index]}  OFF)`;
				let selected = false;
				if (index === 0) {
					label = `Add ${quantity} Sheet Sets for${usPrefix} $${(variants[quantity][self.fabric][self.size][self.color]['sale_price']  / quantity ).toFixed(2)}* each (${discounts[index]}  OFF)`;
				}
				if (index + 1 === parseInt(self.quantity)) {
					selected = true;
				}
				let variantData = {
					value: quantity,
					label: label,
					selected: selected
				}
				items.push(variantData);
			}
			
		});

		self.choices.setChoices(items, 'value', 'label', true);
	},

	updateVariant: function(from) {
		const self = this;

		let variantInput = document.getElementById('upsell-param-1');

		let matchingVariant;

		if (hasFabricSelection) {
			self.fabric = document.querySelector('input[type=radio][name="fabric"]:checked').value;
		}
		if (hasSizeSelection) {
			self.size = document.querySelector('input[type=radio][name="size"]:checked').value;	
		}
		if (hasColorSelection) {
			self.color = document.querySelector('input[type=radio][name="color"]:checked').value;
		}

		if(pagePath === "6b" || pagePath === "8b") {
		 	matchingVariant = variants[self.fabric][self.size][self.color];
		}else {
			matchingVariant = variants[self.quantity][self.fabric][self.size][self.color];
		}
		
		console.log(matchingVariant)

		if (matchingVariant === undefined || matchingVariant === null) {
			if (from === 'color') {
				let availableVariants = variants[self.quantity][self.fabric];
				let key;
				let firstAvailableVariant = Object.values(availableVariants).find(function(variant, index) {
					key = Object.keys(availableVariants)[index];
					if (variant[self.color]) {
						return variant[self.color].variantId.toString().length > 0;
					}
				});
				// let firstAvailableVariant = Object.keys(availableVariants)[0];
				let matchingSizeSelection = document.querySelector(`input[name="size"][value=${key}]`);
				console.log(matchingSizeSelection);
				matchingSizeSelection.click();

				return;
			} else if (from === 'size') {
				
				let availableVariants;

				if(pagePath === "8b") {
					availableVariants = variants[self.fabric][self.size];
				}else {
					availableVariants = variants[self.quantity][self.fabric][self.size];
				}
				let firstAvailableVariant = Object.keys(availableVariants)[0];
				let matchingColorSelection = document.querySelector(`input[name="color"][value=${firstAvailableVariant}]`);

				matchingColorSelection.click();

				return;
			}
		} else {
			variantInput.value = matchingVariant['variantId'];
		}

		window.checkoutReadyCallbacks.push(() => {
			if (checkoutData.cart.shippingZone !== "US") {
				if (pagePath === '3b' || pagePath === '3b-v1') {
					document.querySelector('.price').innerHTML = `<span class="non-usa">USD</span> $${matchingVariant['price']}*`; 
				}
				$(".non-usa").html("USD ");
			} else{
				if (pagePath === '3b' || pagePath === '3b-v1') {
					document.querySelector('.price').innerHTML = `$${matchingVariant['price']}*`; 
				}
				$(".non-usa").html($(".non-usa").html());
			}
			if (checkoutData.cart.shippingZone !== "US") {
				if (pagePath === '6b' || pagePath === "8b") {
					document.querySelector('.price').innerHTML = `<span class="non-usa">USD</span>$${matchingVariant['price']}*`; 
					document.querySelector('.dashed-price').innerHTML = `$${matchingVariant['reg_price']}`; 
					document.querySelector('.highlighted-price').innerHTML = `(${matchingVariant['percentage']}% OFF)`; 
				}
				$(".non-usa").html("USD ");
			} else{
				if (pagePath === '6b' || pagePath === "8b") {
					document.querySelector('.price').innerHTML = `$${matchingVariant['price']}*`; 
					document.querySelector('.price.dashed-price').innerHTML = `$${matchingVariant['reg_price']}`; 
					document.querySelector('.price.highlighted-price').innerHTML = `(${matchingVariant['percentage']}% OFF)`; 
				}
				$(".non-usa").html($(".non-usa").html());
			}
		});
	},

	updateSliderImages: function() {
		const self = this;

		self.swiper.destroy();
		self.thumbsSwiper.destroy();

		let images = document.querySelectorAll('.swiper-slide');
		let index = 1;

		images.forEach(function(image) {
			if (index > images.length / 2) {
				index = 1; }
			let imagePath = `./images/sliders/${pagePath}/${self.color}/0${index}.webp`;

			if(image.querySelector("img").classList.contains("thumb-img")) {
				imagePath = `./images/sliders/${pagePath}/${self.color}/0${index}_thumb.webp`;}

			image.querySelector("img").src = imagePath;
			if(pagePath !== "1b") {
				image.querySelector("img").setAttribute("data-src",imagePath);
			}
			
			index++;
		});

		self.initSwiper();
	},

	updateSize: function(event) {
		console.log( 'Called' );
		
	},

	updateColorName: function() {
		const self = this;
		
		let colorName = self.color;
		colorName = colorName.replace('_', ' ');
		document.getElementById('color-name').innerHTML = colorName.toUpperCase();
	},

	filterOutOfStockProducts: function(from) {
		const self = this;

		if (from === 'color') {
			let colors = document.querySelectorAll('input[name="color"]');
			let isMatching;
			colors.forEach(function(color) {
				if(pagePath === "6b" || pagePath === "8b") {
					isMatching = variants[self.fabric][self.size][color.value];
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
			sizes.forEach(function(size) {
				if(pagePath === "6b" || pagePath === "8b") {
					isMatching = variants[self.fabric][self.size][self.color];
				}else {
					let isMatching = variants[self.quantity][self.fabric][size.value][self.color];
					if (isMatching === undefined || isMatching === null) {
						size.parentNode.classList.add('out-of-stock');
					} else {
						size.parentNode.classList.remove('out-of-stock');
					}
				}
				
				
			});
		}
	},

	toggleActiveClass: function() {
		if (hasToggleButtons) {
			let labels = document.querySelectorAll('label');

			labels.forEach(function(label) {
				label.addEventListener('click', function(e) {
					let currentSelection = label.parentNode.querySelector('.selected');
					currentSelection.classList.remove('selected');
					label.classList.add('selected');
				});
			});
		}
	},

	
	// Runs only on 1a and 1b
	swapVariantColors: function() {
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
			if (hasTerracottaColor) {self.color = "terracotta"};
			if (hasCharcoalColor) {self.color = "charcoal"};
			if (hasSageColor) {self.color = "sage"};

			console.log(stoneProducts)

			self.updateSliderImages();
		}
	},

	limitedVariantColors: function() {
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

	findOutOfStock: function() {

	},

	initTimer: function() {
		const self = this;

		let timers = document.querySelectorAll('.timer');
		if (timers.length > 0) {
			timers.forEach(function(timer) {
				let duration = timer.getAttribute('data-timer-duration');

				self.startTimer(duration, timer);
			});
		}
	},

	startTimer: function(duration, element) {
		const timer = setInterval(function() {
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

	toggleConfirmationBanner: function() {
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

document.addEventListener('DOMContentLoaded', function(e) {
	upsellHench.initSwiper();
	upsellHench.initVariantSelection();
	upsellHench.toggleActiveClass();
	upsellHench.listenVariantChange();
	upsellHench.initTimer();
	upsellHench.toggleConfirmationBanner();
	
	window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
	window.checkoutReadyCallbacks.push(() => {
		upsellHench.swapVariantColors();
	});
});
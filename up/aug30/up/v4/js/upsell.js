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

			self.choices.passedElement.element.addEventListener(
				'choice',
				function(event) {
					self.quantity = event.detail.choice.value;

					self.updateVariant();
				},
				false,
			);
		}
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
					self.filterOutOfStockProducts();
					if (hasSelector) {
						self.updateQuantities();
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
					self.updateColorName();
					self.updateSliderImages();
				});
			});
		}
	},

	updateQuantities: function() {
		const self = this;

		let items = [];
		Object.keys(variants).forEach(function(quantity, index) {
			let label = 'Add ' + quantity + ' Sheet Sets for $' + ( variants[quantity][self.fabric][self.size][self.color]['sale_price'] / quantity ).toFixed(2) + ' each (' + discounts[index] + ' OFF)';
			let selected = false;
			if (index === 0) {
				label = 'Add ' + quantity + ' Sheet for $' + ( variants[quantity][self.fabric][self.size][self.color]['sale_price'] / quantity ).toFixed(2) + ' each (' + discounts[index] + ' OFF)'
			}
			if (index + 1 === parseInt(quantity)) {
				selected = true;
			}
			let variantData = {
				value: quantity,
				label: label,
				selected: selected
			}
			items.push(variantData);
		});


		self.choices.setChoices(items, 'value', 'label', true);
	},

	updateVariant: function(from) {
		const self = this;

		let variantInput = document.getElementById('upsell-param-1');

		if (hasFabricSelection) {
			self.fabric = document.querySelector('input[type=radio][name="fabric"]:checked').value;
		}
		if (hasSizeSelection) {
			self.size = document.querySelector('input[type=radio][name="size"]:checked').value;	
		}
		if (hasColorSelection) {
			self.color = document.querySelector('input[type=radio][name="color"]:checked').value;	
		}

		let matchingVariant = variants[self.quantity][self.fabric][self.size][self.color];

		if (matchingVariant === undefined || matchingVariant === null) {
			if (from === 'color') {
				let availableVariants = variants[self.quantity][self.fabric];
				let key;
				let firstAvailableVariant = Object.values(availableVariants).find(function(variant, index) {
					key = Object.keys(availableVariants)[index];
					return variant['sky_blue'].variantId.toString().length > 0;
				});

				console.log( 'firstAvailableVariant: ', firstAvailableVariant );
				// let firstAvailableVariant = Object.keys(availableVariants)[0];
				let matchingSizeSelection = document.querySelector(`input[name="size"][value=${key}]`);
				matchingSizeSelection.click();

				return;
			} else if (from === 'size') {
				let availableVariants = variants[self.quantity][self.fabric][self.size];
				let firstAvailableVariant = Object.keys(availableVariants)[0];
				console.log( 'firstAvailableVariant: ', firstAvailableVariant );
				let matchingColorSelection = document.querySelector(`input[name="color"][value=${firstAvailableVariant}]`);
				matchingColorSelection.click();

				return;
			}
		} else {
			variantInput.value = matchingVariant['variantId'];
		}

		if (pagePath === '3b') {
			document.querySelector('.price').innerHTML = `$${matchingVariant['price']}`; }
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
			image.querySelector('img').src = `./images/sliders/${pagePath}/${self.color}/${index}.jpg`;
			image.querySelector('img').setAttribute('data-src', `./images/sliders/${pagePath}/${self.color}/${index}.jpg`);
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

	filterOutOfStockProducts: function() {
		const self = this;

		let colors = document.querySelectorAll('input[name="color"]');
		colors.forEach(function(color) {
			let isMatching = variants[self.quantity][self.fabric][self.size][color.value];
			if (isMatching === undefined || isMatching === null) {
				color.parentNode.classList.add('out-of-stock');
			} else {
				color.parentNode.classList.remove('out-of-stock');
			}
		});
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
			const stoneProducts = [
				"40509700112534",
				"40509700210838",
				"40509700014230",
				"40509700309142",
				"40509700997270"
			];

			const skyBlueProducts = [
				"40509700079766",
				"40509700407446"
			];

			const whiteProducts = [
				"40509700243606",
				"40509700046998",
				"40509700341910"
			];

			const cart = Object.keys(RTC.getVariantQuantities());

			const hasStoneColor = stoneProducts.some(variant => cart.includes(variant));

			const hasSkyBlueColor = skyBlueProducts.some(variant => cart.includes(variant));

			const hasWhiteColor = whiteProducts.some(variant => cart.includes(variant));

			if (hasStoneColor) { self.color = 'stone' };
			if (hasSkyBlueColor) { self.color = 'sky_blue' };
			if (hasWhiteColor) { self.color = 'white' };

			self.updateSliderImages();
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
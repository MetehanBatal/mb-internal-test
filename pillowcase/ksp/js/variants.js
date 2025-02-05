document.addEventListener('DOMContentLoaded', () => {
	const customSelect = document.querySelector('.custom-select');
	const selectSelected = customSelect.querySelector('.select-selected');
	const selectItems = customSelect.querySelector('.select-items');
	const options = customSelect.querySelectorAll('.select-option');
	
	selectSelected.addEventListener('click', function(e) {
		e.stopPropagation();
		selectItems.classList.toggle('select-hide');
		customSelect.classList.toggle('active');
	});
	
	options.forEach(option => {
		option.addEventListener('click', function(e) {
		const selectedValue = this.getAttribute('data-value');
		selectSelected.textContent = this.textContent;
				
		options.forEach(opt => opt.classList.remove('selected'));
		this.classList.add('selected');
				
		selectItems.classList.add('select-hide');
				
		handleSizeChange(selectedValue);
		});
	});
	
	document.addEventListener('click', function() {
		selectItems.classList.add('select-hide');
		customSelect.classList.remove('active');
	});
	const variants = {
		signature: {
			standard: {
				stone: {
					oneSet: { variantId: 41430706421910, price: 49.99, regularPrice: 75 },
					twoSet: { variantId: 41430706520214, price: 89.98, regularPrice: 150 },
					fourSet: { variantId: 41430706618518, price: 149.96, regularPrice: 300 }
				},
				white: {
					oneSet: { variantId: 41430706323606, price: 49.99, regularPrice: 75 },
					twoSet: { variantId: 41430706454678, price: 89.98, regularPrice: 150 },
					fourSet: { variantId: 41430706552982, price: 149.96, regularPrice: 300 }
				},
				sky_blue: {
					oneSet: { variantId: 41430706389142, price: 49.99, regularPrice: 75 },
					twoSet: { variantId: 41430706487446, price: 89.98, regularPrice: 150 },
					fourSet: { variantId: 41430706585750, price: 149.96, regularPrice: 300 }
				}
			},
			king: {
				stone: {
					oneSet: { variantId: 41430706716822, price: 54.99, regularPrice: 85 },
					twoSet: { variantId: 41430706815126, price: 99.98, regularPrice: 170 },
					fourSet: { variantId: 41403111866518, price: 159.96, regularPrice: 340 }
				},
				white: {
					oneSet: { variantId: 41430706651286, price: 54.99, regularPrice: 85 },
					twoSet: { variantId: 41430706749590, price: 99.98, regularPrice: 170 },
					fourSet: { variantId: 41430706847894, price: 159.96, regularPrice: 340 }
				},
				sky_blue: {
					oneSet: { variantId: 41430706684054, price: 54.99, regularPrice: 85 },
					twoSet: { variantId: 41430706782358, price: 99.98, regularPrice: 170 },
					fourSet: { variantId: 41403111833750, price: 159.96, regularPrice: 340 }
				}
			}
		}
	};


	let currentState = {
		fabric: 'signature',
		size: 'standard',
		color: 'stone',
		option: 'twoSet',
		quantity: 1
	};

	function updateVariant() {
		const variant = variants[currentState.fabric][currentState.size][currentState.color][currentState.option];
		return variant.variantId;
	}

	function handleColorChange(color, slideIndex) {
		currentState.color = color;

		// Update radio buttons
		document.querySelectorAll('.radio-color-wrapper input[name="color"]').forEach(input => {
			const wrapper = input.closest('.radio-color-wrapper');
			const radioInput = wrapper.querySelector('.w-radio-input');
			if (input.value === color) {
				input.checked = true;
				radioInput.classList.add('w--redirected-checked');
			} else {
				input.checked = false;
				radioInput.classList.remove('w--redirected-checked');
			}
		});

		// Update color text
		document.querySelector('.color-sc .color-value').textContent = color.charAt(0).toUpperCase() + color.slice(1).replace('_', ' ');

		// Update product images
		document.querySelectorAll('.multi-img-option').forEach(img => {
			img.classList.remove('show');
			if (img.getAttribute('data-color') === color) {
				img.classList.add('show');
			}
		});

		updateVariant();
		updateSliderContent(color)
	}

	function handleSizeChange(size) {
		currentState.size = size;
		document.querySelectorAll('.grid---header-option-feat').forEach(grid => {
			if (grid.getAttribute('data-option-id') === size) {
				grid.classList.remove('hidden');
				grid.classList.add('active');
			} else {
				grid.classList.add('hidden');
				grid.classList.remove('active');
			}
		});
		updateVariant();
	}

	function handleSetChange(setOption, element) {
		currentState.option = setOption;
		const grid = element.closest('.grid---header-option-feat');

		// Update radio states
		grid.querySelectorAll('.w-radio-input').forEach(input => {
			input.classList.remove('w--redirected-checked');
		});
		element.querySelector('.w-radio-input').classList.add('w--redirected-checked');

		// Update text display
		const setNumber = element.querySelector('.option-text').textContent.match(/Set of (\d)/)[1];
		document.querySelector('.label._17 .color-value').textContent = `Set of ${setNumber}`;

		updateVariant();
	}

	// Color Selection
	document.querySelectorAll('.radio-color-wrapper').forEach(wrapper => {
		wrapper.addEventListener('click', () => {
			const color = wrapper.getAttribute('data-color');
			const slideIndex = parseInt(wrapper.getAttribute('data-slide'));
			handleColorChange(color, slideIndex);
		});
	});
	// Set Selection
	document.querySelectorAll('.size-radio-v2-2').forEach(radio => {
		radio.addEventListener('click', () => {
			const setOption = radio.querySelector('input[name="option"]').value;
			handleSetChange(setOption, radio);
		});
	});

	// Quantity Selection
	document.querySelectorAll('.button-quantity').forEach(btn => {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
			const quantityDisplay = document.querySelector('.quantity-value');
			let quantity = parseInt(quantityDisplay.textContent);

			if (btn.getAttribute('quantity') === '+') {
				quantity++;
			} else if (quantity > 1) {
				quantity--;
			}

			currentState.quantity = quantity;
			quantityDisplay.textContent = quantity;
		});
	});

	// Slider Controls
	document.querySelectorAll('.product-icon-2').forEach(thumb => {
		thumb.addEventListener('click', () => {
			const container = thumb.closest('.flex-center');
			const icons = container.querySelectorAll('.product-icon-2');
			icons.forEach(icon => icon.classList.remove('active'));
			thumb.classList.add('active');

			const slideIndex = thumb.getAttribute('data-to');
			const slider = container.querySelector('.w-slider');
			const targetDot = slider.querySelector(`.w-slider-nav .w-slider-dot:nth-child(${slideIndex})`);
			if (targetDot) targetDot.click();
		});
	});

	// Checkout Handler
	document.querySelector('.buy-now-button').addEventListener('click', async (e) => {
		e.preventDefault();
		const variantId = updateVariant();

		try {
			const updateRec = {};
			checkout.cart.localCart.lineItems.forEach(x => {
				if (x.variantId != '34937177702550') {
					updateRec[x.variantId] = 0;
				}
			});

			await checkout.apiClient.setVariantQuantities(updateRec);
			const updatedCart = await checkout.apiClient.setVariantQuantities({
				[variantId]: currentState.quantity
			});

			checkout.setCart(updatedCart);
			checkout.drawCart(updatedCart);
			window.location.href = "/checkout_v3/secure.html?ksp=true";
		} catch (error) {
			console.error('Checkout error:', error);
		}
	});

	document.querySelectorAll('.radio-color-wrapper').forEach(wrapper => {
		wrapper.addEventListener('click', () => {
			const color = wrapper.getAttribute('data-color');
			const slideIndex = parseInt(wrapper.getAttribute('data-slide'));
			handleColorChange(color, slideIndex);
		});
	});

	// Initial setup
	handleColorChange(currentState.color, 1);
	handleSizeChange(currentState.size);
});
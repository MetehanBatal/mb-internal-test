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
					oneSet: { variantId: 41430706421910, productTitle: 'Miracle Set of 1', price: 49.99, regularPrice: 75, productSavings: 25 },
					//twoSet: { variantId: 41430706520214, productTitle: 'Miracle Set of 2', price: 89.98, regularPrice: 150, productSavings: 60 },
					fourSet: { variantId: 41430706618518, productTitle: 'Miracle Set of 4', price: 149.96, regularPrice: 300, productSavings: 150 }
				},
				white: { 
					oneSet: { variantId: 41430706323606, productTitle: 'Miracle Set of 1', price: 49.99, regularPrice: 75, productSavings: 25 },
					twoSet: { variantId: 41430706454678, productTitle: 'Miracle Set of 2', price: 89.98, regularPrice: 150, productSavings: 60 },
					fourSet: { variantId: 41430706552982, productTitle: 'Miracle Set of 4', price: 149.96, regularPrice: 300, productSavings: 150 }
				},
				sky_blue: { 
					oneSet: { variantId: 41430706389142, productTitle: 'Miracle Set of 1', price: 49.99, regularPrice: 75, productSavings: 25 },
					//twoSet: { variantId: 41430706487446, productTitle: 'Miracle Set of 2', price: 89.98, regularPrice: 150, productSavings: 60 },
					fourSet: { variantId: 41430706585750, productTitle: 'Miracle Set of 4', price: 149.96, regularPrice: 300, productSavings: 150 }
				},
			},
			king: {
				stone: { 
					oneSet: { variantId: 41430706716822, productTitle: 'Miracle Set of 1', price: 54.99, regularPrice: 85, productSavings: 30 },
					twoSet: { variantId: 41430706815126, productTitle: 'Miracle Set of 2', price: 99.98, regularPrice: 170, productSavings: 70 },
					fourSet: { variantId: 41403111866518, productTitle: 'Miracle Set of 4', price: 159.96, regularPrice: 340, productSavings: 180 }
				},
				white: { 
					oneSet: { variantId: 41430706651286, productTitle: 'Miracle Set of 1', price: 54.99, regularPrice: 85, productSavings: 30 },
					twoSet: { variantId: 41430706749590, productTitle: 'Miracle Set of 2', price: 99.98, regularPrice: 170, productSavings: 70 },
					fourSet: { variantId: 41430706847894, productTitle: 'Miracle Set of 4', price: 159.96, regularPrice: 340, productSavings: 180 }
				},
				sky_blue: { 
					oneSet: { variantId: 41430706684054, productTitle: 'Miracle Set of 1', price: 54.99, regularPrice: 85, productSavings: 30 },
					twoSet: { variantId: 41430706782358, productTitle: 'Miracle Set of 2', price: 99.98, regularPrice: 170, productSavings: 70 },
					fourSet: { variantId: 41403111833750, productTitle: 'Miracle Set of 4', price: 159.96, regularPrice: 340, productSavings: 180 }
				},
			},
		}
	};

	function saveStateToLocalStorage() {
		localStorage.setItem('selectedVariantState', JSON.stringify(currentState));
	}


	let currentState = {
		fabric: 'signature',
		size: 'standard',
		color: 'white',
		option: 'twoSet',
		quantity: 1
	};

	/* Checking Local Storage if there is any selection before */
	const savedState = localStorage.getItem('selectedVariantState');
	if(savedState) {
	  currentState = JSON.parse(savedState);
	}

	if(savedState) {
		const parsedState = JSON.parse(savedState);
		handleColorChange(parsedState.color, 1);				
		const sizeOption = customSelect.querySelector(`[data-value="${parsedState.size}"]`);
		if(sizeOption) {
		  sizeOption.click();
		}				
		document.querySelectorAll('.size-radio-v2-2').forEach(radio => {
			const input = radio.querySelector('input[type="radio"]');
			if (input.value === parsedState.option) {			  
			  input.checked = true;
		  			  
			  const event = new Event('change', { bubbles: true });
			  input.dispatchEvent(event);
		  			  
			  radio.querySelector('.w-radio-input').classList.add('w--redirected-checked');
			} else {			  
			  input.checked = false;
			  radio.querySelector('.w-radio-input').classList.remove('w--redirected-checked');
			}
		  });			
		document.querySelector('.quantity-value').textContent = parsedState.quantity;
		currentState.quantity = parsedState.quantity;
	}

	function updateVariant() {
		if (currentState.size === 'standard') {						
			document.querySelector(".radio-color-wrapper.color-choice[data-color='stone']").classList.add("hidden");					
			document.querySelector(".radio-color-wrapper.color-choice[data-color='sky_blue']").classList.add("hidden");

			document.querySelector(".radio-color-wrapper.color-choice[data-color='white']").click();		
		}else {
			document.querySelector(".radio-color-wrapper.color-choice[data-color='stone']").classList.remove("hidden");
			document.querySelector(".radio-color-wrapper.color-choice[data-color='sky_blue']").classList.remove("hidden");
		}

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
		updateSliderContent(color);
		saveStateToLocalStorage();
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
		saveStateToLocalStorage();
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
		saveStateToLocalStorage();
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

			saveStateToLocalStorage();
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
			window.location.href = "/pillowcase/checkout/?ksp=true";
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
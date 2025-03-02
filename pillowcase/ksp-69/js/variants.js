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
					oneSet: { variantId: 41403111374998, productTitle: 'Miracle Set of 1', price: 69.95, regularPrice: 100, productSavings: 30 },
					//twoSet: { variantId: 41403111473302, productTitle: 'Miracle Set of 2', price: 119.92, regularPrice: 200, productSavings: 80 },
					fourSet: { variantId: 41403111571606, productTitle: 'Miracle Set of 4', price: 129.88, regularPrice: 400, productSavings: 220 }
				},
				white: { 
					oneSet: { variantId: 41403111309462, productTitle: 'Miracle Set of 1', price: 69.95, regularPrice: 100, productSavings: 30 },
					twoSet: { variantId: 41403111407766, productTitle: 'Miracle Set of 2', price: 119.92, regularPrice: 200, productSavings: 80 },
					fourSet: { variantId: 41403111506070, productTitle: 'Miracle Set of 4', price: 129.88, regularPrice: 400, productSavings: 220 }
				},
				sky_blue: { 
					oneSet: { variantId: 41403111342230, productTitle: 'Miracle Set of 1', price: 69.95, regularPrice: 100, productSavings: 30 },
					//twoSet: { variantId: 41403111440534, productTitle: 'Miracle Set of 2', price: 119.92, regularPrice: 200, productSavings: 80 },
					fourSet: { variantId: 41403111538838, productTitle: 'Miracle Set of 4', price: 129.88, regularPrice: 400, productSavings: 220 }
				},
			},
			king: {
				stone: { 
					oneSet: { variantId: 41403111669910, productTitle: 'Miracle Set of 1', price: 74.99, regularPrice: 110, productSavings: 35 },
					twoSet: { variantId: 41403111768214, productTitle: 'Miracle Set of 2', price: 129.98, regularPrice: 220, productSavings: 90 },
					fourSet: { variantId: 41403111866518, productTitle: 'Miracle Set of 4', price: 199.88, regularPrice: 440, productSavings: 240 }
				},
				white: { 
					oneSet: { variantId: 41403111604374, productTitle: 'Miracle Set of 1', price: 74.99, regularPrice: 110, productSavings: 35 },
					twoSet: { variantId: 41403111702678, productTitle: 'Miracle Set of 2', price: 129.98, regularPrice: 220, productSavings: 90 },
					fourSet: { variantId: 41403111800982, productTitle: 'Miracle Set of 4', price: 199.88, regularPrice: 440, productSavings: 240 }
				},
				sky_blue: { 
					oneSet: { variantId: 41403111637142, productTitle: 'Miracle Set of 1', price: 74.99, regularPrice: 110, productSavings: 35 },
					twoSet: { variantId: 41403111735446, productTitle: 'Miracle Set of 2', price: 129.98, regularPrice: 220, productSavings: 90 },
					fourSet: { variantId: 41403111833750, productTitle: 'Miracle Set of 4', price: 199.88, regularPrice: 440, productSavings: 240 }
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
			window.location.href = "/pillowcase/checkout/";
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
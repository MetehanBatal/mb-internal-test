document.addEventListener('DOMContentLoaded', function(e) {
	var $body = $(document.body);
	let popup = document.querySelector('.popup-outer-box');
	let triggeringElements = document.querySelectorAll('.popup-closer');
	
	triggeringElements.forEach(function(element) {
		element.addEventListener('click', function(e) {			
			popup.classList.add('hidden');
			$body.css("overflow", "auto");
		});
	});
});
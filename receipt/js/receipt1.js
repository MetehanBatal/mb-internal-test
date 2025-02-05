jQuery(document).ready(function($) {
    $('.summry-toggle-mob').click(function() {
    	if ($("#toggle-mob-cart").hasClass("closed")) {
    		$("#toggle-mob-cart").removeClass("closed");
    		$("#toggle-mob-cart").slideDown(200);
    	}
    	else {
    		$("#toggle-mob-cart").addClass("closed");
    		$("#toggle-mob-cart").slideUp(200);
    	}
  
      	$('.sm-txt').toggle();
    });
});
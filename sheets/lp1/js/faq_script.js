jQuery(document).ready(function($) {
    $(".faq dt").click(function(e) {
    	if ($(this).next().css("display") != 'none') {
    		$(this).next().slideUp(200);
    		$(this).removeClass("active");
    	}
    	else {
	        $(this).parents(".faq").find("dd").hide();
	        $(this).parents(".faq").find("dt").removeClass("active");
	        $(this).next().slideDown(200);
	        $(this).addClass("active");
	    }
    });

    $(".size_chart-handle").click(function(e) {
    	var handle = $(this).attr("name");
    	$(".size_chart-handle").removeClass("active");
    	$(this).addClass("active");
    	$(this).parent().find(".size_table").hide();
    	$(this).parent().find(".size_table[data-handle='" + handle + "']").show();
    });
});
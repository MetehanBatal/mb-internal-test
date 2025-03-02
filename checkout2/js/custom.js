


jQuery(document).ready(function($) {
	$(".es_snippet_item").click(function(e) {
		$(this).parent().find(".es_snippet_item").removeClass("es_active");
		$(this).addClass("es_active");
	});

	$("input[name='billing_use_shipping']").change(function(e) {
		if ($(this).val() == 'false') {
			$(".checkout-billing-fields").slideDown();
		}
		else {
			$(".checkout-billing-fields").slideUp();
		}
	});

  $(".checkout-credit-card").click(function(e) {
    $(".checkout-combo-form").slideDown(400);
    $("body,html").animate(
      {
        scrollTop: $(".checkout-combo-form").offset().top - 50
      },
      400 //speed
    );
  });

  $(".checkout-submit-combo").click(function(e) {
    console.log("Checkout");
    setTimeout(function() {
      if ($(".checkout-invalid-field").length > 0) {
        $("body,html").animate(
          {
            scrollTop: $(".checkout-combo-form").offset().top - 100
          },
          200 //speed
        );
      }
    }, 200);
    
  });
  
  var counter = $('#countdown').html().split(':')[0]*60;

  setInterval(function() {
    counter--;

   if(counter >= 0) {
        var mins = Math.floor(counter / 60) % 60;
        var secs = counter % 60;

        $('#countdown').html(("0"+mins).slice(-2)+':'+("0"+secs).slice(-2));
   } else {
     $('#countdown').html('00:00');


     clearInterval(counter);
   }
  },1000);

  $(".checkout-combo-form .frm-flds input").focusin(function(e) {
    $(this).parent().addClass("filled");
  });

  $(".checkout-combo-form .frm-flds input").focusout(function(e) {
    if ($(this).val().trim().length <= 0) {
      $(this).parent().removeClass("filled");
    }
  });
  
  $(".checkout-combo-form .frm-flds input").focusin(function(e) {
    $(this).parent().addClass("filled");
  });

  $(".checkout-combo-form .frm-flds input").focusout(function(e) {
    if ($(this).val().trim().length <= 0) {
      $(this).parent().removeClass("filled");
    }
  });


  
    	/////////////////////////////////////////////////// Discount popup //////////////////////////////////////////////////////
      $(window).on("load", function() {
      });	
    
      $('.checkout-discount-value').on('DOMSubtreeModified',function(){
        console.log("TTT");
        console.log(checkoutData.cart.localCart.state.discountTotal);
          console.log($(this).text());
    
        if (checkoutData.cart.localCart.state.discountTotal > 0) {
          $(".discount-applied").removeClass("es_hide");
        }
        else {
          $(".discount-applied").addClass("es_hide");
        }
        
      });
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
      window.checkoutReadyCallbacks.push(() => {
        if (checkoutData.cart.shippingZone !== "US") {
          if (!$('.total-line .checkout-money').html().includes('US')) {
            $('.total-line .checkout-money').html("<span class='non-usa'>USD </span>" + $('.total-line .checkout-money').html());
            $('.checkout-total-value').html("<span class='non-usa'>USD </span>" + $('.checkout-total-value').html());
          }else {
              $('.total-line .checkout-money').replace("US", "<span class='non-usa'>US </span>");
              $('.checkout-total-value').replace("US", "<span class='non-usa'>US </span>");
          }
        }
      });
      
});

